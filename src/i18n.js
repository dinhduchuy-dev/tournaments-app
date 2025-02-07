import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './locales/translation/en.json'
import viJSON from './locales/translation/vi.json'

import UKFlag from './images/flags/uk.png'
import VIFlag from './images/flags/vietnam.png'

const resources = {
    en: {
        translation: enJSON
    },
    vi: {
        translation: viJSON
    },
}

const details = {
    en: {
        flag: UKFlag,
        title:"English"
    },
    vi: {
        flag: VIFlag,
        title:"Tiếng Việt"
    },
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        lng: "vi", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",
        resources,
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

export default i18n
export const getLanguaguesDetail = () => { return details }