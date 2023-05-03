import {
    mobile,
    backend,
    creator,
    web,
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
    leetcode,
    ms,
    cf,
    cn,
    cc,
    express,
    nitrr,
    gettowatch,
    findcamp,
    colorpicker,
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
      title: "Intern at Microsoft '23",
      icon: ms,
    },
    {
      title: "Web Developer",
      icon: javascript,
    },
    {
      title: "Knight at Leetcode",
      icon: leetcode,
    },
    {
      title: "Specialist at Codeforces",
      icon: cf,
    },
    
  ];
  
  const technologies = [
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "express",
      icon: express,
    }
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant",
      company_name: "Coding Ninjas",
      icon: cn,
      iconBg: "#fff",
      date: "June 2020 - Sept 2021",
      points: [
        "Taking doubt sessions based on DATA STRUCTURES and ALGORITHMS",
        "Debugging Codes and helping students in their coding assignments and questions",
        "Solved more than 300 doubts of students with average rating of 4.7/5.0",
      ],
    },
    {
      title: "Mentor(Evolution Program)",
      company_name: "Codechef IGDTU Chapter",
      icon: cc,
      iconBg: "#fff",
      date: "Jan 2022 - Feb 2022",
      points: [
        "Evolution was a 21-day program organised by Codechef IGDTU Chapter aiming evolution of selected mentees as a better competitive programmer",
        "I was selected as one of the five mentors, took sessions on various algorithms and techniques useful in competitive programming and solved doubts of assigned mentees"
      ],
    },
    {
      title: "Engage Mentee",
      company_name: "Microsoft",
      icon: ms,
      iconBg: "#fff",
      date: "May 2022 - Jun 2022",
      points: [
        "Made a movie recommendation system(Web-App) by writing algorithms using JAVASCRIPT and used REACT for developing the frontend.",
        "The project was judged on a number of criteria like code performance, coding best practices, UI/UX etc",
        "My project ranked among the top participants, who got direct internship offer from Microsoft.",
      ],
    },
    {
      title: "Training and Placement Convener",
      company_name: "Training & Placement Office NIT Raipur ",
      icon: nitrr,
      iconBg: "#fff",
      date: "April 2023 - Present",
      points: [
        "Helping students identify employment options that match their career interests.",
        "Taking sessions on placement preparations, resume building etc.",
        "Coordinating between college and HR department of company",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Find Your Camp",
      description:
        "Web-based platform that allows users to search, add, review and rate campgrounds from various providers, providing a convenient and efficient solution for selection of best campground for your next camp.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: findcamp,
      source_code_link: "https://github.com/beingDeveloper2312/FindCamp",
    },
    {
      name: "Get to watch",
      description:
        "It is a web based app which shows trending movies and TV shows, it also has a recommendation section which based on user's input gives top unseen movies that the user may like",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "pink-text-gradient",
        },
      ],
      image: gettowatch,
      source_code_link: "https://github.com/beingDeveloper2312/Get-To-Watch",
    },
    {
      name: "Color Picker Extension",
      description:
        "A handy chrome extension which can be used to pick colors from anywhere on the web and it copies the color code to clipboard on click. Can be very useful for tasks like following a dev tutorial, replicating a UI, etc...",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: colorpicker,
      source_code_link: "https://github.com/beingDeveloper2312/Color-Picker-Chrome-Extension",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };