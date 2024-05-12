"use client"
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import translationEN from './locales/en.json';
// import translationFR from './locales/fr.json';
// import translationAR from './locales/ar.json';

// const resources = {
//   English: {
//     translation: translationEN,
//   },
//   Français: {
//     translation: translationFR,
//   },
//   العربية: {
//     translation: translationAR,
//   },
// };

// i18n
//   .use(initReactI18next) // Initialize i18next with React
//   .use(LanguageDetector) // Use the language detector
//   .init({
//     resources,
//     lng:English, // Default language
//     fallbackLng:English, // Fallback language
//     interpolation: {
//       escapeValue: false, // React already escapes variables
//     },
//     react: {
//       useSuspense: false,
//     },
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationAR from './locales/ar.json';

const resources = {
  English: {
    translation: translationEN,
  },
  Français: {
    translation: translationFR,
  },
  العربية: {
    translation: translationAR,
  },
};

const langKey = 'selectedLanguage'; // Key for storing selected language in LocalStorage

const selectedLanguage = localStorage.getItem(langKey);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: selectedLanguage || 'English', // Use stored language or default to 'English'
    fallbackLng: selectedLanguage || 'English', // Fallback language
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Update selected language in LocalStorage when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem(langKey, lng);
});

// Set the dir attribute based on the selected language
if (i18n.language === 'العربية') {
  document.documentElement.dir = 'rtl'; // Set right-to-left direction
} else {
  document.documentElement.dir = 'ltr'; // Set left-to-right direction
}

export default i18n;
