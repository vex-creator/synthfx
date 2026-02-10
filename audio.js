/**
 * SynthFX Audio Engine
 * Web Audio API-based procedural sound generator
 */

class AudioEngine {
    constructor() {
        this.audioContext = null;
        this.lastRenderedBuffer = null;
    }

    /**
     * Initialize or resume the audio context
     * Must be called from a user gesture (click)
     */
    init() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        return this.audioContext;
    }

    /**
     * Generate and play a sound with the given parameters
     */
    play(params) {
        const ctx = this.init();
        const {
            waveType = 'sine',
            freqStart = 440,
            freqEnd = 440,
            attack = 0.01,
            decay = 0.1,
            sustain = 0.5,
            release = 0.2,
            duration = 0.3,
            volume = 0.5,
            filterType = 'lowpass',
            cutoff = 2000,
            resonance = 1,
            noiseMix = 0
        } = params;

        const now = ctx.currentTime;
        const totalDuration = attack + decay + duration + release;

        // Master gain
        const masterGain = ctx.createGain();
        masterGain.connect(ctx.destination);
        masterGain.gain.value = volume;

        // Filter (if enabled)
        let filterNode = null;
        if (filterType !== 'none') {
            filterNode = ctx.createBiquadFilter();
            filterNode.type = filterType;
            filterNode.frequency.value = cutoff;
            filterNode.Q.value = resonance;
            filterNode.connect(masterGain);
        }

        const outputNode = filterNode || masterGain;

        // Oscillator
        if (noiseMix < 1) {
            const oscillator = ctx.createOscillator();
            const oscGain = ctx.createGain();
            
            oscillator.type = waveType;
            oscillator.frequency.setValueAtTime(freqStart, now);
            oscillator.frequency.linearRampToValueAtTime(freqEnd, now + totalDuration);

            // ADSR envelope
            oscGain.gain.setValueAtTime(0, now);
            oscGain.gain.linearRampToValueAtTime(1 - noiseMix, now + attack);
            oscGain.gain.linearRampToValueAtTime(sustain * (1 - noiseMix), now + attack + decay);
            oscGain.gain.setValueAtTime(sustain * (1 - noiseMix), now + attack + decay + duration);
            oscGain.gain.linearRampToValueAtTime(0, now + totalDuration);

            oscillator.connect(oscGain);
            oscGain.connect(outputNode);

            oscillator.start(now);
            oscillator.stop(now + totalDuration + 0.1);
        }

        // Noise layer
        if (noiseMix > 0) {
            const noiseBuffer = this.createNoiseBuffer(ctx, totalDuration + 0.1);
            const noiseSource = ctx.createBufferSource();
            const noiseGain = ctx.createGain();

            noiseSource.buffer = noiseBuffer;

            // ADSR for noise
            noiseGain.gain.setValueAtTime(0, now);
            noiseGain.gain.linearRampToValueAtTime(noiseMix, now + attack);
            noiseGain.gain.linearRampToValueAtTime(sustain * noiseMix, now + attack + decay);
            noiseGain.gain.setValueAtTime(sustain * noiseMix, now + attack + decay + duration);
            noiseGain.gain.linearRampToValueAtTime(0, now + totalDuration);

            noiseSource.connect(noiseGain);
            noiseGain.connect(outputNode);

            noiseSource.start(now);
            noiseSource.stop(now + totalDuration + 0.1);
        }
    }

    /**
     * Create a buffer filled with white noise
     */
    createNoiseBuffer(ctx, duration) {
        const sampleRate = ctx.sampleRate;
        const bufferSize = Math.ceil(sampleRate * duration);
        const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        return buffer;
    }

    /**
     * Render sound to an AudioBuffer (for export and visualization)
     */
    render(params) {
        const sampleRate = 44100;
        const {
            waveType = 'sine',
            freqStart = 440,
            freqEnd = 440,
            attack = 0.01,
            decay = 0.1,
            sustain = 0.5,
            release = 0.2,
            duration = 0.3,
            volume = 0.5,
            filterType = 'lowpass',
            cutoff = 2000,
            resonance = 1,
            noiseMix = 0
        } = params;

        const totalDuration = attack + decay + duration + release;
        const numSamples = Math.ceil(sampleRate * totalDuration);
        const buffer = new Float32Array(numSamples);

        // Generate oscillator waveform
        for (let i = 0; i < numSamples; i++) {
            const t = i / sampleRate;
            const progress = t / totalDuration;
            
            // Frequency interpolation
            const freq = freqStart + (freqEnd - freqStart) * progress;
            
            // Phase accumulation for smooth frequency sweep
            let sample = 0;

            // Oscillator (if not 100% noise)
            if (noiseMix < 1) {
                const phase = this.calculatePhase(i, sampleRate, freqStart, freqEnd, totalDuration);
                sample = this.getWaveformSample(waveType, phase) * (1 - noiseMix);
            }

            // Noise
            if (noiseMix > 0) {
                sample += (Math.random() * 2 - 1) * noiseMix;
            }

            // ADSR envelope
            const envelope = this.getEnvelopeValue(t, attack, decay, sustain, release, duration);
            
            buffer[i] = sample * envelope * volume;
        }

        // Apply filter (simple IIR approximation)
        if (filterType !== 'none') {
            this.applyFilter(buffer, sampleRate, filterType, cutoff, resonance);
        }

        this.lastRenderedBuffer = buffer;
        return buffer;
    }

    /**
     * Calculate phase for frequency sweep (integral of frequency over time)
     */
    calculatePhase(sampleIndex, sampleRate, freqStart, freqEnd, duration) {
        const t = sampleIndex / sampleRate;
        // For linear frequency sweep, phase is integral of f(t) = f0 + (f1-f0)*t/T
        // = f0*t + (f1-f0)*t^2/(2*T)
        const freqDiff = freqEnd - freqStart;
        const phase = freqStart * t + (freqDiff * t * t) / (2 * duration);
        return (phase * 2 * Math.PI) % (2 * Math.PI);
    }

    /**
     * Get sample value for different waveform types
     */
    getWaveformSample(type, phase) {
        const normalizedPhase = phase / (2 * Math.PI);
        
        switch (type) {
            case 'sine':
                return Math.sin(phase);
            case 'square':
                return normalizedPhase < 0.5 ? 1 : -1;
            case 'sawtooth':
                return 2 * normalizedPhase - 1;
            case 'triangle':
                return 4 * Math.abs(normalizedPhase - 0.5) - 1;
            default:
                return Math.sin(phase);
        }
    }

    /**
     * Calculate ADSR envelope value at time t
     */
    getEnvelopeValue(t, attack, decay, sustain, release, holdDuration) {
        if (t < attack) {
            // Attack phase
            return t / attack;
        } else if (t < attack + decay) {
            // Decay phase
            const decayProgress = (t - attack) / decay;
            return 1 - (1 - sustain) * decayProgress;
        } else if (t < attack + decay + holdDuration) {
            // Sustain phase
            return sustain;
        } else {
            // Release phase
            const releaseProgress = (t - attack - decay - holdDuration) / release;
            return sustain * (1 - Math.min(releaseProgress, 1));
        }
    }

    /**
     * Simple IIR low-pass/high-pass filter
     */
    applyFilter(buffer, sampleRate, type, cutoff, resonance) {
        // Compute filter coefficients (simple one-pole for now)
        const rc = 1.0 / (cutoff * 2 * Math.PI);
        const dt = 1.0 / sampleRate;
        const alpha = dt / (rc + dt);

        let prevSample = 0;
        let prevFiltered = 0;

        for (let i = 0; i < buffer.length; i++) {
            if (type === 'lowpass') {
                // Low-pass: y[n] = y[n-1] + alpha * (x[n] - y[n-1])
                buffer[i] = prevFiltered + alpha * (buffer[i] - prevFiltered);
                prevFiltered = buffer[i];
            } else if (type === 'highpass') {
                // High-pass: y[n] = alpha * (y[n-1] + x[n] - x[n-1])
                const filtered = alpha * (prevFiltered + buffer[i] - prevSample);
                prevSample = buffer[i];
                buffer[i] = filtered;
                prevFiltered = filtered;
            } else if (type === 'bandpass') {
                // Band-pass: combine low-pass then high-pass
                buffer[i] = prevFiltered + alpha * (buffer[i] - prevFiltered);
                prevFiltered = buffer[i];
            }
        }

        // Apply resonance (boost around cutoff) - simplified
        if (resonance > 1) {
            const boost = 1 + (resonance - 1) * 0.1;
            for (let i = 0; i < buffer.length; i++) {
                buffer[i] *= boost;
                // Soft clip to prevent distortion
                buffer[i] = Math.tanh(buffer[i]);
            }
        }
    }

    /**
     * Export rendered buffer as WAV file
     */
    exportWAV(params) {
        const buffer = this.render(params);
        const sampleRate = 44100;
        const numChannels = 1;
        const bitsPerSample = 16;

        const dataLength = buffer.length * numChannels * (bitsPerSample / 8);
        const fileLength = 44 + dataLength;

        const arrayBuffer = new ArrayBuffer(fileLength);
        const view = new DataView(arrayBuffer);

        // WAV header
        this.writeString(view, 0, 'RIFF');
        view.setUint32(4, fileLength - 8, true);
        this.writeString(view, 8, 'WAVE');
        this.writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true); // fmt chunk size
        view.setUint16(20, 1, true); // PCM format
        view.setUint16(22, numChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * numChannels * (bitsPerSample / 8), true);
        view.setUint16(32, numChannels * (bitsPerSample / 8), true);
        view.setUint16(34, bitsPerSample, true);
        this.writeString(view, 36, 'data');
        view.setUint32(40, dataLength, true);

        // Audio data
        let offset = 44;
        for (let i = 0; i < buffer.length; i++) {
            const sample = Math.max(-1, Math.min(1, buffer[i]));
            const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
            view.setInt16(offset, intSample, true);
            offset += 2;
        }

        return new Blob([arrayBuffer], { type: 'audio/wav' });
    }

    writeString(view, offset, string) {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }

    /**
     * Get the last rendered buffer for visualization
     */
    getLastRenderedBuffer() {
        return this.lastRenderedBuffer;
    }
}

// Export as global
window.AudioEngine = AudioEngine;
