import { Education, Job } from "../types/resume";

export const role = "Engineering Leader";

export const contact = {
  location: "Minneapolis, MN",
  phone: "740-675-9863",
  email: "james.lee.roberts1@gmail.com",
};

export const summary =
  "Engineering leader with over 9 years of experience in software development, including two years managing a mobile engineering team and prior experience leading cross-functional retail teams at CarMax. Deep technical background in Kotlin, Java, and Android, with demonstrated success leading rewrites, raising quality standards, and achieving high crash-free rates. Passionate about coaching, mentoring and team building, aiming to grow high-performing engineering teams that ship reliable software.";

export const jobs: Job[] = [
  {
    title: "Senior Android Application Developer",
    company: "Corporate Tools LLC",
    dates: "January 2025 - Present",
    location: "Spokane, WA",
    bullets: [
      "Contribute in leading the development of mobile applications",
      "Collaborate with other software engineers to integrate existing technologies",
      "Work closely with other team members, coaching, mentoring, and providing feedback",
      "Implement best practices in mobile development, increasing customer satisfaction",
    ],
  },
  {
    title: "Engineering Manager, Mobile",
    company: "Tinybeans",
    dates: "July 2023 - November 2024",
    location: "New York City, NY",
    bullets: [
      "Lead mobile engineering team, delivering high-quality apps with measurable performance improvements",
      "Oversee project timelines and milestones, ensuring timely and efficient delivery of mobile solutions",
      "Mentor and support team members, fostering a collaborative and innovative work environment",
      "Implement best practices in mobile development, achieving significant increases in user engagement",
      "Improved project test coverages from 0 to 45% and implemented the use of feature flags to increase the quality and stability of releases",
      "Created a standard for observability and traceability throughout the mobile projects to understand how our apps are performing",
    ],
  },
  {
    title: "Lead Android Engineer",
    company: "Tinybeans",
    dates: "August 2022 - July 2023",
    location: "New York City, NY",
    bullets: [
      "Led Android team to deliver high-quality app features, increasing user engagement by 27%",
      "Developed a new rewritten Android app, boosting Play Store rating from 2.2 to over 4 stars",
      "Optimized app performance and enhanced UI/UX for improved user experience",
      "Collaborated with cross-functional teams for seamless app updates",
      "Analyzed user feedback to implement improvements, significantly increasing user satisfaction",
      "Hired, onboarded and mentored new engineers on the team",
    ],
  },
  {
    title: "Android Engineer",
    company: "PagerDuty",
    dates: "January 2022 - August 2022",
    location: "San Francisco, CA",
    bullets: [
      "Developed and maintained Android apps, enhancing user experience and performance",
      "Collaborated with teams to deliver new features, improving app functionality",
      "Conducted code reviews to ensure a high-quality, maintainable codebase",
      "Resolved issues to reduce app crashes and improve stability",
      "Implemented automated testing, increasing code coverage and reliability",
    ],
  },
  {
    title: "Android Developer",
    company: "Babbling Brook",
    dates: "January 2017 - May 2022",
    location: "Nashville, TN",
    bullets: [
      "Developed cutting-edge Android applications, integrating new technologies to enhance user experience and app functionality",
      "Optimized app performance, reducing load times and improving user retention rates through data-driven enhancements",
      "Conducted thorough code reviews and implemented best practices, significantly reducing bug rates in production releases",
      "Pioneered adoption of new Android frameworks, positioning the company at the forefront of mobile development trends",
    ],
  },
  {
    title: "Cross Functional Store Manager",
    company: "CarMax Auto Superstores, Inc",
    dates: "2001 - 2018",
    location: "Richmond, VA",
    bullets: [
      "Led and developed a cross-functional team of 10-15 associates spanning sales, service, merchandising, and operations",
      "Provided ongoing coaching, feedback, and performance management to grow associates and support their development",
      "Owned store budget and performance metrics, developing and executing strategies to meet operational targets",
      "Managed daily operations and staffing levels, analyzing and presenting business results to the general manager and other stakeholders",
    ],
  },
];

export const education: Education[] = [
  {
    credential: "Kotlin Android Developer Nanodegree",
    institution: "Udacity",
    dates: "2021",
    location: "Emeryville, CA",
  },
  {
    credential: "B.S Computer Science (Coursework)",
    institution: "Middle Tennessee State University",
    dates: "2001 - 2003",
    location: "Murfreesboro, Tennessee",
  },
];

export const techSkills = [
  "Kotlin",
  "Java",
  "Android",
  "Jetpack Compose",
  "Coroutines",
  "Software Architecture",
  "Automated Testing",
  "CI/CD",
  "GitLab CI",
  "GitHub Actions",
  "Observability",
  "Feature Flags",
  "Release Management",
  "Code Review",
];

export const leadershipSkills = [
  "Team Building",
  "Hiring & Onboarding",
  "Coaching & Mentoring",
  "Performance Management",
  "Cross-Functional Collaboration",
  "Delivery Planning",
  "Stakeholder Communication",
];
