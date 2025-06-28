import commsLogo from '../public/commsLogo.png';
import events from '../public/events.png';

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
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
    des: "A modern, responsive website for a short term rental company, featuring authentication, " +
        "user login, MongoDB to store and manage property listings, and Netlify Deployment.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "zenstays.netlify.app",
  },
  {
    id: 2,
    title: "The Function",
    des: "The Function is a professional community event application designed to streamline event management. " +
        "It leverages MongoDB for efficient storage and retrieval of event details, while dynamically displaying event images to enhance user engagement.",
    img: "/functions.mp4",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Jr Software Engineer - Jack Henry",
    des: "Contributed to the development and maintenance of web-based applications using modern technologies. " +
        "Collaborated with cross-functional teams to enhance user experience and ensure code quality. Assisted in " +
        "debugging, testing, and deploying features to meet project requirements.",
    className: "md:col-span-2",
    thumbnail: "/geek.png",
  },
  {
    id: 2,
    title: "Software Engineer - Jack Henry",
    des: "Designed, developed, and maintained software applications to meet client and business requirements. " +
        "Collaborated with cross-functional teams to deliver scalable and efficient solutions. Ensured code quality through " +
        "testing, debugging, and adherence to best practices.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/api.png",
  },
  {
    id: 3,
    title: "Software Engineer lll - Jack Henry",
    des: "Transitioned from Software Engineer to Full Stack Developer, gaining expertise in both frontend and backend development. " +
        "Designed and implemented scalable web applications, ensuring seamless user experiences and robust server-side functionality. " +
        "Collaborated with cross-functional teams to deliver end-to-end solutions while maintaining high code quality and performance.",
    className: "md:col-span-2",
    thumbnail: "/backend.png",

  },
  {
    id: 4,
    title: "Freelance Full Stack Developer - Zenstays",
    des: "From scratch, through the full Development Cycle I Developed a responsive web and mobile application for a short-term rental property company. Implemented user " +
        "authentication and login functionality to ensure secure access. Utilized MongoDB for efficient storage and " +
        "management of property listings, enabling seamless data retrieval and scalability. Deployed the application on Netlify",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/mobile.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
