import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

export const RESUME = {
  name: "Jaimin",
  about:
    "A software engineer who loves tinkering, exploring, and building cool stuff. Always eager and curious to learn more. Open to freelance work!",
  initials: "CJ",
  location: "Gujarat, India",
  contact: {
    email: "chovatiajaimin@gmail.com",
    // tel: "+1234567890",
    social: [
      {
        name: "X",
        url: "https://x.com/jaimin_chovatia",
        icon: RiTwitterXFill,
      },
      {
        name: "GitHub",
        url: "https://github.com/jaimin25",
        icon: RiGithubFill,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jaimin-chovatia",
        icon: RiLinkedinFill,
      },
    ],
  },
  tools_and_tech: [
    "html",
    "css",
    "bootstrap",
    "cpp",
    "java",
    "js",
    "py",
    "ts",
    "angular",
    "react",
    "vite",
    "nextjs",
    "express",
    "supabase",
    "firebase",
    "azure",
    "aws",
    "gcp",
    "git",
    "mongodb",
    "postgres",
    "redis",
    "prisma",
    "github",
    "docker",
    "bots",
    "blender",
    "neovim",
    "androidstudio",
    "atom",
    "eclipse",
    "vscode",
    "ubuntu",
  ],
  projects: [
    {
      title: "DayDonezo",
      techStack: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma",
        "Firebase",
        "Shadcn UI",
        "Magic UI",
        "Aceternity ui",
      ],
      description:
        "Digital journaling platform where you can document your daily wins and accomplishments",
      link: [
        {
          type: "Website",
          href: "https://daydonezo.xyz",
        },
        {
          type: "Github",
          href: "https://github.com/Jaimin25/DayDonezo",
        },
      ],
      video_src: "/demo/daydonezo-demo.mp4",
    },
    {
      title: "ConvoNest",
      techStack: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "Socket.io",
      ],
      description:
        "ConvoNest is a realtime web application for chatting, where you can add friends and chat with them individually or in a group",
      link: [
        {
          type: "Website",
          href: "https://convonest.vercel.app",
        },
        {
          type: "Github",
          href: "https://github.com/Jaimin25/ConvoNest",
        },
      ],
      video_src: "/demo/convonest-demo.mp4",
    },
    {
      title: "Claimit",
      techStack: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Drizzle",
        "PostgreSQL",
        "Redis",
        "Stripe",
        "Shadcn UI",
        "Aceternity ui",
      ],
      description:
        "An online marketplace enabling real-time auctions and bidding, driving higher user engagement",
      link: [
        {
          type: "Website",
          href: "https://claimit.vercel.app",
        },
      ],
      video_src: "/demo/claimit-demo.mp4",
    },
    {
      title: "Sahyog",
      techStack: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "MongoDB",
        "Express",
        "Supabase",
        "Stripe",
        "ChakraUI",
      ],
      description: "A crowdfunding platform",
      link: [
        {
          type: "Website",
          href: "https://sahyogweb.vercel.app",
        },
        {
          type: "Github",
          href: "https://github.com/Jaimin25/Sahyog",
        },
      ],
      video_src: "/demo/sahyog-demo.mp4",
    },
    {
      title: "GreatMinds",
      techStack: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma",
        "Shadcn UI",
        "Redis",
      ],
      description:
        "A fun project to explore great individuals who revolutionized the world with their skills and knowledge, shaping humanity's progress through groundbreaking contributions and innovations.",
      link: [
        {
          type: "Website",
          href: "https://grtminds.xyz",
        },
        {
          type: "Github",
          href: "https://github.com/Jaimin25/GreatMinds",
        },
      ],
      video_src: "/demo/grtminds-demo.mp4",
    },
  ],
};
