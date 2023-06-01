export type MenuItem = {
  title: string,
  id: string,
}
export const itemData: { en: MenuItem[], ru: MenuItem[] } = {
  en: [
    {
      title: 'about',
      id: 'about'
    },
    {
      title: 'experience',
      id: 'experience'
    },
    {
      title: 'contacts',
      id: 'contacts'
    },
  ],
  ru: [
    {
      title: 'Обо мне',
      id: 'about'
    },
    {
      title: 'Опыт работы',
      id: 'experience'
    },
    {
      title: 'Контакты',
      id: 'contacts'
    },
  ]
};
