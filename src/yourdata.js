export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Drexlar',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 You found me! I am Michael Agboola.',
                        //Line 2 For Header
                        'Software Engineer at',
                        //Line 3 For Header
                        'Terragon Group'
    ],
        //Contact Email
        contactEmail:'drexlar37@gmail.com',
        // Add Your About Text Here
        abouttext: [`I am a Fullstack Software Engineer experienced in building web and mobile technologies, working with databases and deploying applications to scale, I have worked on both fun and challenging projects that include building APIs to scale, creating awesome interfaces, working with complex queries for Databases and deploying/managing applications.`,
        `I have over the years gained knowledge of and used Micro-service architechture, Serveless(AWS lambda), Python, Javascript (NodeJS, expressJS, restify), RabbitMQ, Kafka, AWS SQS, MongoDB, Elasticsearch, Redis, MySql, AWS S3, Digitalocean, Docker.`],
        aboutImage:'https://instagram.flos1-1.fna.fbcdn.net/v/t51.2885-15/e35/65034834_642923079518296_2020613577682943144_n.jpg?_nc_ht=instagram.flos1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=vDL8yJ7YRAcAX9SmA_s&oh=5b584d05eb50a587be7b41cf7f9bb04b&oe=5EC8BA99',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Savests', //Project Title - Add Your Project Title Here
             service:'Mobile App', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://lh3.googleusercontent.com/Q_3q3teQYlvvO6oP7m49gGVFw7BKkMS2tj4QQY--hBLzXQpbENulgCI6pyvXvqb1nXA=s360-rw",
             //Project URL - Add Your Project Url Here
             url:'https://play.google.com/store/apps/details?id=com.savests.main'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Apptiku',
                service: 'Mobile App',
                imageSrc: "https://lh3.googleusercontent.com/pgTmWCTASAxvpEcP2tYXN6DWGWK8rBI46NyRWkYPjY5bWJmIZrGna44DTw4Rrk3b0ng=s360-rw",
                url: 'https://play.google.com/store/apps/details?id=com.agboolamichael.apptiku'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Audio Converter',
                service: 'Web App',
                imageSrc: require('./images/audio-converter.png'),
                url: 'https://radiant-garden-17845.herokuapp.com/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'drexlar.com.ng',
                service: 'Interactive Site',
                imageSrc: require('./images/drexlar.com.ng.png'),
                url: 'https://drexlar.com.ng'
           }

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
        works:[
            {
             id: 1,//DO NOT CHANGE THIS (Please)😅
             title:'Terragon Group', //Project Title - Add Your Project Title Here
              service:'Software Engineer', // Add Your Service Type Here
             //Project Image - Add Your Project Image Here
              date: 'May 2019 - Present',
              workDescription:[`Worked alongside other engineers that developed an auto-top-up subscription service, I joined the backend team to build the engine that handles all interactions.`,
 
              `Led the team of engineers to develop, maintain and add features to a bulk SMS platform that schedules campaigns to run and does targeted marketing for millions of users.`,
              
              `Wrote an encryption library to be used by various teams in the organization.`],
              //Project URL - Add Your Project Url Here
              url:'https://play.google.com/store/apps/details?id=com.savests.main'
             },
             {
                 id: 2,//DO NOT CHANGE THIS (Please)😅
                 title: 'Sone Aeon Technologies',
                 service: 'Software Engineer',
                 date: 'Jan 2018 - April 2019',
                 workDescription: [`Designed and developed various websites ranging from simple websites to e-commerce site.`,
                 `Developed mobile applications for clients (hybrid and native).`],
                 url: 'https://play.google.com/store/apps/details?id=com.agboolamichael.apptiku'
             },
             { 
                 id: 3,//DO NOT CHANGE THIS (Please)😅
                 title: 'Naikobs',
                 service: 'Software Engineer',
                 date: 'Nov 2015 - August 2016',
                 workDescription: [`Designed and developed websites, web plugins, payment systems, school management systems and android applications.`, 
 
                 `Modelled and designed a smoke detection system to prevent fire outbreaks in homes and offices.`],
                 url: 'https://radiant-garden-17845.herokuapp.com/'
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
            {   name:'Github',
                url:'https://github.com/drexlar5'},
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/michael-agboola-20462799/'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/drexlar01'
            },
            // {
            //     name: 'Instagram',
            //     url: 'https://www.instagram.com/cv.uidesign/'
            // }

        ]
    }