import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import JobDetails from './Pages/HomeComponent/JobFeatures/JobDetails';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PostJob from './Pages/PostJob/PostJob';
import UpdateJob from './Pages/UpdateJob/UpdateJob';

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobDetails" element={<JobDetails />} />
          <Route path="postJob" element={<PostJob />} />
          <Route path="updateJob" element={<UpdateJob />} />

          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
