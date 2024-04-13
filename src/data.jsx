import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import tea_station from "./assets/images/tea_station.jpg";
import e_billing from "./assets/images/e_billing.jpg";
import jobify from "./assets/images/jobify.jpg";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Comfortable in React for developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in utlizing asynchronous programming patterns, frameworks like Express.js. Comfortable interacting with relational and NoSQL databases.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: tea_station,
    url: 'https://tea-station-il8b.onrender.com/',
    github: 'https://github.com/rajeshsh565/tea_station',
    title: 'tea station',
    text: 'Tea Station is a minimalist home page design built with fundamental development practices. It features a fixed sidebar navigation, form handling through Formspree, and a focus on clean design with CSS variables and subtle animations.'
  },
  {
    id: nanoid(),
    img: jobify,
    url: 'https://mern-jobify01.onrender.com/',
    github: 'https://github.com/rajeshsh565/jobify',
    title: 'Jobify',
    text: 'Jobify served as a comprehensive MERN Stack project, fostering hands-on experience with frontend frameworks, backend infrastructure, UI component creation, security practices, and cloud storage integration.',
  },
  {
    id: nanoid(),
    img: e_billing,
    url: 'https://mern-e-billing.onrender.com/',
    github: 'https://github.com/rajeshsh565/mern_e-billing',
    title: 'E-Bill',
    text: 'E-Bill leverages MERN stack and Bootstrap to deliver a responsive Electricity Billing System built with modern React practices. It utilizes component-based architecture, context API, and various hooks for state management with suitable validation, and error handling.',
  },
];

export const teaStationBadges = [
  {
    text: "HTML",
    textColorClass: "text-orange-500",
    bgColorClass: "bg-orange-100",
    borderColorClass: "border-orange-500"
  },
  {
    text: "CSS",
    textColorClass: "text-blue-700",
    bgColorClass: "bg-blue-200",
    borderColorClass: "border-blue-700"
  },
  {
    text: "Formspree",
    textColorClass: "text-red-500",
    bgColorClass: "bg-red-100",
    borderColorClass: "border-red-500"
  },
];
export const jobifyBadges = [
  {
    text: "MERN",
    subTech: [
      { letter: "M", textColorClass: "text-green-500" },
      { letter: "E", textColorClass: "text-black" },
      { letter: "R", textColorClass: "text-sky-500" },
      { letter: "N", textColorClass: "text-lime-500" },
    ],
  },
  {
    text: "Styled-Components",
    textColorClass: "text-fuchsia-600",
    bgColorClass: "bg-fuchsia-100",
    borderColorClass: "border-fuchsia-600"
  },
  {
    text: "React Query",
    textColorClass: "gradient-text",
    bgColorClass: "bg-sky-100",
    borderColorClass: "border-t-yellow-500 border-r-orange-600 border-b-yellow-500 border-l-red-600"
  },
  {
    text: "Recharts",
    textColorClass: "text-teal-600",
    bgColorClass: "bg-teal-100",
    borderColorClass: "border-teal-600"
  },
];
export const eBillBadges = [
  {
    text: "MERN",
    subTech: [
      { letter: "M", textColorClass: "text-green-500" },
      { letter: "E", textColorClass: "text-black" },
      { letter: "R", textColorClass: "text-sky-500" },
      { letter: "N", textColorClass: "text-lime-500" },
    ],
  },
  {
    text: "Bootstrap",
    textColorClass: "text-blue-500",
    bgColorClass: "bg-blue-100",
    borderColorClass: "border-blue-500"
  },
  {
    text: "Cloudinary",
    textColorClass: "text-blue-900",
    bgColorClass: "bg-blue-200",
    borderColorClass: "border-blue-900"
  },
  {
    text: "React-Icons",
    textColorClass: "text-pink-500",
    bgColorClass: "bg-pink-100",
    borderColorClass: "border-pink-500"
  },
];