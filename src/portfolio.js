const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AbhinavTiruvee.github.io/newportfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abhinav Tiruveedhula',
  role: 'Software Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1HvshCj_ZCDxs9Es004-nslM4UhWsVS-6/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/abhinav-tiruveedhula/',
    github: 'https://github.com/AbhinavTiruvee',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'Django',
  'R',
  'SQL',
  'JavaScript',
  'Docker',
  'Git',
  'Postman',
  'React',
  'AWS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abhinav.tiruveedhula@utexas.edu',
}

export { header, about, projects, skills, contact }
