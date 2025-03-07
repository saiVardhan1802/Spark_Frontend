import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Category from './pages/Category';
import Links from './pages/Links';
import Toggle from './components/Toggle';
import Appearance from './pages/Appearance';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Home from './pages/Home';
import LinkTree from './pages/LinkTree';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/select-category' element={<Category />} />
        <Route path='/links' element={<Links />} />
        <Route path='/appearance' element={<Appearance />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/toggle' element={<Toggle />} />
        <Route path='/' element={<Home />} />
        <Route path='/linktree/:id' element={<LinkTree />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
