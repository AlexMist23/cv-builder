import type { ContactInfo, Info, Languages } from "@/components";

const phone = process.env.NEXT_PUBLIC_PHONE;

export const info: Info = {
  name: "Aleksander Misterkiewicz",
  jobDesc: "QA Tester",
  summary:
    "Tester zapewnienia jakości z wiedzą w zakresie testowania, rozwoju i projektowania oprogramowania. Z zapałem wykorzystuję analityczne myślenie do rozwiązywania skomplikowanych wyzwań technologicznych. Posiadam udowodnione umiejętności w Pythonie i JavaScript, rozwijane poprzez kursy i stałe doskonalenie programistyczne. W poszukiwaniu nowych możliwości, które pozwolą mi wykorzystać moje kompetencje w praktyce.",
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
    content: "Gdansk, Poland",
    link: "geo:54.3523,18.6491",
  },

  {
    icon: "website.svg",
    content: "a-misterkiewicz.vercel.app",
    link: "https://a-misterkiewicz.vercel.app/",
  },
];
export const skillsList: string[] = [
  "HTML5",
  "CSS",
  "SVG",
  "SQL",

  "JavaScript",
  "TypeScript",
  "Python",
  "PostgreSQL",

  "Node.js",
  "Next.js",
  "Django",
  "Flask",

  "React",
  "Redux.js",
  "JIRA",
  "Responsive Design",
];
export const workExperienceList: WorkExp[] = [
  {
    role: "Intern Quality Assurance Engineer",
    company: "Luxoft",
    date: { start: "2023-09", end: "2023-12" },
    descList: [
      "Przeprowadziłem kompleksowy przegląd i analizę danych map cyfrowych, wykazując skrupulatną uwagę do szczegółów i zaangażowanie w zapewnienie jakości.",
      "Adnotacja obrazów 2D/3D i filmów przy użyciu specjalistycznych narzędzi i systemów baz danych, przyczyniając się do poprawy dokładności i integralności danych.",
      "Współpracowałem z członkami zespołu i programistami, aby zapewnić płynną komunikację, sprzyjającą wyrównaniu projektu i efektywnemu przepływowi pracy.",
    ],
  },
  {
    role: "QA Tester",
    company: "QLOC",
    date: { start: "2022-08", end: "2023-07" },
    descList: [
      "Wykonywanie testów oprogramowania: sanity, performance, functional, regression",
      "Odgrywanie kluczowej roli w procesach raportowania problemów i informacji zwrotnej do klientów, ułatwiając ciągłe doskonalenie produktu, pracy zespołu w środowisku Agile.",
    ],
  },
];
export const coursesList: Course[] = [
  {
    title: "JavaScript Specialist: React + Redux",
    company: "CodersLab",
    date: { start: "2022-12", end: "2023-05" },
    descList: [
      "Zaawansowany JavaScript, projekt aplikacji jednostronicowej (SPA) z użyciem React Router, biblioteki React Redux i REST API.",
    ],
  },
  {
    title: "Python Developer",
    company: "CodersLab",
    date: { start: "2022-08", end: "2023-07" },
    descList: [
      "Podstawy Pythona, programowanie obiektowe, bazy danych SQL, framework Django, podstawy JavaScript, projekt końcowy.",
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
    date: { start: "08/2023", end: "Present" },
    descList: [
      "This application is built using Next.js, React, and React-Redux, leveraging the power of these technologies to provide weather information.",
      "It fetches real-time weather data from the OpenWeatherMap API (https://openweathermap.org/), managing and distributing the data seamlessly through Redux for efficient rendering within React components on pages served by Next.js.",
      "The Weather App combines functionality with an aesthetically pleasing, responsive design.",
    ],
  },
  {
    name: "Cinema Service",
    techStack: ["Python", "Django", "PostgreSQL"],
    repo: "https://github.com/AlexMist23/django_cinema_app",
    date: { start: "11/2022", end: "02/2023" },
    descList: [
      "The Cinema Service project, developed in Python using the Django framework, showcases a blend of backend and frontend expertise",
      "Utilizing Django with a PostgreSQL database, this project demonstrates my proficiency across various languages and technologies.",
      "The platform introduces a comprehensive cinema web application enabling users to access movie schedules across multiple locations.",
      "The system includes a robust login system integrated with Django's powerful model structures within PostgreSQL, ensuring secure and efficient data management.",
    ],
  },
  {
    name: "CV Builder",
    techStack: ["TypeScript", "Next.js", "React"],
    demo: "https://cv-aleksander-misterkiewicz.vercel.app",
    repo: "https://github.com/AlexMist23/cv-builder",
    date: { start: "11/2023", end: "Present" },
    descList: [
      "Crafted using TypeScript, Next.js, and React, revolutionizes the traditional resume-building process.",
      "Application utilizes React elements to create a visually stunning and custom-tailored CV experience, elevating the presentation to an art form.",
      "Due to the early phase of development, the tool currently provides only available React components for building usage.",
      "In the planned futures, a user interface will be provided to further enhance the user experience.",
      "This approach grants full control over color schemes, layout, and design, resulting in a beautifully presented CV seamlessly fitting within selected number of A3/A4-sized pages.",
      "The CV Builder showcases my expertise in leveraging modern web technologies to create intuitive and visually engaging applications, offering a unique and personalized approach to resume creation.",
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
  date: { start: string; end: string | "Present" };
  descList: string[];
}
