export type ProjectStatus = "Completed" | "In Progress";
export interface ProjectFeature {
  title: string;
  description: string;
}
export interface FlowStep {
  title: string;
  description: string;
}
export interface TroubleCase {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  result: string;
}
export interface Screenshot {
  src: string;
  title: string;
  description: string;
  type?: "mobile" | "desktop";
  cropLeft?: boolean;
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
  flow: FlowStep[];
  adminFlow?: FlowStep[];
  screenshots: Screenshot[];
  troubles: TroubleCase[];
  reflection: string;
  accent?: "green";
  keywords?: string[];
}

// 실제 URL이 준비되면 아래 빈 문자열만 교체하세요.
const LETS_PLAN_GITHUB_URL = "https://github.com/songwonseo/LetsPlan";
const LETS_PLAN_DEMO_URL = "https://www.youtube.com/watch?v=3f3y_ypdwAQ";

export const projects: Project[] = [
  {
    id: "letsplan",
    title: "Let's Plan",
    displayTitle: "LET'S PLAN",
    subtitle: "실시간 그룹 일정 조율 및 협업 플랫폼",
    period: "2026.06 - 2026.07",
    type: "Team Project",
    role: "마이페이지 및 소셜 기능 구현",
    status: "Completed",
    description: [
      "혼자 일정을 기록하는 서비스를 넘어, 같은 지역과 관심사를 가진 사용자들이 함께 계획하고 활동할 수 있는 커뮤니티형 일정 관리 서비스입니다.",
      "플래너즈 탐색과 가입부터 실시간 대화, 일정 조율, 공유까지 하나의 흐름으로 연결했으며, 채팅과 시각적인 시간표 편집을 결합해 대화에서 나온 의견을 곧바로 공동 일정에 반영할 수 있도록 구현했습니다.",
      "이를 통해 함께 계획할 때의 조율 부담은 줄이고, 취미와 활동을 함께 즐기는 경험을 강화했습니다.",
    ],
    overview: [
      "Let's Plan은 여러 사용자가 플래너즈라는 그룹 안에서 계획을 만들고 조율하는 일정 기반 커뮤니티 서비스입니다.",
      "지역·취미·계획 조건으로 관심 있는 플래너즈를 탐색하고 가입한 뒤, 구성원들과 실시간으로 대화하며 일정을 함께 편집할 수 있습니다.",
      "일정 생성부터 조율과 확정, 구성원 공유까지 이어지는 협업형 일정 관리 흐름을 한곳에 담았습니다.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Thymeleaf",
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
        title: "맞춤형 플래너즈 탐색",
        description:
          "지역, 취미와 키워드를 함께 적용하고 인기순·최신순·이름순으로 플래너즈를 탐색합니다.",
      },
      {
        title: "플래너즈 생성과 가입",
        description:
          "배너·썸네일, 참여 인원과 공개 범위를 설정해 그룹을 만들고 운영자 승인으로 가입합니다.",
      },
      {
        title: "실시간 일정 조율",
        description:
          "채팅과 드래그 앤 드롭 시간표를 함께 제공해 구성원이 대화하며 계획을 바로 수정합니다.",
      },
      {
        title: "활동 기록과 커뮤니티",
        description:
          "방명록과 리뷰, 일정 참가·마감 기능으로 계획 이후의 활동과 평가까지 기록합니다.",
      },
    ],
    responsibilities: [
      "계정 정보 조회 및 수정",
      "가입·초대·생성·찜 플래너즈 관리",
      "친구 검색, 목록, 요청 수락·거절 및 삭제",
      "활동·일정·그룹 알림 목록과 삭제",
      "공통 헤더의 읽지 않은 알림 개수 및 유형별 알림창",
    ],
    flow: [
      { title: "로그인", description: "사용자 계정으로 서비스에 접속합니다." },
      {
        title: "플래너즈 탐색",
        description: "지역·취미·키워드와 정렬 조건으로 그룹을 찾습니다.",
      },
      {
        title: "가입 신청",
        description: "관심 플래너즈에 가입을 신청하고 승인 결과를 확인합니다.",
      },
      {
        title: "일정 선택",
        description: "그룹의 일정 목록에서 조정 중인 일정을 선택합니다.",
      },
      {
        title: "채팅·시간표 편집",
        description: "실시간 대화와 드래그 앤 드롭으로 일정을 함께 조율합니다.",
      },
      {
        title: "일정 확정",
        description:
          "생성자 또는 관리자가 현재 시간표를 등록하고 구성원에게 공유합니다.",
      },
      {
        title: "참가·리뷰",
        description: "일정에 참가하고 활동 후 리뷰와 방명록을 남깁니다.",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/letsplan/spec-main.png",
        title: "메인 화면",
        description:
          "인기 플래너즈와 지역·카테고리 기반 추천 목록을 제공합니다.",
      },
      {
        src: "/images/projects/letsplan/spec-search.png",
        title: "플래너즈 탐색",
        description: "이름·취미·키워드 검색과 정렬, 찜 기능을 함께 사용합니다.",
        cropLeft: true,
      },
      {
        src: "/images/projects/letsplan/spec-create.png",
        title: "플래너즈 생성",
        description: "이미지, 인원 제한과 공개 여부를 설정해 그룹을 만듭니다.",
      },
      {
        src: "/images/projects/letsplan/spec-detail.png",
        title: "플래너즈 상세",
        description:
          "그룹 정보와 운영자·플래너 정보를 확인하고 친구를 추가합니다.",
      },
      {
        src: "/images/projects/letsplan/spec-schedule-list.png",
        title: "일정 목록",
        description:
          "일정 상태와 참여 여부로 필터링하고 조정할 일정을 선택합니다.",
      },
      {
        src: "/images/projects/letsplan/spec-live-schedule.png",
        title: "실시간 일정 편집",
        description:
          "채팅과 시간표에서 활동 블록을 조율하고 일정을 확정합니다.",
      },
      {
        src: "/images/projects/letsplan/spec-review.png",
        title: "리뷰",
        description: "활동 후 평점과 후기를 남겨 플래너즈 경험을 공유합니다.",
      },
    ],
    troubles: [
      {
        title: "친구 요청 상태별 화면 구성",
        problem:
          "친구 목록, 받은 요청과 검색 결과에서 같은 사용자의 버튼 상태가 서로 다르게 보여야 했습니다.",
        cause:
          "친구 여부와 요청 상태를 화면별로 따로 판단하면 관계 정보가 일관되지 않을 수 있었습니다.",
        solution:
          "서버가 전달한 관계 상태를 기준으로 목록·요청·검색 화면의 표시 규칙과 가능한 동작을 구분했습니다.",
        result:
          "친구 추가, 요청 수락·거절과 삭제가 현재 관계에 맞게 노출되어 소셜 관리 흐름이 명확해졌습니다.",
      },
      {
        title: "알림 목록과 헤더 상태 동기화",
        problem:
          "마이페이지에서 알림을 삭제한 뒤 헤더의 알림 개수와 목록이 즉시 맞지 않을 수 있었습니다.",
        cause:
          "전체 알림 목록과 유형별 헤더 알림창이 서로 다른 화면 영역에서 같은 데이터를 사용했습니다.",
        solution:
          "삭제 요청이 완료되면 목록과 읽지 않은 개수를 함께 다시 반영하도록 갱신 흐름을 정리했습니다.",
        result:
          "활동·일정·그룹 알림의 표시와 개수가 같은 상태를 유지하도록 개선했습니다.",
      },
      {
        title: "사용자별 플래너즈 목록 분리",
        problem:
          "가입, 초대, 생성과 찜 플래너즈가 한 화면에 섞이면 사용자가 현재 관계를 구분하기 어려웠습니다.",
        cause:
          "같은 플래너즈 데이터라도 사용자와의 관계에 따라 가능한 행동이 달랐습니다.",
        solution:
          "관계 유형별 목록을 분리하고 각 영역에서 필요한 정보와 동작만 보여주도록 구성했습니다.",
        result:
          "사용자가 참여 상태를 빠르게 파악하고 필요한 플래너즈 관리 기능으로 이동할 수 있게 됐습니다.",
      },
    ],
    reflection:
      "마이페이지와 소셜 기능을 구현하며 한 사용자의 계정, 플래너즈, 친구와 알림 데이터가 서로 연결된다는 점을 배웠습니다. 화면 하나를 완성하는 데서 끝나지 않고, 요청이 서버와 데이터베이스를 거쳐 돌아온 뒤 여러 화면의 상태가 함께 맞아야 자연스러운 서비스가 된다는 것을 이해했습니다. 팀원들과 API 응답 구조와 화면 표시 기준을 맞추면서 기능 사이의 연결을 먼저 생각하는 습관도 익혔습니다.",
  },
  {
    id: "lifequest",
    title: "Life Quest",
    displayTitle: "LIFE QUEST",
    subtitle: "일상을 퀘스트로 바꾸는 라이프 RPG 서비스",
    period: "2026.08 - 2026.09",
    type: "Team Project",
    role: "친구 화면 및 랭킹 시스템, 알림 기능, 관리자 화면 구현",
    status: "In Progress",
    accent: "green",
    description: [
      "LifeQuest는 일상 속 활동을 게임의 퀘스트처럼 수행하고 기록하며 성장하는 라이프 RPG 서비스입니다.",
      "일간·주간 및 지역 기반 퀘스트를 수행해 EXP를 얻고, 레벨·업적·도감·칭호를 수집합니다. 친구와 EXP 랭킹에서는 서로의 활동 기록을 비교하며 함께 성장할 수 있습니다.",
      "퀘스트 수행 → 인증 → 경험치 획득 → 성장 기록 → 사용자 간 경쟁과 교류가 하나의 흐름으로 이어지도록 설계했습니다. React 관리자 웹에서는 퀘스트 등록·수정, 사용자 관리와 서비스 데이터를 통합 확인합니다.",
    ],
    keywords: [
      "Quest",
      "EXP & Level",
      "Achievement",
      "Location",
      "Ranking",
      "Social",
    ],
    overview: [
      "LifeQuest는 일상 속 새로운 활동을 퀘스트처럼 발견하고 직접 도전하는 라이프 RPG 서비스입니다.",
      "퀘스트를 완료하면 EXP를 획득하고 레벨, 업적, 도감과 칭호에 활동 기록이 쌓이면서 캐릭터와 계정이 함께 성장합니다.",
      "Flutter Mobile App + React Admin Web + Spring Boot Backend 구조로 구성해 사용자 경험과 운영 데이터 관리 흐름을 함께 구현했습니다.",
    ],
    skills: [
      "Flutter",
      "React",
      "Spring Boot",
      "Java",
      "REST API",
      "MySQL",
      "Git",
      "GitHub",
    ],
    thumbnail: "/images/projects/lifequest/thumbnail.png",
    githubUrl: "https://github.com/mahoora0/LifeQuest",
    demoUrl: "https://youtu.be/hYjeqslQNTQ",
    documentUrl: "/documents/lifequest-specification.pdf",
    features: [
      {
        title: "퀘스트",
        description:
          "오늘의 퀘스트와 기간별 퀘스트를 탐색하고 GPS 등 조건을 인증해 완료합니다.",
      },
      {
        title: "성장",
        description:
          "퀘스트 보상 EXP를 레벨, 업적, 도감, 칭호와 배지의 성장 기록으로 연결합니다.",
      },
      {
        title: "소셜",
        description:
          "친구 프로필과 성장 정보를 비교하고 그룹 퀘스트와 랭킹에 참여합니다.",
      },
      {
        title: "경험 설계",
        description:
          "새로운 활동의 발견부터 수행·인증·보상까지 게임처럼 이어지는 경험을 제공합니다.",
      },
    ],
    responsibilities: [
      "친구 검색·추가·삭제와 친구 목록",
      "친구 프로필 조회 및 성장 정보 비교",
      "사용자 EXP 기반 랭킹과 순위·성장 정보 표시",
      "친구 및 서비스 이벤트 알림 목록과 상태 관리",
      "관리자 웹의 퀘스트 등록·수정 및 서비스 데이터 확인",
    ],
    flow: [
      { title: "로그인", description: "사용자 계정으로 앱에 접속합니다." },
      {
        title: "퀘스트 발견",
        description: "오늘의 퀘스트와 기간·유형별 목록을 확인합니다.",
      },
      {
        title: "도전",
        description: "상세 조건과 보상을 확인한 뒤 퀘스트를 시작합니다.",
      },
      {
        title: "수행 인증",
        description: "GPS 또는 퀘스트 조건에 맞춰 활동을 인증합니다.",
      },
      {
        title: "완료·EXP 획득",
        description: "완료 결과와 보상 EXP를 사용자 데이터에 반영합니다.",
      },
      {
        title: "성장 기록",
        description: "레벨, 업적, 도감과 칭호에 진행 결과를 누적합니다.",
      },
      {
        title: "친구·랭킹 비교",
        description: "친구 프로필과 랭킹에서 서로의 성장 정보를 비교합니다.",
      },
    ],
    adminFlow: [
      {
        title: "관리자 로그인",
        description: "관리자 권한으로 웹 화면에 접속합니다.",
      },
      {
        title: "퀘스트 관리",
        description: "퀘스트 정보와 수행 조건을 등록하거나 수정합니다.",
      },
      {
        title: "백엔드 저장",
        description: "Spring Boot API를 통해 MySQL에 변경 사항을 저장합니다.",
      },
      {
        title: "앱 반영",
        description:
          "Flutter 앱의 퀘스트 조회 결과에 최신 데이터를 표시합니다.",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/lifequest/spec-main.png",
        title: "메인 화면",
        description:
          "오늘의 퀘스트와 사용자 성장 정보를 한눈에 확인하는 메인 화면입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-quests.png",
        title: "퀘스트 화면",
        description: "다양한 일상 퀘스트를 탐색하고 도전할 수 있는 화면입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-recommend.png",
        title: "추천 퀘스트 화면",
        description:
          "사용자 관심사와 위치 기반으로 추천 퀘스트를 확인하는 화면입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-group.png",
        title: "그룹 퀘스트 화면",
        description:
          "다른 사용자와 함께 목표에 도전하는 협동 퀘스트 화면입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-dogam.png",
        title: "도감 화면",
        description:
          "사용자가 완료한 퀘스트와 획득한 업적을 기록하는 도감 화면입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-achievements.png",
        title: "업적 / 칭호 화면",
        description:
          "사용자가 달성한 업적과 획득한 칭호를 확인하는 화면입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-friends.png",
        title: "친구 화면",
        description:
          "친구의 프로필과 성장 정보를 확인하고 비교하는 소셜 화면입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-mypage.png",
        title: "마이페이지",
        description:
          "프로필, 성장 기록, 도감과 계정 정보를 관리하는 개인 공간입니다.",
      },
      {
        src: "/images/projects/lifequest/spec-admin.png",
        title: "Admin Web",
        description:
          "React 기반 관리자 웹에서 퀘스트 등록·수정, 사용자 관리와 서비스 데이터를 통합 확인합니다.",
        type: "desktop",
      },
    ],
    troubles: [
      {
        title: "친구 관계 상태 처리",
        problem:
          "검색, 요청, 수락과 삭제 단계마다 사용자 관계와 화면에서 가능한 동작이 달라졌습니다.",
        cause:
          "두 사용자 사이의 관계가 단순 친구 여부가 아니라 요청 진행 상태까지 포함했기 때문입니다.",
        solution:
          "관계 상태별 표시와 동작을 구분하고 변경이 완료되면 친구 목록과 프로필 정보를 다시 반영했습니다.",
        result:
          "각 화면에서 현재 관계에 맞는 버튼과 정보가 일관되게 표시되도록 만들었습니다.",
      },
      {
        title: "EXP 기반 랭킹 표시",
        problem:
          "여러 사용자의 EXP를 비교하면서 순위와 성장 정보를 안정적으로 함께 보여줘야 했습니다.",
        cause:
          "EXP 값의 정렬 결과와 화면에 표시하는 순위 번호가 동일한 기준을 사용해야 했습니다.",
        solution:
          "서버에서 전달된 EXP 순서를 기준으로 랭킹 항목을 구성하고 사용자 성장 정보를 같은 단위로 표시했습니다.",
        result:
          "친구와 사용자들의 성장 차이를 한 화면에서 빠르게 비교할 수 있게 됐습니다.",
      },
      {
        title: "관리자 웹과 앱 데이터 연결",
        problem:
          "관리자 웹에서 변경한 퀘스트가 사용자 앱의 목록과 상세 화면에 동일하게 반영되어야 했습니다.",
        cause:
          "서로 다른 화면이지만 하나의 백엔드 데이터와 API 규칙을 공유해야 했습니다.",
        solution:
          "관리자 등록·수정 요청을 Spring Boot API와 MySQL 저장 흐름에 연결하고 앱 조회 데이터 구조를 맞췄습니다.",
        result:
          "관리자가 관리한 퀘스트를 Flutter 앱에서 같은 정보로 조회할 수 있는 흐름을 구성했습니다.",
      },
    ],
    reflection:
      "Flutter 앱과 Spring Boot 서버, 관리자 웹이 하나의 데이터를 공유하도록 연결하면서 화면마다 필요한 정보가 달라도 API 기준은 일관되어야 한다는 점을 배웠습니다. 친구 관계처럼 사용자 사이에서 계속 변하는 상태와 EXP 랭킹처럼 여러 데이터를 비교하는 기능을 구현하며, 데이터 구조를 먼저 정리해야 UI도 안정적으로 바뀐다는 것을 이해했습니다. 팀원들의 기능을 합칠 때는 각 화면만 보는 것이 아니라 사용자가 퀘스트를 발견하고 성장 결과를 확인하는 전체 흐름을 함께 점검했습니다.",
  },
  {
    id: "mywatchlog",
    title: "My Watch Log",
    displayTitle: "MY WATCH LOG",
    subtitle: "영화·드라마 감상 기록 아카이브",
    period: "2026.08",
    type: "Personal Project",
    role: "기획, 디자인, 프론트엔드·백엔드 전체 구현",
    status: "Completed",
    description: [
      "My Watch Log는 영화와 드라마를 보고 난 뒤 흩어지기 쉬운 감상과 평점을 한곳에 기록하는 개인 아카이브 서비스입니다.",
      "영화, 드라마, 애니, 웹툰 등 작품 유형별로 기록을 분류하고 감상 상태와 최근 등록순 등의 조건으로 원하는 작품을 빠르게 찾아볼 수 있도록 구성했습니다.",
      "반응형 React 화면과 Spring Boot REST API, MySQL 데이터베이스를 연결해 작품 등록부터 조회, 수정, 삭제까지 하나의 기록 흐름으로 구현했습니다.",
    ],
    keywords: ["Watch Log", "Archive", "Review", "Rating", "Responsive"],
    overview: [
      "My Watch Log는 감상한 영화와 드라마를 기록하고 정리하며 나만의 작품 아카이브를 만들어가는 개인 기록 서비스입니다.",
      "작품별 감상 상태, 별점과 감상 내용을 저장하고 카테고리·상태·정렬 조건을 조합해 누적된 기록을 편리하게 탐색할 수 있습니다.",
      "기획과 UI 디자인부터 React 프론트엔드, Spring Boot 백엔드와 MySQL 데이터 저장까지 서비스 전 과정을 직접 설계하고 구현했습니다.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "REST API",
      "MySQL",
      "Git",
      "GitHub",
    ],
    thumbnail: "/images/projects/mywatchlog/thumbnail.png",
    githubUrl: "https://github.com/songwonseo/MyWatchLog",
    demoUrl: "https://youtu.be/hPqc9up2AV0",
    documentUrl: "/documents/mywatchlog-specification.pdf",
    features: [
      {
        title: "작품 기록 관리",
        description:
          "작품 정보와 감상 상태, 별점, 감상 내용을 등록하고 수정·삭제하며 개인 기록을 누적합니다.",
      },
      {
        title: "카테고리별 아카이브",
        description:
          "영화·드라마·애니·웹툰으로 작품을 분류하고 각 카테고리의 기록 수와 목록을 한눈에 확인합니다.",
      },
      {
        title: "검색·필터·정렬",
        description:
          "작품명 검색과 감상 상태 필터, 최근 등록순 정렬을 조합해 원하는 기록을 빠르게 찾습니다.",
      },
      {
        title: "반응형 기록 경험",
        description:
          "데스크톱과 모바일 환경에 맞춰 카드와 탐색 UI가 자연스럽게 재배치되도록 구현했습니다.",
      },
    ],
    responsibilities: [
      "서비스 콘셉트와 사용자 기록 흐름 기획",
      "데스크톱·모바일 반응형 UI 디자인 및 React 구현",
      "작품 등록·조회·수정·삭제 REST API 구현",
      "카테고리·감상 상태·별점 기반 데이터 모델 설계",
      "Spring Boot와 MySQL을 연결한 전체 데이터 흐름 구현",
    ],
    flow: [
      {
        title: "로그인",
        description:
          "개인 계정으로 서비스에 접속해 나만의 감상 기록을 관리합니다.",
      },
      {
        title: "작품 등록",
        description:
          "작품 유형과 기본 정보, 감상 상태를 입력해 새 기록을 만듭니다.",
      },
      {
        title: "감상 기록",
        description:
          "별점과 감상 내용을 더해 작품에 대한 개인 경험을 남깁니다.",
      },
      {
        title: "아카이브 조회",
        description:
          "카테고리별 기록 수와 최근 등록한 작품을 홈에서 확인합니다.",
      },
      {
        title: "탐색",
        description:
          "검색·상태 필터·정렬을 이용해 누적된 작품 기록을 찾습니다.",
      },
      {
        title: "기록 관리",
        description:
          "작품 상세에서 기록을 다시 확인하고 수정하거나 삭제합니다.",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/mywatchlog/spec-main.png",
        title: "홈 대시보드",
        description:
          "전체·유형별 기록 수와 최근 추가한 작품을 한 화면에서 확인하는 데스크톱 홈입니다.",
        type: "desktop",
      },
      {
        src: "/images/projects/mywatchlog/spec-mylog.png",
        title: "내 기록",
        description:
          "카테고리별 기록 수와 최근 등록한 작품을 확인하고 검색·필터·정렬로 원하는 기록을 찾는 데스크톱 기록 화면입니다.",
        type: "desktop",
      },
      {
        src: "/images/projects/mywatchlog/spec-register.png",
        title: "작품 등록",
        description:
          "작품 유형과 기본 정보, 감상 상태를 입력해 새 기록을 등록하는 데스크톱 등록 화면입니다.",
        type: "desktop",
      },
      {
        src: "/images/projects/mywatchlog/spec-mypage.png",
        title: "마이페이지",
        description:
          "개인 계정 정보와 기록 통계를 확인하고 비밀번호를 변경하는 데스크톱 마이페이지입니다.",
        type: "desktop",
      },
      {
        src: "/images/projects/mywatchlog/phone-home.png",
        title: "모바일 홈",
        description:
          "전체·유형별 기록 수와 최근 등록한 작품을 확인하고 검색·필터·정렬로 원하는 기록을 찾는 모바일 홈 화면입니다.",
        type: "mobile",
      },
      {
        src: "/images/projects/mywatchlog/phone-mylog.png",
        title: "모바일 내 기록",
        description:
          "카테고리별 기록 수와 최근 등록한 작품을 확인하고 검색·필터·정렬로 원하는 기록을 찾는 모바일 기록 화면입니다.",
        type: "mobile",
      },
      {
        src: "/images/projects/mywatchlog/phone-register.png",
        title: "모바일 작품 등록",
        description:
          "작품 유형과 기본 정보, 감상 상태를 입력해 새 기록을 등록하는 모바일 등록 화면입니다.",
        type: "mobile",
      },
      {
        src: "/images/projects/mywatchlog/phone-mypage.png",
        title: "모바일 마이페이지",
        description:
          "개인 계정 정보와 기록 통계를 확인하고 비밀번호를 변경하는 모바일 마이페이지입니다.",
        type: "mobile",
      },
    ],
    troubles: [
      {
        title: "여러 탐색 조건의 일관된 적용",
        problem:
          "카테고리와 감상 상태, 검색어와 정렬 조건을 함께 사용할 때 조건에 따라 목록 결과가 달라져야 했습니다.",
        cause:
          "각 조건을 독립적으로 처리하면 조건 변경 시 일부 필터가 초기화되거나 서로 다른 결과 기준을 사용할 수 있었습니다.",
        solution:
          "현재 탐색 조건을 하나의 조회 기준으로 정리하고 조건이 바뀔 때 동일한 흐름으로 목록을 다시 요청하도록 구성했습니다.",
        result:
          "여러 조건을 조합해도 사용자가 선택한 기준이 유지되고 예상 가능한 기록 목록을 확인할 수 있게 됐습니다.",
      },
      {
        title: "카테고리별 집계와 목록 동기화",
        problem:
          "작품을 등록하거나 삭제한 직후 홈의 전체·유형별 기록 수와 최근 기록 목록이 함께 갱신되어야 했습니다.",
        cause:
          "요약 집계와 작품 목록이 서로 다른 화면 데이터로 관리되면 갱신 시점에 차이가 생길 수 있었습니다.",
        solution:
          "기록 변경이 완료된 뒤 요약 정보와 목록을 같은 저장 결과를 기준으로 다시 조회하도록 데이터 흐름을 정리했습니다.",
        result:
          "등록·수정·삭제 이후 대시보드의 집계와 실제 목록이 같은 상태를 유지하도록 개선했습니다.",
      },
      {
        title: "데스크톱과 모바일 탐색 UI 재구성",
        problem:
          "넓은 화면의 필터와 작품 카드 구성을 작은 모바일 화면에서도 읽기 쉽고 조작하기 편하게 제공해야 했습니다.",
        cause:
          "데스크톱 배치를 단순히 축소하면 필터 영역과 카드 정보가 좁아지고 주요 동작의 우선순위가 흐려졌습니다.",
        solution:
          "화면 너비에 따라 검색·필터와 카드 열 수를 재배치하고 모바일 하단 내비게이션으로 핵심 동작의 접근성을 높였습니다.",
        result:
          "기기 크기에 관계없이 기록 검색과 등록, 목록 탐색을 자연스럽게 이어갈 수 있게 됐습니다.",
      },
    ],
    reflection:
      "개인 프로젝트로 기획부터 화면 설계, API와 데이터베이스 연결까지 전 과정을 직접 맡으며 하나의 기능이 화면에 보이는 것보다 저장과 재조회 이후에도 일관된 상태를 유지하는 것이 중요하다는 점을 배웠습니다. 특히 검색·필터·정렬처럼 여러 조건이 겹치는 기능과 요약 집계를 구현하면서 데이터 조회 기준을 먼저 명확히 정리해야 반응형 UI도 단순하고 안정적으로 구성할 수 있음을 이해했습니다.",
  },
];
export const getProject = (id?: string) =>
  projects.find((project) => project.id === id);
