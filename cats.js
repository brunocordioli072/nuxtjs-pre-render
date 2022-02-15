export const cats = [
  {
    id: '0',
    name: 'Luna',
  },
  {
    id: '1',
    name: 'Milo',
  },
  {
    id: '2',
    name: 'Oliver',
  },
  {
    id: '3',
    name: 'Leo',
  },
  {
    id: '4',
    name: 'Bella',
  },
];

export const allCatsRoutes = [].concat(...cats.map((el) => `${el.id}/preview`));
