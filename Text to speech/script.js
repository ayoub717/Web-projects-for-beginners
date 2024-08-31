function speak(){
    const txt = document.getElementById('txt').value;

    const voice = new SpeechSynthesisUtterance(txt);

    window.speechSynthesis.speak(voice);


}