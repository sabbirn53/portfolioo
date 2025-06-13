// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import GoLogo from './assets/tech_logo/go.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Project Section Logo's
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import educare from './assets/work_logo/educare.jpg';
import tourx from './assets/work_logo/toux.jpg';
import weatherapp from './assets/work_logo/weather-app.jpg';
import shopcart from './assets/work_logo/shopcart.jpg';
import foodeat from './assets/work_logo/foodeat.jpg';
import admin from './assets/work_logo/admin-dashboard.jpg';
import emart from './assets/work_logo/emart.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },  
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Go', logo: GoLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


  
export const projects = [
    {
      id: 0,
      title: "EduCare",
      description:
        " Developed a responsive e-learning platform using React Js, Designed and implemented with key components including Home, Programs. About, Campus, Testimonial Contact.Utilized modern CSS techniques for styling and ensured a seamless user experience. Integrated RESTful APIs for real-time data and messaging.",
      image: educare,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/sabbirn53/EduCare",
      webapp: "https://sabbirn53.github.io/EduCare/",
    },
    {
      id: 1,
      title: "TourX",
      description:
        "Developed a responsive travel website using React.js, Designed and implemented key components including a homepage, destinations list, about, and contact pages. Utilized modern CSS techniques for styling and ensured a seamless user experience. Also enhanced the site with search functionality for better user interaction,",
      image: tourx,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sabbirn53/TourX",
      webapp: "https://sabbirn53.github.io/TourX/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A modern, responsive weather application built with React, TypeScript, Tailwind CSS, and Axios. This app allows users to search for a city and view current weather conditions including temperature, humidity, visibility, and more. It features light/dark mode toggle and animated UI elements.An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: weatherapp,
      tags: ["HTML", "Tailwind CSS", "JavaScript","TypeScript", "API"],
      github: "https://github.com/sabbirn53/weather-app",
      webapp: "https://weather-app-me79.vercel.app/",
    },
    {
      id: 4,
      title: "Shop Cart",
      description:
        "Developed a responsive e-commerce site using React js. Designed and implemented key components home page,products, best selling, cart, review, and contact pages.Using SCSS techniques for styling.And better user experience.Also implemented a login and Register page.",
      image: shopcart,
      tags: ["JavaScript", "React Js", "HTML", "CSS","Axios"],
      github: "https://github.com/sabbirn53/ShopA2Z",
      webapp: "https://sabbirn53.github.io/ShopA2Z/",
    },
    {
      id: 5,
      title: "Food Eat",
      description:
        "A modern and fully responsive restaurant landing page built with React Js, HTML, CSS, and JavaScript. Showcases a clean design, smooth scrolling, and attractive sections like menu, testimonials, and contact, optimized for both desktop and mobile user",
      image: foodeat,
      tags: ["React Js","HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/sabbirn53/FoodEat",
      webapp: "https://sabbirn53.github.io/FoodEat/",
    },
    {
      id: 6,
      title: "Admin Dashboard",
      description:
        "AA responsive and interactive Admin Dashboard built with React and Tailwind CSS. Features include user and product management, sidebar navigation, and a clean, modern UI for seamless admin control.n ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: admin,
      tags: ["React JS", "HTML", "Tailwind Css", "JavaScript", "API"],
      github: "https://github.com/sabbirn53/admin_dashboard",
      webapp: "https://sabbirn53.github.io/admin_dashboard/",
    },
    {
      id: 7,
      title: "Emart",
      description:
        "A React.js-based eMart is a sleek and responsive e-commerce electronics website developed using React Js, HTML, CSS, and JavaScript. It highlights featured products, intuitive navigation, and a modern layout — ideal for online retail promotions and product showcases.",
      image: emart,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/sabbirn53/emart",
      webapp: "https://sabbirn53.github.io/emart/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  