import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';

import { useAuthentication } from './hooks/useAuthentication.js';

import { AuthProvider } from './contexts/AuthContext.js';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import CreatePost from './pages/CreatePost/CreatePost.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Search from './pages/Search/Search.jsx';
import Post from './pages/Post/Post.jsx';
import EditPost from './pages/EditPost/EditPost.jsx';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication()

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando ...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar></Navbar>

          <div className='container'>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/search' element={<Search></Search>}></Route>
              <Route path='/posts/:id' element={<Post></Post>}></Route>
              <Route 
                path='/login' 
                element={ !user ? <Login></Login> : <Navigate to='/'></Navigate> }
              ></Route>
              <Route 
                path='/register' 
                element={ !user ? <Register></Register> : <Navigate to='/'></Navigate> }
              ></Route>
              <Route 
                path='/posts/edit/:id' 
                element={ user ? <EditPost></EditPost> : <Navigate to='/login'></Navigate> }
              ></Route>
              <Route 
                path='/posts/create' 
                element={ user ? <CreatePost></CreatePost> : <Navigate to='/login'></Navigate> }
              ></Route>
              <Route 
                path='/dashboard' 
                element={ user ? <Dashboard></Dashboard> : <Navigate to='/login'></Navigate> }
              ></Route>
            </Routes>
          </div>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>   
    </div>
  );
}

export default App;
