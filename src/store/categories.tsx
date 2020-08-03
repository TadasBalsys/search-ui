export interface SuperCat {
  title: string;
  subCat: SubCat[];
}

export interface SubCat {
  title: string;
  subCat: SubCat[] | Categories[];
}

interface Categories {
  title: string;
  queryValue: string;
}

export const categories: SuperCat[] = [
  {
    title: 'Apšvietimo sistemos',
    subCat: [
      {
        title: 'Galinis žibintas',
        subCat: [
          {
            title: 'Atbulinės eigos žibintai',
            queryValue: 'Reverse lights',
          },
          {
            title: 'Galinio žibinto apdaila(juostelė)',
            queryValue: 'Rear light decoration',
          },
        ],
      },
    ],
  },
  {
    title: 'Kėbulo dalys',
    subCat: [
      {
        title: 'Priekinės kėbulo dalys',
        subCat: [{ title: 'Kapotas', queryValue: 'Reverse lights' }],
      },
    ],
  },
];
