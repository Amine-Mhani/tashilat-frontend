import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Operator from './pages/Operator/Operator';
import AddOperator from './pages/Operator/AddOperator';
import Phone from './pages/Phone/Phone';
import Internet from './pages/Internet/Internet';
import AddPhone from './pages/Phone/AddPhone';
import AddInternet from './pages/Internet/AddInternet';
import Client from './pages/Wifi/Client/Client';
import AddClient from './pages/Wifi/Client/AddClient';
import Wifi from './pages/Wifi/Bill/Wifi';
import AddWifi from './pages/Wifi/Bill/AddWifi';



function App() {
  return (
    <Router>
      <Sidebar/>
      <div className="layout-page">
        <Navbar/>
        <div className="content-wrapper">
        <Routes>
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
        </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
