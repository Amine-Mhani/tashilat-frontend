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



function App() {
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
}

export default App;
