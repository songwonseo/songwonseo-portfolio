import { ArrowLeft, ArrowRight, FileText, GitFork, Play } from 'lucide-react'
import { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ButtonLink } from '../components/common/ButtonLink'
import { ImageWithFallback } from '../components/common/ImageWithFallback'
import { getProject, projects } from '../data/projects'

export function ProjectPage(){
  const {projectId}=useParams(); const project=getProject(projectId)
  const location=useLocation(); const navigate=useNavigate()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[projectId])
  if(!project) return <Navigate to="/404" replace />
  const index=projects.findIndex((p)=>p.id===project.id); const next=projects[(index+1)%projects.length]
  const returnToProjects=()=>{
    const state=location.state as {fromHome?:boolean}|null
    if(state?.fromHome) navigate(-1)
    else navigate('/#projects')
  }
  return <main className={`project-page${project.accent?' lifequest-theme':''}`}>
    <section className="project-hero"><div className="container"><button className="back-link" type="button" onClick={returnToProjects}><ArrowLeft/> 프로젝트 목록</button><div className="project-hero-grid"><div><span className="project-eyebrow">CASE STUDY · 0{index+1}</span><h1>{project.displayTitle}</h1><p>{project.subtitle}</p><span className={`status status--${project.status.replace(' ','-').toLowerCase()}`}>{project.status}</span></div><ImageWithFallback src={project.thumbnail} alt={`${project.title} 프로젝트 대표 이미지`} label={project.title}/></div></div></section>
    <section className="case-section overview-section"><div className="container"><div className="case-intro"><div><span className="case-label">OVERVIEW</span><h2>프로젝트 개요</h2></div><div className="overview-copy">{project.overview.map((p)=><p key={p}>{p}</p>)}</div></div><dl className="project-facts"><div><dt>Period</dt><dd>{project.period}</dd></div><div><dt>Type</dt><dd>{project.type}</dd></div><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div></dl></div></section>
    <section className="case-section project-introduction"><div className="container split-section"><div><span className="case-label">INTRODUCTION</span><h2>프로젝트 소개</h2></div><div className="introduction-copy">{project.description.map((p)=><p key={p}>{p}</p>)}</div></div></section>
    <section className="case-section tech-section"><div className="container"><div className="case-heading"><span className="case-label">TECH STACK</span><h2>기술 스택</h2></div><ul className="tech-list">{project.skills.map((skill)=><li key={skill}>{skill}</li>)}</ul></div></section>
    <section className="case-section case-section--dark"><div className="container"><div className="case-heading"><span className="case-label">FEATURES</span><h2>주요 기능</h2></div><div className="feature-grid">{project.features.map((f,index)=><article key={f.title}><span>0{index+1}</span><h3>{f.title}</h3><p>{f.description}</p></article>)}</div></div></section>
    <section className="case-section"><div className="container split-section"><div><span className="case-label">MY ROLE</span><h2>담당 영역</h2></div><ul className="role-list">{project.responsibilities.map((x,index)=><li key={x}><span>0{index+1}</span>{x}</li>)}</ul></div></section>
    <section className="case-section flow-section"><div className="container"><div className="case-heading"><span className="case-label">PROCESS</span><h2>구현 흐름</h2></div><div className="flow">{project.flow.map((x,index)=><div key={x.title}><span>{String(index+1).padStart(2,'0')}</span><strong>{x.title}</strong><p>{x.description}</p>{index<project.flow.length-1&&<ArrowRight aria-hidden="true"/>}</div>)}</div>{project.adminFlow&&<div className="admin-flow"><h3>관리자 흐름</h3><div className="flow">{project.adminFlow.map((x,index)=><div key={x.title}><span>{String(index+1).padStart(2,'0')}</span><strong>{x.title}</strong><p>{x.description}</p>{index<project.adminFlow!.length-1&&<ArrowRight aria-hidden="true"/>}</div>)}</div></div>}</div></section>
    <section className="case-section"><div className="container"><div className="case-heading"><span className="case-label">SCREENS</span><h2>주요 화면</h2></div><div className={`gallery${project.id==='lifequest'?' gallery--mockups':''}`}>{project.screenshots.map((s)=><figure key={s.title}>{s.src?<ImageWithFallback src={s.src} alt={`${project.title} ${s.title} 화면`} label={`${project.title} · ${s.title}`}/>:<div className="phone-mockup" role="img" aria-label={`${s.title} 앱 목업 이미지 준비 중`}><div className="phone-speaker"/><span>COMING SOON</span><strong>APP MOCKUP</strong><small>이미지 준비 중</small></div>}<figcaption><strong>{s.title}</strong><p>{s.description}</p></figcaption></figure>)}</div></div></section>
    <section className="case-section troubleshooting"><div className="container"><div className="case-heading"><span className="case-label">TROUBLESHOOTING</span><h2>문제 해결 기록</h2></div><div className="trouble-grid">{project.troubles.map((item)=><article key={item.title}><h3>{item.title}</h3>{([['문제',item.problem],['원인',item.cause],['해결',item.solution],['결과',item.result]] as const).map(([label,content])=><div key={label}><strong>{label}</strong><p>{content}</p></div>)}</article>)}</div></div></section>
    <section className="case-section reflection"><div className="container"><span className="case-label">RETROSPECTIVE</span><h2>배운 점</h2><p>{project.reflection}</p><div className="project-links"><h3>프로젝트 링크</h3><div className="button-row"><ButtonLink href={project.githubUrl} external disabled={!project.githubUrl}><GitFork/> GitHub</ButtonLink><ButtonLink href={project.demoUrl} external disabled={!project.demoUrl} variant="secondary"><Play/> 시연 영상</ButtonLink><ButtonLink to={`/projects/${project.id}/document`} state={{fromProject:true}} disabled={!project.documentUrl} variant="text"><FileText/> 프로젝트 문서</ButtonLink></div></div></div></section>
    <Link className="next-project" to={`/projects/${next.id}`}><span>NEXT PROJECT</span><strong>{next.title}</strong><ArrowRight/></Link>
  </main>
}
