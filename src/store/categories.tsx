export interface SuperCat {
  title: string;
  subCat: SubCat[];
}

export interface SubCat {
  title: string;
  subCat: SubCat[] | Categories[];
}

export interface Categories {
  title: string;
  queryValue: string;
}
// Mock Data to test approach
//  <<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>

interface DataModal {
  title: string;
  id: string;
  subCat: [];
}

const mockData = {
  title: 'Galinis žibintas',
  id: 'rear-1',
  subOptions: [
    {
      title: 'Atbulinės eigos žibintas',
      id: 'rear-2',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto apdaila (juostelė)',
      id: 'rear-3',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto dangtelis (lizdas)',
      id: 'rear-4',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto detalė',
      id: 'rear-5',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto stiklas (dangtyje)',
      id: 'rear-6',
      subOptions: [],
    },
    {
      title: 'Galinio žibinto stiklas (kėbule)',
      id: 'rear-7',
      subOptions: [],
    },
    {
      title: 'Galinis atšvaitas',
      id: 'rear-8',
      subOptions: [],
    },
    {
      title: 'Galinis žibintas bamperyje',
      id: 'rear-9',
      subOptions: [],
    },
  ],
};

const mockData2 = {
  title: 'Degalų mišinio uždegimo sistema',
  id: ' ignition-2',
  subOptions: [
    {
      title: 'Aukštos įtampos ritė "babyna"',
      id: 'ignition-3',
      subOptions: [],
    },
    {
      title: 'Aukštos įtampos uždegimo lizdas (žvaklaidis)',
      id: 'ignition-4',
      subOptions: [],
    },
    {
      title: 'Dangtelis kibirkšties paskirstytojo (tramplioriaus)',
      id: 'ignition-5',
      subOptions: [],
    },
    {
      title: 'Degimo modulis "Komutatorius"',
      id: 'ignition-6',
      subOptions: [],
    },
    {
      title: 'Kibirkšties paskirstytojas (trampliorius)',
      id: 'ignition-7',
      subOptions: [],
    },
    {
      title: 'Pakaitinimo žvakė (-ės)',
      id: 'ignition-8',
      subOptions: [],
    },
    {
      title: 'Skriejikas (bėgunokas)',
      id: 'ignition-9',
      subOptions: [],
    },
  ],
};

export const mockState = [
  {
    title: 'Apšvietimo sistemos',
    id: 'lights-1',
    subOptions: [mockData],
  },
  {
    title: 'Degalų mišinio sistema',
    id: 'ignition-1',
    subOptions: [mockData2],
  },
];

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<End of Mock Data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const rearLamp: SubCat = {
  title: 'Galinis žibintas',
  subCat: [
    {
      title: 'Atbulinės eigos žibintas',
      queryValue: 'Reverse lights',
    },
    {
      title: 'Galinio žibinto apdaila (juostelė)',
      queryValue: 'Rear lamp decoration',
    },
    {
      title: 'Galinio žibinto dangtelis (lizdas)',
      queryValue: 'Tail lamp cover (socket)',
    },
    {
      title: 'Galinio žibinto detalė',
      queryValue: 'Rear lamp detail',
    },
    {
      title: 'Galinio žibinto stiklas (dangtyje)',
      queryValue: 'Tail lamp glass (cover)',
    },
    {
      title: 'Galinio žibinto stiklas (kėbule)',
      queryValue: 'Tail lamp glass (body)',
    },
    {
      title: 'Galinis atšvaitas',
      queryValue: 'Rear reflector',
    },
    {
      title: 'Galinis žibintas bamperyje',
      queryValue: 'Tail lamp in bumper',
    },
    {
      title: 'Galinis žibintas dangtyje',
      queryValue: 'Tail lamp in the cover',
    },
    {
      title: 'Galinis žibintas kėbule',
      queryValue: 'Tail lamp in body',
    },
    {
      title: 'Galinių žibintų komplektas',
      queryValue: 'Tail lampt set',
    },
    {
      title: 'Lemputė',
      queryValue: 'Bulb',
    },
    {
      title: 'Numerio apšvietimas',
      queryValue: 'Number lighting',
    },
    {
      title: 'Papildomas stop žibintas',
      queryValue: 'Additional stop lamp',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ] as Categories[],
};

const turnLamp = {
  title: 'Posūkio žibintai',
  subCat: [
    {
      title: 'Posūkio žibintas veidrodėlyje',
      queryValue: 'Turn lamp in the mirror',
    },
    {
      title: 'Priekinis posūkio žibintas',
      queryValue: 'Front direction indicator lamp',
    },
    {
      title: 'Sparno posūkio žibintas',
      queryValue: 'Wing turn lamp',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const headlamp = {
  title: 'Priekiniai žibintai',
  subCat: [
    {
      title: 'LED dienos žibintas',
      queryValue: 'LED daytime running lamp',
    },
    {
      title: 'Priekinio žibinto (xenon) lemputė',
      queryValue: ' Headlamp (xenon) bulb',
    },
    {
      title: 'Priekinio žibinto apdaila',
      queryValue: 'Headlamp trim',
    },
    {
      title: 'Priekinio žibinto dangtelis',
      queryValue: 'Headlamp cover',
    },
    {
      title: 'Priekinio žibinto detalė',
      queryValue: 'Headlamp component',
    },
    {
      title: 'Priekinio žibinto laikiklis',
      queryValue: 'Headlamp holder',
    },
    {
      title: 'Priekinio žibinto lemputė',
      queryValue: 'Headlamp bulb',
    },
    {
      title: 'Priekinio žibinto stiklas',
      queryValue: 'Headlamp glass',
    },
    {
      title: 'Priekinis atšvaitas',
      queryValue: 'Front reflector',
    },
    {
      title: 'Priekinis žibintas',
      queryValue: 'Headlamp',
    },
    {
      title: 'Priekinių žibintų komplektas',
      queryValue: 'Headlamp set',
    },
    {
      title: 'Žibinto blokelis/ (xenon blokelis)',
      queryValue: 'Lamp block / (xenon block)',
    },
    {
      title: 'Žibintų aukščio reguliavimo varikliukas',
      queryValue: 'Headlamp leveling motor',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const fogLamp = {
  title: 'Priešrūkiniai žibintai',
  subCat: [
    {
      title: 'Negamyklinis (papildomas) priešrūkinis žibintas',
      queryValue: 'Non - factory (optional) fog lamp',
    },
    {
      title: 'Priešrūkinio žibinto dalis',
      queryValue: 'Part of the fog lamp',
    },
    {
      title: 'Priešrūkinio žibinto lemputė',
      queryValue: 'Fog lamp bulb',
    },
    {
      title: 'Priešrūkinis žibintas gale',
      queryValue: 'Rear fog lamp ',
    },
    {
      title: 'Priešrūkinis žibintas priekyje',
      queryValue: 'Front fog lamp',
    },
    {
      title: 'Priešrūkinių žibintų komplektas',
      queryValue: 'Fog lamp set',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const interiorLighting = {
  title: 'Salono apšvietimas',
  subCat: [
    {
      title: 'Bagažinės apšvietimo žibintas',
      queryValue: 'Trunk lamp',
    },
    {
      title: 'Daigtadėžės žibintas',
      queryValue: 'Sprout lamp',
    },
    {
      title: 'Galinių durų apšvietimo žibintas (viduje)',
      queryValue: 'Rear door light lamp (inside)',
    },
    {
      title: 'Galinių durų rankenos apšvietimo žibintas (išorėje)',
      queryValue: 'Rear door handle lamp light (outside)',
    },
    {
      title: 'Galinių vietų apšvietimo žibintas',
      queryValue: 'Rear position lamp',
    },
    {
      title: 'Kitas salono žibintas',
      queryValue: 'Another interior lamp',
    },
    {
      title: 'Priekinių durų apšvietimo žibintas (viduje)',
      queryValue: 'Front door light lamp (inside)',
    },
    {
      title: 'Priekinių durų rankenos apšvietimo žibintas (išorėje)',
      queryValue: 'Front door handle light lamp (outside)',
    },
    {
      title: 'Priekinių vietų apšvietimo žibintas',
      queryValue: 'Front position lamp',
    },
    {
      title: 'Prožektorius',
      queryValue: 'Spotlight',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const fuel_Tank_Filling_Supply = {
  title: 'Degalų bakas/ užpildymas/ tiekimas',
  subCat: [
    {
      title: 'Aktyvios anglies (degalų garų) filtras',
      queryValue: 'Activated carbon (fuel vapor) filter',
    },
    {
      title: 'Apdaila aplink degalų bako dangtelį',
      queryValue: 'Decoration around fuel tank cap',
    },
    {
      title: 'Autonominio šildytuvo (webastos) degalų pompa (siurbliukas)',
      queryValue: 'Autonomous heater (webastos) fuel pump',
    },
    {
      title: 'Autonominio šildytuvo (webastos) degalų vamzdelis (-iai)',
      queryValue: 'Fuel heater fuel pipe (s)',
    },
    {
      title: 'Dangtelis degalų bako',
      queryValue: 'Fuel tank cap',
    },
    {
      title: 'Degalų bakas',
      queryValue: 'Fuel tank',
    },
    {
      title: 'Degalų bako atidarymo trosas',
      queryValue: 'Fuel tank opening cable',
    },
    {
      title: 'Degalų bako dangtelio atidarymo rankenėlė',
      queryValue: 'Fuel tank cap release handle',
    },
    {
      title: 'Degalų bako dangtelio spyna',
      queryValue: 'Fuel tank cap lock',
    },
    {
      title: 'Degalų bako dangtelio spynos varikliukas',
      queryValue: 'Fuel tank cap lock motor',
    },
    {
      title: 'Degalų bako dugno apsauga',
      queryValue: 'Fuel tank bottom protection',
    },
    {
      title: 'Degalų bako laikiklis (-iai)',
      queryValue: 'Fuel tank holder (s)',
    },
    {
      title: 'Degalų bako užpylimo vamzdelis',
      queryValue: 'Fuel tank filler pipe',
    },
    {
      title: 'Degalų bako užsukamas dangtelis',
      queryValue: 'Screw cap on fuel tank',
    },
    {
      title: 'Degalų bako vožtuvas',
      queryValue: 'Fuel tank valve',
    },
    {
      title: 'Degalų filtras',
      queryValue: 'Fuel filter',
    },
    {
      title: 'Degalu filtro korpusas',
      queryValue: 'Fuel filter body',
    },
    {
      title: 'Degalų filtro laikiklis',
      queryValue: 'Fuel filter holder',
    },
    {
      title: 'Degalų filtro šildytuvas',
      queryValue: 'Fuel filter heater',
    },
    {
      title: 'Degalų lygio daviklis',
      queryValue: 'Fuel level indicator',
    },
    {
      title: 'Degalų šildytuvas',
      queryValue: 'Fuel heater',
    },
    {
      title: 'Degalų siurblio (degalų bake) veržlė',
      queryValue: 'Fuel pump (fuel tank) nut',
    },
    {
      title: 'Degalų siurblys (degalų bake)',
      queryValue: 'Fuel pump (fuel tank)',
    },
    {
      title: 'Degalų vamzdelis (-iai)/ žarna (-os)',
      queryValue: 'Fuel pipe (s) / hose (s)',
    },
    {
      title: 'Degalų vamzdelis (-iai)',
      queryValue: 'Fuel pipe (s)',
    },
    {
      title: 'Mechaninė degalų pompa',
      queryValue: 'Mechanical fuel pump',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const fuel_Injection_System = {
  title: 'Degalų įpurškimo sistema',
  subCat: [
    {
      title: 'Degalų įpurškimas kita',
      queryValue: 'Fuel injection other',
    },
    {
      title: 'Degalų (kuro) paskirstytojas',
      queryValue: 'Fuel (fuel) distributor',
    },
    {
      title: 'Degalų (kuro) siurblus',
      queryValue: 'Fuel (fuel) pumps',
    },
    {
      title: 'Degalų  grąžinimo vamzdelis/ žarnelė',
      queryValue: 'Fuel return pipe / hose',
    },
    {
      title: 'Degalų magistralinis vamzdelis',
      queryValue: 'Fuel line pipe',
    },
    {
      title: 'Degalų siurblio dantratis (skriemulys)',
      queryValue: 'Fuel Pump Gear (Pulley)',
    },
    {
      title: 'Degalų siurblio kronšteinas',
      queryValue: 'Fuel pump bracket',
    },
    {
      title: 'Degalų slėgio daviklis',
      queryValue: 'Fuel pressure sensor',
    },
    {
      title: 'Degalų slėgio reguliatorius',
      queryValue: 'Fuel pressure regulator',
    },
    {
      title: 'Degalų temperatūros daviklis',
      queryValue: 'Fuel temperature sensor',
    },
    {
      title: 'Degalų tiekimo į purkštukus vamzdelis (-iai)',
      queryValue: 'Injector fuel pipe (s)',
    },
    {
      title: 'Elektromagnetinis vožtuvas',
      queryValue: 'Solenoid valve',
    },
    {
      title: 'Laikiklis purkštuko (forsunkės)',
      queryValue: 'Injector holder (forks)',
    },
    {
      title: 'Purkštukas (-ai) (forsunkė(-ės))',
      queryValue: 'Nozzle (s) (fork (s))',
    },
    {
      title: 'Purkštukų (forsunkiu) komplektas',
      queryValue: 'Nozzle (forks) set',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const fuel_Mixture_Ignition_System = {
  title: 'Degalų mišinio uždegimo sistema',
  subCat: [
    {
      title: 'Aukštos įtampos ritė "babyna"',
      queryValue: 'High voltage coil "babyna"',
    },
    {
      title: 'Aukštos įtampos uždegimo lizdas (žvaklaidis)',
      queryValue: 'High voltage ignition socket (spark plug)',
    },
    {
      title: 'Dangtelis kibirkšties paskirstytojo (tramplioriaus)',
      queryValue: 'Cover for spark distributor (trampoline)',
    },
    {
      title: 'Degimo modulis "Komutatorius"',
      queryValue: 'Combustion module "Switch"',
    },
    {
      title: 'Kibirkšties paskirstytojas (trampliorius)',
      queryValue: 'Spark distributor (trampoline)',
    },
    {
      title: 'Pakaitinimo žvakė (-ės)',
      queryValue: 'Glow plug (s)',
    },
    {
      title: 'Skriejikas (bėgunokas)',
      queryValue: 'Crank',
    },
    {
      title: 'Žvakė (-ės)',
      queryValue: 'Candle (s)',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const gasEquipment = {
  title: 'Dujų įranga',
  subCat: [
    {
      title: 'Balionas',
      queryValue: 'Gas cylinder',
    },
    {
      title: 'Baliono (multi) vožtuvas',
      queryValue: 'Cylinder (multi) valve',
    },
    {
      title: 'Dujų filtras',
      queryValue: 'Gas filter',
    },
    {
      title: 'Dujų įrangos vamzdelis (-iai)/ žarna(-os)',
      queryValue: 'Gas pipe (s) / hose (s)',
    },
    {
      title: 'Dujų purkštukas',
      queryValue: 'Gas nozzle',
    },
    {
      title: 'Dujų reduktoriaus temperatūros daviklis',
      queryValue: 'Gas reducer temperature sensor',
    },
    {
      title: 'Komplektas dujų įrangos',
      queryValue: 'Gas equipment kit',
    },
    {
      title: 'Korpusas purkštukų montavimo',
      queryValue: 'Housing for nozzle mounting',
    },
    {
      title: 'Purkštukų komplektas',
      queryValue: 'Nozzle set',
    },
    {
      title: 'Reduktorius (dujų įrangos)',
      queryValue: 'Reducer (gas equipment)',
    },
    {
      title: 'Vožtuvas ( elektro magnetinis)',
      queryValue: 'Valve (electromagnetic)',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const carburettor_Mono_Injection = {
  title: 'Karbiuratorius / mono įpurškimas',
  subCat: [
    {
      title: 'Karbiuratoriaus/ mono įpurškimo padas',
      queryValue: 'Carburettor / mono injection pad',
    },
    {
      title: 'Karbiuratorius',
      queryValue: 'Carburettor',
    },
    {
      title: 'Kita karbiuratoriaus detalė (-ės)',
      queryValue: 'Other carburettor part (s)',
    },
    {
      title: 'MONO įpurškimas',
      queryValue: 'MONO injection',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const air_Supply_System = {
  title: 'Oro padavimo sistema',
  subCat: [
    {
      title: 'Droselinė sklendė',
      queryValue: 'Throttle valve',
    },
    {
      title: 'Droselis',
      queryValue: 'Throttle',
    },
    {
      title: 'El. oro padavimo sklendė',
      queryValue: 'El. air supply valve',
    },
    {
      title: 'Interkūlerio žarna (-os)/vamzdelis (-iai)',
      queryValue: 'Intercooler hose (s) / tube (s)',
    },
    {
      title: 'Interkūlerio žarnos/ vamzdelio laikiklis/ kronšteinas',
      queryValue: 'Intercooler hose / tube holder / bracket',
    },
    {
      title: 'Įsiurbiamo oro temperatūros daviklis',
      queryValue: 'Intake air temperature sensor',
    },
    {
      title: 'Įsiurbimo rezonatorius',
      queryValue: 'Intake resonator',
    },
    {
      title: 'Kolektorius įsiurbimo',
      queryValue: 'Manifold intake',
    },
    {
      title: 'Laisvos eigos vožtuvas (reguliatorius)',
      queryValue: 'Idle flow valve (regulator)',
    },
    {
      title: 'Oro filtras',
      queryValue: 'Air filter',
    },
    {
      title: 'Oro filtro dežė',
      queryValue: 'Air filter box',
    },
    {
      title: 'Oro filtro dežės dangtelis',
      queryValue: 'Air filter box cover',
    },
    {
      title: 'Oro filtro dežės laikiklis',
      queryValue: 'Air filter box holder',
    },
    {
      title: 'Oro kokybės daviklis',
      queryValue: 'Air quality sensor',
    },
    {
      title: 'Oro paėmimo kanalo detalė (-ės)',
      queryValue: 'Air intake duct detail (s)',
    },
    {
      title: 'Oro slėgio daviklis',
      queryValue: 'Air pressure sensor',
    },
    {
      title: 'Oro srauto matuoklis',
      queryValue: 'Air flow meter',
    },
    {
      title: 'Oro vamzdis į turbiną',
      queryValue: 'Air tube to the turbine',
    },
    {
      title: 'Sklendės padėties daviklis',
      queryValue: 'Valve position sensor',
    },
    {
      title: 'Sklendės valdymo varikliukas',
      queryValue: 'Valve control motor',
    },
    {
      title: 'Vakuuminis vožtuvas',
      queryValue: 'Vacuum valve',
    },
    {
      title: 'Variklio gesinimo sklendė',
      queryValue: 'Engine fire damper',
    },
    {
      title: 'Žarna (-os)/ vamzdis(-džiai)',
      queryValue: 'Hose (s) / pipe (s)',
    },
    {
      title: 'Žarna alsuoklio',
      queryValue: 'Breather hose',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const exhaustSystem = {
  title: 'Dujų išmetimo sistema',
  subCat: [
    {
      title: 'Duslintuvas',
      queryValue: 'Muffler',
    },
    {
      title: 'Duslintuvo antgalis',
      queryValue: 'Muffler nozzle',
    },
    {
      title: 'Duslintuvo jungtis',
      queryValue: 'Muffler connection',
    },
    {
      title: 'Duslintuvo laikiklis',
      queryValue: 'Muffler holder',
    },
    {
      title: 'Galinė pūslė',
      queryValue: 'Hind bladder',
    },
    {
      title: 'Išmetamųjų dujų vamzdelis',
      queryValue: 'Exhaust pipe',
    },
    {
      title: 'Išmetimo kolektoriaus kita detalė (-ės)',
      queryValue: 'Exhaust Manifold Other Part (s)',
    },
    {
      title: 'Išmetimo kolektorius',
      queryValue: 'Exhaust manifold',
    },
    {
      title: 'Išmetimo termo izoliacija (apsauga nuo karščio)',
      queryValue: 'Exhaust thermal insulation (heat protection)',
    },
    {
      title: 'Lanksti jungtis',
      queryValue: 'Flexible connection',
    },
    {
      title: 'Priekinė pūslė',
      queryValue: 'Anterior bladder',
    },
    {
      title: 'Vidurinė pūslė',
      queryValue: 'Middle bladder',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};

const exhaust_Gas_Cleaning_System = {
  title: 'Išmetamų dujų valymo sistema',
  subCat: [
    {
      title: 'AdBlue purkštukas',
      queryValue: 'AdBlue nozzle',
    },
    {
      title: 'AdBlue skysčio bakelio laikiklis',
      queryValue: 'AdBlue liquid tank holder',
    },
    {
      title: 'AdBlue skysčio bakelis',
      queryValue: 'AdBlue liquid tank',
    },
    {
      title: 'AdBlue skysčio tiekimo vamzdelis',
      queryValue: 'AdBlue fluid supply tube',
    },
    {
      title: 'AdBlue skysčio užpylimo vamzdelis',
      queryValue: 'AdBlue liquid filling tube',
    },
    {
      title: 'Antrinis oro siurblys',
      queryValue: 'Secondary air pump',
    },
    {
      title: 'EGR aušintuvas',
      queryValue: 'EGR cooler',
    },
    {
      title: 'EGR aušintuvo kronšteinas',
      queryValue: 'EGR cooler bracket',
    },
    {
      title: 'EGR termostatas',
      queryValue: 'EGR thermostat',
    },
    {
      title: 'EGR vamzdelis (-iai)/ žarna(-os)',
      queryValue: 'EGR tube (s) / hose (s)',
    },
    {
      title: 'EGR vožtuvas',
      queryValue: 'EGR valve',
    },
    {
      title: 'Išmetamųjų dujų slėgio daviklis',
      queryValue: 'Exhaust pressure sensor',
    },
    {
      title: 'Išmetamųjų dujų temperatūros daviklis',
      queryValue: 'Exhaust gas temperature sensor',
    },
    {
      title: 'Katalizatoriaus/ FAP/ DPF kietųjų dalelių filtras',
      queryValue: 'Catalyst / FAP / DPF particulate filter',
    },
    {
      title: 'Lambda zondas',
      queryValue: 'Lambda probe',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};
const backDoor = {
  title: 'Galinės durys',
  subCat: [
    {
      title: 'Apdaila galinių durų (moldingas)',
      queryValue: 'Rear door trim (molding)',
    },
    {
      title: 'Dangtelis galinių durų rankenos',
      queryValue: 'Cover rear door handles',
    },
    {
      title: 'El. Lango pakėlimo mechanizmo komplektas',
      queryValue: 'El. Window lifter kit',
    },
    {
      title: 'Galinė atidarymo rankenėlė vidinė',
      queryValue: 'The rear opening handle internal',
    },
    {
      title: 'Galinė lango užolaidėlė',
      queryValue: 'Rear window blind',
    },
    {
      title: 'Galinė sandarinimo guma (ant kėbulo)',
      queryValue: 'Rear sealing rubber (at the body)',
    },
    {
      title: 'Galinė sandarinimo guma (prie stiklo)',
      queryValue: 'Rear sealing rubber (at the glass)',
    },
    {
      title: 'Galinė spynos kilpa',
      queryValue: 'Rear lock loop',
    },
    {
      title: 'Galinės durys',
      queryValue: 'Back door',
    },
    {
      title: 'Galinės spynos varikliukas',
      queryValue: 'Rear lock motor',
    },
    {
      title: 'Galinio el. lango pakėlimo mechanizmas be varikliuko',
      queryValue: 'Rear el. window lift mechanism without motor',
    },
    {
      title: 'Galinis apatinis vyris',
      queryValue: 'Rear lower hinge',
    },
    {
      title: 'Galinis varikliukas langų pakėlėjo',
      queryValue: 'Rear engine window lifter',
    },
    {
      title: 'Galinis vėjo deflektorius',
      queryValue: 'Rear wind deflector',
    },
    {
      title: 'Galinis viršutinis vyris',
      queryValue: 'Rear upper hinge',
    },
    {
      title: 'Galinis vyrių komplektas',
      queryValue: 'Rear hinge set',
    },
    {
      title: 'Galinių durų atvėrimo/ užvėrimo daviklis (varlytė)',
      queryValue: 'Rear door opening / closing sensor (frog)',
    },
    {
      title: 'Galinių durų sandarinimo guma',
      queryValue: 'Rear door sealing rubber',
    },
    {
      title: 'Galinių durų spyna',
      queryValue: 'Rear door lock',
    },
    {
      title: 'Galinių durų stiklo apdaila',
      queryValue: 'Rear door glass trim',
    },
    {
      title: 'Galinių durų stiklo bėgelis',
      queryValue: 'Rear door glass rail',
    },
    {
      title: 'Galinių durų stiklo rėmas',
      queryValue: 'Rear door glass frame',
    },
    {
      title: 'Galinių durų troselis',
      queryValue: 'Rear door cable',
    },
    {
      title: 'Išorinė atidarymo rankena galinių durų',
      queryValue: 'Outer opening handle for rear door',
    },
    {
      title: 'Laikiklis/ kronšteinas išorinės atidarymo rankenos galinių durų',
      queryValue: 'Bracket/ bracket for external opening handle of rear door',
    },
    {
      title: 'Mechaninis galinio lango pakėlimo mechanizmas',
      queryValue: 'Mechanical rear window lifting mechanism',
    },
    {
      title: 'Modelio raidės ant durų',
      queryValue: 'Model letters on the door',
    },
    {
      title: 'Ribotuvas galinių durų atvėrimo',
      queryValue: 'Rear door opener',
    },
    {
      title: 'Tarpinė galinių laidų',
      queryValue: 'Intermediate rear wiring',
    },
    {
      title: 'Visos kategorijos',
      queryValue: 'All categories',
    },
  ],
};
export const categories: SuperCat[] = [
  {
    title: 'Apšvietimo sistemos',
    subCat: [rearLamp, turnLamp, headlamp, fogLamp, interiorLighting],
  },
  {
    title: 'Degalų mišinio sistema',
    subCat: [
      fuel_Tank_Filling_Supply,
      fuel_Injection_System,
      fuel_Mixture_Ignition_System,
      gasEquipment,
      carburettor_Mono_Injection,
      air_Supply_System,
    ],
  },
  {
    title: 'Dujų išmetimo sistema',
    subCat: [exhaustSystem, exhaust_Gas_Cleaning_System],
  },
  {
    title: 'Durys',
    subCat: [backDoor],
  },
];
