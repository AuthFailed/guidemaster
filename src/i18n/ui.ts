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
            text: "ГайдМастер"
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
    },
    "en": {
        "site.title": {
            text: "GuideMaster"
        },
        "site.description": {
            text: "Instructions on a wide variety of topics :)"
        },
        "profile.description": {
            text: "Genius, billionaire, playboy, philanthropist."
        },
        "blog.lastUpdated": {
            text: "Last update:"
        },
        "sidebar.tableOfContents": {
            text: "Content table"
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