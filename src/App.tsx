import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/pages/landing-page'
import { AIBuilder } from '@/pages/ai-builder'
import { SignIn1 } from '@/components/ui/modern-stunning-sign-in'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/builder" element={<AIBuilder />} />
            <Route path="/signin" element={<SignIn1 />} />
        </Routes>
    )
}

export default App
