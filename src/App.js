import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Home/Footer';
import AppointmentPage from './components/Appointment/AppointmentPage';
import SignUp from './components/SignUp/SignUp';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyAppointment from './components/Dashboard/MyAppointment';
import MyHistory from './components/Dashboard/MyHistory';
import MyReviews from './components/Dashboard/MyReviews';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/appointment' element={<RequiredAuth><AppointmentPage /></RequiredAuth>}></Route>
        <Route path='/dashboard' element={
        <RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
          <Route index element={<MyAppointment/>}></Route>
          <Route path='myreviews' element={<MyReviews/>}></Route>
          <Route path='myhistory' index element={<MyHistory/>}></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}


export default App;
