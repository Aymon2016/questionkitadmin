
import './app.css'
import Layout from "./page/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import QuestionPage from "./page/adminpage/createquestion";
import Register from './page/registerpage/register';
import Login from './page/registerpage/login';
import Dashboard from './page/dashboard/dashboard';
import User from './page/userpage/user';
import Blog from './page/Blogpage/blog';
function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/users" element={<User />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
