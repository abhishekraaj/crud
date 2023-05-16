import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Home from './pages/HomePage';

function App() {
  return (
    <div className="App">
      
      <Routes>

      <Route path="/" element={<LogIn/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path="/signUp" element={<SignUp/>} />
     
      </Routes>
     
    </div>
  );
}

export default App;
