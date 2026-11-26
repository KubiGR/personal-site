// ─────────────────────────────────────────────────────────────
//  Edit this file to update your site. No build step needed —
//  save and refresh index.html in your browser.
// ─────────────────────────────────────────────────────────────
window.CONTENT = {
  name: "Andreas Dranidis",
  role: "Senior Software Engineer - Technical Architect",
  location: "", // e.g. "Thessaloniki, Greece"
  bio: "Senior software engineer with deep experience across modern frontend ecosystems and Node.js backends. I thrive in complex codebases, push for clean architecture, and obsess over detail — leaning towards documentation-driven development, refactoring, and long-term maintainability. Strong at shipping fast without sacrificing quality, and equally comfortable shaping APIs and refining UI architecture.",

  // Optional: path to a photo (e.g. "photo.jpg" in this folder). Leave "" to show initials.
  photo: "images/photo-3.jpg",

  email: "adranidisb@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/kubigr" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/andreas-dranidis-086ab084/" },
    { label: "infra.ws", url: "https://infra.ws" },
  ],

  // Your project sites. `url` makes the card clickable; `image` is optional (16:9 works best).
  // `inviteOnly: true` shows an "approval needed" note and a "Request access" email link.
  projects: [
    {
      title: "Pick2Play",
      description: "Board game recommendation engine built on BoardGameGeek data — filter by player count, playtime, rating, popularity and weight. Server-rendered and self-hosted.",
      url: "http://pick2play.dranidis.com",
      image: "images/pick2play.jpg",
      tags: ["TypeScript", "Remix", "Prisma", "MySQL", "Docker"],
    },
    {
      title: "Logis",
      description: "Finds big Warhammer 40k tournaments on Best Coast Pairings, pulls army lists on demand, and analyses how team events were paired and played.",
      url: "https://logis.dranidis.com",
      image: "images/logis.jpg",
      tags: ["TypeScript", "PostgreSQL", "Zod", "Vitest", "Playwright"],
      inviteOnly: true,
    },
    {
      title: "Habits",
      description: "A minimal habit tracker inspired by Atomic Habits: streaks, flexible schedules, half-checks, moon phases and a yearly heatmap.",
      url: "https://habits.dranidis.com",
      image: "images/habits.jpg",
      tags: ["TypeScript", "Vite", "Node.js", "PostgreSQL"],
      inviteOnly: true,
    },
  ],

  // Each key becomes a row.
  skills: {
    Languages: ["TypeScript", "JavaScript", "Node.js", "PHP", "C# / .NET", "Java", "ClojureScript", "SQL"],
    Frontend: ["React", "Angular", "TanStack Start / Router / Query", "Remix", "MobX", "Jotai", "SSR", "Styled Components", "shadcn/ui"],
    Backend: ["Node.js", "Fastify", "Laravel", "Spring Boot", "Zod", "Prisma", "Sequelize", "WebSockets"],
    "Data & messaging": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "ActiveMQ / AMQP"],
    Testing: ["Vitest", "Jest", "React Testing Library", "Playwright", "Cucumber (BDD)", "Pact", "MSW"],
    "DevOps & cloud": ["Docker", "GitHub Actions", "Jenkins", "AWS (EC2, RDS, S3, ElastiCache, CloudWatch, Elastic Beanstalk, Route 53)", "nginx", "CapRover", "Portainer"],
    Practices: ["Technical leadership", "Mentoring", "Code review", "Architecture", "Refactoring", "TDD / BDD", "CI/CD", "Static analysis"],
    Certifications: ["AWS Partner: Technical Accredited", "AWS Partner: Sales Accredited"],
    Spoken: ["Greek (native)", "English (professional)", "German (limited working)"],
  },
};
