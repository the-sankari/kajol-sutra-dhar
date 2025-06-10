// src/data/projects.js

export const projects = [
  {
    id: "1",
    slug: "all-stars-helsinki-2-0",
    name: "All Stars Helsinki 2.0",
    description: `**All Stars Helsinki** is a modern football team website.

### Features
- Firebase login for players
- Team stats dashboard
- Mobile-first design with Tailwind`,
    tags: ["Next.js", "Firebase", "Tailwind"],
    github: "https://github.com/the-sankari/all_stars_helsinki_2.0",
    live: "https://all-stars-helsinki.web.app",
    image: "https://placehold.co/400x200?text=All+Stars",
    media: "",
    gallery: [
      "https://placehold.co/600x400?text=AllStars+1",
      "https://placehold.co/600x400?text=AllStars+2",
      "https://placehold.co/600x400?text=AllStars+3",
    ],
    challenges: [
      "Integrating real-time Firebase updates",
      "Optimizing image loading on match page",
      "Creating a reusable player card UI",
    ],
  },
  {
    id: "2",
    slug: "druid-frontend",
    name: "Druid Frontend",
    description: `Frontend for **Druid.fi** powered by React and Redux Toolkit. Uses JSON:API from Drupal 10 and personalization from Mautic.`,
    tags: ["React", "Drupal", "JSON:API", "Mautic"],
    github: "https://github.com/Druid-Project/druid_frontend",
    live: "",
    image: "https://placehold.co/400x200?text=Druid",
    media: "",
    gallery: [
      "https://placehold.co/600x400?text=Druid+Hero",
      "https://placehold.co/600x400?text=Druid+Blog",
    ],
    challenges: [
      "Fetching and rendering Paragraph-based content",
      "Custom module for segment-based filtering",
      "Theme integration with JSON:API views",
    ],
  },
  {
    id: "3",
    slug: "countries-react-app",
    name: "Countries React App",
    description: `Explore countries with flags, capitals, and population stats using REST API.`,
    tags: ["React", "REST API"],
    github: "https://github.com/the-sankari/countries-react-app",
    live: "",
    image: "https://placehold.co/400x200?text=Countries",
    media: "",
    gallery: [
      "https://placehold.co/600x400?text=Country+Search",
      "https://placehold.co/600x400?text=Details+Page",
    ],
    challenges: [
      "REST API pagination and error handling",
      "Filter UI with region and language",
    ],
  },
  {
    id: "4",
    slug: "travel-buddy",
    name: "Travel Buddy",
    description: `Collaborative trip planner with Firebase backend. Built during the team project phase.`,
    tags: ["React", "Firebase"],
    github: "https://github.com/the-sankari/travel-buddy-team-3",
    live: "",
    image: "https://placehold.co/400x200?text=Travel+Buddy",
    media: "",
    gallery: [
      "https://placehold.co/600x400?text=Planner+Map",
      "https://placehold.co/600x400?text=Trip+View",
    ],
    challenges: [
      "Multi-user trip data sync",
      "Firestore structure for trips and days",
    ],
  },
  {
    id: "5",
    slug: "redux-countries-app",
    name: "Redux Countries App",
    description: `Redux-powered version of Countries App for better state management.`,
    tags: ["React", "Redux Toolkit"],
    github: "https://github.com/the-sankari/redux_countries_app",
    live: "",
    image: "https://placehold.co/400x200?text=Redux+Countries",
    media: "",
    gallery: [],
    challenges: [
      "Managing global state with Redux Toolkit",
      "Memoizing selectors for performance",
    ],
  },
  {
    id: "6",
    slug: "symfony-bookstore",
    name: "Symfony Bookstore",
    description: `Backend for an online bookstore with user authentication and admin product management.`,
    tags: ["Symfony", "PHP"],
    github: "https://github.com/the-sankari/symfony-bookstore",
    live: "",
    image: "https://placehold.co/400x200?text=Symfony+Bookstore",
    media: "",
    gallery: [
      "https://placehold.co/600x400?text=Admin+Panel",
      "https://placehold.co/600x400?text=Book+View",
    ],
    challenges: [
      "Doctrine ORM and relationships",
      "Symfony form validation and CSRF protection",
    ],
  },
  {
    id: "7",
    slug: "youtube-clone",
    name: "YouTube Clone",
    description: `Frontend YouTube UI clone using React and public APIs. Simulates video browsing experience.`,
    tags: ["React", "YouTube API"],
    github: "https://github.com/the-sankari/youtube-clone",
    live: "",
    image: "https://placehold.co/400x200?text=YouTube+Clone",
    media: "",
    gallery: [
      "https://placehold.co/600x400?text=Video+List",
      "https://placehold.co/600x400?text=Playback+Page",
    ],
    challenges: [
      "Integrating YouTube API and handling CORS",
      "Building responsive sidebar",
    ],
  },
];
