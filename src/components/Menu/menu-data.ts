export type MenuItem = {
  title: string;
  id: string;
  pathname: string;
  hash: string;
};
export const itemData: { en: MenuItem[]; ru: MenuItem[] } = {
  en: [
    {
      title: 'about',
      id: 'about',
      pathname: '/',
      hash: 'about',
    },
    {
      title: 'experience',
      id: 'experience',
      pathname: '/',
      hash: 'experience',
    },
    {
      title: 'contacts',
      id: 'contacts',
      pathname: '/',
      hash: 'contacts',
    },
    {
      title: 'projects',
      id: 'projects',
      pathname: 'projects',
      hash: '',
    },
  ],
  ru: [
    {
      title: 'Обо мне',
      id: 'about',
      pathname: '/',
      hash: 'about',
    },
    {
      title: 'Опыт работы',
      id: 'experience',
      pathname: '/',
      hash: 'experience',
    },
    {
      title: 'Контакты',
      id: 'contacts',
      pathname: '/',
      hash: 'contacts',
    },
    {
      title: 'Проекты',
      id: 'projects',
      pathname: 'projects',
      hash: '',
    },
  ],
};

export const getMenuItemTitle = (item: MenuItem): string =>
  item.title[0].toUpperCase() + item.title.slice(1);
export const getRoute = (item: MenuItem): string =>
  item.hash ? `${item.pathname}#${item.hash}` : `${item.pathname}`;
