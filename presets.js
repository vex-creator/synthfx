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
                    freqStart: 200,
                    freqEnd: 800,
                    attack: 0.05,
                    decay: 0.15,
                    sustain: 0.4,
                    release: 0.3,
                    duration: 0.3,
                    volume: 0.45,
                    filterType: 'bandpass',
                    cutoff: 1000,
                    resonance: 4,
                    noiseMix: 0.15
                }
            },
            speedBoost: {
                name: "Speed Boost",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 150,
                    freqEnd: 900,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.5,
                    release: 0.25,
                    duration: 0.25,
                    volume: 0.5,
                    filterType: 'bandpass',
                    cutoff: 1200,
                    resonance: 3,
                    noiseMix: 0.25
                }
            },
            shieldHit: {
                name: "Shield Hit",
                params: {
                    waveType: 'square',
                    freqStart: 300,
                    freqEnd: 80,
                    attack: 0.001,
                    decay: 0.06,
                    sustain: 0.15,
                    release: 0.12,
                    duration: 0.05,
                    volume: 0.55,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 2,
                    noiseMix: 0.4
                }
            },
            shieldBreak: {
                name: "Shield Break",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 400,
                    freqEnd: 50,
                    attack: 0.001,
                    decay: 0.15,
                    sustain: 0.1,
                    release: 0.3,
                    duration: 0.1,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 600,
                    resonance: 3,
                    noiseMix: 0.6
                }
            },
            shieldPickup: {
                name: "Shield Pickup",
                params: {
                    waveType: 'triangle',
                    freqStart: 400,
                    freqEnd: 1200,
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
                }
            },
            obstaclePass: {
                name: "Obstacle Pass",
                params: {
                    waveType: 'sine',
                    freqStart: 600,
                    freqEnd: 300,
                    attack: 0.01,
                    decay: 0.05,
                    sustain: 0.1,
                    release: 0.1,
                    duration: 0.08,
                    volume: 0.25,
                    filterType: 'bandpass',
                    cutoff: 800,
                    resonance: 2,
                    noiseMix: 0.1
                }
            },
            nearMiss: {
                name: "Near Miss",
                params: {
                    waveType: 'sine',
                    freqStart: 1000,
                    freqEnd: 400,
                    attack: 0.005,
                    decay: 0.04,
                    sustain: 0.1,
                    release: 0.08,
                    duration: 0.05,
                    volume: 0.35,
                    filterType: 'highpass',
                    cutoff: 600,
                    resonance: 2,
                    noiseMix: 0.15
                }
            },
            gameOver: {
                name: "Game Over",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 300,
                    freqEnd: 40,
                    attack: 0.01,
                    decay: 0.3,
                    sustain: 0.2,
                    release: 0.5,
                    duration: 0.4,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 500,
                    resonance: 2,
                    noiseMix: 0.3
                }
            },
            levelComplete: {
                name: "Level Complete",
                params: {
                    waveType: 'sine',
                    freqStart: 523,
                    freqEnd: 1047,
                    attack: 0.02,
                    decay: 0.15,
                    sustain: 0.5,
                    release: 0.4,
                    duration: 0.5,
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
                    freqStart: 80,
                    freqEnd: 60,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.2,
                    release: 0.1,
                    duration: 0.08,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 300,
                    resonance: 1,
                    noiseMix: 0.05
                }
            },
            tunnelCurve: {
                name: "Tunnel Curve",
                params: {
                    waveType: 'sine',
                    freqStart: 250,
                    freqEnd: 350,
                    attack: 0.03,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 0.15,
                    duration: 0.2,
                    volume: 0.3,
                    filterType: 'bandpass',
                    cutoff: 600,
                    resonance: 2,
                    noiseMix: 0.1
                }
            },
            warpSpeed: {
                name: "Warp Speed",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 100,
                    freqEnd: 1500,
                    attack: 0.02,
                    decay: 0.2,
                    sustain: 0.6,
                    release: 0.4,
                    duration: 0.5,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 2000,
                    resonance: 3,
                    noiseMix: 0.3
                }
            },
            comboHit: {
                name: "Combo Hit",
                params: {
                    waveType: 'triangle',
                    freqStart: 600,
                    freqEnd: 1000,
                    attack: 0.005,
                    decay: 0.06,
                    sustain: 0.2,
                    release: 0.1,
                    duration: 0.08,
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
                    attack: 0.005,
                    decay: 0.05,
                    sustain: 0.3,
                    release: 0.1,
                    duration: 0.1,
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
                    decay: 0.1,
                    sustain: 0.5,
                    release: 0.2,
                    duration: 0.2,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 2000,
                    resonance: 2,
                    noiseMix: 0.1
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
                }
            },
            laserHeavy: {
                name: "Heavy Laser",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 440,
                    freqEnd: 55,
                    attack: 0.001,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 0.2,
                    duration: 0.15,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1500,
                    resonance: 3,
                    noiseMix: 0.15
                }
            },
            laserBurst: {
                name: "Laser Burst",
                params: {
                    waveType: 'square',
                    freqStart: 1200,
                    freqEnd: 200,
                    attack: 0.001,
                    decay: 0.03,
                    sustain: 0.1,
                    release: 0.08,
                    duration: 0.05,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 4000,
                    resonance: 1.5,
                    noiseMix: 0.05
                }
            },
            plasma: {
                name: "Plasma",
                params: {
                    waveType: 'sine',
                    freqStart: 600,
                    freqEnd: 150,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.4,
                    release: 0.25,
                    duration: 0.2,
                    volume: 0.45,
                    filterType: 'bandpass',
                    cutoff: 800,
                    resonance: 5,
                    noiseMix: 0.25
                }
            },
            railgun: {
                name: "Railgun",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 100,
                    freqEnd: 40,
                    attack: 0.001,
                    decay: 0.15,
                    sustain: 0.1,
                    release: 0.3,
                    duration: 0.1,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 600,
                    resonance: 2,
                    noiseMix: 0.4
                }
            },
            machineGun: {
                name: "Machine Gun",
                params: {
                    waveType: 'square',
                    freqStart: 150,
                    freqEnd: 80,
                    attack: 0.001,
                    decay: 0.02,
                    sustain: 0.0,
                    release: 0.02,
                    duration: 0.01,
                    volume: 0.5,
                    filterType: 'highpass',
                    cutoff: 200,
                    resonance: 1,
                    noiseMix: 0.6
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
                }
            },
            impactHeavy: {
                name: "Heavy Impact",
                params: {
                    waveType: 'sine',
                    freqStart: 80,
                    freqEnd: 25,
                    attack: 0.001,
                    decay: 0.15,
                    sustain: 0.15,
                    release: 0.25,
                    duration: 0.1,
                    volume: 0.8,
                    filterType: 'lowpass',
                    cutoff: 300,
                    resonance: 1,
                    noiseMix: 0.6
                }
            },
            punch: {
                name: "Punch",
                params: {
                    waveType: 'sine',
                    freqStart: 200,
                    freqEnd: 60,
                    attack: 0.001,
                    decay: 0.04,
                    sustain: 0.0,
                    release: 0.06,
                    duration: 0.02,
                    volume: 0.65,
                    filterType: 'lowpass',
                    cutoff: 400,
                    resonance: 1,
                    noiseMix: 0.3
                }
            },
            thud: {
                name: "Thud",
                params: {
                    waveType: 'sine',
                    freqStart: 100,
                    freqEnd: 35,
                    attack: 0.001,
                    decay: 0.1,
                    sustain: 0.05,
                    release: 0.15,
                    duration: 0.05,
                    volume: 0.7,
                    filterType: 'lowpass',
                    cutoff: 250,
                    resonance: 1,
                    noiseMix: 0.2
                }
            },
            crash: {
                name: "Crash",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 300,
                    freqEnd: 50,
                    attack: 0.001,
                    decay: 0.2,
                    sustain: 0.1,
                    release: 0.4,
                    duration: 0.15,
                    volume: 0.6,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 2,
                    noiseMix: 0.7
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
            },
            explosionBig: {
                name: "Big Explosion",
                params: {
                    waveType: 'sine',
                    freqStart: 60,
                    freqEnd: 20,
                    attack: 0.001,
                    decay: 0.5,
                    sustain: 0.25,
                    release: 0.8,
                    duration: 0.5,
                    volume: 0.7,
                    filterType: 'lowpass',
                    cutoff: 500,
                    resonance: 1,
                    noiseMix: 0.8
                }
            },
            boom: {
                name: "Boom",
                params: {
                    waveType: 'sine',
                    freqStart: 120,
                    freqEnd: 40,
                    attack: 0.001,
                    decay: 0.15,
                    sustain: 0.15,
                    release: 0.3,
                    duration: 0.2,
                    volume: 0.65,
                    filterType: 'lowpass',
                    cutoff: 600,
                    resonance: 1.5,
                    noiseMix: 0.5
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
                }
            },
            dash: {
                name: "Dash",
                params: {
                    waveType: 'sine',
                    freqStart: 200,
                    freqEnd: 800,
                    attack: 0.01,
                    decay: 0.05,
                    sustain: 0.3,
                    release: 0.15,
                    duration: 0.1,
                    volume: 0.4,
                    filterType: 'bandpass',
                    cutoff: 1000,
                    resonance: 2,
                    noiseMix: 0.2
                }
            },
            jump: {
                name: "Jump",
                params: {
                    waveType: 'sine',
                    freqStart: 150,
                    freqEnd: 400,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.2,
                    release: 0.1,
                    duration: 0.1,
                    volume: 0.4,
                    filterType: 'none',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0.0
                }
            },
            land: {
                name: "Land",
                params: {
                    waveType: 'sine',
                    freqStart: 200,
                    freqEnd: 80,
                    attack: 0.001,
                    decay: 0.06,
                    sustain: 0.0,
                    release: 0.08,
                    duration: 0.03,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 400,
                    resonance: 1,
                    noiseMix: 0.15
                }
            },
            whoosh: {
                name: "Whoosh",
                params: {
                    waveType: 'sine',
                    freqStart: 400,
                    freqEnd: 100,
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.1,
                    release: 0.2,
                    duration: 0.15,
                    volume: 0.35,
                    filterType: 'bandpass',
                    cutoff: 600,
                    resonance: 2,
                    noiseMix: 0.5
                }
            },
            slide: {
                name: "Slide",
                params: {
                    waveType: 'sine',
                    freqStart: 300,
                    freqEnd: 150,
                    attack: 0.01,
                    decay: 0.15,
                    sustain: 0.3,
                    release: 0.2,
                    duration: 0.25,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 800,
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
                    freqStart: 523,
                    freqEnd: 1047,
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
                }
            },
            coin: {
                name: "Coin",
                params: {
                    waveType: 'sine',
                    freqStart: 987,
                    freqEnd: 1318,
                    attack: 0.001,
                    decay: 0.08,
                    sustain: 0.1,
                    release: 0.15,
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
                    waveType: 'sine',
                    freqStart: 200,
                    freqEnd: 1000,
                    attack: 0.02,
                    decay: 0.15,
                    sustain: 0.4,
                    release: 0.3,
                    duration: 0.4,
                    volume: 0.45,
                    filterType: 'none',
                    cutoff: 5000,
                    resonance: 1,
                    noiseMix: 0.05
                }
            },
            health: {
                name: "Health",
                params: {
                    waveType: 'triangle',
                    freqStart: 440,
                    freqEnd: 880,
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 0.25,
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
                    freqStart: 800,
                    freqEnd: 1600,
                    attack: 0.005,
                    decay: 0.12,
                    sustain: 0.2,
                    release: 0.25,
                    duration: 0.15,
                    volume: 0.35,
                    filterType: 'highpass',
                    cutoff: 500,
                    resonance: 2,
                    noiseMix: 0
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
                }
            },
            hover: {
                name: "Hover",
                params: {
                    waveType: 'sine',
                    freqStart: 800,
                    freqEnd: 850,
                    attack: 0.01,
                    decay: 0.03,
                    sustain: 0.1,
                    release: 0.05,
                    duration: 0.02,
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
                    freqStart: 600,
                    freqEnd: 900,
                    attack: 0.005,
                    decay: 0.05,
                    sustain: 0.15,
                    release: 0.1,
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
                    freqStart: 200,
                    freqEnd: 150,
                    attack: 0.001,
                    decay: 0.05,
                    sustain: 0.3,
                    release: 0.1,
                    duration: 0.15,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 1000,
                    resonance: 1,
                    noiseMix: 0.1
                }
            },
            success: {
                name: "Success",
                params: {
                    waveType: 'sine',
                    freqStart: 523,
                    freqEnd: 784,
                    attack: 0.01,
                    decay: 0.08,
                    sustain: 0.2,
                    release: 0.15,
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
                    freqStart: 880,
                    freqEnd: 1100,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.15,
                    release: 0.2,
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
                    freqStart: 300,
                    freqEnd: 600,
                    attack: 0.02,
                    decay: 0.08,
                    sustain: 0.1,
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
                    freqStart: 600,
                    freqEnd: 300,
                    attack: 0.02,
                    decay: 0.08,
                    sustain: 0.1,
                    release: 0.1,
                    duration: 0.1,
                    volume: 0.25,
                    filterType: 'none',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0
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
                    freqStart: 440,
                    freqEnd: 440,
                    attack: 0.01,
                    decay: 0.1,
                    sustain: 0.5,
                    release: 0.1,
                    duration: 0.2,
                    volume: 0.4,
                    filterType: 'lowpass',
                    cutoff: 2000,
                    resonance: 1,
                    noiseMix: 0
                }
            },
            alarm: {
                name: "Alarm",
                params: {
                    waveType: 'square',
                    freqStart: 600,
                    freqEnd: 800,
                    attack: 0.01,
                    decay: 0.05,
                    sustain: 0.7,
                    release: 0.05,
                    duration: 0.3,
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
                    freqStart: 200,
                    freqEnd: 100,
                    attack: 0.001,
                    decay: 0.08,
                    sustain: 0.2,
                    release: 0.1,
                    duration: 0.1,
                    volume: 0.5,
                    filterType: 'lowpass',
                    cutoff: 1000,
                    resonance: 2,
                    noiseMix: 0.3
                }
            },
            lowHealth: {
                name: "Low Health",
                params: {
                    waveType: 'sine',
                    freqStart: 300,
                    freqEnd: 250,
                    attack: 0.05,
                    decay: 0.15,
                    sustain: 0.3,
                    release: 0.2,
                    duration: 0.3,
                    volume: 0.35,
                    filterType: 'lowpass',
                    cutoff: 800,
                    resonance: 1,
                    noiseMix: 0
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
                    freqStart: 60,
                    freqEnd: 60,
                    attack: 0.1,
                    decay: 0.2,
                    sustain: 0.6,
                    release: 0.3,
                    duration: 0.8,
                    volume: 0.25,
                    filterType: 'lowpass',
                    cutoff: 200,
                    resonance: 1,
                    noiseMix: 0.05
                }
            },
            drone: {
                name: "Drone",
                params: {
                    waveType: 'sawtooth',
                    freqStart: 80,
                    freqEnd: 80,
                    attack: 0.2,
                    decay: 0.3,
                    sustain: 0.5,
                    release: 0.4,
                    duration: 1,
                    volume: 0.3,
                    filterType: 'lowpass',
                    cutoff: 400,
                    resonance: 2,
                    noiseMix: 0.1
                }
            },
            wind: {
                name: "Wind",
                params: {
                    waveType: 'sine',
                    freqStart: 200,
                    freqEnd: 150,
                    attack: 0.3,
                    decay: 0.4,
                    sustain: 0.3,
                    release: 0.5,
                    duration: 0.8,
                    volume: 0.25,
                    filterType: 'bandpass',
                    cutoff: 400,
                    resonance: 1,
                    noiseMix: 0.8
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
