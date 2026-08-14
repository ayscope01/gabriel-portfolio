import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Fadare",
  lastName: "Gabriel",
  name: "Fadare Gabriel",
  role: "Web Designer & Developer",
  avatar: "/images/avatar.jpg",
  email: "gabriel704910@gmail.com",
  location: "Africa/Lagos",
  languages: ["English"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates about my design, development and creative work.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ayscope01",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fadare-gabriel-34810042/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/fadaregabriel1",
    essential: true,
  },
  {
    name: "X",
    icon: "threads",
    link: "https://x.com/Ay_sc0pe",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description:
    "Portfolio of Fadare Gabriel, a Web Designer & Developer creating modern digital experiences.",
  headline: <>I design and build modern websites for businesses and brands.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Selected Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} focused on creating
      clean, responsive and user-friendly websites. I combine design and
      technology to help businesses and brands build a strong online presence.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a ${person.role} based in Nigeria.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Gabriel, a web designer and developer passionate about creating
        modern digital experiences.
        <br />
        <br />
        I enjoy turning ideas into clean, responsive and functional websites
        that are easy to use and visually appealing. I work on creative
        projects while continuously improving my design and development skills.
      </>
    ),
  },
  work: {
    display: false,
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Web Design",
        description: (
          <>
            Creating clean, modern and responsive website designs focused on
            usability and visual presentation.
          </>
        ),
        tags: [
          {
            name: "Web Design",
            icon: "layout",
          },
        ],
        images: [],
      },
      {
        title: "Web Development",
        description: (
          <>
            Building responsive websites and digital experiences using modern
            web technologies.
          </>
        ),
        tags: [
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        images: [],
      },
      {
        title: "Framer",
        description: (
          <>
            Designing and building modern responsive websites with Framer.
          </>
        ),
        tags: [
          {
            name: "Framer",
            icon: "framer",
          },
        ],
        images: [],
      },
      {
        title: "Canva",
        description: (
          <>
            Creating social media graphics, promotional designs and visual
            content for brands and businesses.
          </>
        ),
        tags: [
          {
            name: "Canva",
            icon: "canva",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts, ideas and projects",
  description: `Updates from ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected web design and development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection of creative work by ${person.name}`,
  images: [],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};
