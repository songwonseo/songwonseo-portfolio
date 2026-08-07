import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props { children: ReactNode }
interface State { error: Error | null }

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error', error, info)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <main className="runtime-error" role="alert">
        <p>화면을 불러오는 중 오류가 발생했습니다.</p>
        <h1>{this.state.error.message}</h1>
        <button type="button" className="button button--primary" onClick={() => window.location.assign('/')}>
          메인으로 돌아가기
        </button>
      </main>
    )
  }
}
