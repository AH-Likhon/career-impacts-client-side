import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import JobDetails from './Pages/HomeComponent/JobFeatures/JobDetails';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PostJob from './Pages/PostJob/PostJob';
import UpdateJob from './Pages/UpdateJob/UpdateJob';
import Dashboard from './Pages/HomeComponent/Dashboard/Dashboard';
import Jobs from './Pages/Jobs/Jobs';
import Resume from './Pages/Resume/Resume';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import About from './Pages/About/About';
import RegisterCompany from './Pages/HomeComponent/RegisterCompany/RegisterCompany';

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobDetails" element={<JobDetails />} />

          <Route path="/postJob" element={<PrivateRoute>
            <PostJob />
          </PrivateRoute>} />

          <Route path="/updateJob" element={<AdminRoute>
            <UpdateJob />
          </AdminRoute>} />

          <Route path="/updating/:id" element={<AdminRoute>
            <UpdateJob />
          </AdminRoute>} />

          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />

          <Route path="jobs" element={<Jobs />}></Route>

          <Route path="jobDetails/:id" element={<PrivateRoute>
            <JobDetails />
          </PrivateRoute>} />

          <Route path="/resumes" element={<Resume />} />


          <Route path="/team" element={<About />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
