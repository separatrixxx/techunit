import { en } from "../locales/en.locale";
import { cz } from "../locales/cz.locale";
import { de } from "../locales/de.locale";


type localeType = typeof en | typeof cz | typeof de;

export function setLocale(locale: string | undefined): localeType {
    switch (locale) {
        case 'en':
            return en;
        case 'de':
            return de;
        default:
            return cz;
    }
}

export function getLanguages(router: any): localeType[] {
    const languages = [en, cz, de];
    const langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

    return languages;
}
