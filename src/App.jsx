import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BasicSciences from './pages/BasicSciences';
import QuestionBank from './pages/QuestionBank';
import ClinicalCourses from './pages/ClinicalCourses';
import CaseStudy from './pages/CaseStudy';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic-sciences" element={<BasicSciences />} />
          <Route path="/basic-sciences/:subjectId" element={<QuestionBank />} />
          <Route path="/clinical" element={<ClinicalCourses />} />
          <Route path="/clinical/:caseId" element={<CaseStudy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
