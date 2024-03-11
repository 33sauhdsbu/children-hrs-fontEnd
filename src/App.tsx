import React, { useState } from 'react'
import './App.css'
// import Login from './pages/login'
// import { useTranslation } from 'react-i18next'
// import { Select } from 'antd'
import Home from './pages/home'
import { Link, useRoutes } from 'react-router-dom'
import About from './pages/about'
import { routes } from './router'
import { Button } from 'antd'

// const lngs: any = {
//   en: { nativeName: 'English' },
//   zh: { nativeName: '中文' }
// }
// const { Option } = Select

// const App: React.FC = () => {
//   const [isLogin, setIsLogin] = useState<boolean>(false)
//   const { i18n } = useTranslation()
//   return isLogin
//     ? <>
//       <Home />
//     </>
//     : <div className="App">
//       <header className="App-header">
//         <Select
//           style={{ width: 100, position: 'absolute', right: 20, top: 20 }}
//           defaultValue={'zh'}
//           onChange={(evt) => {
//             i18n.changeLanguage(evt).catch(() => {})
//           }}
//         >
//             {Object.keys(lngs as object).map((lng) => (
//               <Option key={lng} value={lng}
//                 style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
//               >
//                 {lngs[lng].nativeName}
//               </Option>
//             ))}
//         </Select>
//         <Login loginMethod={() => { setIsLogin(true) }}/>
//       </header>
//     </div>
// }

const App: React.FC = () => {
  const ElementRouter = useRoutes(routes)
  const [items] = useState([
    { path: '/', title: '首页', conponent: Home },
    { path: '/about', title: '预约挂号', conponent: About }
  ])

  return (
      <div>
        <nav>
            <div style={{ height: 50 }}>
                {items.map(item => (
                    <Link to={item.path} key={item.path}>
                        <Button style={{ width: 400, height: 50, marginRight: 10 }}>
                          {item.title}
                        </Button>
                    </Link>
                ))}
              <span style={{ float: 'right' }}>用户区域</span>
              <span style={{ float: 'right' }}>儿童医院挂号系统</span>
            </div>
        </nav>
        {ElementRouter}
     </div>
  )
}

export default App
