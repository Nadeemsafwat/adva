import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../i18n/Translation';

const LanguageContext = createContext(null);
 
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('adva-lang') || 'en';
    } catch (e) {
      return 'en';
    }
  });
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = dir === 'rtl';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem('adva-lang', language);
    } catch (e) {
      /* ignore storage errors */
    }
  }, [language, dir]);

  const toggleLanguage = () => setLanguage((l) => (l === 'en' ? 'ar' : 'en'));

  // t(path) walks translations[language] by dot-notation and returns
  // whatever value lives there (string, array, or object).
  const t = useMemo(() => {
    return (path) => {
      const keys = path.split('.');
      let value = translations[language];
      for (const key of keys) {
        value = value == null ? undefined : value[key];
      }
      return value === undefined ? path : value;
    };
  }, [language]);

  const value = { language, setLanguage, toggleLanguage, dir, isRTL, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
