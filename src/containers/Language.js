import React, { createContext, useState } from "react";
import { HINDI, ENGLISH } from "../constants";

const dictionaryList = { 'en': ENGLISH, 'hi': HINDI };

export const LanguageContext = createContext({
    userLanguage: 'en',
    dictionary: dictionaryList.en,
});

export function LanguageProvider({ children }) {
    const defaultLanguage = localStorage.getItem('saree-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

    const provider = {
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: selected => {
            const newLanguage = dictionaryList[selected] ? selected : 'en';
            setUserLanguage(newLanguage);
            localStorage.setItem('saree-lang', newLanguage)
        }
    };

    return <LanguageContext.Provider value={provider}>
        {children}
    </LanguageContext.Provider>
}