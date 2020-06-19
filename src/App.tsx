import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Header } from './components'
import Routes from './routes'
import { GlobalStyle } from './styles'
import FontGlobal from './fonts/fonts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FontGlobal />
      <GlobalStyle />
      <Header />
      <ToastContainer />
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  )
}

export default App
