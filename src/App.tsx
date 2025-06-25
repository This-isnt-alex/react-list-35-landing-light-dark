import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';

function App() {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage isDark={isDark} setIsDark={setIsDark} />}
        />
        <Route
          path="/auth"
          element={<AuthPage isDark={isDark} setIsDark={setIsDark} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
