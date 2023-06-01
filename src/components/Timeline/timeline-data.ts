export type TimelineEvent = {
  interval: string,
  title: string,
  organization: string,
  link: string,
  activities: string[],
  icon: string,
  order: number,
};

export const timelineData: { en: TimelineEvent[], ru: TimelineEvent[]}  = {
  en: [
    {
      order: 6, 
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
      order: 5,
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
      order: 4,
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
      order: 3,
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
      order: 2,
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
      order: 1,
      interval: 'Sep 2010 — Jun 2014',
      title: 'Undergraduate program',
      organization: 'Moscow Institute of Physics and Technology (MIPT)',
      link: 'https://mipt.ru/english/',
      activities: [
        'Bachelor degree in Applied Mathematics and Physics on Faculty of Physical and Quantum Electronics',
      ],
      icon: new URL('~/assets/icons/book.svg', import.meta.url).href
    },
  ],
  ru: [
    {
      order: 6, 
      interval: '08.2022 — ...',
      title: 'Front-end разработчик',
      organization: 'FlatSoftware',
      link: 'https://flat-soft.ru/',
      activities: [
        'Поддерживал существующие решения и добавлял новые функции',
        'Использовал следующие технологиями: Typescript, Jenkins, Node.js, Express.js, pinia, Vite',
        'Работал по Agile'
      ],
      icon: new URL('~/assets/icons/pc.svg', import.meta.url).href
    },
    {
      order: 5,
      interval: '08.2021 — 10.2021',
      title: 'Курс JavaScript Algorithms and Data Structures',
      organization: 'Freecodecamp',
      link: 'https://www.freecodecamp.org/certification/fcc0fb53d16-e07a-4e60-9166-8b61529a2b34/javascript-algorithms-and-data-structures',
      activities: [
        'Решал алгоритмические задачки на Javascript',
        'Изучал ООП',
      ],
      icon: new URL('~/assets/icons/book.svg', import.meta.url).href
    },
    {
      order: 4,
      interval: '05.2019 — 11.2020',
      title: 'Курс Разработка интерфейсов от Яндекс и МФТИ',
      organization: 'Coursera',
      link: 'https://www.coursera.org/account/accomplishments/specialization/KKPTF2MJ95M8',
      activities: [
        'Верстал pixel perfect на чистых HTML & CSS',
        'Изучал как устроен Javascript (ES5)',
      ],
      icon: new URL('~/assets/icons/book.svg', import.meta.url).href
    },
    {
      order: 3,
      interval: '08.2016 — ...',
      title: 'Старший научный сотрудник',
      organization: 'АО НИИМЭ',
      link: 'https://www.niime.ru/en/about/',
      activities: [
        'Занимался численным моделированием различных устройств интегральной оптики в среде Comsol Multiphysics',
        'Писал научные статьи и презентовал и выступал на конференциях',
        'Работал в команде с учёными, инженерами и менеджерами'
      ],
      icon: new URL('~/assets/icons/chip.svg', import.meta.url).href
    },
    {
      order: 2,
      interval: '09.2014 — 01.2016',
      title: 'Магистратура',
      organization: 'Московский физико-технический институт (МФТИ)',
      link: 'https://mipt.ru/english/',
      activities: [
        'Учился по специальности "Прикладные математика и физика", факультет Физической и квантовой электроники',
      ],
      icon: new URL('~/assets/icons/book.svg', import.meta.url).href
    },
    {
      order: 1,
      interval: '09.2010 — 01.2014',
      title: 'Бакалавриат',
      organization: 'Московский физико-технический институт (МФТИ)',
      link: 'https://mipt.ru/english/',
      activities: [
        'Учился по специальности "Прикладные математика и физика", факультет Физической и квантовой электроники',
      ],
      icon: new URL('~/assets/icons/book.svg', import.meta.url).href
    },
  ],
};