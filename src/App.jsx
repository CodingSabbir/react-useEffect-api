import { BrowserRouter, Route, Routes } from "react-router-dom"
import AsyncAwait from "./componets/AsyncAwait"
import PromiceApi from "./componets/PromiceApi"
import Home from "./componets/Home"
import About from "./componets/About"
import Contact from "./componets/Contact"
import Navbar from "./componets/Navbar"
import NotFound from "./componets/NotFound"


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about/:id/:name" element={<About/>}/>
      <Route path="contact/:facebook/:youTube" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
   <PromiceApi/>
   <AsyncAwait/>
    </>
  )
}

export default App
