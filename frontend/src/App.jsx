import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import ReadUser from './pages/ReadUser';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />
        {/* add user page */}
        <Route path="/create" element={<AddUser />} />
        {/* update user page */}
        <Route path="/update/:id" element={<EditUser />} />
        {/* read user page */}
        <Route path="/read/:id" element={<ReadUser />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;