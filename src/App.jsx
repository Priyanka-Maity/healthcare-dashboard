import React from 'react'
import './styles/app.css'
import Sidebar from './components/sidebar'
import Header from './components/Header'
import DashboardMainContent from './components/DashboardMainContent'

function App() {

  return (
 <div className='app-container'>
   <div className="header-section">
     <Header/>
   </div>
   <div className='main-section'>
   <Sidebar/>
   <DashboardMainContent/>
    
   </div>
 </div>

  )
}

export default App
