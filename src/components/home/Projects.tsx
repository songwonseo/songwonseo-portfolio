import { ArrowUpRight, GitFork, Play } from "lucide-react";
import { SectionTitle } from "../common/SectionTitle";
import { ButtonLink } from "../common/ButtonLink";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { projects } from "../../data/projects";
export function Projects() {
  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <SectionTitle
          eyebrow="04 / SELECTED WORK"
          title="PROJECTS"
          description="화면 구현에 그치지 않고 요청, 응답, 데이터 저장까지 기능이 연결되는 과정을 확인하며 진행한 프로젝트입니다."
        />
        <div className="project-grid">
          {projects.map((p, index) => (
            <article
              className={`project-card project-card--${p.id} reveal`}
              key={p.id}
            >
              <div className="project-media">
                <ImageWithFallback
                  src={p.thumbnail}
                  alt={`${p.title} 대표 화면`}
                  label={p.title}
                />
                <span
                  className={`status status--${p.status.replace(" ", "-").toLowerCase()}`}
                >
                  {p.status}
                </span>
                <span className="project-index">0{index + 1}</span>
              </div>
              <div className="project-body">
                <p>
                  {p.type} · {p.period}
                </p>
                <h3>{p.title}</h3>
                <h4>{p.subtitle}</h4>
                <div className="project-meta">
                  <span>ROLE</span>
                  <strong>{p.role}</strong>
                </div>
                <div className="tags">
                  {p.skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <ButtonLink
                    to={`/projects/${p.id}`}
                    state={{ fromHome: true }}
                  >
                    상세보기 <ArrowUpRight />
                  </ButtonLink>
                  <ButtonLink
                    href={p.githubUrl}
                    external
                    disabled={!p.githubUrl}
                    variant="secondary"
                  >
                    <GitFork /> GitHub
                  </ButtonLink>
                  <ButtonLink
                    href={p.demoUrl}
                    external
                    disabled={!p.demoUrl}
                    variant="text"
                  >
                    <Play /> Demo
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
