import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Category from './pages/Category';
import Links from './pages/Links';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/select-category' element={<Category />} />
        <Route path='/links' element={<Links />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
