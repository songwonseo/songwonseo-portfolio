import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/common/Footer'
import { Header } from './components/common/Header'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectDocumentPage } from './pages/ProjectDocumentPage'
import { AppErrorBoundary } from './components/common/AppErrorBoundary'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId/document" element={<ProjectDocumentPage />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </AppErrorBoundary>
    </BrowserRouter>
  )
}
