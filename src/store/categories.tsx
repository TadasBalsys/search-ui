export interface SuperCat {
  title: string;
  queryValue: string;
  category: string;
  subCat: SubCat[];
}

export interface SubCat {
  title: string;
  queryValue: string;
  category: string;
  subCat: SubCat[] | Categories[];
}

interface Categories {
  title: string;
}

export const categories: SuperCat[] = [
  {
    title: 'Apšvietimo sistemos',
    queryValue: 'Lights',
    category: 'Apšvietimo sistemos',
    subCat: [
      {
        title: 'Galinis žibintas',
        queryValue: 'Rear Lights',
        category: 'Apšvietimo sistemos',
        subCat: [{ title: 'Atbulinės eigos žibintai' }],
      },
    ],
  },
  {
    title: 'Kėbulo dalys',
    queryValue: 'Kėbulas',
    category: 'Kėbulo dalys',
    subCat: [
      {
        title: 'Priekinės kėbulo dalys',
        queryValue: 'Rear Lights',
        category: 'Apšvietimo sistemos',
        subCat: [{ title: 'Kapotas' }],
      },
    ],
  },
];

