import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Register from './Pages/Register/Register';
import LogIn from './Pages/LogIn/LogIn'
import Navbar from './Components/NavBar/NavBar'
import Home from './Components/HomePage/HomePage'
import Create from './Pages/CreatePage/Create';
import Read from './Pages/ReadPage/Read';
import Update from './Pages/UpdatePage/Update';
import AllBlogs from './Pages/AllBlogsPage/AllBlogs';
import Protected from './Components/Protected';
import Footer from './Components/FooterPage/Footer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register/>} > </Route>
          <Route path="/login" element={<LogIn/>} > </Route>
          <Route path="/home" element={<Protected Component={Home} />} > </Route>
          <Route path="/create" element={<Protected Component={Create} />} > </Route>
          <Route path="/read" element={<Protected Component={Read} />} > </Route>
          <Route path="/update/:blogId" element={<Protected Component={Update} />} > </Route>
          <Route path="/allBlogs" element={<Protected Component={AllBlogs} />} > </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
