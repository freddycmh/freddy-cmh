import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import logo from "../assets/projects/logo.png";
import logo2 from "../assets/projects/logo2.png";

export const HERO_CONTENT = `I am a full stack software engineer skilled in building efficient, user-focused applications. With experience in React, Node.js, MongoDB, and Express.js, I’ve developed projects that improve user engagement and streamline functionality. My goal is to leverage these skills to create impactful, reliable digital solutions.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Web Developer",
    company: "Department of Transportation",
    description: `Contributed as a Web Developer within the NYC Department of Transportation’s IT & Telecom division, maintaining and updating the DOT’s public-facing websites using HTML, CSS, and JavaScript; collaborated across departments to create and optimize content, ensure accessibility compliance, and support agency initiatives through responsive web design and timely content delivery.`,
    url: "https://www.nyc.gov/html/dot/html/home/home.shtml",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Jira",
      "Git",
      "Adobe Dreamweaver",
      "Adobe Photoshop",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Full Stack Software Engineer",
    company: "Battery Park City Residential LLC",
    description: `Developed a real estate marketplace.Implemented user-centric features like image upload, property tools, and advanced search, boosting user engagement by 50%, while optimizing state management with Redux Toolkit to support a 65% increase in demand and deploying the app on Render, which improved sales and customer retention.`,
    url: "https://www.global-luxurylivings.com/",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "JWT (JSON Web Tokens)",
      "Firebase",
      "Google OAuth",
    ],
  },
  {
    year: "2023 - 2024",
    role: "Full Stack Software Engineer",
    company: "Diskko",
    description: `Optimized web conversion tools and improved UX/UI with React.js, achieving a 6% increase in online sales and an 11% decrease in bounce rates. Leveraged Three.js and Valtio to implement a 3D shirt customization feature, boosting online sales by 12% and user engagement by 15%, while employing a mobile-first design approach to enhance mobile user satisfaction by 40%.`,
    url: "https://diskko.netlify.app/",
    technologies: [
      "React.js",
      "Three.js",
      "Node.js",
      "MongoDB",
      "Valtio",
      "Git",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Option Trade Tracker",
    image: logo,
    description:
      "Developed a full-stack MERN web app to log and analyze options trades. Users can create, update, and delete trades with details like ticker, strike price, trade type, and P/L. Built a secure RESTful API with Express and MongoDB for persistent user-specific data. Implemented JWT authentication for protected routes and frontend auth state. The UI is built with React + Vite, styled with Tailwind, and uses Axios for backend communication.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT Auth",
      "Tailwind CSS",
      "Vite",
    ],
    url: "https://trade-tracker-tqll.onrender.com/",
  },
  {
    title: "Note Taking Web App",
    image: project4,
    description:
      "Built a full-stack MERN note-taking app where users can create, update, and delete notes. Implemented RESTful API routes with Express, connected to MongoDB for data persistence, and added rate-limiting with Upstash to protect backend endpoints. Frontend built with Vite + React, using Axios for HTTP requests and React Router for page navigation.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    url: "https://quicknote-avox.onrender.com/",
  },
  {
    title: "BearEat",
    image: logo2,
    description:
      "Built a mobile app that helps users discover and choose restaurants by swiping, inspired by Tinder’s interface. Integrated Google Places API to fetch nearby restaurants based on user location and filters like cuisine, budget, and rating. Implemented global state using Context API and added a post-swipe summary with a decision spinner for indecisive users.",
    technologies: [
      "React Native",
      "Expo",
      "Google Places API",
      "Context API",
      "JavaScript",
    ],
    url: "https://github.com/freddycmh/foodie-swipe",
  },
  {
    title: "Class Helper Platform",
    image: project1,
    description:
      "Developed a web platform to help college students connect through class IDs, enhancing academic peer networking and collaboration. Integrated user profiles with social media links and professor ratings, and led bi-weekly meetings to drive platform improvements and usability.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title:
      "EverUp Micro-Credential in Software Engineering by CUNY and The New York Jobs CEO Council",
    image: project2,
    description:
      "Completed the EverUp Micro-Credential in Software Engineering, gaining hands-on experience with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. Built a project portfolio that highlighted advanced skills in responsive design, JavaScript fundamentals, and dynamic web development techniques.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
    ],
  },
];

export const CONTACT = {
  address: "Brooklyn, NY, USA",
  phoneNo: "+1 646-595-6787 ",
  email: "freddychawamokho2001@gmail.com",
};
