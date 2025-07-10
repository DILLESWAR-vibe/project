import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// Hero-Section

export const myInfo = {
  name: "Dilleswar",
  surname: "Koda",
  email: "example@gmail.com",
  
};

export const rolesList = [
  "Cloud Developer",
  "DevOps Engineer",
  "Cloud Architect",
];

export const scrollTextData = [
  {
    id: 1,
    text: `I don’t just move data to the cloud—I elevate businesses with scalable, secure, and seamless solutions `,
  },
  {
    id: 2,
    text: `Reliability isn’t a feature; it’s a promise. I design cloud systems that keep your business running 24/7.`,
  },
  {
    id: 3,
    text: `My job is to make the cloud work for you—scalable, secure, and stress-free`,
  },
];

export const navLinks = [
  { id: 1, name: "home", link: "#home" },
  { id: 2, name: "about", link: "#about" },
  { id: 3, name: "experience", link: "#experience" },
  { id: 4, name: "projects", link: "#projects" },
  { id: 5, name: "contact", link: "#contact" },
];

export const social_links = [
  {
    id: 1,
    name: "instagram",
    icon: FaInstagram,
    link: "",
  },
  {
    id: 2,
    name: "linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/dhanushbabu-karumanchi/",
  },
  {
    id: 3,
    name: "twitter",
    icon: FaXTwitter,
    link: "",
  },
];

// About Section

export const about = {
  para_1: `Hiii everyone! I'm Dilleswar. In today's fast-paced tech
            world, automation and scalability are the keys to success. As a
            DevOps enthusiast with a strong foundation in AWS, I am on a journey
            to bridge the gap between development and operations, ensuring
            efficiency, reliability, and seamless deployments.`,
  para_2: `Many believe DevOps is just about tools, but it's a culture of
            collaboration, automation, and continuous improvement. By focusing
            on efficiency, security, and scalability, I aim to help businesses
            build resilient and high-performing systems.`,
};

export const skills = [
  "Amazon Web Services",
  "Linux",
  "Windows",
  "Python",
  "Powershell Scripting",
  "Photoshop",
  "Pagemaker",
  "Illustrator",
  "MS Office",
  "Outlook",
  "WordPress",
];

export const resumeLink = "";

// Experience Section

export const experience = [
  {
    id: 1,
    company: "HOLPEN ENTERPRISES",
    role: "AWS Cloud Engineer",
    type: "Internship",
    duration: "Feb 2025 – Present",
    accomplishments: [
      `Configured AWS services including EC2, S3, and RDS to deploy and scale cloud infrastructure for client applications.`,
      `Automated infrastructure provisioning using AWS CloudFormation to streamline deployment processes and reduce manual efforts.`,
      `Monitored system performance using AWS CloudWatch, setting up alerts and dashboards to ensure 99.9% application uptime.`,
    ],
    logo: "https://www.holpen.in/web/image/281-ba969232/Holpen%20Logo%202%20white.webp",
  },
  {
    id: 2,
    company: "Internship Studio",
    role: "Amazon Web Services",
    type: "Intern",
    duration: "Jul 2024 – Aug 2024",
    accomplishments: [
      `Developed a serverless web application using AWS Lambda, API Gateway, and DynamoDB, improving scalability and reducing infrastructure costs.`,
      `Implemented security best practices by configuring IAM roles and security groups to safeguard resources and user data.`,
      `Collaborated with the DevOps team to optimize application performance using AWS Elastic Load Balancing (ELB) and Auto Scaling.`,
    ],
    logo: "https://internshipstudio.com/static/media/main-logo-2.f67ded407bafbded8626.webp",
  },
  {
    id: 3,
    company: "Extion Infotech",
    role: "Cloud Engineer",
    type: "Intern",
    duration: "Feb 2024 – Apr 2024",
    accomplishments: [
      `Configured AWS services including EC2, S3, and RDS to deploy and scale cloud infrastructure for client applications.`,
      `Automated infrastructure provisioning using AWS CloudFormation to streamline deployment processes and reduce manual efforts.`,
      `Monitored system performance using AWS CloudWatch, setting up alerts and dashboards to ensure 99.9% application uptime.`,
    ],
    logo: "https://www.extioninfotech.com/web/image/4880-4c90b6e5/IMG-20240318-WA0005_1___1_-removebg-preview.webp",
  },
];

export const experienceImage =
  "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// Projects Section

export const projects = [
  {
    title: "Fake Logo Detection by Using ML",
    description: [
      `Developed a machine learning model using CNNs to identify and classify fake logos,
      Integrated the trained model into a web-based application for real-time logo detection.`,
    ],
    tools: ["CNN", "Data Augmentation", "Image Preprocessing"],
    link: "",
  },
  {
    title: "Cloud Infrastructure Automation",
    description: [
      `Designed and implemented a cloud automation solution using Infrastructure as Code.
      Automated deployment, scaling, and monitoring of microservices across multi-cloud environments.`,
    ],
    tools: ["AWS", "Terraform", "Docker"],
    link: "",
  },
];

// footer section
export const footerDetails = {
  name: "Dilleswar Koda",
  email: "example@gmail.com",
  designation: "Cloud Developer",
};
