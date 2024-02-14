import React from 'react'
import './App.css'
import Login from './pages/login'
import { useTranslation } from 'react-i18next'
import { Select } from 'antd'
const lngs: any = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
}
const { Option } = Select
const App: React.FC = () => {
  const { i18n } = useTranslation()
  return <div className="App">
      <header className="App-header">
        <Select
          style={{ width: 100, position: 'absolute', right: 20, top: 20 }}
          defaultValue={'zh'}
          onChange={(evt) => {
            i18n.changeLanguage(evt).catch(() => {})
          }}
        >
            {Object.keys(lngs as object).map((lng) => (
              <Option key={lng} value={lng}
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
              >
                {lngs[lng].nativeName}
              </Option>
            ))}
        </Select>
        <Login />
      </header>
    </div>
}

export default App
