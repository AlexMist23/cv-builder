import type { ContactInfo, Info, Languages } from "@/components";

const phone = process.env.NEXT_PUBLIC_PHONE;

export const info: Info = {
  name: "Aleksander Misterkiewicz",
  jobDesc: "Junior Front-End Developer",
  summary:
  "Skrupulatny tester kontroli jakości przechodzący na stanowisko front-end developera. Biegły w testowaniu oprogramowania, rozwoju i projektowaniu, ze szczególnym naciskiem na Python i JavaScript. Poszukuję możliwości zastosowania umiejętności analitycznego rozwiązywania problemów i wiedzy technicznej na stanowisku junior front-end developera."
};
export const contactInfo: ContactInfo[] = [
  {
    icon: "email.svg",
    content: "aleksander.misterkiewicz@outlook.com",
    link: "mailto:aleksander.misterkiewicz@outlook.com",
  },

  {
    icon: "linkedin.svg",
    content: "linkedin.com/in/aleksandermst",
    link: "https://www.linkedin.com/in/aleksandermst",
  },
  {
    icon: "phone.svg",
    content: phone ? phone : "123 456 789",
    link: phone ? "tel:" + phone : "123 456 789",
  },
  {
    icon: "github.svg",
    content: "github.com/AlexMist23",
    link: "https://github.com/AlexMist23",
  },

  {
    icon: "location.svg",
    content: "Gdańsk, Polska",
    link: "geo:54.3523,18.6491",
  },

  {
    icon: "website.svg",
    content: "a-misterkiewicz.vercel.app",
    link: "https://a-misterkiewicz.vercel.app/",
  },
];
export const skillsList: TechnicalSkill[] = [
  { category: 'Programming Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS', 'SQL']},
  { category: 'Front-End Technologies', skills: ['React', 'Redux.js', 'Next.js', 'SVG', 'Responsive Design'] },
  { category: 'Back-End Technologies', skills: ['Node.js', 'Django', 'Flask'] },
  { category: 'Databases', skills: ['PostgreSQL'] },
  { category: 'Version Control', skills: ['Git', 'GitHub'] },
  { category: 'Development Tools', skills: ['Jira']}
];
export const workExperienceList: WorkExp[] = [
  {
    role: "Intern Quality Assurance Engineer",
    company: "Luxoft",
    date: { start: "09/2023", end: "12/2023" },
    descList: [
      "Przeglądałem i analizowałem dane map cyfrowych, zapewniając dokładność i standardy jakości.",
      "Anotowałem obrazy i filmy 2D/3D przy użyciu specjalistycznych narzędzi, zwiększając dokładność i integralność danych.",
      "Efektywnie współpracowałem z członkami zespołu i programistami, poprawiając dostosowanie projektu i efektywność przepływu pracy.",
    ],
  },
  {
    role: "QA Tester",
    company: "QLOC",
    date: { start: "08/2022", end: "07/2023" },
    descList: [
      "Przeprowadzałem testy sanity, wydajnościowe, funkcjonalne i regresyjne w środowisku Agile, poprawiając jakość oprogramowania.",
      "Usprawniłem procesy raportowania problemów i zbierania opinii klientów, przyczyniając się do ciągłego doskonalenia i optymalizacji przepływu pracy Agile.",
    ],
  },
];

export const coursesList: Course[] = [
  {
    title: "JavaScript Specialist: React + Redux",
    company: "CodersLab",
    date: { start: "12/2022", end: "05/2023" },
    descList: [
      "Zakres tematyczny: Zaawansowany JavaScript, projekt aplikacji jednostronicowej (SPA) z użyciem React Router, biblioteki React Redux i REST API.",
    ],
  },
  {
    title: "Python Developer",
    company: "CodersLab",
    date: { start: "08/2022", end: "07/2023" },
    descList: [
      "Zakres tematyczny: Podstawy Pythona, programowanie obiektowe w Pythonie, bazy danych SQL, framework Django, podstawy JavaScript, projekt końcowy.",
    ],
  },
];
export const languages: Languages = [
  { name: "Angielski", level: 4, customDesc: "Średnio-zaawansowany" },
  { name: "Polski", level: 7, customDesc: "Ojczysty" },
];
export const educationList: EducationList[] = [
  {
    school: "Vocational Technical High School for Telecommunications",
    desc: "IT profile",
    date: { start: "09/2017", end: "06/2020" },
  },
];
export const projectsList: Project[] = [
  {
    name: "Weather App",
    techStack: ["TypeScript", "Next.js", "React", "Redux"],
    demo: "https://weather-appx.vercel.app",
    repo: "https://github.com/AlexMist23/weather-app",
    descList: [
      "Opracowałem aplikację pogodową przy użyciu Next.js, React i React-Redux.",
      "Zintegrowałem API OpenWeatherMap dla danych w czasie rzeczywistym, zarządzając stanem za pomocą Redux i tworząc responsywny, estetyczny design.",
    ],
  },
  {
    name: "Cinema Service",
    techStack: ["Python", "Django", "PostgreSQL"],
    repo: "https://github.com/AlexMist23/django_cinema_app",
    descList: [
      "Opracowałem kompleksową aplikację internetową dla kin przy użyciu Python, Django i PostgreSQL, demonstrując pełne umiejętności full-stack.",
      "Wdrożyłem solidny system uwierzytelniania użytkowników i efektywne zarządzanie danymi przy użyciu struktur modeli Django i PostgreSQL.",
    ],
  },
  {
    name: "CV Builder",
    techStack: ["TypeScript", "Next.js", "React"],
    demo: "https://a-misterkiewicz.vercel.app/",
    repo: "https://github.com/AlexMist23/cv-builder",
    descList: [
      "Opracowałem niestandardowe narzędzie do tworzenia CV przy użyciu TypeScript, Next.js i React, oferujące pełną kontrolę nad elementami projektu przy użyciu komponentów React.",
      "Zaplanowane przyszłe ulepszenia obejmują przyjazny dla użytkownika interfejs do bezproblemowego dostosowywania CV.",
    ],
  },
];

export const clause: string =
  "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. wsprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO). Wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie przyszłych procesów rekrutacyjnych.";

export interface Course {
  title: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList?: string[];
}
export interface WorkExp {
  role: string;
  company: string;
  date: { start: string; end: string | "Present" };
  descList?: string[];
}
export interface EducationList {
  school: string;
  desc: string;
  date: { start: string; end: string | "Present" };
}
export interface Project {
  name: string;
  techStack: string[];
  demo?: string;
  repo: string;
  date?: { start: string; end: string | "Present" };
  descList: string[];
}

export interface TechnicalSkill {
  category: string;
  skills: string[];
}
