export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "Drexlar",
  headerTagline: [
    //Line 1 For Header
    "Hi 👋 You found me! I am Michael Agboola.",
    //Line 2 For Header
    "Software Engineer at",
    //Line 3 For Header
    "Blusalt Financial Service",
  ],
  //Contact Email
  contactEmail: "drexlar37@gmail.com",
  // Add Your About Text Here
  abouttext: [
    `I am a Fullstack Software Engineer experienced in building web and mobile technologies, working with databases and deploying applications to scale, I have worked on both fun and challenging projects that include building APIs to scale, creating awesome interfaces, working with complex queries for Databases and deploying/managing applications.`,
    `I have over the years gained knowledge of and used micro-services, APIs, AWS, Digitalocean, GCP, Jenkins, Docker, Kubernetes, circleCI, queuing systems (RabbitMQ, Kafka, SQS), Typescript, JavaScript, PHP, ReactJs, VueJs, NodeJS, expressJs, Python, Mocha, Chai, Jest, Sinon, postgreSQL, mySQL, mongoDB, Redis and Elasticsearch.`,
  ],
  aboutImage:
    "https://drexlar5.github.io/images/profile.png",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    //    {
    //     id: 1,//DO NOT CHANGE THIS (Please)😅
    //     title:'Savests', //Project Title - Add Your Project Title Here
    //      service:'Mobile App', // Add Your Service Type Here
    //     //Project Image - Add Your Project Image Here
    //      imageSrc:"https://lh3.googleusercontent.com/Q_3q3teQYlvvO6oP7m49gGVFw7BKkMS2tj4QQY--hBLzXQpbENulgCI6pyvXvqb1nXA=s360-rw",
    //      //Project URL - Add Your Project Url Here
    //      url:'https://play.google.com/store/apps/details?id=com.savests.main'
    //     },
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Apptiku",
      service: "Mobile App",
      imageSrc:
        "https://lh3.googleusercontent.com/pgTmWCTASAxvpEcP2tYXN6DWGWK8rBI46NyRWkYPjY5bWJmIZrGna44DTw4Rrk3b0ng=s360-rw",
      url:
        "https://play.google.com/store/apps/details?id=com.agboolamichael.apptiku",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Audio Converter",
      service: "Web App",
      imageSrc: require("./images/audio-converter.png"),
      url: "https://radiant-garden-17845.herokuapp.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "drexlar.com.ng",
      service: "Interactive Site",
      imageSrc: require("./images/drexlar.com.ng.png"),
      url: "https://drexlar.com.ng",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Simple React Ecommerce App ",
      service: "Web App",
      imageSrc: require("./images/ezewholesale.png"),
      url: "https://eze-wholesale.herokuapp.com/", // 
    },

    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Vue Emoji Color Picker ",
      service: "Web App",
      imageSrc: require("./images/color-picker.png"),
      url: "http://emoji-color-picker.herokuapp.com/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Newspaper Stand",
      service: "Web App",
      imageSrc: require("./images/tns.png"),
      url: "https://festive-keller-4a3f5a.netlify.app/",
    },
    /*

        If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        service: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],
  works: [
    // {
    //   id: 1, //DO NOT CHANGE THIS (Please)😅
    //   title: "Eze wholesale",
    //   service: "Senior Software Engineer",
    //   date: "Nov 2020 - Present",
    //   workDescription: [
    //     `Building a B2B marketplace allowing buyers & sellers to trade electronics in wholesale quantities with real-time market data.`,
    //   ]
    // },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Blusalt Financial Service",
      service: "Software Engineer",
      date: "June 2020 - Present",
      workDescription: [
        `Leading a team to build an integrated messaging (sms and whatsapp) and auto-topup platform that uses machine learning and big data analytics to provide its users with the optimal sms and airtime topup experience.`,

        `Built an integrated magazine and newspaper platform that helps users get all the information they need on one platform.`,

        `Building an integrated identity and anti-money laundry detection platform for Africa.`
      ]
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "BGPC",
      service: "Senior Software Engineer",
      date: "April 2020 - Nov 2020",
      workDescription: [
        `Working with other engineers to develop and maintain a web platform that supports entrepreneurs who wish to grow their projects.`,
      ]
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Terragon Group", //Project Title - Add Your Project Title Here
      service: "Software Engineer", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      date: "May 2019 - April 2020",
      workDescription: [
        `Worked with other engineers to build a service that leverages USSD technology from MNOs to automatically top up a user's account when the user is low on airtime with the specified amount set by the user on subscription to the service, I joined the backend team to build the engine that handles all interactions.`,

        `Led the team of engineers to develop, maintain and add features to a customized bulk SMS platform that schedules campaigns to run and does personalized and targeted marketing for millions of users.`,

        `Worked with other engineers to build a service that manages user rewards and exposes APIs that allow clients get airtime top-up.`,

        `Wrote an encryption library to be used by various teams in the organization.`,
      ]
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Sone Aeon Technologies",
      service: "Software Engineer",
      date: "Jan 2018 - April 2019",
      workDescription: [
        `Designed and developed various websites ranging from simple websites to e-commerce site.`,
        `Developed mobile applications for clients (hybrid and native).`,
      ]
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Naikobs",
      service: "Software Engineer",
      date: "Aug 2016 - December 2017",
      workDescription: [
        `Designed and developed websites, web plugins, payment systems, school management systems and android applications.`,

        `Modelled and designed a smoke detection system to prevent fire outbreaks in homes and offices.`,
      ]
    },
    //     {
    //         id: 4,//DO NOT CHANGE THIS (Please)😅
    //         title: 'Project Four',
    //         service: 'Branding',
    //         workDescription: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //         url: 'http://chetanverma.com/'
    //    }

    /*
 
      If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
      ,{
        id: 5,
        title: 'Project Five',
        service: 'Something Amazing',
        workDescription: "",
        url: ''
      }
    */
  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: "Github", url: "https://github.com/drexlar5" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/michael-agboola-20462799/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/drexlar01",
    },
    // {
    //     name: 'Instagram',
    //     url: 'https://www.instagram.com/cv.uidesign/'
    // }
  ],
};
