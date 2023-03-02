const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ks375.github.io/myportfolio',
  title: 'Software Engineer',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'James Zhang',
  role: 'Front End Engineer',
  description:
    `Working at Several Companies as a LEAD Developer and having hands-on experience under my belt. So far I have 10 years Fullstack and 3+ years Lead experience.
     Always try and keep the pace with the brand new field and dig into cutting-edge technology.`,
  resume: 'https://drive.google.com/file/d/1S1lHjUmuou2yp3AVf5JSJ2GnIs4Fj3so/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/james-zhang-217980257/',
    github: 'https://github.com/ks375',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'DCX-React-library',
    description:
      `dcx-react-library is a React library with a set of components ready to use in your project.
      There are plenty of libraries available in React that can help to increase your productivity however most of them contain lots of css and are hard to style based on your project's requirements.`,
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Capgemini/dcx-react-library',
    livePreview: 'https://capgemini.github.io/development/dcx-react-library/',
  },
  {
    name: 'Capgemini Teams',
    description:
      'Capgemini Teams is an secured internal teams application designed to manage rooms and meetings',
    stack: ['Styled-Component', 'Microsoft Graph', 'TypeScript', 'React'],
  },
  {
    name: 'Deri Trade',
    description:
      'DERI Trade brings innovate ideas into BNB Chain with real yield, copytrading , various products (FX,Crypto,Metals,Equity)',
    stack: ['Blockchain', 'Web3', 'SDK', 'TypeScript', 'React'],
    livePreview: 'https://deri.trade/',
  },
  {
    name: 'Healthcare Platform',
    description:
      'Amita health is a healthcare platform to provide services for an immediate care',
    stack: ['Redux', 'Javascript', 'React'],
    livePreview: 'https://www.amitahealth.org',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML (10+)',
  'CSS (10+)',
  'JavaScript (12+)',
  'TypeScript (5+)',
  'React (9+)',
  'Redux (5+)',
  'SASS (6+)',
  'Material UI (5+)',
  'Styled Component (4+)',
  'Chakra (3+)',
  'Git (10+)',
  'AWS (4+)',
  'GCP (4+)',
  'Azure (3+)',
  'Terraform (2+)',
  'CI/CD (4+)',
  'Jest (3+)',
  'Enzyme (2+)',
  'Cypress (3+)',
  'Mocha (2+)',
  'Chai (2+)'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jameszh38@outlook.com',
}

export { header, about, projects, skills, contact }
