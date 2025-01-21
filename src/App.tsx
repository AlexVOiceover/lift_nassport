import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SentenceBuilderPage from './pages/employees/SentenceBuilder';
import EmployerDashboardPage from './pages/employers/EmployersDashboard';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router basename='/LIFT-frontend'>
      <div className='App'>
        <Routes>
          {/* Entry point */}
          <Route path='/' element={<HomePage />} />
          {/* Define routes for employees and employers */}
          <Route path='/employees' element={<SentenceBuilderPage />} />
          <Route path='/employers' element={<EmployerDashboardPage />} />

          {/* Redirect to the employee page by default */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
