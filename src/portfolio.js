const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AbhinavTiruvee.github.io',
  title: 'AT',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abhinav Tiruveedhula',
  role: 'Software Developer',
  description:
    'I am a Computer Science major currently enrolled at the University of Texas at Austin, driven by a strong passion for software development. With two previous internships under my belt, I am eagerly seeking an internship opportunity for the summer of 2024. If you have a role that aligns with my skill set, please get in touch with me.',
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
    name: 'Impact of Online Stock Recommendations',
    description:
      'Research and research report on validity of online stock recommendations before 2017',
    stack: ['R', 'Python', 'Excel'],
    sourceCode: 'https://github.com/AbhinavTiruvee/OnlineStockRecommendations',
  },
  {
    name: 'Valorant Statistics using APIs',
    description:
      'From a given Valorant player\'s username, advanced metrics are given using the Valorant API',
    stack: ['Python'],
    sourceCode: 'https://github.com/AbhinavTiruvee/ValorantStats',
  },
  {
    name: 'Personal Portfolio Website',
    description:
      'Made a website that provides information about my software development background',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/AbhinavTiruvee/newportfolio',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'R',
  'SQL',
  'JavaScript',
  'React',
  'Django',
  'Excel',
  'AWS',
  'Docker',
  'Postman',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abhinav.tiruveedhula@utexas.edu',
}

export { header, about, projects, skills, contact }
