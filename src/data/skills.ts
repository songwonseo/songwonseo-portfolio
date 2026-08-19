export type SkillLevel = "PROJECT" | "LEARNING" | "BASIC";
export interface SkillGroup {
  title: string;
  items: { name: string; level: SkillLevel }[];
}

const levels: Record<SkillLevel, string[]> = {
  PROJECT: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Spring Security",
    "JWT",
    "REST API",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Oracle",
    "MySQL",
    "Git",
    "GitHub",
    "AI-assisted Development",
  ],
  LEARNING: [
    "QueryDSL",
    "Swagger UI",
    "React Router",
    "Zustand",
    "MongoDB",
    "AWS",
  ],
  BASIC: [
    "Thymeleaf",
    "jQuery",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Flutter",
    "Dart",
  ],
};
const levelOf = (name: string): SkillLevel =>
  (Object.keys(levels) as SkillLevel[]).find((level) =>
    levels[level].includes(name),
  ) ?? "BASIC";
const group = (title: string, names: string[]): SkillGroup => ({
  title,
  items: names.map((name) => ({ name, level: levelOf(name) })),
});

export const skillGroups = [
  group("Backend", [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "QueryDSL",
    "Spring Security",
    "JWT",
    "REST API",
    "MyBatis",
    "Swagger UI",
  ]),
  group("Frontend", [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "React Router",
    "Zustand",
    "Thymeleaf",
    "jQuery",
  ]),
  group("Database", ["Oracle", "MySQL", "MongoDB"]),
  group("Tools & Others", [
    "Git",
    "GitHub",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Flutter",
    "Dart",
    "AWS",
    "AI-assisted Development",
  ]),
];
