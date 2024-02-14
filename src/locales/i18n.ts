import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import EnUs from './en_us'
import ZhCn from './zh_cn'

i18n.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: EnUs
      },
      zh: {
        translation: ZhCn
      }
    }
  }).then(() => {

  }).catch(() => {

  })

export default i18n
