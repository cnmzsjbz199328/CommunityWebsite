import React from 'react';

const TextToSpeech = ({ text }) => {
  const speak = (textToSpeak) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterance);
  };

  return (
    <button onClick={() => speak(text)}>Speak</button>
  );
};

export default TextToSpeech;
