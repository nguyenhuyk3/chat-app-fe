import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import classNames from "classnames/bind";

import MessageDisplay from "./components/Layouts/MessageDisplay";
import Sidebar from "./components/Layouts/Sidebar";
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
