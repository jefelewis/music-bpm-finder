// Imports: Dependencies
const AudioContext = require("web-audio-api").AudioContext;
const MusicTempo = require("music-tempo");
const fs = require("fs");

// Song
let song = fs.readFileSync('./assets/TooBigForBiggie(Version 8).aif');

// Find BPM
const findBPM = async (buffer) => {
  // Process Time
  console.log('Analyzing Song...');
  console.time('Process Time');

  // Audio Data
  let audioData = [];

  // Take the average of the two channels
  if (buffer.numberOfChannels == 2) {
    console.log('Analyzing Channel Average...');

    // Channel Data
    let channel1Data = await buffer.getChannelData(0);
    let channel2Data = await buffer.getChannelData(1);

    // Channel Length
    let length = channel1Data.length;

    // Iterate Over Channel
    for (let i = 0; i < length; i++) {
      audioData[i] = (channel1Data[i] + channel2Data[i]) / 2;
    }
  }
  else {
    audioData = await buffer.getChannelData(0);
  }

  // Song Data
  console.log('Extracting Song Data...');
  let songData = await new MusicTempo(audioData);
  
  // Song Data: BPM (Tempo)
  console.log(`BPM: ${Math.round(songData.tempo)}`);

  // Song Data: Beats
  // console.log(`Beats: ${songData.beats}`);

  // Process Time
  console.timeEnd('Process Time');
}

// Context
let context = new AudioContext();

// Decode Audio: BPM (Tempo), Beats
context.decodeAudioData(song, findBPM);