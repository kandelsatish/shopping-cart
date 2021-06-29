import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './componetns/Header'
import Section from './componetns/Section'
import  DataContextProvider from './componetns/DataContext'
import './index.css';
export default function App() {
  return (
    <DataContextProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    </DataContextProvider>
  )
}
