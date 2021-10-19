/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rajat's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rajat Kashyap Portfolio",
    type: "website",
    url: "https://rajat-zee.github.io/Portfolio/#/",
  },
};

//Home Page
const greeting = {
  title: "Rajat Kashyap",
  logo_name: "Rajat Kashyap",
  nickname: "Razee",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1u3Vcl270T_XbfdIfPnPz-ywaLRIWq3hV/view?usp=sharing",
  portfolio_repository: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fgeneral-kenobi-kenobi-general-hello-there-star-wars-gif-13723705&psig=AOvVaw3enEuIma7vQW-uW673FmWE&ust=1634739434076000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJD_hpDV1vMCFQAAAAAdAAAAABAD",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Rajat-zee",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajat-kashyap-a35b59201/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:rajat1554.cse18@chitkara.edu.in",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
  
  
];

const skills = {
  data: [
    {
      title: "Programming Languages",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Intermediate in Data Structures and Algorithms",
        "⚡ Proficient in Python",
        "⚡ Familiarity with Java, C++ and C language",
      ],
      softwareSkills: [
    
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Django",
        "⚡ Creating application api in Django REST framework",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Django REST",
          fontAwesomeClassname: "eos-icons:api-outlined",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
      ],
    },
    {
      title: "Databases and Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platform",
        "⚡ Hosted and maintained websites on virtual machine instances along with integration of database ",
        "⚡ Proficient in SQL RDBMS",
        "⚡ Familiarity with PostgreSQL and MongoDB",
      ],
      softwareSkills: [
        
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "vscode-icons:file-type-sql",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            color: "#FFCA28",
          },
        },
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        
      ],
    },
    {
      title: "Extras",
      fileName: "DesignImg",
      skills: [
        "⚡ Knowledge of basic project implimentaions on Git and Github",
        "⚡ Done a course on cybersecurity",
        "⚡ Basics of Digital maketing(SEO, Wordpress, Affiliate Marketing, etc)",
      ],
      softwareSkills: [
        {
          skillName: "GIt and Github",
          fontAwesomeClassname: "cib:git",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Cybersecurity",
          fontAwesomeClassname: "healthicons:security-worker",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Digital Marketing",
          fontAwesomeClassname: "icon-park:market-analysis",
          style: {
            color: "#FF2BC2",
          },
        },
        
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      //profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      //profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "green",
      },
      //profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      //profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chitkara University Punjab",
      subtitle: "B.E. in Computer Science Engineering",
      logo_path: "chitkara.png",
      alt_name: "IIITDM Kurnool",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I have done my specialization in Python [Web development , Data science and Image recognition]",
        "⚡ Took part in various activities organised in our campus like hackathons, seminars, webinars ,etc",
      ],
      website_link: "https://www.chitkara.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python",
      subtitle: "- by NPTEL",
      logo_path: "nptel.png",
     // certificate_link:
        //"https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#AC504C",
    },
    {
      title: "Cyber Security",
      subtitle: "- by Cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1FrQt1kcx8tvHIpPHyC1jv5CW7If7XnrM/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#33E1FF",
    },
    {
      title: "Disaster Management",
      subtitle: "- by Humanitary Leadership Academy",
      logo_path: "human.png",
      certificate_link:
        "https://drive.google.com/file/d/1erMlLUjKOYBVPtcGSaixtpU-CaEagXtY/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#fc5203",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As I am a 4th year undergraduate, I have yet to get an internship or a job title but I have worked on various projects and participated in coding challenges",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        
      ],
    },
    {
      title: "Internships",
      experiences: [
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "Hi I am Rajat, a starter in developer role. I can help you with ML, React, Cloud and Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    //link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "#1649, Sec-10 Ambala City , Haryana",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Au7CNDCBzZkhCY4BA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8168250710",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
