const { SpeechSynthesisUtterance, speechSynthesis } = window;

window.addEventListener('load', () => {

  const msg = new SpeechSynthesisUtterance();
  const btn = document.getElementById('balls-btn');
  const voice = 'Samantha';

  setVoice(msg, voice);

  btn.addEventListener('mousedown', (e) => {
    sayMessage(msg, 'Balls');
  });

  function setVoice(msg, voice){
    const voices = speechSynthesis.getVoices();
    console.log(voices);
    msg.voice = voices.find((x) => x.name == voice);
    msg.volume = 1;
    msg.pitch = 1;
    msg.rate = 1;
    return msg
  }

  function sayMessage(msg, input){
    msg.text = input;
    speechSynthesis.speak(msg);
  }

});

