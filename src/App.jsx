// import

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import CreatePost from "./pages/postpages/CreatePost"
import PostsList from "./pages/postpages/PostsList"
import GuestLayout from "./layout/GuestLayout"
import Page404 from "./pages/Page404"
import SinglePostDetail from "./pages/postpages/SinglePostDetail"

// function app con tutte le rotte
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />   {/* fare routing tramite oggetto e richiamare solamente la chaive di un oggetto impostato in un altro file*/}
            <Route path="/post">
              <Route path="" element={<PostsList />} />
              <Route path=":id" element={<SinglePostDetail />} />
              <Route path="CreatePost" element={<CreatePost />} />
              
            </Route>
            <Route path="*" element={<Page404 />} /> {/* l'asterisco nelle path vuol dire che ogni cosa scriverà l'utente nel path, all'infuori di valori similari come l'id, verrà reinidirzzato nella pagina 404*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
