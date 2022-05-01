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


function App() {
  return (
    <>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/add-item' element={<AddItem/>}/>
       <Route path='/manage-item' element={<ManageItem/>}/>
       <Route path='/inventory/:id' element={<Inventory/>}/>

       <Route path='*' element={<NotFound/>}/>
     </Routes>
     <ToastContainer/>
    </>
  );
}

export default App;
