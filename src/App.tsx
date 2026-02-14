import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/pages/landing-page'
import { AIBuilder } from '@/pages/ai-builder'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/builder" element={<AIBuilder />} />
        </Routes>
    )
}

export default App
