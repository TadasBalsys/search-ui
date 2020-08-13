export interface FiltersProps {
  title: string;
  SubCat: SubCat[];
}

export interface SubCat {
  pav: string;
  id: string;
}

export const fuelType = {
  title: 'Kuro tipas',
  id: 'fuel 1',
  SubCat: [
    {
      pav: 'Dyzelinas',
      id: 'diesel',
    },
    {
      pav: 'Benzinas',
      id: 'petrol',
    },
    {
      pav: 'Benzinas / dujos',
      id: 'petrol/gass',
    },
    {
      pav: 'Benzinas / elektra',
      id: 'petrol/electricity ',
    },
    {
      pav: 'Elektra',
      id: 'electricity',
    },
    {
      pav: 'Dyzelias / elektra',
      id: 'diesel/electricity',
    },
    {
      pav: 'Dyzelinas / dujos',
      id: 'diesel/ gass',
    },
    {
      pav: 'Bioetanolis',
      id: 'bioethanol',
    },
    {
      pav: 'Kita',
      id: 'other',
    },
  ],
};

export const vehicleBodyType = {
  title: 'Kėbulo tipas',
  id: 'vehicle body tipe',
  SubCat: [
    {
      pav: 'Sedanas',
      id: 'sedan',
    },
    {
      pav: 'Hečbekas',
      id: 'hatchback',
    },
    {
      pav: 'Universalas',
      id: 'universal',
    },
    {
      pav: 'Vienatūris',
      id: 'minivan',
    },
    {
      pav: 'Visureigis',
      id: 'suv',
    },
    {
      pav: 'Kupė (Coupe)',
      id: 'coupe',
    },
    {
      pav: 'Komercinis',
      id: 'commercial',
    },
    {
      pav: 'Kabrioletas',
      id: 'cabriolet',
    },
    {
      pav: 'Limuzinas',
      id: 'limo',
    },
    {
      pav: 'Pikapas',
      id: 'pickup',
    },
    {
      pav: 'Kita',
      id: 'other',
    },
  ],
};

export const gearBox = {
  title: 'Pavarų dėžė',
  id: 'gear box',
  SubCat: [
    {
      pav: 'Mechaninė',
      id: 'manual',
    },
    {
      pav: 'Automatinė',
      id: 'automatic',
    },
  ],
};

export const driveWheels = {
  title: 'Varomiejo ratai',
  id: 'drive wheels',
  SubCat: [
    {
      pav: 'Prierkiniai',
      id: 'front',
    },
    {
      pav: 'Galiniai',
      id: 'rear',
    },
    {
      pav: 'Visi',
      id: 'all',
    },
  ],
};

export const steering_Wheel_Position = {
  title: 'Vairo padėtis',
  id: 'steering wheel position',
  SubCat: [
    {
      pav: 'Kairėje',
      id: 'left',
    },
    {
      pav: 'Dešinėje',
      id: 'right',
    },
  ],
};

export const part_Of_Place = {
  title: 'Detalės pozicija',
  id: 'pars of place',
  SubCat: [
    {
      pav: 'Priekyje',
      id: 'front',
    },
    {
      pav: 'Kairė',
      id: 'left',
    },
    {
      pav: 'Dešinėje',
      id: 'right',
    },
    {
      pav: 'Kairėje, priekyje',
      id: 'left, front',
    },
    {
      pav: 'Dešinėje, priekyje',
      id: 'right, front',
    },
    {
      pav: 'Kairėje, gale',
      id: 'left, rear',
    },
    {
      pav: 'Dešinėje, gale',
      id: 'right, rear',
    },
  ],
};

export const color = {
  title: 'Spalva',
  id: 'color',
  SubCat: [
    {
      pav: 'Juoda',
      id: 'black',
    },
    {
      pav: 'Pilka / Sidabrinė',
      id: 'grey',
    },
    {
      pav: 'Balta',
      id: 'white',
    },
    {
      pav: 'Violetinė',
      id: 'violet',
    },
    {
      pav: 'Mėlyna / Žydra',
      id: 'blue',
    },
    {
      pav: 'Žalia / Chaki',
      id: 'green',
    },
    {
      pav: 'Geltona',
      id: 'yellow',
    },
    {
      pav: 'Oranžinė',
      id: 'orange',
    },
    {
      pav: 'Raudona / Vyšninė',
      id: 'red',
    },
    {
      pav: 'Ruda / Smėlio',
      id: 'brown',
    },
    {
      pav: 'Mišri',
      id: 'mixed',
    },
    {
      pav: 'Kita',
      id: 'other',
    },
  ],
};

export const year = {
  title: 'Metai',
};

export const getYearsArray = () => {
  const date = new Date();
  const option = date.getFullYear();
  let yearsArray = [];

  for (let i = 0; i < 71; i++) {
    yearsArray.push(option - i);
  }
  return yearsArray;
};

export const engineVolume = {
  title: 'Darbinis tūris cm³',
};

export const getEngineVolumeArray = () => {
  let volume = 100;
  let option = [];
  //if salyga kad sudeliotu skirtingas sekas
  for (let i = 800; i <= 7000; i = i + volume) {
    if (
      (i >= 2000 && i < 2200) ||
      (i >= 2800 && i < 3200) ||
      (i >= 3300 && i < 3500) ||
      (i >= 3800 && i < 4400) ||
      (i >= 5000 && i < 5200)
    ) {
      volume = 200;
    } else if (i >= 4400 && i < 5000) {
      volume = 600;
    } else if (i >= 5200 && i < 6000) {
      volume = 800;
    } else if (i >= 6000 && i < 7000) {
      volume = 1000;
    } else {
      volume = 100;
    }
    option.push(i);
  }
  return option;
};

export const enginePower = {
  title: 'Variklio galia, kW',
};
export const getEnginePowerArray = () => {
  const option = [
    '25 kW (34 AG)',
    '35 kW (48 AG)',
    '44 kW (60 AG)',
    '55 kW (75 AG)',
    '66 kW (90 AG)',
    '74 kW (101 AG)',
    '85 kW (116 AG)',
    '96 kW (131 AG)',
    '110 kW (150 AG)',
    '147 kW (200 AG)',
    '184 kW (250 AG)',
    '222 kW (302 AG)',
    '262 kW (356 AG)',
    '296 kW (402 AG)',
    '333 kW (453 AG)',
  ];
  return option;
};
