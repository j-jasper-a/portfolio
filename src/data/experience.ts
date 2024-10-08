type PositionProps = {
  title: string;
  employment: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string[];
};

export type ExperienceProps = {
  company: string;
  href: string;
  position: PositionProps[];
};

const experience = [
  {
    company: "Canvas Developers",
    href: "https://www.linkedin.com/company/canvasdevs/",
    position: [
      {
        title: "Senior Software Engineer",
        employment: "Full-time",
        location: "Remote",
        startDate: "Jun 2024",
        endDate: "Present",
        summary: [
          "Led the development of a multi-tenant sports management SaaS platform for international users, optimizing performance and scalability.",
          "Developed a centralized REST API to manage authentication, database operations, and third-party API integrations, enhancing system efficiency.",
          "Built an intuitive, custom admin panel to streamline administrative operations, reducing manual processes and improving overall management.",
        ],
      },
    ],
  },
  {
    company: "Grey Stone International",
    href: "https://www.greystonedhaka.com/",
    position: [
      {
        title: "Software Engineer",
        employment: "Full-time",
        location: "Dhaka, Bangladesh",
        startDate: "Mar 2022",
        endDate: "May 2024",
        summary: [
          "Developed the landing page and dashboard for an international fintech startup, contributing to a successful launch.",
          "Refactored an international mid-scale ad optimization company's website for mobile responsiveness and enhanced performance.",
          "Integrated third-party APIs for an international client to improve site functionality and user experience.",
        ],
      },
      {
        title: "Technical Operations Manager",
        employment: "Full-time",
        location: "Dhaka, Bangladesh",
        startDate: "Jan 2019",
        endDate: "Feb 2022",
        summary: [
          "Managed the company’s email server and website, ensuring reliable communication and a smooth online presence.",
          "Monitored and resolved technical issues, maintaining optimal system performance and minimizing downtime.",
          "Facilitated communication with buyers and suppliers, ensuring smooth coordination for orders and shipments.",
        ],
      },
    ],
  },
];

export default experience;
