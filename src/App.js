import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import AddItem from './Pages/AddItems/AddItem';
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/NoteFound/NotFound';
import Home from './Pages/Home/Home';
import ManageItem from './Pages/ManageItem/ManageItem';
import Inventory from './Pages/Inventory/Inventory';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/blogs' element={<Blog/>}/>
       <Route path='/add-item' element={<AddItem/>}/>
       <Route path='/inventory/:id' element={<Inventory/>}/>
       <Route path='/login' element={<Login/>}/>

       <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
    </>
  );
}

export default App;
