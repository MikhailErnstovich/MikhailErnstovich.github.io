export type TimelineEvent = {
  interval: string,
  title: string,
  organization: string,
  link: string,
  activities: string[],
  icon: string,
};

export const timeline: TimelineEvent[] = [
  { 
    interval: 'Aug 2022 — till now',
    title: 'Frontend developer',
    organization: 'FlatSoftware',
    link: 'https://flat-soft.ru/',
    activities: [
      'Build new features and maintain existing frontend applications',
      'Work with a variety different technologies: Typescript, Jenkins, Node.js, Express.js, pinia, Vite',
      'Agile worker experience'
    ],
    icon: new URL('~/assets/icons/pc.svg', import.meta.url).href
  },
  {
    interval: 'Aug 2021 — Oct 2021',
    title: 'JavaScript Algorithms and Data Structures Course',
    organization: 'Freecodecamp',
    link: 'https://www.freecodecamp.org/certification/fcc0fb53d16-e07a-4e60-9166-8b61529a2b34/javascript-algorithms-and-data-structures',
    activities: [
      'Solving algoritmic task using JavaScript',
      'Object oriented programming',
    ],
    icon: new URL('~/assets/icons/book.svg', import.meta.url).href
  },
  {
    interval: 'May 2019 — Nov 2020',
    title: 'Interface Development Course by JSC Yandex and MIPT',
    organization: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8',
    activities: [
      'Creating website layouts with HTML & CSS',
      'In deep learning of Javascript (ES5)',
    ],
    icon: new URL('~/assets/icons/book.svg', import.meta.url).href
  },
  {
    interval: 'Aug 2016 — till now',
    title: 'Senior Researcher',
    organization: 'Molecular Electronics Research Institute (JSC MERI)',
    link: 'https://www.niime.ru/en/about/',
    activities: [
      'Theoretical and numerical simulation of various integrated optics devices using Comsol Multiphysics software',
      'Writing scientific papers and their further public presentations',
      'Communication with multi-diciplinary teams of scientists, engineers and managers'
    ],
    icon: new URL('~/assets/icons/chip.svg', import.meta.url).href
  },
  {
    interval: 'Sep 2014 — Jun 2016',
    title: 'Master\'s Degree program',
    organization: 'Moscow Institute of Physics and Technology (MIPT)',
    link: 'https://mipt.ru/english/',
    activities: [
      'Master degree in Applied Mathematics and Physics on Faculty of Physical and Quantum Electronics',
    ],
    icon: new URL('~/assets/icons/book.svg', import.meta.url).href
  },
  {
    interval: 'Sep 2010 — Jun 2014',
    title: 'Undergraduate program',
    organization: 'Moscow Institute of Physics and Technology (MIPT)',
    link: 'https://mipt.ru/english/',
    activities: [
      'Bachelor degree in Applied Mathematics and Physics on Faculty of Physical and Quantum Electronics',
    ],
    icon: new URL('~/assets/icons/book.svg', import.meta.url).href
  },
];