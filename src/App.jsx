
import './app.css'
import Layout from "./page/Layout"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import QuestionPage from "./page/adminpage/createquestion";
function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
