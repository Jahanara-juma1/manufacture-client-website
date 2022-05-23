
import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home';
import Blogs from './Page/Home/Blogs';
import Login from './Page/Login/Login';
import NotFound from './Page/Shared/NotFound';
import Purchase from './Page/Purchase/Purchase';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
