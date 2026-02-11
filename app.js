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

let currentPresetId = null;
let customPresets = {};

// DOM Elements
const elements = {
    waveButtons: document.querySelectorAll('.wave-btn'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    
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
    
    playBtn: document.getElementById('playBtn'),
    exportBtn: document.getElementById('exportBtn'),
    previewOscBtn: document.getElementById('previewOscBtn'),
    previewSweepBtn: document.getElementById('previewSweepBtn'),
    savePresetBtn: document.getElementById('savePresetBtn'),
    
    presetCategories: document.getElementById('presetCategories'),
    customPresetsContainer: document.getElementById('customPresets'),
    presetSearch: document.getElementById('presetSearch'),
    
    saveModal: document.getElementById('saveModal'),
    presetName: document.getElementById('presetName'),
    presetCategory: document.getElementById('presetCategory'),
    cancelSave: document.getElementById('cancelSave'),
    confirmSave: document.getElementById('confirmSave'),
    
    envelopeCanvas: document.getElementById('envelopeCanvas'),
    waveformCanvas: document.getElementById('waveformCanvas')
};

// Initialize
function init() {
    customPresets = loadCustomPresets();
    
    renderPresetBrowser();
    setupEventListeners();
    drawEnvelope();
}

// Render preset browser sidebar
function renderPresetBrowser() {
    const container = elements.presetCategories;
    container.innerHTML = '';
    
    for (const [categoryId, category] of Object.entries(PRESET_CATEGORIES)) {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'category';
        
        const header = document.createElement('div');
        header.className = 'category-header';
        header.dataset.category = categoryId;
        header.innerHTML = `<span>${category.name}</span><span class="toggle">▼</span>`;
        
        const items = document.createElement('div');
        items.className = 'category-items';
        items.dataset.category = categoryId;
        
        for (const [presetId, preset] of Object.entries(category.presets)) {
            const item = document.createElement('div');
            item.className = 'preset-item';
            item.dataset.preset = `${categoryId}.${presetId}`;
            item.textContent = preset.name;
            item.addEventListener('click', () => selectPreset(categoryId, presetId));
            items.appendChild(item);
        }
        
        header.addEventListener('click', () => toggleCategory(categoryId));
        
        categoryEl.appendChild(header);
        categoryEl.appendChild(items);
        container.appendChild(categoryEl);
    }
    
    renderCustomPresets();
}

// Render custom presets
function renderCustomPresets() {
    const container = elements.customPresetsContainer.querySelector('.category-items');
    container.innerHTML = '';
    
    const presets = Object.entries(customPresets);
    
    if (presets.length === 0) {
        container.innerHTML = '<div class="preset-item" style="color: var(--text-secondary); font-style: italic;">No saved presets</div>';
        return;
    }
    
    for (const [id, preset] of presets) {
        const item = document.createElement('div');
        item.className = 'preset-item';
        item.dataset.preset = `custom.${id}`;
        
        const name = document.createElement('span');
        name.textContent = preset.name;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '✕';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCustomPreset(id);
        });
        
        item.appendChild(name);
        item.appendChild(deleteBtn);
        item.addEventListener('click', () => selectCustomPreset(id));
        container.appendChild(item);
    }
}

// Toggle category collapse
function toggleCategory(categoryId) {
    const header = document.querySelector(`.category-header[data-category="${categoryId}"]`);
    const items = document.querySelector(`.category-items[data-category="${categoryId}"]`);
    
    header.classList.toggle('collapsed');
    items.classList.toggle('collapsed');
}

// Select a preset
function selectPreset(categoryId, presetId) {
    const preset = PRESET_CATEGORIES[categoryId].presets[presetId];
    if (preset) {
        applyPreset(preset.params);
        setActivePreset(`${categoryId}.${presetId}`);
        playSound();
    }
}

// Select custom preset
function selectCustomPreset(id) {
    const preset = customPresets[id];
    if (preset) {
        applyPreset(preset.params);
        setActivePreset(`custom.${id}`);
        playSound();
    }
}

// Set active preset visual
function setActivePreset(fullId) {
    currentPresetId = fullId;
    document.querySelectorAll('.preset-item').forEach(item => {
        item.classList.toggle('active', item.dataset.preset === fullId);
    });
}

// Delete custom preset
function deleteCustomPreset(id) {
    delete customPresets[id];
    saveCustomPresets(customPresets);
    renderCustomPresets();
}

// Setup event listeners
function setupEventListeners() {
    // Wave type buttons
    elements.waveButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.waveButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentParams.waveType = btn.dataset.wave;
            
            if (audioEngine.isPreviewPlaying()) {
                audioEngine.updatePreview(currentParams.waveType, currentParams.freqStart);
            }
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

    // Buttons
    elements.playBtn.addEventListener('click', playSound);
    elements.exportBtn.addEventListener('click', exportSound);
    elements.previewOscBtn.addEventListener('click', toggleOscillatorPreview);
    elements.previewSweepBtn.addEventListener('click', () => {
        audioEngine.playSweepPreview(
            currentParams.waveType,
            currentParams.freqStart,
            currentParams.freqEnd,
            0.5,
            currentParams.volume * 0.6
        );
    });

    // Save preset
    elements.savePresetBtn.addEventListener('click', () => {
        elements.saveModal.classList.add('active');
        elements.presetName.value = '';
        elements.presetName.focus();
    });
    
    elements.cancelSave.addEventListener('click', () => {
        elements.saveModal.classList.remove('active');
    });
    
    elements.confirmSave.addEventListener('click', saveNewPreset);
    
    // Close modal on background click
    elements.saveModal.addEventListener('click', (e) => {
        if (e.target === elements.saveModal) {
            elements.saveModal.classList.remove('active');
        }
    });

    // Search
    elements.presetSearch.addEventListener('input', filterPresets);

    // Category toggle for custom presets
    const customHeader = elements.customPresetsContainer.querySelector('.category-header');
    customHeader.addEventListener('click', () => {
        customHeader.classList.toggle('collapsed');
        elements.customPresetsContainer.querySelector('.category-items').classList.toggle('collapsed');
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return;
        
        if (e.code === 'Space') {
            e.preventDefault();
            playSound();
        }
    });
}

// Setup slider
function setupSlider(id, valueId, formatter) {
    const slider = elements[id];
    const valueDisplay = elements[valueId];

    const update = () => {
        const value = parseFloat(slider.value);
        currentParams[id] = value;
        valueDisplay.textContent = formatter(value);
        
        if (['attack', 'decay', 'sustain', 'release', 'duration'].includes(id)) {
            drawEnvelope();
        }
        
        if (id === 'freqStart' && audioEngine.isPreviewPlaying()) {
            audioEngine.updatePreview(currentParams.waveType, value);
        }
    };

    slider.addEventListener('input', update);
    update();
}

// Apply preset to UI
function applyPreset(params) {
    Object.assign(currentParams, params);
    
    // Update wave buttons
    elements.waveButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.wave === params.waveType);
    });

    // Update filter buttons
    elements.filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === params.filterType);
    });

    // Update sliders
    for (const [key, value] of Object.entries(params)) {
        if (elements[key]) {
            elements[key].value = value;
        }
    }

    // Update displays
    elements.freqStartValue.textContent = `${Math.round(params.freqStart)} Hz`;
    elements.freqEndValue.textContent = `${Math.round(params.freqEnd)} Hz`;
    elements.attackValue.textContent = `${params.attack.toFixed(3)}s`;
    elements.decayValue.textContent = `${params.decay.toFixed(3)}s`;
    elements.sustainValue.textContent = params.sustain.toFixed(2);
    elements.releaseValue.textContent = `${params.release.toFixed(3)}s`;
    elements.cutoffValue.textContent = `${Math.round(params.cutoff)} Hz`;
    elements.resonanceValue.textContent = params.resonance.toFixed(1);
    elements.noiseMixValue.textContent = `${Math.round(params.noiseMix * 100)}%`;
    elements.volumeValue.textContent = `${Math.round(params.volume * 100)}%`;
    elements.durationValue.textContent = `${params.duration.toFixed(2)}s`;

    drawEnvelope();
}

// Save new preset
function saveNewPreset() {
    const name = elements.presetName.value.trim();
    if (!name) return;
    
    const id = `preset_${Date.now()}`;
    customPresets[id] = {
        name: name,
        params: { ...currentParams }
    };
    
    saveCustomPresets(customPresets);
    renderCustomPresets();
    elements.saveModal.classList.remove('active');
    setActivePreset(`custom.${id}`);
}

// Filter presets by search
function filterPresets(e) {
    const query = e.target.value.toLowerCase();
    
    document.querySelectorAll('.preset-item').forEach(item => {
        const name = item.textContent.toLowerCase();
        item.style.display = name.includes(query) ? '' : 'none';
    });
    
    // Show/hide categories based on visible items
    document.querySelectorAll('.category-items').forEach(cat => {
        const visibleItems = cat.querySelectorAll('.preset-item:not([style*="display: none"])');
        const header = cat.previousElementSibling;
        if (header && header.classList.contains('category-header')) {
            header.style.display = visibleItems.length > 0 || query === '' ? '' : 'none';
        }
        cat.style.display = visibleItems.length > 0 || query === '' ? '' : 'none';
    });
}

// Toggle oscillator preview
function toggleOscillatorPreview() {
    if (audioEngine.isPreviewPlaying()) {
        audioEngine.stopPreview();
        elements.previewOscBtn.classList.remove('active');
        elements.previewOscBtn.textContent = '🔊 Preview Raw';
    } else {
        audioEngine.startPreview(
            currentParams.waveType,
            currentParams.freqStart,
            currentParams.volume * 0.5
        );
        elements.previewOscBtn.classList.add('active');
        elements.previewOscBtn.textContent = '⏹ Stop';
    }
}

// Play sound
function playSound() {
    audioEngine.play(currentParams);
    audioEngine.render(currentParams);
    drawWaveform();
}

// Export sound
function exportSound() {
    const blob = audioEngine.exportWAV(currentParams);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `synthfx-${Date.now()}.wav`;
    a.click();
    URL.revokeObjectURL(url);
}

// Draw envelope
function drawEnvelope() {
    const canvas = elements.envelopeCanvas;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 8;

    ctx.fillStyle = '#1a1a25';
    ctx.fillRect(0, 0, width, height);

    const { attack, decay, sustain, release, duration } = currentParams;
    const totalDuration = attack + decay + duration + release;

    const attackX = padding + (attack / totalDuration) * (width - padding * 2);
    const decayX = padding + ((attack + decay) / totalDuration) * (width - padding * 2);
    const sustainX = padding + ((attack + decay + duration) / totalDuration) * (width - padding * 2);
    const releaseX = width - padding;

    const topY = padding;
    const sustainY = padding + (1 - sustain) * (height - padding * 2);
    const bottomY = height - padding;

    ctx.beginPath();
    ctx.moveTo(padding, bottomY);
    ctx.lineTo(attackX, topY);
    ctx.lineTo(decayX, sustainY);
    ctx.lineTo(sustainX, sustainY);
    ctx.lineTo(releaseX, bottomY);

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(0, 240, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(255, 0, 170, 0.3)');
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.stroke();

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
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Draw waveform
function drawWaveform() {
    const canvas = elements.waveformCanvas;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#1a1a25';
    ctx.fillRect(0, 0, width, height);

    const buffer = audioEngine.getLastRenderedBuffer();
    if (!buffer) return;

    ctx.strokeStyle = '#2a2a3a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    const step = Math.ceil(buffer.length / width);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    for (let i = 0; i < width; i++) {
        const sampleIndex = i * step;
        let min = 1, max = -1;

        for (let j = 0; j < step && sampleIndex + j < buffer.length; j++) {
            const sample = buffer[sampleIndex + j];
            if (sample < min) min = sample;
            if (sample > max) max = sample;
        }

        const y = (1 - (min + max) / 2) * height / 2;
        ctx.lineTo(i, y);
    }

    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#00f0ff');
    gradient.addColorStop(0.5, '#8855ff');
    gradient.addColorStop(1, '#ff00aa');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1.5;
    ctx.stroke();
}

// Start
init();
