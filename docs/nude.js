// INSTRUMENTS

var basicSynth1 = new Tone.AMSynth  ( {
    'oscillator' : {
        'type' : 'pwm',
        'modulationFrequency' : 0.5
    },
    'envelope' : {
        'attack' : 0.0,
        'decay' : 0.1,
        'sustain' : 0.2,
        'release' : 0.9,
    }
} ).toMaster();

// var basicSynth2 = new Tone.Synth( {
//     'oscillator' : {
//         'type' : 'pwm',
//         'modulationFrequency' : 0.1
//     },
//     'envelope' : {
//         'attack' : 0.0,
//         'decay' : 0.1,
//         'sustain' : 0.2,
//         'release' : 0.9,
//     }
// } ).toMaster();

// var basicSynth3 = new Tone.AMSynth  ( {
//     'oscillator' : {
//         'type' : 'pwm',
//         'modulationFrequency' : 0.3
//     },
//     'envelope' : {
//         'attack' : 0.0,
//         'decay' : 0.1,
//         'sustain' : 0.2,
//         'release' : 0.9,
//     }
// } ).toMaster();

// var basicSynth4 = new Tone.Synth( {
//     'oscillator' : {
//         'type' : 'pwm',
//         'modulationFrequency' : 0.2
//     },
//     'envelope' : {
//         'attack' : 0.0,
//         'decay' : 0.1,
//         'sustain' : 0.2,
//         'release' : 0.9,
//     }
// } ).toMaster();

// PATTERNS
// NO BUTTER NOTES !!!

var pattern1 = new Tone.Pattern( function( time, note ) {
    basicSynth1.triggerAttackRelease( note, '4n', time );
}, [ 'C#4', 'E#4', 'G#4', 'A#4' ] );

// var pattern2 = new Tone.Pattern( function( time, note ) {
//     basicSynth2.triggerAttackRelease( note, '3n', time );
// }, [ 'C#3', 'E#3', 'G#3', 'A#3', 'B#3' ] );

// var pattern3 = new Tone.Pattern( function( time, note ) {
//     basicSynth3.triggerAttackRelease( note, '2n', time );
// }, [ 'C#2', 'E#2', 'G#2', 'A#2', 'B#2', 'C#3' ] );

// var pattern4 = new Tone.Pattern( function( time, note ) {
//     basicSynth4.triggerAttackRelease( note, '2n', time );
// }, [ 'C#3', 'E#2', 'G#3', 'A#3', 'G#4', 'A#4', 'E#3' ] );

pattern1.pattern = 'random';
pattern1.humanize = true;
pattern1.playbackRate.value = 3;
pattern1.start(0);

// pattern2.pattern = 'random';
// pattern2.humanize = true;
// pattern1.playbackRate.value = 2;
// pattern2.start(0);

// pattern3.pattern = 'random';
// pattern3.humanize = true;
// pattern1.playbackRate.value = 6;
// pattern3.start(0);

// pattern4.pattern = 'random';
// pattern4.humanize = true;
// pattern1.playbackRate.value = 10;
// pattern4.start(0);

// var leftPanner = new Tone.Panner( -0.5 );
// var rightPanner = new Tone.Panner( 0.5 );
// var echo = new Tone.FeedbackDelay( '16n', 0.4 );
// var reverb = new Tone.JCReverb( 0.95 )
// var echo2 = new Tone.FeedbackDelay( '8n', 0.4 );
// var reverb2 = new Tone.JCReverb( 0.99 )
// var comp = new Tone.Compressor( -30, 3 );

// basicSynth1.toMaster();
// basicSynth2.connect( rightPanner );
// basicSynth3.connect( leftPanner );
// basicSynth4.connect( rightPanner );

// leftPanner.connect( reverb2 );
// rightPanner.connect( reverb2 );

// echo.connect( reverb );

// reverb.connect( echo2 );

// echo2.connect( reverb2 );

// reverb2.connect( comp );

// comp.toMaster();

Tone.Transport.bpm.value = 10;
Tone.Transport.start();