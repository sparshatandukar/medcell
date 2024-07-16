// import sparshalogo from './sparshalogo.svg';
import  React,{useState} from 'react';
// import Navbar from './navbar';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import ClassComponent from './classComponent';
// import Counter from './counter';
// import Timer from './timerCounter';
import CounterFunction from './components/counter/counter_function';
// import GreetComponent from './components/props/greetComponent';
import NextComponent from './components/props/nextComponent';
import SparshaComponent from './components/props/sparshaComponent';
import Navbar from './components/navbar/navbar';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import ShopComponent from './components/Shop/ShopComponent';
import ProductComponent from './components/Product/ProductComponent';
import ParentComponent from './components/ParentComponent/ParentComponent';
function App() {
  // const [message,SetMessage]=useState("Hello from App!")
  return (
    <>
    {/* <ParentComponent message={message} />; */}
    <div>
    {/* <Navbar />
    <ClassComponent />
    <Counter />
    <Timer />  */}
    {/* <Navbar/>
    <CounterFunction/>
    <NextComponent/>
    <SparshaComponent /> */}
      <Router>
          <div>
            <Navbar/>
          </div>
          <Routes>
          <Route path='/' element={<HomeComponent/>}></Route>
          <Route path='/about' element={<AboutComponent/>}></Route>
          <Route path='/shop' element={<ShopComponent/>}></Route>
          <Route path='/product' element={<ProductComponent/>}></Route>
          </Routes>
          
      </Router>
      
   
  </div>
  </>
  );
}

export default App;
