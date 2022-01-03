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

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobDetails" element={<JobDetails />} />
          <Route path="/postJob" element={<PostJob />} />
          <Route path="/updateJob" element={<UpdateJob />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<Jobs></Jobs>}></Route>
          <Route path="jobDetails" element={<JobDetails />} />
          <Route path="resumes" element={<Resume />} />
          <Route path="/updating/:id" element={<UpdateJob />} />

          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
