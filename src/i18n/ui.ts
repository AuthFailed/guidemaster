/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "ru": {
        "site.title": {
            text: "ГайдМастер НЦК"
        },
        "site.description": {
            text: "Инструкции на самые разные темы :)"
        },
        "profile.description": {
            text: "Гений, миллиардер, плэйбой, филантроп"
        },
        "blog.lastUpdated": {
            text: "Последнее обновление:"
        },
        "sidebar.tableOfContents": {
            text: "Таблица контента"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    }
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };