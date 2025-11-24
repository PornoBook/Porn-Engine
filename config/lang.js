const translations = {
    en: "Return to Home",
    pl: "Powrót do Strony Głównej",
    de: "Zurück zur Startseite",
    uk: "Повернутися на головну",
    ru: "Вернуться на главную"
  };

  const userLang = navigator.language || navigator.userLanguage; 
  const languageCode = userLang.split('-')[0]; 

  const selectedLang = translations[languageCode] ? languageCode : 'en';

  document.querySelector('.back-button').textContent = translations[selectedLang];
