import {
  v_c_srikanthan,
  portfolio,
  aws,
  firebase,
  c,
  chatty,
  flutter_voice_assistant,
  python,
  android,
  flutter,
  webapp,
  design,
  mobile,
  java,
  backend,
  creator,
  web,
  dart,
  mysql,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kotlin,
  ars_technologies,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: "Android Developer",
    icon: android,
  },
  {
    title: "Web Developer",
    icon: webapp,
  },
  {
    title: "UI/UX Designer",
    icon: design,
  },
];

const technologies = [
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "FireBase",
    icon: firebase,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Android Developer Intern",
    company_name: "ARS Technologies",
    icon: ars_technologies,
    iconBg: "#383E56",
    date: "Hybrid | May 2023 – Jul 2023",
    points: [
      "Build and develop 1 apps for clients.",
      "Prepare to published 1 apps to PlayStore.",
      "Worked with MVC, MVVC.",
      "Work with AWS Server.",
      "The app is built in Kotlin.",
      "Worked with REST apis.",
      "Collaborated with the senior backend team to build a CRM app.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "This boy wants to gain his own knowledge and polish his skills.",
    name: "V.C. Srikanthan",
    designation: "CEO",
    company: "ARS Technologies",
    image: v_c_srikanthan,
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "Experience my personal portfolio website, built on the foundation of HTML, CSS, and JavaScript. This elegant digital showcase encapsulates my professional journey, skills, and achievements. Explore my work, discover my story, and connect with me seamlessly on this responsive web platform.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Java Script",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/joymridha2004/Personal_Portfolio_JOYMRIDHA",
  },
  {
    name: "Chatty",
    description:
      "Discover our cross-platform Flutter chat app for connecting with both familiar and new contacts while prioritizing your privacy. It’s your gateway to seamless communication. Connect confidently with friends and expand your social circle securely. Experience modern chatting with privacy in mind.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },
    ],
    image: chatty,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flutter Voice Assistant",
    description:
      "Meet our Flutter-based voice assistant app, designed to connect you with CHATGPT seamlessly. Enjoy effortless interactions with CHATGPT using natural voice commands. This app revolutionizes the way you access information and perform tasks. Experience the future of AI-assisted conversations.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "ChatGPT & Dall-E API",
        color: "pink-text-gradient",
      },
    ],
    image: flutter_voice_assistant,
    source_code_link: "https://github.com/joymridha2004/Flutter_Voice_Assistant_App",
  },
];

export { services, technologies, experiences, testimonials, projects };
