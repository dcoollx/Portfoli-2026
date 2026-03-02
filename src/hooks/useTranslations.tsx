import React, { Provider, createContext } from "react";
import { I18n } from "i18n-js";
import en from "../translations/en.json";

const i18n = new I18n({ 'en-US': en });

export const useTranslations = () => {
    return [i18n.t]
};

// export const TranslationsContext = createContext({});

// export const TranslationsProvider: React.FC<{ translations: any }> = ({ translations, children }) => {
//     return (
//         <TranslationsContext.Provider value={translations}>
//             {children}
//         </TranslationsContext.Provider> 
//     );
// };