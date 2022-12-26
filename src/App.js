import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Operator from './pages/Admin/Operator/Operator';
import AddOperator from './pages/Admin/Operator/AddOperator';
import Phone from './pages/Admin/Phone/Phone';
import Internet from './pages/Admin/Internet/Internet';
import AddPhone from './pages/Admin/Phone/AddPhone';
import AddInternet from './pages/Admin/Internet/AddInternet';
import Client from './pages/Admin/Wifi/Client/Client';
import AddClient from './pages/Admin/Wifi/Client/AddClient';
import Wifi from './pages/Admin/Wifi/Bill/Wifi';
import AddWifi from './pages/Admin/Wifi/Bill/AddWifi';
import Login from './pages/Login/Login';
import Home from './pages/User/Home';
import Dashboard from './pages/Admin/Dashboard';
import Main from './pages/Login/Main';
import UserPhone from './pages/User/Phone-Internet/UserPhone';
import UserInternet from './pages/User/Phone-Internet/UserInternet';
import UserWifi from './pages/User/Phone-Internet/UserWifi';
import PIHome from './pages/User/Phone-Internet/PIHome';



function App() {
  if(sessionStorage.getItem("user") != null){
    if(JSON.parse(sessionStorage.getItem("user")).type == "admin"){
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>

            <Route exact path="/login" element={<Login/>}/>

            <Route exact path="/operator" element={<Operator/>}/>
            <Route exact path="/operator/add" element={<AddOperator/>}/>

            <Route exact path="/phone" element={<Phone/>}/>
            <Route exact path="/phone/add" element={<AddPhone/>}/>

            <Route exact path="/internet" element={<Internet/>}/>
            <Route exact path="/internet/add" element={<AddInternet/>}/>

            <Route exact path="/wifi/clients" element={<Client/>}/>
            <Route exact path="/wifi/clients-add" element={<AddClient/>}/>

            <Route exact path="/wifi/bills" element={<Wifi/>}/>
            <Route exact path="/wifi/bills-add" element={<AddWifi/>}/>

            <Route exact path="/home" element={<Home/>}/>
          </Routes>

      </Router>
    );
    }else if(JSON.parse(sessionStorage.getItem("user")).type == "user"){
      return (
      <Router>
          <Routes>
            
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/phone-internet/phone" element={<UserPhone/>}/>
            <Route exact path="/phone-internet/internet" element={<UserInternet/>}/>
            <Route exact path="/phone-internet/wifi" element={<UserWifi/>}/>
            <Route exact path="/phone-internet" element={<PIHome/>}/>
          </Routes>

      </Router>
      );
    }
  }else{
    return (
    <Router>
          <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Main/>}/>
          </Routes>

      </Router>
      );
  }



}

export default App;
