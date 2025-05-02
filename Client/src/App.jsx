import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/HomePage/Homepage'
import Login from './Pages/LoginPage/Login'
import Signup from './Pages/SignupPage/Signup'
import DashboardPage from './Pages/DashboardPage/DashboardPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import AnalyticsPage from './Pages/AnalyticsPage/AnalyticsPage'
import ChatbotPage from './Pages/ChatbotPage/ChatbotPage'
import TeamsPage from './Pages/TeamsPage/TeamsPage'
import SettingsPage from './Pages/SettingsPage/SettingsPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/contact-center' element={<ContactPage/>}/>
        <Route path='/analytics' element={<AnalyticsPage/>}/>
        <Route path='/chat-bot' element={<ChatbotPage/>}/>
        <Route path='/team' element={<TeamsPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App



















// import './App.css'
// import Homepage from './Pages/HomePage/Homepage'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// const App = () =>{

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Homepage/>}/>
//         <Route path='/login' element={<Homepage/>}/>
//         <Route path='/signup' element={<Homepage/>}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App