// INSTRUMENTS

var basicSynth1 = new Tone.Synth( {
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

var basicSynth2 = new Tone.Synth( {
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

var basicSynth3 = new Tone.Synth  ( {
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

var basicSynth4 = new Tone.Synth( {
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

// PATTERNS
// NO BUTTER NOTES !!!

var pattern1 = new Tone.Pattern( function( time, note ) {
    basicSynth1.triggerAttackRelease( note, '4n', time );
}, [ 'C#4', 'E#4', 'G#4', 'A#4' ] );

var pattern2 = new Tone.Pattern( function( time, note ) {
    basicSynth2.triggerAttackRelease( note, '3n', time );
}, [ 'C#3', 'E#3', 'G#3', 'A#3', 'B#3' ] );

var pattern3 = new Tone.Pattern( function( time, note ) {
    basicSynth3.triggerAttackRelease( note, '2n', time );
}, [ 'C#2', 'E#2', 'G#2', 'A#2', 'B#2', 'C#3' ] );

var pattern4 = new Tone.Pattern( function( time, note ) {
    basicSynth4.triggerAttackRelease( note, '2n', time );
}, [ 'C#3', 'E#2', 'G#3', 'A#3', 'G#4', 'A#4', 'E#3' ] );

pattern1.pattern = 'random';
pattern1.humanize = true;
pattern1.playbackRate.value = 3;
pattern1.start(0);

pattern2.pattern = 'random';
pattern2.humanize = true;
pattern1.playbackRate.value = 2;
pattern2.start(0);

pattern3.pattern = 'random';
pattern3.humanize = true;
pattern1.playbackRate.value = 6;
pattern3.start(0);

pattern4.pattern = 'random';
pattern4.humanize = true;
pattern1.playbackRate.value = 10;
pattern4.start(0);

var leftPanner = new Tone.Panner( -0.5 );
var rightPanner = new Tone.Panner( 0.5 );
var echo2 = new Tone.FeedbackDelay( '8n', 0.7 );
var reverb2 = new Tone.Freeverb();
reverb2.dampening.value = 200;
reverb2.roomSize .value = 0.4;
var comp = new Tone.Compressor( -2, 3 );

basicSynth1.connect( leftPanner );
basicSynth2.connect( rightPanner );
basicSynth3.connect( rightPanner );
basicSynth4.connect( leftPanner );

leftPanner.connect( echo2 );
rightPanner.connect( echo2 );

echo2.connect( reverb2 );

reverb2.connect( comp );

comp.toMaster();

Tone.Transport.bpm.value = 10;
Tone.Transport.start();