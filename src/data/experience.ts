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
    company: "Grey Stone International",
    href: "https://www.greystonedhaka.com/",
    position: [
      {
        title: "Senior Operations Manager",
        employment: "Full-time",
        location: "Dhaka, Bangladesh",
        startDate: "Jan 2019",
        endDate: "Present",
        summary: [
          "Build and maintain the business website and email servers",
          "Facilitate sourcing and procurement of raw material and supervise its distribution",
          "Develop operational and risk management strategies",
        ],
      },
      {
        title: "Merchandiser",
        employment: "Full-time",
        location: "Dhaka, Bangladesh",
        startDate: "Aug 2014",
        endDate: "Dec 2018",
        summary: [
          "Resolved client issues at all stages of production",
          "Optimized and secured mutually beneficial deals with buyers, suppliers, and factories",
          "Facilitated all communication among stakeholders",
        ],
      },
    ],
  },
  {
    company: "Freelance",
    href: "https://www.jaspercode.com/",
    position: [
      {
        title: "Frontend Developer",
        employment: "Contractual",
        location: "Remote",
        startDate: "2020",
        endDate: "Present",
        summary: [
          "Offer React-based frontend development services to clients",
          "Provide UI/UX designs for web applications",
        ],
      },
    ],
  },
  {
    company: "Music",
    position: [
      {
        title: "Lead Vocalist",
        employment: "Self-employed",
        location: "Dhaka, Bangladesh",
        startDate: "2005",
        endDate: "Present",
        summary: [
          "Performed solo and as a lead vocalist of multiple bands in many high-profile venues across Dhaka and on national tours",
        ],
      },
      {
        title: "Audio Engineer",
        employment: "Self-employed",
        location: "Dhaka, Bangladesh",
        startDate: "2005",
        endDate: "Present",
        summary: ["Mixed and mastered multiple successful musical albums"],
      },
      {
        title: "Music Producer",
        employment: "Self-employed",
        location: "Dhaka, Bangladesh",
        startDate: "2005",
        endDate: "Present",
        summary: [
          "Composed, arranged, and produced multiple successful musical acts",
        ],
      },
    ],
  },
];

export default experience;
