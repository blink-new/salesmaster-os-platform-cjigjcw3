import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import ModuleBuilder from './pages/ModuleBuilder'
import ProgressTracking from './pages/ProgressTracking'
import AIRoleplay from './pages/AIRoleplay'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/modules" element={<ModuleBuilder />} />
            <Route path="/progress" element={<ProgressTracking />} />
            <Route path="/roleplay" element={<AIRoleplay />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App