/**
 * SynthFX Application
 * UI controls and preset management
 */

// Initialize audio engine
const audioEngine = new AudioEngine();

// State
let currentParams = {
    waveType: 'sine',
    freqStart: 440,
    freqEnd: 110,
    attack: 0.01,
    decay: 0.1,
    sustain: 0.3,
    release: 0.2,
    duration: 0.3,
    volume: 0.5,
    filterType: 'lowpass',
    cutoff: 2000,
    resonance: 1,
    noiseMix: 0
};

// Presets
const presets = {
    laser: {
        waveType: 'sawtooth',
        freqStart: 880,
        freqEnd: 110,
        attack: 0.001,
        decay: 0.05,
        sustain: 0.2,
        release: 0.15,
        duration: 0.1,
        volume: 0.4,
        filterType: 'lowpass',
        cutoff: 3000,
        resonance: 2,
        noiseMix: 0.1
    },
    boost: {
        waveType: 'sine',
        freqStart: 150,
        freqEnd: 600,
        attack: 0.02,
        decay: 0.1,
        sustain: 0.5,
        release: 0.3,
        duration: 0.3,
        volume: 0.5,
        filterType: 'bandpass',
        cutoff: 800,
        resonance: 3,
        noiseMix: 0.3
    },
    impact: {
        waveType: 'sine',
        freqStart: 150,
        freqEnd: 40,
        attack: 0.001,
        decay: 0.08,
        sustain: 0.1,
        release: 0.1,
        duration: 0.05,
        volume: 0.7,
        filterType: 'lowpass',
        cutoff: 500,
        resonance: 1,
        noiseMix: 0.5
    },
    pickup: {
        waveType: 'triangle',
        freqStart: 523,  // C5
        freqEnd: 1047,   // C6
        attack: 0.01,
        decay: 0.1,
        sustain: 0.3,
        release: 0.2,
        duration: 0.15,
        volume: 0.4,
        filterType: 'none',
        cutoff: 5000,
        resonance: 1,
        noiseMix: 0
    },
    click: {
        waveType: 'sine',
        freqStart: 1500,
        freqEnd: 1200,
        attack: 0.001,
        decay: 0.02,
        sustain: 0,
        release: 0.01,
        duration: 0.01,
        volume: 0.3,
        filterType: 'highpass',
        cutoff: 800,
        resonance: 1,
        noiseMix: 0.05
    },
    explosion: {
        waveType: 'sine',
        freqStart: 100,
        freqEnd: 30,
        attack: 0.001,
        decay: 0.3,
        sustain: 0.2,
        release: 0.5,
        duration: 0.3,
        volume: 0.6,
        filterType: 'lowpass',
        cutoff: 800,
        resonance: 1,
        noiseMix: 0.7
    }
};

// DOM Elements
const elements = {
    // Wave type buttons
    waveButtons: document.querySelectorAll('.wave-btn'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    presetButtons: document.querySelectorAll('.preset-btn'),
    
    // Sliders
    freqStart: document.getElementById('freqStart'),
    freqEnd: document.getElementById('freqEnd'),
    attack: document.getElementById('attack'),
    decay: document.getElementById('decay'),
    sustain: document.getElementById('sustain'),
    release: document.getElementById('release'),
    cutoff: document.getElementById('cutoff'),
    resonance: document.getElementById('resonance'),
    noiseMix: document.getElementById('noiseMix'),
    volume: document.getElementById('volume'),
    duration: document.getElementById('duration'),
    
    // Value displays
    freqStartValue: document.getElementById('freqStartValue'),
    freqEndValue: document.getElementById('freqEndValue'),
    attackValue: document.getElementById('attackValue'),
    decayValue: document.getElementById('decayValue'),
    sustainValue: document.getElementById('sustainValue'),
    releaseValue: document.getElementById('releaseValue'),
    cutoffValue: document.getElementById('cutoffValue'),
    resonanceValue: document.getElementById('resonanceValue'),
    noiseMixValue: document.getElementById('noiseMixValue'),
    volumeValue: document.getElementById('volumeValue'),
    durationValue: document.getElementById('durationValue'),
    
    // Buttons
    playBtn: document.getElementById('playBtn'),
    exportBtn: document.getElementById('exportBtn'),
    
    // Canvases
    envelopeCanvas: document.getElementById('envelopeCanvas'),
    waveformCanvas: document.getElementById('waveformCanvas')
};

// Initialize event listeners
function init() {
    // Wave type buttons
    elements.waveButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.waveButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentParams.waveType = btn.dataset.wave;
        });
    });

    // Filter type buttons
    elements.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentParams.filterType = btn.dataset.filter;
        });
    });

    // Preset buttons
    elements.presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = presets[btn.dataset.preset];
            if (preset) {
                applyPreset(preset);
                // Play automatically when preset is clicked
                playSound();
            }
        });
    });

    // Sliders
    setupSlider('freqStart', 'freqStartValue', v => `${Math.round(v)} Hz`);
    setupSlider('freqEnd', 'freqEndValue', v => `${Math.round(v)} Hz`);
    setupSlider('attack', 'attackValue', v => `${v.toFixed(3)}s`);
    setupSlider('decay', 'decayValue', v => `${v.toFixed(3)}s`);
    setupSlider('sustain', 'sustainValue', v => v.toFixed(2));
    setupSlider('release', 'releaseValue', v => `${v.toFixed(3)}s`);
    setupSlider('cutoff', 'cutoffValue', v => `${Math.round(v)} Hz`);
    setupSlider('resonance', 'resonanceValue', v => v.toFixed(1));
    setupSlider('noiseMix', 'noiseMixValue', v => `${Math.round(v * 100)}%`);
    setupSlider('volume', 'volumeValue', v => `${Math.round(v * 100)}%`);
    setupSlider('duration', 'durationValue', v => `${v.toFixed(2)}s`);

    // Play button
    elements.playBtn.addEventListener('click', playSound);

    // Export button
    elements.exportBtn.addEventListener('click', exportSound);

    // Initial envelope draw
    drawEnvelope();

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            playSound();
        }
    });
}

// Setup a slider with value display and parameter binding
function setupSlider(id, valueId, formatter) {
    const slider = elements[id];
    const valueDisplay = elements[valueId];

    const update = () => {
        const value = parseFloat(slider.value);
        currentParams[id] = value;
        valueDisplay.textContent = formatter(value);
        
        // Redraw envelope if ADSR changed
        if (['attack', 'decay', 'sustain', 'release', 'duration'].includes(id)) {
            drawEnvelope();
        }
    };

    slider.addEventListener('input', update);
    update(); // Initial value
}

// Apply a preset to all controls
function applyPreset(preset) {
    Object.assign(currentParams, preset);
    
    // Update wave buttons
    elements.waveButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.wave === preset.waveType);
    });

    // Update filter buttons
    elements.filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === preset.filterType);
    });

    // Update sliders
    elements.freqStart.value = preset.freqStart;
    elements.freqEnd.value = preset.freqEnd;
    elements.attack.value = preset.attack;
    elements.decay.value = preset.decay;
    elements.sustain.value = preset.sustain;
    elements.release.value = preset.release;
    elements.cutoff.value = preset.cutoff;
    elements.resonance.value = preset.resonance;
    elements.noiseMix.value = preset.noiseMix;
    elements.volume.value = preset.volume;
    elements.duration.value = preset.duration;

    // Update value displays
    elements.freqStartValue.textContent = `${Math.round(preset.freqStart)} Hz`;
    elements.freqEndValue.textContent = `${Math.round(preset.freqEnd)} Hz`;
    elements.attackValue.textContent = `${preset.attack.toFixed(3)}s`;
    elements.decayValue.textContent = `${preset.decay.toFixed(3)}s`;
    elements.sustainValue.textContent = preset.sustain.toFixed(2);
    elements.releaseValue.textContent = `${preset.release.toFixed(3)}s`;
    elements.cutoffValue.textContent = `${Math.round(preset.cutoff)} Hz`;
    elements.resonanceValue.textContent = preset.resonance.toFixed(1);
    elements.noiseMixValue.textContent = `${Math.round(preset.noiseMix * 100)}%`;
    elements.volumeValue.textContent = `${Math.round(preset.volume * 100)}%`;
    elements.durationValue.textContent = `${preset.duration.toFixed(2)}s`;

    drawEnvelope();
}

// Play the current sound
function playSound() {
    audioEngine.play(currentParams);
    
    // Render for visualization
    audioEngine.render(currentParams);
    drawWaveform();
}

// Export current sound as WAV
function exportSound() {
    const blob = audioEngine.exportWAV(currentParams);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `synthfx-${Date.now()}.wav`;
    a.click();
    URL.revokeObjectURL(url);
}

// Draw ADSR envelope visualization
function drawEnvelope() {
    const canvas = elements.envelopeCanvas;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 10;

    // Clear
    ctx.fillStyle = '#1a1a25';
    ctx.fillRect(0, 0, width, height);

    const { attack, decay, sustain, release, duration } = currentParams;
    const totalDuration = attack + decay + duration + release;

    // Calculate x positions
    const attackX = padding + (attack / totalDuration) * (width - padding * 2);
    const decayX = padding + ((attack + decay) / totalDuration) * (width - padding * 2);
    const sustainX = padding + ((attack + decay + duration) / totalDuration) * (width - padding * 2);
    const releaseX = width - padding;

    // Y positions
    const topY = padding;
    const sustainY = padding + (1 - sustain) * (height - padding * 2);
    const bottomY = height - padding;

    // Draw envelope
    ctx.beginPath();
    ctx.moveTo(padding, bottomY);
    ctx.lineTo(attackX, topY);          // Attack
    ctx.lineTo(decayX, sustainY);       // Decay
    ctx.lineTo(sustainX, sustainY);     // Sustain
    ctx.lineTo(releaseX, bottomY);      // Release

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(0, 240, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 0, 170, 0.3)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Stroke
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw points
    const points = [
        { x: padding, y: bottomY },
        { x: attackX, y: topY },
        { x: decayX, y: sustainY },
        { x: sustainX, y: sustainY },
        { x: releaseX, y: bottomY }
    ];

    ctx.fillStyle = '#00f0ff';
    points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
    });

    // Labels
    ctx.fillStyle = '#666';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('A', (padding + attackX) / 2, bottomY - 5);
    ctx.fillText('D', (attackX + decayX) / 2, sustainY - 5);
    ctx.fillText('S', (decayX + sustainX) / 2, sustainY - 5);
    ctx.fillText('R', (sustainX + releaseX) / 2, bottomY - 5);
}

// Draw waveform visualization
function drawWaveform() {
    const canvas = elements.waveformCanvas;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear
    ctx.fillStyle = '#1a1a25';
    ctx.fillRect(0, 0, width, height);

    const buffer = audioEngine.getLastRenderedBuffer();
    if (!buffer) return;

    // Draw center line
    ctx.strokeStyle = '#2a2a3a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    // Draw waveform
    const step = Math.ceil(buffer.length / width);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    for (let i = 0; i < width; i++) {
        const sampleIndex = i * step;
        let min = 1, max = -1;

        // Get min/max for this pixel column
        for (let j = 0; j < step && sampleIndex + j < buffer.length; j++) {
            const sample = buffer[sampleIndex + j];
            if (sample < min) min = sample;
            if (sample > max) max = sample;
        }

        const y = (1 - (min + max) / 2) * height / 2;
        ctx.lineTo(i, y);
    }

    // Gradient stroke
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#00f0ff');
    gradient.addColorStop(0.5, '#8855ff');
    gradient.addColorStop(1, '#ff00aa');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.stroke();
}

// Start the app
init();
