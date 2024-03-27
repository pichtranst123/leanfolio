const about = {
  // each of these properties is optional - they can be left empty or deleted
  // each element in the `description` array will be treated as a separate paragraph
  name: 'Pich Tran',
  greetingEmoji: '👋',
  role: 'Blockchain Engineer',
  company: 'Allin Labs',
  description: [
    'Skilled in developing resilient smart contracts using Rust and leveraging Move for adaptable contract capabilities, I excel in designing DeFi solutions that decentralize and democratize financial services, circumventing traditional financial intermediaries.',
  ],
  resume: 'https://example.com',
  social: {
    github: 'https://github.com/pichtranst123',
    linkedin: 'https://www.linkedin.com/in/alexandros-de-ares/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/trustcorescreenshot.png',
    name: 'Trust Score',
    description: [
      'The Trust Score feature provides a reliable social network, decentralized identity, and a fair DAO model to establish trustworthiness and bring value to the NEAR ecosystem.',
    ],
    stack: ['Rust', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/pichtranst123/trust-score-v2',
    livePreview: 'https://devfolio.co/projects/trust-score-0527',
  },
  {
    thumbnail: 'images/fastui-bos.png',
    name: 'FastUI',
    description: [
      'FastUI is BOS marketplace build on BOS Near protocol, providing a nice ui and examples bos app, interated smartcontract Near Rust',
    ],
    stack: ['Rust', 'Javascript', 'React'],
    sourceCode: 'https://github.com/pichtranst123/fast-ui-smartcontract',
    livePreview: 'https://near.org/fastui.near/widget/FastUI',
  }
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'JavaScript',
  'TypeScript',
  'React',
  '.NET Core',
  'Rust',
  'Move',
  'Git',
  'CI/CD',
  'Azure',
  'Postgresql',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'hoangpichgoodkid@email.com',
}

export { about, projects, skills, contact }
