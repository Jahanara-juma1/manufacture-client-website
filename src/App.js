
import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home';
import Blogs from './Page/Home/Blogs';
import Login from './Page/Login/Login';
import NotFound from './Page/Shared/NotFound';
import Purchase from './Page/Purchase/Purchase';
import SignUp from './Page/Login/SignUp';
import RequireAuth from './Page/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Dashboard/Dashboard';
import MyProfile from './Page/Dashboard/MyProfile';
import MyReview from './Page/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="purchase" element={
        <RequireAuth>
             <Purchase />
        </RequireAuth>}
         />
        <Route path="dashboard" element={
        <RequireAuth>
             <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
