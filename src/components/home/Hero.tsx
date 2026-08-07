import { ArrowDown, GitFork, FileText, Presentation } from "lucide-react";
import { ButtonLink } from "../common/ButtonLink";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { profile } from "../../data/profile";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="hero-kicker">
            {profile.role}
            <span>BUSAN · KOREA</span>
          </p>
          <h1>
            <span>{profile.englishName}</span>
            {profile.headline}
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="button-row">
            <ButtonLink href="#projects">
              프로젝트 보기 <ArrowDown />
            </ButtonLink>
            <ButtonLink href={profile.github} external variant="secondary">
              GitHub <GitFork />
            </ButtonLink>
            <ButtonLink href={profile.resume} external variant="text">
              이력서 <FileText />
            </ButtonLink>
            <ButtonLink href={profile.portfolioPdf} external variant="text">
              포트폴리오 PDF <Presentation />
            </ButtonLink>
          </div>
        </div>
        <div className="hero-visual">
          <ImageWithFallback
            src="/images/projects/profile/profile-character.png"
            alt="송원서 프로필 캐릭터"
            label="SONG WON SEO"
          />
        </div>
      </div>
      <div className="hero-stack container">
        {profile.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
