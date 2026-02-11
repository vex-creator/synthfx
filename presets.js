/**
 * SynthFX Preset Library
 * Organized by category for easy browsing
 */

const PRESET_CATEGORIES = {
    hyperflow: {
        name: "🚀 Hyperflow",
        presets: {
            tunnelEnter: {
                name: "Tunnel Enter",
                params: {
                    waveType: 'sine',
                    freqStart: 180,
                    freqEnd: 600,
                    attack: 0.02,
                    decay: 0.15,
                    sustain: 0.4,
                    release: 0.25,
                    duration: 0.25,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1500,
                    resonance: 2,
                    noiseMix: 0.1
                }
            },
            speedBoost: {
                name: "Speed Boost",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 120,
                    freqEnd: 800,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.6,
                    release: 0.2,
                    duration: 0.3,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 2000,
                    resonance: 2.5,
                    noiseMix: 0.2
                }
            },
            shieldHit: {
                name: "Shield Hit",
                params: {
                    waveType: 'square',
                    freqStart: 250,
                    freqEnd: 80,
                    attack: 0.005,
                    decay: 0.08,
                    sustain: 0.1,
                    release: 0.1,
                    duration: 0.08,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 1.5,
                    noiseMix: 0.35
                }
            },
            shieldBreak: {
                name: "Shield Break",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 350,
                    freqEnd: 45,
                    attack: 0.005,
                    decay: 0.2,
                    sustain: 0.15,
                    release: 0.25,
                    duration: 0.15,
                    volume: 0.55,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 2,
                    noiseMix: 0.5
                }
            },
            shieldPickup: {
                name: "Shield Pickup",
                params: {
                    waveType: 'triangle',
                    freqStart: 440,
                    freqEnd: 1100,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.35,
                    release: 0.15,
                    duration: 0.15,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            obstaclePass: {
                name: "Obstacle Pass",
                params: {
                    waveType: 'sine',
                    freqStart: 500,
                    freqEnd: 280,
                    attack: 0.01,
                    decay: 0.06,
                    sustain: 0.15,
                    release: 0.08,
                    duration: 0.08,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 1500,
                    resonance: 1.5,
                    noiseMix: 0.08
                }
            },
            nearMiss: {
                name: "Near Miss",
                params: {
                    waveType: 'sine',
                    freqStart: 900,
                    freqEnd: 350,
                    attack: 0.008,
                    decay: 0.05,
                    sustain: 0.15,
                    release: 0.08,
                    duration: 0.06,
                    volume: 0.35,
                    filterType: 'highpass',
                    cutoff: 400,
                    resonance: 1.5,
                    noiseMix: 0.12
                }
            },
            gameOver: {
                name: "Game Over",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 250,
                    freqEnd: 35,
                    attack: 0.01,
                    decay: 0.35,
                    sustain: 0.2,
                    release: 0.45,
                    duration: 0.4,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 600,
                    resonance: 1.5,
                    noiseMix: 0.25
                }
            },
            levelComplete: {
                name: "Level Complete",
                params: {
                    waveType: 'triangle',
                    freqStart: 523,
                    freqEnd: 1047,
                    attack: 0.02,
                    decay: 0.12,
                    sustain: 0.5,
                    release: 0.35,
                    duration: 0.45,
                    volume: 0.45,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            beatPulse: {
                name: "Beat Pulse",
                params: {
                    waveType: 'sine',
                    freqStart: 70,
                    freqEnd: 50,
                    attack: 0.008,
                    decay: 0.1,
                    sustain: 0.2,
                    release: 0.12,
                    duration: 0.1,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 250,
                    resonance: 1,
                    noiseMix: 0.03
                }
            },
            tunnelCurve: {
                name: "Tunnel Curve",
                params: {
                    waveType: 'sine',
                    freqStart: 220,
                    freqEnd: 330,
                    attack: 0.025,
                    decay: 0.12,
                    sustain: 0.35,
                    release: 0.15,
                    duration: 0.2,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 1000,
                    resonance: 1.5,
                    noiseMix: 0.08
                }
            },
            warpSpeed: {
                name: "Warp Speed",
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
            comboHit: {
                name: "Combo Hit",
                params: {
                    waveType: 'triangle',
                    freqStart: 550,
                    freqEnd: 950,
                    attack: 0.008,
                    decay: 0.06,
                    sustain: 0.25,
                    release: 0.1,
                    duration: 0.1,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 3000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            countdown: {
                name: "Countdown Beep",
                params: {
                    waveType: 'sine',
                    freqStart: 880,
                    freqEnd: 880,
                    attack: 0.008,
                    decay: 0.06,
                    sustain: 0.4,
                    release: 0.08,
                    duration: 0.12,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 3000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            countdownGo: {
                name: "Countdown GO",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 440,
                    freqEnd: 880,
                    attack: 0.01,
                    decay: 0.12,
                    sustain: 0.55,
                    release: 0.18,
                    duration: 0.22,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 2500,
                    resonance: 1.8,
                    noiseMix: 0.08
                }
            }
        }
    },
    
    weapons: {
        name: "🔫 Weapons",
        presets: {
            laser: {
                name: "Laser",
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
            laserHeavy: {
                name: "Heavy Laser",
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
            laserBurst: {
                name: "Laser Burst",
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
            plasma: {
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
            railgun: {
                name: "Railgun",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 90,
                    freqEnd: 35,
                    attack: 0.003,
                    decay: 0.18,
                    sustain: 0.1,
                    release: 0.25,
                    duration: 0.12,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 700,
                    resonance: 1.8,
                    noiseMix: 0.35
                }
            },
            machineGun: {
                name: "Machine Gun",
                params: {
                    waveType: 'square',
                    freqStart: 140,
                    freqEnd: 70,
                    attack: 0.002,
                    decay: 0.025,
                    sustain: 0.05,
                    release: 0.025,
                    duration: 0.015,
                    volume: 0.45,
                    filterType: 'highpass',
                    cutoff: 150,
                    resonance: 1,
                    noiseMix: 0.5
                }
            },
            zap: {
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
            blaster: {
                name: "Blaster",
                params: {
                    waveType: 'square',
                    freqStart: 600,
                    freqEnd: 80,
                    attack: 0.003,
                    decay: 0.08,
                    sustain: 0.15,
                    release: 0.1,
                    duration: 0.08,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 2000,
                    resonance: 2,
                    noiseMix: 0.2
                }
            }
        }
    },
    
    impacts: {
        name: "💥 Impacts",
        presets: {
            impact: {
                name: "Impact",
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
                name: "Heavy Impact",
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
            punch: {
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
            thud: {
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
            crash: {
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
            metalHit: {
                name: "Metal Hit",
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
            }
        }
    },

    explosions: {
        name: "🔥 Explosions",
        presets: {
            explosion: {
                name: "Explosion",
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
            explosionBig: {
                name: "Big Explosion",
                params: {
                    waveType: 'sine',
                    freqStart: 55,
                    freqEnd: 18,
                    attack: 0.005,
                    decay: 0.45,
                    sustain: 0.25,
                    release: 0.65,
                    duration: 0.5,
                    volume: 0.65,
                    filterType: 'lowpass',
                    cutoff: 450,
                    resonance: 1,
                    noiseMix: 0.7
                }
            },
            boom: {
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
            crackle: {
                name: "Crackle",
                params: {
                    waveType: 'square',
                    freqStart: 300,
                    freqEnd: 100,
                    attack: 0.002,
                    decay: 0.1,
                    sustain: 0.15,
                    release: 0.2,
                    duration: 0.15,
                    volume: 0.4,
                    filterType: 'highpass',
                    cutoff: 200,
                    resonance: 1,
                    noiseMix: 0.7
                }
            }
        }
    },

    movement: {
        name: "🏃 Movement",
        presets: {
            boost: {
                name: "Boost",
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
            dash: {
                name: "Dash",
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
            jump: {
                name: "Jump",
                params: {
                    waveType: 'sine',
                    freqStart: 140,
                    freqEnd: 380,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.25,
                    release: 0.1,
                    duration: 0.12,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            land: {
                name: "Land",
                params: {
                    waveType: 'sine',
                    freqStart: 180,
                    freqEnd: 70,
                    attack: 0.003,
                    decay: 0.07,
                    sustain: 0.05,
                    release: 0.08,
                    duration: 0.05,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 450,
                    resonance: 1,
                    noiseMix: 0.12
                }
            },
            whoosh: {
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
            whooshFast: {
                name: "Fast Whoosh",
                params: {
                    waveType: 'sine',
                    freqStart: 600,
                    freqEnd: 120,
                    attack: 0.01,
                    decay: 0.06,
                    sustain: 0.1,
                    release: 0.1,
                    duration: 0.08,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 1000,
                    resonance: 1.5,
                    noiseMix: 0.5
                }
            },
            slide: {
                name: "Slide",
                params: {
                    waveType: 'sine',
                    freqStart: 280,
                    freqEnd: 140,
                    attack: 0.015,
                    decay: 0.15,
                    sustain: 0.3,
                    release: 0.18,
                    duration: 0.25,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 700,
                    resonance: 1,
                    noiseMix: 0.35
                }
            },
            teleport: {
                name: "Teleport",
                params: {
                    waveType: 'sine',
                    freqStart: 200,
                    freqEnd: 1800,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.3,
                    release: 0.15,
                    duration: 0.12,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 3000,
                    resonance: 2.5,
                    noiseMix: 0.15
                }
            },
            swoosh: {
                name: "Swoosh",
                params: {
                    waveType: 'sine',
                    freqStart: 500,
                    freqEnd: 150,
                    attack: 0.015,
                    decay: 0.08,
                    sustain: 0.1,
                    release: 0.12,
                    duration: 0.1,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 1,
                    noiseMix: 0.4
                }
            }
        }
    },

    pickups: {
        name: "✨ Pickups",
        presets: {
            pickup: {
                name: "Pickup",
                params: {
                    waveType: 'triangle',
                    freqStart: 500,
                    freqEnd: 1000,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.3,
                    release: 0.15,
                    duration: 0.15,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            coin: {
                name: "Coin",
                params: {
                    waveType: 'sine',
                    freqStart: 950,
                    freqEnd: 1250,
                    attack: 0.003,
                    decay: 0.06,
                    sustain: 0.15,
                    release: 0.12,
                    duration: 0.08,
                    volume: 0.35,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            powerup: {
                name: "Power Up",
                params: {
                    waveType: 'triangle',
                    freqStart: 180,
                    freqEnd: 950,
                    attack: 0.02,
                    decay: 0.15,
                    sustain: 0.4,
                    release: 0.25,
                    duration: 0.35,
                    volume: 0.45,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0.03
                }
            },
            health: {
                name: "Health",
                params: {
                    waveType: 'triangle',
                    freqStart: 420,
                    freqEnd: 840,
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.35,
                    release: 0.2,
                    duration: 0.2,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            gem: {
                name: "Gem",
                params: {
                    waveType: 'sine',
                    freqStart: 750,
                    freqEnd: 1500,
                    attack: 0.008,
                    decay: 0.1,
                    sustain: 0.25,
                    release: 0.2,
                    duration: 0.15,
                    volume: 0.35,
                    filterType: 'highpass',
                    cutoff: 400,
                    resonance: 1.5,
                    noiseMix: 0
                }
            },
            star: {
                name: "Star",
                params: {
                    waveType: 'sine',
                    freqStart: 880,
                    freqEnd: 1760,
                    attack: 0.005,
                    decay: 0.08,
                    sustain: 0.3,
                    release: 0.15,
                    duration: 0.12,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            blip: {
                name: "Blip",
                params: {
                    waveType: 'sine',
                    freqStart: 1200,
                    freqEnd: 1400,
                    attack: 0.003,
                    decay: 0.03,
                    sustain: 0.1,
                    release: 0.05,
                    duration: 0.04,
                    volume: 0.3,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            pop: {
                name: "Pop",
                params: {
                    waveType: 'sine',
                    freqStart: 400,
                    freqEnd: 180,
                    attack: 0.003,
                    decay: 0.04,
                    sustain: 0.05,
                    release: 0.05,
                    duration: 0.03,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 1,
                    noiseMix: 0.1
                }
            }
        }
    },

    ui: {
        name: "🖱️ UI",
        presets: {
            click: {
                name: "Click",
                params: {
                    waveType: 'sine',
                    freqStart: 1400,
                    freqEnd: 1100,
                    attack: 0.003,
                    decay: 0.025,
                    sustain: 0.05,
                    release: 0.02,
                    duration: 0.02,
                    volume: 0.3,
                    filterType: 'highpass',
                    cutoff: 700,
                    resonance: 1,
                    noiseMix: 0.05
                }
            },
            hover: {
                name: "Hover",
                params: {
                    waveType: 'sine',
                    freqStart: 780,
                    freqEnd: 830,
                    attack: 0.01,
                    decay: 0.035,
                    sustain: 0.15,
                    release: 0.04,
                    duration: 0.03,
                    volume: 0.2,
                    filterType: 'none',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            select: {
                name: "Select",
                params: {
                    waveType: 'triangle',
                    freqStart: 580,
                    freqEnd: 880,
                    attack: 0.008,
                    decay: 0.05,
                    sustain: 0.2,
                    release: 0.08,
                    duration: 0.08,
                    volume: 0.3,
                    filterType: 'none',
                    cutoff: 3000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            error: {
                name: "Error",
                params: {
                    waveType: 'square',
                    freqStart: 185,
                    freqEnd: 140,
                    attack: 0.005,
                    decay: 0.06,
                    sustain: 0.35,
                    release: 0.1,
                    duration: 0.15,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 1,
                    noiseMix: 0.08
                }
            },
            success: {
                name: "Success",
                params: {
                    waveType: 'sine',
                    freqStart: 500,
                    freqEnd: 760,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.25,
                    release: 0.12,
                    duration: 0.12,
                    volume: 0.35,
                    filterType: 'none',
                    cutoff: 3000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            notification: {
                name: "Notification",
                params: {
                    waveType: 'sine',
                    freqStart: 850,
                    freqEnd: 1050,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.2,
                    release: 0.15,
                    duration: 0.15,
                    volume: 0.3,
                    filterType: 'none',
                    cutoff: 3000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            menuOpen: {
                name: "Menu Open",
                params: {
                    waveType: 'sine',
                    freqStart: 280,
                    freqEnd: 560,
                    attack: 0.02,
                    decay: 0.08,
                    sustain: 0.15,
                    release: 0.1,
                    duration: 0.1,
                    volume: 0.25,
                    filterType: 'none',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            menuClose: {
                name: "Menu Close",
                params: {
                    waveType: 'sine',
                    freqStart: 560,
                    freqEnd: 280,
                    attack: 0.02,
                    decay: 0.08,
                    sustain: 0.15,
                    release: 0.1,
                    duration: 0.1,
                    volume: 0.25,
                    filterType: 'none',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            tick: {
                name: "Tick",
                params: {
                    waveType: 'sine',
                    freqStart: 2000,
                    freqEnd: 1800,
                    attack: 0.002,
                    decay: 0.015,
                    sustain: 0.0,
                    release: 0.01,
                    duration: 0.01,
                    volume: 0.25,
                    filterType: 'highpass',
                    cutoff: 1000,
                    resonance: 1,
                    noiseMix: 0.03
                }
            }
        }
    },

    alerts: {
        name: "⚠️ Alerts",
        presets: {
            warning: {
                name: "Warning",
                params: {
                    waveType: 'square',
                    freqStart: 420,
                    freqEnd: 420,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.55,
                    release: 0.1,
                    duration: 0.2,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 2200,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            alarm: {
                name: "Alarm",
                params: {
                    waveType: 'square',
                    freqStart: 580,
                    freqEnd: 780,
                    attack: 0.01,
                    decay: 0.06,
                    sustain: 0.7,
                    release: 0.06,
                    duration: 0.28,
                    volume: 0.45,
                    filterType: 'none',
                    cutoff: 3000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            damage: {
                name: "Damage",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 180,
                    freqEnd: 90,
                    attack: 0.003,
                    decay: 0.1,
                    sustain: 0.2,
                    release: 0.12,
                    duration: 0.1,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1100,
                    resonance: 1.8,
                    noiseMix: 0.25
                }
            },
            lowHealth: {
                name: "Low Health",
                params: {
                    waveType: 'sine',
                    freqStart: 280,
                    freqEnd: 230,
                    attack: 0.05,
                    decay: 0.15,
                    sustain: 0.35,
                    release: 0.18,
                    duration: 0.3,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 900,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            danger: {
                name: "Danger",
                params: {
                    waveType: 'square',
                    freqStart: 300,
                    freqEnd: 200,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.5,
                    release: 0.1,
                    duration: 0.2,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 1500,
                    resonance: 1.5,
                    noiseMix: 0.1
                }
            }
        }
    },

    magic: {
        name: "🔮 Magic",
        presets: {
            spell: {
                name: "Spell Cast",
                params: {
                    waveType: 'sine',
                    freqStart: 300,
                    freqEnd: 1200,
                    attack: 0.02,
                    decay: 0.15,
                    sustain: 0.4,
                    release: 0.3,
                    duration: 0.3,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 2500,
                    resonance: 2.5,
                    noiseMix: 0.1
                }
            },
            shimmer: {
                name: "Shimmer",
                params: {
                    waveType: 'sine',
                    freqStart: 1200,
                    freqEnd: 1800,
                    attack: 0.03,
                    decay: 0.15,
                    sustain: 0.25,
                    release: 0.3,
                    duration: 0.3,
                    volume: 0.3,
                    filterType: 'highpass',
                    cutoff: 600,
                    resonance: 2,
                    noiseMix: 0.08
                }
            },
            sparkle: {
                name: "Sparkle",
                params: {
                    waveType: 'triangle',
                    freqStart: 1500,
                    freqEnd: 2200,
                    attack: 0.005,
                    decay: 0.06,
                    sustain: 0.15,
                    release: 0.15,
                    duration: 0.1,
                    volume: 0.3,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0.05
                }
            },
            heal: {
                name: "Heal",
                params: {
                    waveType: 'triangle',
                    freqStart: 350,
                    freqEnd: 900,
                    attack: 0.03,
                    decay: 0.2,
                    sustain: 0.4,
                    release: 0.35,
                    duration: 0.4,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            buff: {
                name: "Buff",
                params: {
                    waveType: 'sine',
                    freqStart: 250,
                    freqEnd: 700,
                    attack: 0.03,
                    decay: 0.12,
                    sustain: 0.45,
                    release: 0.25,
                    duration: 0.3,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 1800,
                    resonance: 2,
                    noiseMix: 0.05
                }
            },
            debuff: {
                name: "Debuff",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 500,
                    freqEnd: 150,
                    attack: 0.02,
                    decay: 0.15,
                    sustain: 0.3,
                    release: 0.2,
                    duration: 0.25,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 2,
                    noiseMix: 0.15
                }
            }
        }
    },

    scifi: {
        name: "🛸 Sci-Fi",
        presets: {
            engine: {
                name: "Engine Hum",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 60,
                    freqEnd: 65,
                    attack: 0.1,
                    decay: 0.2,
                    sustain: 0.6,
                    release: 0.3,
                    duration: 0.8,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 300,
                    resonance: 2,
                    noiseMix: 0.1
                }
            },
            thruster: {
                name: "Thruster",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 80,
                    freqEnd: 150,
                    attack: 0.05,
                    decay: 0.15,
                    sustain: 0.5,
                    release: 0.2,
                    duration: 0.4,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 600,
                    resonance: 1.5,
                    noiseMix: 0.35
                }
            },
            forcefield: {
                name: "Forcefield",
                params: {
                    waveType: 'sine',
                    freqStart: 200,
                    freqEnd: 220,
                    attack: 0.05,
                    decay: 0.15,
                    sustain: 0.5,
                    release: 0.2,
                    duration: 0.5,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 3,
                    noiseMix: 0.15
                }
            },
            scanner: {
                name: "Scanner",
                params: {
                    waveType: 'sine',
                    freqStart: 800,
                    freqEnd: 2000,
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 0.15,
                    duration: 0.35,
                    volume: 0.3,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0.05
                }
            },
            dataTransfer: {
                name: "Data Transfer",
                params: {
                    waveType: 'square',
                    freqStart: 1000,
                    freqEnd: 2500,
                    attack: 0.005,
                    decay: 0.02,
                    sustain: 0.15,
                    release: 0.03,
                    duration: 0.05,
                    volume: 0.25,
                    filterType: 'lowpass',
                    cutoff: 4000,
                    resonance: 1,
                    noiseMix: 0.1
                }
            },
            powerDown: {
                name: "Power Down",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 400,
                    freqEnd: 30,
                    attack: 0.01,
                    decay: 0.3,
                    sustain: 0.2,
                    release: 0.4,
                    duration: 0.5,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 2,
                    noiseMix: 0.2
                }
            },
            powerUp: {
                name: "Power Up",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 50,
                    freqEnd: 500,
                    attack: 0.02,
                    decay: 0.25,
                    sustain: 0.4,
                    release: 0.3,
                    duration: 0.5,
                    volume: 0.45,
                    filterType: 'lowpass',
                    cutoff: 1200,
                    resonance: 2,
                    noiseMix: 0.15
                }
            }
        }
    },

    ambient: {
        name: "🌊 Ambient",
        presets: {
            hum: {
                name: "Hum",
                params: {
                    waveType: 'sine',
                    freqStart: 58,
                    freqEnd: 58,
                    attack: 0.12,
                    decay: 0.2,
                    sustain: 0.6,
                    release: 0.3,
                    duration: 0.8,
                    volume: 0.25,
                    filterType: 'lowpass',
                    cutoff: 180,
                    resonance: 1,
                    noiseMix: 0.03
                }
            },
            drone: {
                name: "Drone",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 75,
                    freqEnd: 75,
                    attack: 0.25,
                    decay: 0.3,
                    sustain: 0.5,
                    release: 0.4,
                    duration: 1,
                    volume: 0.28,
                    filterType: 'lowpass',
                    cutoff: 350,
                    resonance: 1.8,
                    noiseMix: 0.08
                }
            },
            wind: {
                name: "Wind",
                params: {
                    waveType: 'sine',
                    freqStart: 180,
                    freqEnd: 140,
                    attack: 0.3,
                    decay: 0.4,
                    sustain: 0.35,
                    release: 0.45,
                    duration: 0.8,
                    volume: 0.25,
                    filterType: 'lowpass',
                    cutoff: 500,
                    resonance: 1,
                    noiseMix: 0.75
                }
            },
            rain: {
                name: "Rain",
                params: {
                    waveType: 'sine',
                    freqStart: 300,
                    freqEnd: 250,
                    attack: 0.2,
                    decay: 0.3,
                    sustain: 0.4,
                    release: 0.35,
                    duration: 0.7,
                    volume: 0.2,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 1,
                    noiseMix: 0.85
                }
            },
            static: {
                name: "Static",
                params: {
                    waveType: 'sine',
                    freqStart: 100,
                    freqEnd: 100,
                    attack: 0.05,
                    decay: 0.1,
                    sustain: 0.5,
                    release: 0.15,
                    duration: 0.5,
                    volume: 0.2,
                    filterType: 'highpass',
                    cutoff: 500,
                    resonance: 1,
                    noiseMix: 0.95
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
