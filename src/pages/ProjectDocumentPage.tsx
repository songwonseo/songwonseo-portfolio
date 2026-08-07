import { ArrowLeft, Download, ExternalLink, Home } from 'lucide-react'
import { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import { getAssetUrl } from '../utils/path'

export function ProjectDocumentPage() {
  const { projectId } = useParams()
  const project = getProject(projectId)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project || !project.documentUrl) return <Navigate to="/404" replace />

  const returnToProject = () => {
    const state = location.state as { fromProject?: boolean } | null
    if (state?.fromProject) navigate(-1)
    else navigate(`/projects/${project.id}`, { replace: true })
  }

  const docUrl = getAssetUrl(project.documentUrl)

  return (
    <main className="document-page">
      <section className="document-header">
        <div className="container">
          <p>PROJECT DOCUMENT</p>
          <h1>{project.title} 기술명세서</h1>
          <div className="document-actions">
            <button type="button" className="button button--secondary" onClick={returnToProject}>
              <ArrowLeft /> 프로젝트 상세로 돌아가기
            </button>
            <Link className="button button--secondary" to="/#projects">
              <Home /> 메인으로
            </Link>
            <a className="button button--secondary" href={docUrl} target="_blank" rel="noreferrer">
              <ExternalLink /> 새 탭에서 열기
            </a>
            <a className="button button--primary" href={docUrl} download>
              <Download /> PDF 다운로드
            </a>
          </div>
        </div>
      </section>
      <section className="document-viewer container" aria-label={`${project.title} 기술명세서 PDF`}>
        <object data={docUrl} type="application/pdf">
          <div className="document-fallback">
            <p>이 브라우저에서는 PDF 미리보기를 지원하지 않습니다.</p>
            <a className="button button--primary" href={docUrl} target="_blank" rel="noreferrer">
              PDF 직접 열기
            </a>
          </div>
        </object>
      </section>
    </main>
  )
}
