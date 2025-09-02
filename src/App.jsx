import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import { ThemeProvider } from './theme-context'
// import Chipinput from './Chipinput'
// import Counter from './Counter'
// import Todo from './Todo'

const App = () => {
  return (
    // <div>
    //   {/* <Counter /> */}
    //   {/* <Todo /> */}
    //   {/* <Chipinput /> */}
    // </div>
    <ThemeProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </BrowserRouter>
   </ThemeProvider>
  )
}

export default App