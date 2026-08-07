export type ProjectStatus = "Completed" | "In Progress";
export interface ProjectFeature {
  title: string;
  items: string[];
}
export interface Screenshot {
  src: string;
  title: string;
  description: string;
}
export interface Project {
  id: string;
  title: string;
  displayTitle: string;
  subtitle: string;
  period: string;
  type: string;
  role: string;
  status: ProjectStatus;
  description: string[];
  skills: string[];
  thumbnail: string;
  githubUrl: string;
  demoUrl: string;
  documentUrl: string;
  overview: string[];
  features: ProjectFeature[];
  responsibilities: string[];
  flow: string[];
  screenshots: Screenshot[];
  reflection: string;
  accent?: "green";
}

// 실제 URL이 준비되면 아래 빈 문자열만 교체하세요.
const LETS_PLAN_GITHUB_URL = "https://github.com/songwonseo/LetsPlan";
const LETS_PLAN_DEMO_URL = "https://www.youtube.com/watch?v=3f3y_ypdwAQ";
const LIFE_QUEST_GITHUB_URL = "";
const LIFE_QUEST_DEMO_URL = "";

export const projects: Project[] = [
  {
    id: "letsplan",
    title: "Let's Plan",
    displayTitle: "LET'S PLAN",
    subtitle: "일정과 게시물을 함께 관리하는 협업형 웹 서비스",
    period: "2026.06 - 2026.07",
    type: "Team Project",
    role: "마이페이지 화면 및 기능 구현",
    status: "Completed",
    description: [
      "사용자가 플랜과 게시물을 관리하고 친구와 일정을 공유할 수 있는 협업형 웹 서비스입니다.",
      "팀 프로젝트에서 회원 정보, 친구 및 차단 목록, 찜한 게시물, 알림, 플랜 관리 기능을 구현했습니다.",
    ],
    overview: [
      "사용자가 플랜과 게시물을 관리하고 친구와 일정을 공유할 수 있는 협업형 웹 서비스입니다.",
      "지역과 관심사를 기준으로 플래너즈를 탐색하고, 그룹 내에서 일정 조율, 채팅, 게시물 및 구성원을 관리할 수 있도록 구성했습니다.",
    ],
    skills: [
      "TypeScript",
      "HTML5",
      "CSS3",
      "Spring Boot",
      "REST API",
      "MySQL",
      "Git",
      "GitHub",
    ],
    thumbnail: "/images/projects/letsplan/thumbnail.png",
    githubUrl: LETS_PLAN_GITHUB_URL,
    demoUrl: LETS_PLAN_DEMO_URL,
    documentUrl: "/documents/letsplan-specification.pdf",
    features: [
      {
        title: "회원 정보 관리",
        items: ["회원 정보 조회·수정", "회원 탈퇴", "로그인 사용자 정보 확인"],
      },
      {
        title: "소셜 관리",
        items: [
          "친구 목록 조회 및 삭제",
          "친구 요청 수락 및 거절",
          "차단 목록 조회 및 해제",
        ],
      },
      {
        title: "콘텐츠 관리",
        items: ["찜한·작성한 게시물 관리", "가입한·생성한 플래너즈 관리"],
      },
      {
        title: "알림",
        items: ["알림 목록 조회", "읽음 처리", "알림 유형별 상세 화면 연결"],
      },
    ],
    responsibilities: [
      "Axios를 통한 REST API 호출",
      "응답 데이터의 React 상태 반영",
      "로그인 여부에 따른 접근 제어",
      "사용자 상태 기반 화면 구성",
    ],
    flow: [
      "React Component",
      "Axios Request",
      "Spring Boot Controller",
      "Service",
      "Repository / MyBatis",
      "MySQL",
      "DTO Response",
      "React State Update",
    ],
    screenshots: [
      {
        src: "/images/projects/letsplan/mypage-dashboard.png",
        title: "마이페이지 대시보드",
        description:
          "회원 정보와 활동 데이터를 한 화면에서 확인하도록 구성했습니다.",
      },
      {
        src: "/images/projects/letsplan/profile-edit.png",
        title: "프로필 수정",
        description: "회원 정보 조회와 수정 결과가 화면 상태에 반영됩니다.",
      },
      {
        src: "/images/projects/letsplan/social-dashboard.png",
        title: "소셜 대시보드",
        description: "친구, 차단, 요청 정보를 기능별로 구분했습니다.",
      },
      {
        src: "/images/projects/letsplan/friend-list.png",
        title: "친구 목록",
        description: "친구 관계를 조회하고 관리하는 화면입니다.",
      },
      {
        src: "/images/projects/letsplan/notification-list.png",
        title: "알림",
        description: "유형과 읽음 상태를 확인하고 상세 화면으로 이동합니다.",
      },
      {
        src: "/images/projects/letsplan/planners-management.png",
        title: "플래너즈 관리",
        description: "가입하고 생성한 플래너즈를 한곳에서 관리합니다.",
      },
    ],
    reflection:
      "화면에서 시작한 요청이 API와 데이터베이스를 지나 다시 상태로 반영되는 전체 흐름을 기준으로 기능을 점검했습니다.",
  },
  {
    id: "lifequest",
    title: "Life Quest",
    displayTitle: "LIFE QUEST",
    subtitle: "일상을 퀘스트로 바꾸는 라이프 RPG 서비스",
    period: "2026.08 - 2026.09",
    type: "Team Project",
    role: "서비스 기획 및 화면 설계",
    status: "In Progress",
    accent: "green",
    description: [
      "현실 속 활동을 퀘스트처럼 수행하고 EXP, 레벨, 업적과 도감을 수집하는 서비스입니다.",
      "매일 새로운 활동을 추천하고 게임처럼 수행하도록 구성한 것이 주요 차별점입니다.",
    ],
    overview: [
      "반복되는 일상에서 새로운 경험을 시작하기 어렵다는 문제에서 출발했습니다.",
      "단순 체크리스트 대신 새로운 활동을 추천하고 보상과 성장 경험으로 연결합니다.",
    ],
    skills: [
      "React",
      "Spring Boot",
      "REST API",
      "MySQL",
      "Flutter",
      "Git",
      "GitHub",
    ],
    thumbnail: "/images/projects/lifequest/thumbnail.png",
    githubUrl: LIFE_QUEST_GITHUB_URL,
    demoUrl: LIFE_QUEST_DEMO_URL,
    documentUrl: "",
    features: [
      {
        title: "퀘스트",
        items: ["오늘의 퀘스트", "일간·주간·월간 퀘스트", "GPS 기반 수행 인증"],
      },
      {
        title: "성장",
        items: ["EXP와 레벨", "업적과 도감 수집", "칭호와 배지"],
      },
      { title: "소셜", items: ["친구와 랭킹", "그룹 시스템", "알림"] },
      {
        title: "경험 설계",
        items: ["새로운 활동 추천", "수행 피드백", "보상 중심 흐름"],
      },
    ],
    responsibilities: [
      "핵심 기능 정의",
      "사용자 흐름 설계",
      "화면 스토리보드 제작",
      "기존 서비스와 차별점 정리",
    ],
    flow: [
      "활동 발견",
      "퀘스트 선택",
      "수행·인증",
      "EXP 획득",
      "레벨·업적 성장",
      "새 활동 탐색",
    ],
    screenshots: [
      {
        src: "/images/projects/lifequest/home.png",
        title: "홈",
        description: "추천 퀘스트와 성장 상태를 확인합니다.",
      },
      {
        src: "/images/projects/lifequest/quest-list.png",
        title: "퀘스트 목록",
        description: "기간과 유형에 따라 퀘스트를 탐색합니다.",
      },
      {
        src: "/images/projects/lifequest/quest-detail.png",
        title: "퀘스트 상세",
        description: "수행 조건과 보상을 확인합니다.",
      },
      {
        src: "/images/projects/lifequest/map.png",
        title: "지도 인증",
        description: "위치 기반 퀘스트 수행을 인증합니다.",
      },
      {
        src: "/images/projects/lifequest/collection.png",
        title: "도감",
        description: "완료한 경험과 수집 요소를 확인합니다.",
      },
      {
        src: "/images/projects/lifequest/ranking.png",
        title: "랭킹",
        description: "친구와 성장 기록을 비교합니다.",
      },
    ],
    reflection:
      "현재 진행 중인 프로젝트로, 완료된 범위와 계획된 범위를 구분해 기록하고 있습니다.",
  },
];
export const getProject = (id?: string) =>
  projects.find((project) => project.id === id);
