
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import AdminPageNav from './components/admin-components/AdminPageNav';
import UserDashboard from './components/UserDashboard';
import AddBooks from './components/admin-components/AddBooks';
import AdminDashboard from './components/admin-components/AdminDashboard';
import UpdateBooks from './components/admin-components/UpdateBooks';
import DeleteBooks from './components/admin-components/DeleteBooks';

function App() {
  return (
    <Router>
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/AdminDashboard" element={<AdminPageNav/>}>
            <Route index element={<AdminDashboard />} />
            <Route path="addbooks" element={<AddBooks />} />
            <Route path="deletebooks" element={<DeleteBooks />} />
            <Route path="updatebooks" element={<UpdateBooks />} />
          </Route>          
          <Route path="/UserDashboard" element={<UserDashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
