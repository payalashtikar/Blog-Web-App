import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Componentss/Navbar';
import LandingPage from './Pages/LandingPage';
import Register from './Componentss/auth/Register';
import Login from './Componentss/auth/Login';
import HomePage from './Pages/HomePage';
import CreateBlog from './Componentss/others/CreateBlog';
import UpdateBlog from './Componentss/others/UpdtaeBlog';
import FetchAllBlogs from './Componentss/others/FetchAllBlogs';

function App() {
  const isUserLoggedIn = !!localStorage.getItem("token")

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {
          isUserLoggedIn
            ?
            (
              <>
                <Route path='/homepage' element={<HomePage />} />
                <Route path='/add-blog' element={<CreateBlog />} />
                <Route path='/update-blog/:id' element={<UpdateBlog />} />
                <Route path='/all-blogs' element={<FetchAllBlogs />} />
              </>
            )
            :
            (
              <>kindly log-In</>
            )
        }
      </Routes>
    </div>
  );
}

export default App;
