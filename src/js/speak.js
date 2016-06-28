
window.addEventListener('load', () => {

  const btn = document.getElementById('balls-btn');

  const { SpeechSynthesisUtterance, speechSynthesis } = window;
  const msg = new SpeechSynthesisUtterance();
  const voice = 'Samantha';

  btn.addEventListener('mousedown', (e) => {
    setVoice(voice);
    sayMessage('Balls');
  });

  function setVoice(voice){
    const voices = speechSynthesis.getVoices();
    // for(let i of voices) console.log(i.name);
    msg.voice = voices.find((x) => x.name == voice);
    msg.volume = 1;
    msg.pitch = 1;
    msg.rate = 1;
    return msg
  }

  function sayMessage(input){
    msg.text = input;
    speechSynthesis.speak(msg);
  }

  if ('speechSynthesis' in window) {
    console.log('synth');
  }

  if ('SpeechRecognition' in window) {
    // Speech recognition support. Talk to your apps!
    console.log('recognition');
  }

});

