import commsLogo from '../public/commsLogo.png';
import events from '../public/events.png';

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaborating with clients and open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: commsLogo,
    spareImg: "",
  },
  {
    id: 2,
    title: "Time zone flexibility for seamless communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 z-50",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about technology and software development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Currently working on an innovative event management platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "events.png",
    spareImg: "",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next big project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zenstays",
    subTitle: "[ Next.js application for property rental management ]",
    des: "Implements robust user authentication, scalable database integration, and a cutting-edge UI. Empowers " +
        "admins with tools for seamless property listing management, ensuring data accuracy and real-time updates." +
        " Optimized for handling complex property datasets, delivering secure access, and crafting personalized " +
        "user journeys to elevate engagement and functionality.",
    img: "/bg.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "zenstays.netlify.app",
  },
  {
    id: 2,
    title: "The Function",
    subTitle: "[ Full Stack app for ticketing and event management ]",
    des: "With Payment Processing, File Upload ability, and Event Management type of features using the latest tech-stack. ",
    img: "/functions.mp4",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Jr Software Engineer Jack Henry",
    des: "Contributed to the development and maintenance of web-based applications using modern technologies. " +
        "Collaborated with cross-functional teams to enhance user experience and ensure code quality. Assisted in " +
        "debugging, testing, and deploying features to meet project requirements.",
    className: "md:col-span-2",
    thumbnail: "/geek.png",
  },
  {
    id: 2,
    title: "Software Engineer  Jack Henry",
    des: "Designed, developed, and maintained software applications to meet client and business requirements. " +
        "Collaborated with cross-functional teams to deliver scalable and efficient solutions. Ensured code quality through " +
        "testing, debugging, and adherence to best practices.",
    className: 'rotate-bug',
    thumbnail: "/bug.png",
  },
  {
    id: 3,
    title: "Software Engineer lll  Jack Henry",
    des: "Advanced to Full Stack Developer, mastering frontend and backend development. Built scalable web apps " +
        "with seamless user experiences and robust server-side functionality. Mentored developers, " +
        "promoting growth and collaboration.",
    className: "md:col-span-2",
    thumbnail: "/coaching.png",
  },
  {
    id: 4,
    title: "Full Stack Engineer  Zenstays",
    des: "Developed a responsive web application from concept to deployment with Netlify, implementing both " +
        "frontend and backend systems. Collaborated with with the client to align the app with their vision and business goals.",
    className: "md:col-span-2",
    thumbnail: "/house-rental.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "github.com/blarerob",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "linkedin.com/in/ber",
  },
];
