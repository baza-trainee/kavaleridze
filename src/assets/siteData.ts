const siteData = {
  general: {
    workingHours: 'Вт-Нд 11:00 – 18:00',
    location: 'Андріївський узвіз, 21, Київ',
    phone: '(044) 425-33-97',
    email: 'kavaleridzemuseum@gmail.com',
    mainTitle: `Музей-майстерня
Івана Кавалерідзе`,
  },
  buttonsLabels: {
    tickets: 'Квитки',
    support: 'Підтримати музей',
    share: 'Поділитись сайтом',
    more: 'Читати більше',
  },
  famousArtImages: [
    { src: {tablet:`./images/famous_artist/1.png`,mobile:`./images/famous_artist/mobile/1.png`}, alt: 'famous_artist', size: 'big' },
    { src: {tablet:`./images/famous_artist/2.png`,mobile:`./images/famous_artist/mobile/2.png`}, alt: 'famous_artist', size: 'big' },
    { src: {tablet:`./images/famous_artist/3.png`,mobile:`./images/famous_artist/mobile/3.png`}, alt: 'famous_artist', size: 'big' },
    { src: {tablet:`./images/famous_artist/4.png`,mobile:`./images/famous_artist/mobile/4.png`}, alt: 'famous_artist', size: 'small' },
    { src: {tablet:`./images/famous_artist/5.png`,mobile:`./images/famous_artist/mobile/5.png`}, alt: 'famous_artist', size: 'small' },
  ],
  about_history: {
    text: {
      text1: `Музей-майстерня І. П. Кавалерідзе заснована у 1993 році за підтримки Київської міської держадміністрації та Національної спілки кінематографістів України.
      `,
      text2: `Музей розташований на Андріївському узвозі, в будинку, де Іван Петрович Кавалерідзе, відомий український скульптор і кінорежисер працював над пам'ятником княгині Ольги.`,
    },
    src: `/images/about_history/museum.png`,
  },
  menuList: {
    main: [
      {
        title: 'Головна',
        href: '/',
      },
      {
        title: 'Історія музею',
        href: '/history',
      },
      {
        title: 'Події',
        href: '/events',
      },
      {
        title: 'Іван Кавалерідзе',
        href: '/about',
      },
      {
        title: 'Контакти',
        href: '/contacts',
      },
    ],
    burgerSubMenu: [
      {
        title: 'Митець',
        href: '/about/artist',
      },
      {
        title: 'Біографія',
        href: '/about/biography',
      },
      {
        title: 'Кіно',
        href: '/about/movie',
      },
      {
        title: 'Скульптура',
        href: '/about/sculpture',
      },
      {
        title: 'Митець і Київ',
        href: '/about/kyiv',
      },
    ],
    other: [
      {
        title: 'Результати пошуку',
        href: '/search',
      },
      {
        title: 'Квитки',
        href: '/tickets',
      },
      {
        title: 'Підтримати музей',
        href: '/donation',
      },
    ],
  },
};

export const routing = [...siteData.menuList.main, ...siteData.menuList.burgerSubMenu, ...siteData.menuList.other];

export default siteData;
