import './App.css'
import RootPage from './components/RootPage/RootPage'
import HomePage from './components/RootPage/HomePage/HomePage'
import AboutPage from './components/RootPage/AboutPage/AboutPage'
import ProfilePage from './components/RootPage/ProfilePage/ProfilePage'
import { Route, Routes } from 'react-router-dom'



const App: React.FC = () => {

  return (
    
    <>
      <Routes>
        <Route path="/" element={ <RootPage /> }>
          <Route path="/home" element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/profile" element={ <ProfilePage /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App