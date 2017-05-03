// INSTRUMENTS

var sineSynthLeft = new Tone.Synth( {
    'oscillator' : {
        'type' : 'sine'
    },
    'envelope' : {
        'attack' : 1,
        'decay' : 0.0,
        'sustain' : 1,
        'release' : 1,
    }
} );

var triangleSynthLeft = new Tone.Synth( {
    'oscillator' : {
        'type' : 'triangle'
    },
    'envelope' : {
        'attack' : 1,
        'decay' : 0.0,
        'sustain' : 1,
        'release' : 1,
    }
} );

var squareSynthLeft = new Tone.Synth( {
    'oscillator' : {
        'type' : 'sawtooth'
    },
    'envelope' : {
        'attack' : 1,
        'decay' : 0.0,
        'sustain' : 1,
        'release' : 1,
    }
} );

var sineSynthRight = new Tone.Synth( {
    'oscillator' : {
        'type' : 'sine'
    },
    'envelope' : {
        'attack' : 1,
        'decay' : 0.0,
        'sustain' : 1,
        'release' : 1,
    }
} );

var triangleSynthRight = new Tone.Synth( {
    'oscillator' : {
        'type' : 'triangle'
    },
    'envelope' : {
        'attack' : 1,
        'decay' : 0.0,
        'sustain' : 1,
        'release' : 1,
    }
} );

var squareSynthRight = new Tone.Synth( {
    'oscillator' : {
        'type' : 'sawtooth'
    },
    'envelope' : {
        'attack' : 1,
        'decay' : 0.0,
        'sustain' : 1,
        'release' : 1,
    }
} );

// PATTERNS

var bassPattern1 = new Tone.Pattern( function ( time, note ) {
    sineSynthLeft.triggerAttackRelease( note, '1n', time );
}, [ 'C#2', 'E2', 'G#2', 'B2' ] );

var bassPattern2 = new Tone.Pattern( function ( time, note ) {
    squareSynthRight.triggerAttackRelease( note, '1n', time );
}, [ 'C#2', 'E2', 'G#2', 'B2' ] );

var middleChords1 = new Tone.Pattern( function ( time, note ) {
    triangleSynthLeft.triggerAttackRelease( note, '1n', time );
}, [ 'E3', 'G#3', 'A3', 'B3' ] );

var middleChords2 = new Tone.Pattern( function ( time, note ) {
    sineSynthRight.triggerAttackRelease( note, '1n', time );
}, [ 'E4', 'G#4', 'A4', 'B4' ] );

// NO BUTTER NOTES (not much at least)
var color1 = new Tone.Pattern( function ( time, note ) {
    triangleSynthRight.triggerAttackRelease( note, '1n', time );
}, [ 'G#4', 'D#4', 'F#4', 'A4', 'D#5', 'F#5', 'A5' ] );

var color2 = new Tone.Pattern( function ( time, note ) {
    squareSynthLeft.triggerAttackRelease( note, '1n', time );
}, [ 'G#4', 'D#4', 'F#4', 'A4', 'D#5', 'F#5', 'A5' ] );

bassPattern1.pattern = 'random';
bassPattern1.humanize = true;
bassPattern1.start(0);

bassPattern2.pattern = 'random';
bassPattern2.humanize = true;
bassPattern2.start(0);

middleChords1.pattern = 'random';
middleChords1.humanize = true;
middleChords1.start(0);

middleChords2.pattern = 'random';
middleChords2.humanize = true;
middleChords2.start(0);

color1.pattern = 'random';
color1.humanize = true;
color1.start(0);

color2.pattern = 'random';
color2.humanize = true;
color2.start(0);

var leftPanner = new Tone.Panner( -0.5 );
var rightPanner = new Tone.Panner( 0.5 );
var echo2 = new Tone.FeedbackDelay( '8n', 0.7 );
var reverb2 = new Tone.Freeverb();
reverb2.dampening.value = 200;
reverb2.roomSize .value = 0.4;
var comp = new Tone.Compressor( -2, 3 );

sineSynthLeft.connect( leftPanner );
triangleSynthLeft.connect( leftPanner );
squareSynthLeft.connect( leftPanner );
sineSynthRight.connect( rightPanner );
triangleSynthRight.connect( rightPanner );
squareSynthRight.connect( rightPanner );

leftPanner.connect( echo2 );
rightPanner.connect( echo2 );

echo2.connect( reverb2 );

reverb2.connect( comp );

// VOICE

var player = new Tone.Player( {
    'url' : './Voice.mp3',
    'loop' : true
} );

player.connect( comp );
player.autostart = true;

comp.toMaster();

// original bpm: 63, in 6/8 timing
Tone.Transport.bpm.value = 10;
Tone.Transport.start();
