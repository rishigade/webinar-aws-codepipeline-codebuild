function pickLocale() {
    const languages = ["en", "si", "es", "cn", "fr", "ru"];
    return languages [Math.floor(Math.random() * languages.length)];
  }

  function getLocalGreeting (language) {
    switch(language) {
        case "si":
            return "ආයුබෝවන්!";
        case "en":
            return "Hello!";
        case "es":
            return "¡Hola!";
        case "ru":
            return "Привет!";
        default:
            return "👋";
    }
  }

  function sayHello () {
      return getLocalGreeting(pickLocale());
  }

  module.exports= {
    getLocalGreeting,
    sayHello
  }

