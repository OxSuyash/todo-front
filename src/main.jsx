import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss'
import { createContext } from "react"

export const server = "https://todoapi-ogsl.onrender.com/api/v1"

export const Context = createContext({
  isAuthenticated: false,
})

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading, user, setUser }}>
      <App />
    </Context.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)