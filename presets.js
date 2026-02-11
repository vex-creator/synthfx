/**
 * SynthFX Preset Library
 * Focused on Hyperflow game sounds
 */

const PRESET_CATEGORIES = {
    lasers: {
        name: "🔫 Lasers",
        presets: {
            laserBasic: {
                name: "Basic",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 800,
                    freqEnd: 120,
                    attack: 0.005,
                    decay: 0.06,
                    sustain: 0.2,
                    release: 0.12,
                    duration: 0.1,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 3500,
                    resonance: 2,
                    noiseMix: 0.08
                }
            },
            laserShort: {
                name: "Short Pulse",
                params: {
                    waveType: 'square',
                    freqStart: 1100,
                    freqEnd: 220,
                    attack: 0.003,
                    decay: 0.04,
                    sustain: 0.15,
                    release: 0.06,
                    duration: 0.05,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 4500,
                    resonance: 1.5,
                    noiseMix: 0.05
                }
            },
            laserHeavy: {
                name: "Heavy",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 400,
                    freqEnd: 50,
                    attack: 0.005,
                    decay: 0.12,
                    sustain: 0.3,
                    release: 0.18,
                    duration: 0.15,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1800,
                    resonance: 2.5,
                    noiseMix: 0.12
                }
            },
            laserZap: {
                name: "Zap",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 1500,
                    freqEnd: 100,
                    attack: 0.002,
                    decay: 0.03,
                    sustain: 0.1,
                    release: 0.05,
                    duration: 0.04,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 5000,
                    resonance: 2,
                    noiseMix: 0.15
                }
            },
            laserPlasma: {
                name: "Plasma",
                params: {
                    waveType: 'sine',
                    freqStart: 550,
                    freqEnd: 140,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.4,
                    release: 0.2,
                    duration: 0.2,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 3,
                    noiseMix: 0.2
                }
            },
            laserRapid: {
                name: "Rapid Fire",
                params: {
                    waveType: 'square',
                    freqStart: 900,
                    freqEnd: 300,
                    attack: 0.002,
                    decay: 0.02,
                    sustain: 0.1,
                    release: 0.03,
                    duration: 0.02,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 3000,
                    resonance: 1.5,
                    noiseMix: 0.08
                }
            },
            laserCharged: {
                name: "Charged Shot",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 200,
                    freqEnd: 80,
                    attack: 0.01,
                    decay: 0.15,
                    sustain: 0.35,
                    release: 0.25,
                    duration: 0.2,
                    volume: 0.55,
                    filterType: 'lowpass',
                    cutoff: 1500,
                    resonance: 2.5,
                    noiseMix: 0.18
                }
            },
            laserElectric: {
                name: "Electric",
                params: {
                    waveType: 'square',
                    freqStart: 1200,
                    freqEnd: 150,
                    attack: 0.003,
                    decay: 0.05,
                    sustain: 0.15,
                    release: 0.08,
                    duration: 0.06,
                    volume: 0.4,
                    filterType: 'highpass',
                    cutoff: 300,
                    resonance: 2,
                    noiseMix: 0.25
                }
            }
        }
    },
    
    boosts: {
        name: "🚀 Boosts",
        presets: {
            boostBasic: {
                name: "Basic",
                params: {
                    waveType: 'sine',
                    freqStart: 130,
                    freqEnd: 550,
                    attack: 0.02,
                    decay: 0.12,
                    sustain: 0.5,
                    release: 0.25,
                    duration: 0.3,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 2,
                    noiseMix: 0.25
                }
            },
            boostQuick: {
                name: "Quick Dash",
                params: {
                    waveType: 'sine',
                    freqStart: 180,
                    freqEnd: 700,
                    attack: 0.01,
                    decay: 0.06,
                    sustain: 0.35,
                    release: 0.12,
                    duration: 0.12,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 1500,
                    resonance: 1.8,
                    noiseMix: 0.15
                }
            },
            boostPower: {
                name: "Power Surge",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 100,
                    freqEnd: 800,
                    attack: 0.02,
                    decay: 0.15,
                    sustain: 0.55,
                    release: 0.3,
                    duration: 0.35,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 2000,
                    resonance: 2.5,
                    noiseMix: 0.2
                }
            },
            boostWarp: {
                name: "Warp",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 80,
                    freqEnd: 1200,
                    attack: 0.02,
                    decay: 0.25,
                    sustain: 0.55,
                    release: 0.35,
                    duration: 0.5,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 2500,
                    resonance: 2.5,
                    noiseMix: 0.25
                }
            },
            boostNitro: {
                name: "Nitro",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 150,
                    freqEnd: 600,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.6,
                    release: 0.2,
                    duration: 0.25,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1800,
                    resonance: 2,
                    noiseMix: 0.3
                }
            },
            boostWhoosh: {
                name: "Whoosh",
                params: {
                    waveType: 'sine',
                    freqStart: 350,
                    freqEnd: 90,
                    attack: 0.02,
                    decay: 0.12,
                    sustain: 0.15,
                    release: 0.18,
                    duration: 0.15,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 1.5,
                    noiseMix: 0.45
                }
            },
            boostThruster: {
                name: "Thruster",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 80,
                    freqEnd: 200,
                    attack: 0.03,
                    decay: 0.15,
                    sustain: 0.5,
                    release: 0.2,
                    duration: 0.4,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 600,
                    resonance: 1.5,
                    noiseMix: 0.4
                }
            },
            boostLaunch: {
                name: "Launch",
                params: {
                    waveType: 'sine',
                    freqStart: 120,
                    freqEnd: 900,
                    attack: 0.01,
                    decay: 0.2,
                    sustain: 0.45,
                    release: 0.25,
                    duration: 0.3,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 2200,
                    resonance: 2,
                    noiseMix: 0.15
                }
            }
        }
    },
    
    impacts: {
        name: "💥 Impacts",
        presets: {
            impactBasic: {
                name: "Basic",
                params: {
                    waveType: 'sine',
                    freqStart: 140,
                    freqEnd: 35,
                    attack: 0.003,
                    decay: 0.1,
                    sustain: 0.1,
                    release: 0.12,
                    duration: 0.08,
                    volume: 0.65,
                    filterType: 'lowpass',
                    cutoff: 600,
                    resonance: 1,
                    noiseMix: 0.4
                }
            },
            impactHeavy: {
                name: "Heavy",
                params: {
                    waveType: 'sine',
                    freqStart: 75,
                    freqEnd: 22,
                    attack: 0.003,
                    decay: 0.18,
                    sustain: 0.15,
                    release: 0.22,
                    duration: 0.12,
                    volume: 0.7,
                    filterType: 'lowpass',
                    cutoff: 350,
                    resonance: 1,
                    noiseMix: 0.5
                }
            },
            impactPunch: {
                name: "Punch",
                params: {
                    waveType: 'sine',
                    freqStart: 180,
                    freqEnd: 55,
                    attack: 0.003,
                    decay: 0.05,
                    sustain: 0.05,
                    release: 0.06,
                    duration: 0.04,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 500,
                    resonance: 1,
                    noiseMix: 0.25
                }
            },
            impactThud: {
                name: "Thud",
                params: {
                    waveType: 'sine',
                    freqStart: 90,
                    freqEnd: 30,
                    attack: 0.003,
                    decay: 0.12,
                    sustain: 0.08,
                    release: 0.14,
                    duration: 0.08,
                    volume: 0.65,
                    filterType: 'lowpass',
                    cutoff: 280,
                    resonance: 1,
                    noiseMix: 0.18
                }
            },
            impactCrash: {
                name: "Crash",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 280,
                    freqEnd: 45,
                    attack: 0.003,
                    decay: 0.22,
                    sustain: 0.12,
                    release: 0.35,
                    duration: 0.18,
                    volume: 0.55,
                    filterType: 'lowpass',
                    cutoff: 900,
                    resonance: 1.5,
                    noiseMix: 0.6
                }
            },
            impactMetal: {
                name: "Metal",
                params: {
                    waveType: 'square',
                    freqStart: 800,
                    freqEnd: 200,
                    attack: 0.002,
                    decay: 0.05,
                    sustain: 0.1,
                    release: 0.15,
                    duration: 0.08,
                    volume: 0.45,
                    filterType: 'highpass',
                    cutoff: 300,
                    resonance: 2,
                    noiseMix: 0.3
                }
            },
            impactBoom: {
                name: "Boom",
                params: {
                    waveType: 'sine',
                    freqStart: 110,
                    freqEnd: 38,
                    attack: 0.003,
                    decay: 0.16,
                    sustain: 0.15,
                    release: 0.25,
                    duration: 0.18,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 550,
                    resonance: 1.2,
                    noiseMix: 0.45
                }
            },
            impactSmash: {
                name: "Smash",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 200,
                    freqEnd: 40,
                    attack: 0.002,
                    decay: 0.15,
                    sustain: 0.1,
                    release: 0.2,
                    duration: 0.1,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 700,
                    resonance: 1.5,
                    noiseMix: 0.55
                }
            }
        }
    },

    obstacles: {
        name: "🎯 Obstacles",
        presets: {
            obstacleHit: {
                name: "Hit",
                params: {
                    waveType: 'square',
                    freqStart: 300,
                    freqEnd: 100,
                    attack: 0.003,
                    decay: 0.06,
                    sustain: 0.1,
                    release: 0.08,
                    duration: 0.05,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 1500,
                    resonance: 1.5,
                    noiseMix: 0.3
                }
            },
            obstacleHitLight: {
                name: "Hit Light",
                params: {
                    waveType: 'sine',
                    freqStart: 400,
                    freqEnd: 150,
                    attack: 0.003,
                    decay: 0.04,
                    sustain: 0.08,
                    release: 0.06,
                    duration: 0.04,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0.2
                }
            },
            obstacleHitHard: {
                name: "Hit Hard",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 250,
                    freqEnd: 60,
                    attack: 0.003,
                    decay: 0.1,
                    sustain: 0.15,
                    release: 0.12,
                    duration: 0.08,
                    volume: 0.55,
                    filterType: 'lowpass',
                    cutoff: 1000,
                    resonance: 2,
                    noiseMix: 0.4
                }
            },
            obstacleDamage: {
                name: "Damage",
                params: {
                    waveType: 'square',
                    freqStart: 350,
                    freqEnd: 120,
                    attack: 0.002,
                    decay: 0.08,
                    sustain: 0.12,
                    release: 0.1,
                    duration: 0.06,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 1.8,
                    noiseMix: 0.35
                }
            },
            obstacleDestroy: {
                name: "Destroy",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 180,
                    freqEnd: 30,
                    attack: 0.003,
                    decay: 0.2,
                    sustain: 0.15,
                    release: 0.3,
                    duration: 0.15,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 1.5,
                    noiseMix: 0.55
                }
            },
            obstacleDestroyBig: {
                name: "Destroy Big",
                params: {
                    waveType: 'sine',
                    freqStart: 120,
                    freqEnd: 25,
                    attack: 0.005,
                    decay: 0.25,
                    sustain: 0.2,
                    release: 0.4,
                    duration: 0.2,
                    volume: 0.65,
                    filterType: 'lowpass',
                    cutoff: 500,
                    resonance: 1,
                    noiseMix: 0.6
                }
            },
            obstacleExplode: {
                name: "Explode",
                params: {
                    waveType: 'sine',
                    freqStart: 90,
                    freqEnd: 28,
                    attack: 0.003,
                    decay: 0.3,
                    sustain: 0.2,
                    release: 0.4,
                    duration: 0.3,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 700,
                    resonance: 1,
                    noiseMix: 0.6
                }
            },
            obstacleShatter: {
                name: "Shatter",
                params: {
                    waveType: 'square',
                    freqStart: 500,
                    freqEnd: 80,
                    attack: 0.002,
                    decay: 0.12,
                    sustain: 0.1,
                    release: 0.2,
                    duration: 0.1,
                    volume: 0.5,
                    filterType: 'highpass',
                    cutoff: 200,
                    resonance: 1.5,
                    noiseMix: 0.65
                }
            }
        }
    }
};

// Custom presets storage key
const CUSTOM_PRESETS_KEY = 'synthfx_custom_presets';

// Load custom presets from localStorage
function loadCustomPresets() {
    const stored = localStorage.getItem(CUSTOM_PRESETS_KEY);
    return stored ? JSON.parse(stored) : {};
}

// Save custom presets to localStorage
function saveCustomPresets(presets) {
    localStorage.setItem(CUSTOM_PRESETS_KEY, JSON.stringify(presets));
}

// Export for use in app.js
window.PRESET_CATEGORIES = PRESET_CATEGORIES;
window.loadCustomPresets = loadCustomPresets;
window.saveCustomPresets = saveCustomPresets;
window.CUSTOM_PRESETS_KEY = CUSTOM_PRESETS_KEY;
