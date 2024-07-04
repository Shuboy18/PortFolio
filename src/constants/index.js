import {
    Project_1,
    Project_2,
    Project_3,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    bootstrap,
    timscdr,
    threejs,
    github,
    school,
    emerge,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Cyber Security Enthusiast",
      icon: backend,
    },
    {
      title: "Gamer",
      icon: creator,
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
    {
      name: "React JS",
      icon: reactjs,
    },
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
      name: "github",
      icon: github,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Schooling",
      company_name: "Malti Jayant Dalal High School",
      icon: school,
      iconBg: "#383E56",
      date: "June 2006 - April 2016",
      points: [
        "I completed my pre-primary and secondary schooling at Malti Jayant Dalal High School.",
        "I developed a strong academic foundation and a passion for learning.",
        "The school fostered teamwork, responsibility, and a commitment to excellence, shaping my values and approach to education.",
      ],
    },
    {
      title: "Junior College",
      company_name: "L. S Raheja College of Arts & Commerce",
      icon: school,
      iconBg: "#E6DEDD",
      date: "June 2017 - March 2018",
      points: [
        "I completed my junior college education at L. S. Raheja College of Arts and Commerce.",
        "I discovered my interest in technology and cyber security.",
        " This experience provided me with valuable knowledge and skills that continue to shape my learning journey",
      ],
    },
    {
      title: "Degree College",
      company_name: "L. S Raheja College of Arts & Commerce",
      icon: school,
      iconBg: "#383E56",
      date: "June 2019 - March 2022",
      points: [
        "I completed my Bachelor's degree in B.Sc. IT at L. S. Raheja College of Arts and Commerce.",
        "I enhanced my coding and technology-related skills..",
        "This education furthered my understanding and proficiency in the field.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Emerge Digital LLP",
      icon: emerge,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - June 2023",
      points: [
        "I joined Emerge Digital tI joined Emerge Digital to gain industry experience, where I learned a variety of skills, including best practices and much more. It was a valuable opportunity that enriched my understanding and expertise in the field",
        "Developing and maintaining web applications using HTML5, CSS3, Javascript, Bootstrap and other related technologies.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Post Graduation",
      company_name: "TIMSCDR",
      icon: timscdr,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Present",
      points: [
        "I am currently pursuing my post-graduation degree in MCA from TIMSCDR.",
        "I am actively honing my skills in various aspects of computer applications and technology.",
        "I am now eager to embark on my professional journey.",
        "I am enthusiastic about applying my knowledge and skills in real-world scenarios, contributing effectively to the field of technology.",
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
      name: "JSM Headphones",
      description:
        "I have designed a web-based platform that allows users to search, purchase, and manage a wide range of headphones, providing a convenient and efficient solution for all audio needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "sanitydb",
          color: "blue-text-gradient",
        },
      ],
      image: Project_1,
      source_code_link: "https://github.com/Shuboy18/ecommerce_stripe_sanity_app",
      live_demo_link: "https://ecommerce-sanity-stripe-nine-mu.vercel.app",
    },
    {
      name: "HooBank",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Project_2,
      source_code_link: "https://github.com/Shuboy18/bank_modern_app",
      live_demo_link: "https://bank-modern-app-one-red.vercel.app/",
    },
    {
      name: "Genrich Restuarant",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: Project_3,
      source_code_link: "https://github.com/Shuboy18/gerich-restaurant",
      live_demo_link: "https://gerich-restaurant-steel.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };