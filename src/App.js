import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponent/Home/Home';
import JobDetails from './Pages/HomeComponent/JobFeatures/JobDetails';
import AuthProvider from '../src/contexts/AuthProvider';

function App() {
  return (

    // <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="jobDetails" element={<JobDetails></JobDetails>}></Route>
        </Route>
        <Route path="home" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
    // </AuthProvider>

  );
}

export default App;
