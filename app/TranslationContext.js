    "use client"
    import React, { createContext } from 'react';
    import { useTranslation } from 'react-i18next';

    export const TranslationContext = createContext();

    export const TranslationProvider = ({ children }) => {
    const { t, i18n } = useTranslation();

    return (
        <TranslationContext.Provider value={{ t, i18n }}>
        {children}
        </TranslationContext.Provider>
    );
    };

    