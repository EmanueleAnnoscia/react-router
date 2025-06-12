// import

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import CreatePost from "./pages/CreatePost"
import PostsList from "./pages/PostsList"
import GuestLayout from "./layout/GuestLayout"


// function app con tutte le rotte
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/PostsList" element={<PostsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
