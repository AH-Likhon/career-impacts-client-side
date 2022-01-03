import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import JobDetails from './Pages/HomeComponent/JobFeatures/JobDetails';
import Jobs from './Pages/Jobs/Jobs';
import Resume from './Pages/Resume/Resume';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home></Home>}>
       </Route>
       <Route path="home" element={<Home></Home>}></Route>
       <Route path="jobs" element={<Jobs></Jobs>}></Route>
       <Route path="jobDetails" element={<JobDetails></JobDetails>}></Route> 
       <Route path="resumes" element={<Resume></Resume>}></Route> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
