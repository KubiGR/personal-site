// ─────────────────────────────────────────────────────────────
//  Edit this file to update your site. No build step needed —
//  save and refresh index.html in your browser.
// ─────────────────────────────────────────────────────────────
window.CONTENT = {
  name: "Andreas Dranidis",
  role: "Senior Software Engineer - Technical Architect",
  location: "", // e.g. "Thessaloniki, Greece"
  bio: "Senior full-stack engineer and technical lead with six years of production TypeScript, Node.js and React, most recently as senior engineer and team technical lead on a B2B betting platform. Strongest in real-time systems, API design and contract testing, and in turning large codebases into well-typed, well-tested, maintainable ones. Comfortable owning services in production, including on-call and incident response. Former part-time university lecturer in software development. Based in Greece, working remotely with EU teams.",

  // Optional: text for the small status dot on your photo (shown on hover). Leave "" to hide the dot.
  status: "Thessaloniki, GR · Open to architecture & senior roles",

  // Optional: path to a photo (e.g. "photo.jpg" in this folder). Leave "" to show initials.
  photo: "images/photo-3.jpg",

  email: "adranidisb@gmail.com",
  links: [
    { label: "GitHub", url: "https://github.com/kubigr" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/andreas-dranidis" },
    { label: "infra.ws", url: "https://infra.ws" },
  ],

  // Your project sites. `url` makes the card clickable; `image` is optional (16:9 works best).
  // `icon` is a small badge next to the title (any Lucide icon included in index.html).
  // `repo` adds a "Source" link. `inviteOnly: true` shows an "approval needed" note and a "Request access" email link.
  projects: [
    {
      title: "Pick2Play",
      icon: "dices",
      description: "Board game recommendation engine built on BoardGameGeek data — filter by player count, playtime, rating, popularity and weight. Server-rendered and self-hosted.",
      url: "https://pick2play.dranidis.com",
      repo: "https://github.com/KubiGR/pick-2-play",
      image: "images/pick2play.jpg",
      tags: ["TypeScript", "React", "Remix", "Prisma", "MySQL", "Docker"],
    },
    {
      title: "Logis",
      icon: "swords",
      description: "Finds large Warhammer 40k tournaments on Best Coast Pairings, fetches army lists on demand through a slow background queue, and analyses how team events were paired and played.",
      url: "https://logis.dranidis.com",
      repo: "https://github.com/KubiGR/bcp-scrapper",
      image: "images/logis.jpg",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Zod", "Vitest", "Playwright", "Docker"],
      inviteOnly: true,
    },
    {
      title: "Habits",
      icon: "circle-check",
      description: "A minimal habit tracker inspired by Atomic Habits, installable on phones and usable offline: flexible schedules, schedule-aware streaks, half-checks and yearly heatmaps.",
      url: "https://habits.dranidis.com",
      repo: "https://github.com/KubiGR/habits",
      image: "images/habits.jpg",
      tags: ["TypeScript", "React", "Vite", "Node.js", "PostgreSQL", "Docker"],
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
    Practices: ["Technical leadership", "Line management", "Mentoring", "Code review", "Architecture", "Contract testing", "On-call & incident response", "Refactoring", "TDD / BDD", "CI/CD", "Static analysis", "University teaching"],
    Certifications: ["AWS Partner: Technical Accredited", "AWS Partner: Sales Accredited"],
    Spoken: ["Greek (native)", "English (professional)", "German (limited working)"],
  },

  // Optional link shown after the certification badges.
  certificationsLink: { label: "Verify on Credly", url: "https://www.credly.com/users/andreas-dranidis" },
};
