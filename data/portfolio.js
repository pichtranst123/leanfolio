const about = {
  // each of these properties is optional - they can be left empty or deleted
  // each element in the `description` array will be treated as a separate paragraph
  name: 'Ike Ofoegbu',
  greetingEmoji: '👋🏽',
  role: 'Software Engineer',
  // company: 'Acme Labs',
  description: [
    "Specifically, I'm a web developer specializing in frontend development and server-side scripting (I've also dabbled in mobile app development among other things). My passion lies in building web infrastructure that's both performant and scalable.",
    "I graduated from UCLA with a B.S. in Cognitive Science and a Specialization in Computing. In school, I learned about the applications of Computer Science within the study of intelligent systems, both real and artificial. Since then, I've strived to use software as a medium for solving more general problems.",
  ],
  // resume: 'https://example.com',
  social: {
    github: 'https://github.com/magic-ike',
    linkedin: 'https://linkedin.com/in/ike-ofoegbu',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/data-card-for-spotify-preview.png',
    name: 'Data Card for Spotify',
    description: [
      'A web service for embedding dynamically generated Spotify data anywhere on the web',
      'Receives ~200K API calls per month',
    ],
    stack: [
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'Spotify Web API',
      'MongoDB',
      'Redis',
    ],
    sourceCode: 'https://github.com/magic-ike/spotify-data-card',
    livePreview: 'https://www.data-card-for-spotify.com',
  },
  {
    thumbnail: 'images/iodev.io-placeholder-image.png',
    name: 'Express TS Boilerplate',
    description: [
      'A complete template for building RESTful API services with Express and TypeScript (built for developers)',
      'Compiles my learnings and opinions on good web service design, conforming to the model-view-controller (MVC) software design pattern',
    ],
    stack: ['TypeScript', 'Node.js', 'Express'],
    sourceCode: 'https://github.com/magic-ike/express-ts-boilerplate',
  },
  {
    thumbnail: 'images/leanfolio-preview.png',
    name: 'Leanfolio',
    description: [
      'A minimalist portfolio template for developers (used to build this site)',
    ],
    stack: ['React', 'Next.js', 'Google Analytics'],
    sourceCode: 'https://github.com/magic-ike/leanfolio',
    livePreview: 'https://leanfolio.vercel.app',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/atalog-landing-page/master/docs/atalog-site-preview.png',
    name: 'Atalog',
    description: [
      'A closed-source social networking and messaging mobile app for iOS',
      '3K+ lifetime installs',
    ],
    stack: [
      'Swift',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloud Storage',
      'OneSignal',
    ],
    livePreview: 'https://atalog.co',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/regression-neural-network/master/br-simple-10000-0.png',
    name: 'Regression Neural Network',
    description: [
      "A script for visualizing a feedforward neural network's understanding of a math function under different parameters",
    ],
    stack: ['MATLAB', 'MATLAB Deep Learning Toolbox'],
    sourceCode: 'https://github.com/magic-ike/regression-neural-network',
  },
  {
    thumbnail:
      'https://raw.githubusercontent.com/magic-ike/laser-ship-links/master/assets/images/laser-ship-app-icon.webp',
    name: 'Laser Ship',
    description: [
      'A closed-source vertically scrolling shooter mobile game for iOS and Android',
      '5.5K+ lifetime installs',
    ],
    stack: ['C#', 'Unity'],
    livePreview: 'https://magic-ike.github.io/laser-ship-links/',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'JavaScript (ES5/ES6+)',
  'TypeScript',
  'HTML',
  'CSS',
  'PHP',
  'Python',
  'Swift',
  'C++',
  'React',
  'Next.js',
  'Jest',
  'Flow',
  'ESLint',
  'Babel',
  'webpack',
  'Yarn',
  'npm',
  'Node.js',
  'Express',
  'MongoDB',
  'Redis',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'ikeofoegbu99@gmail.com',
}

export { about, projects, skills, contact }
