import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Add_product from './Components/Add Product/Add_product';
import View_product from './Components/View_product/View_product';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/Register' element={<Register></Register>}></Route>
      <Route path='/Nav' element={<Nav></Nav>}></Route>
      <Route path='/Addproduct' element={<Add_product></Add_product>}></Route>
      <Route path='/Viewproduct' element={<View_product></View_product>}></Route>
      <Route path='/Profile' element={<Profile></Profile>}></Route>
      
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
