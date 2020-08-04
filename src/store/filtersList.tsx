export interface FiltersProps { 
    title: string;
    SubCat:SubCat[]
}

export interface SubCat {
    pav:string
    id:string;
}

export const fuelType ={
    title: "Kuro tipas",
    SubCat:[
        {
            pav:"Dyzelinas",
            id:'diesel'
        },
        {
            pav:"Benzinas",
            id:'petrol'
        },
        {
            pav:"Benzinas / dujos",
            id:'petrol/gass'
        },
        {
            pav:"Benzinas / elektra",
            id:'petrol/electricity '
        },
        {
            pav:"Elektra",
            id:'electricity'
        },
        {
            pav:"Dyzelias / elektra",
            id:'diesel/electricity'
        },
        {
            pav:"Dyzelinas / dujos",
            id:'diesel/ gass'
        },
        {
            pav:"Bioetanolis",
            id:'bioethanol'
        },
        {
            pav:"Kita",
            id:'other'
        },
    ]
}

export const vehicleBodyType = {
    title: "Kėbulo tipas",
    SubCat:[
        {
            pav:"Sedanas",
            id:'sedan'
        },
        {
            pav:"Hečbekas",
            id:'hatchback'
        },
        {
            pav:"Universalas",
            id:'universal'
        },
        {
            pav:"Vienatūris",
            id:'minivan'
        },
        {
            pav:"Visureigis",
            id:'suv'
        },
        {
            pav:"Kupė (Coupe)",
            id:'coupe'
        },
        {
            pav:"Komercinis",
            id:'commercial'
        },
        {
            pav:"Kabrioletas",
            id:'cabriolet'
        },
        {
            pav:"Limuzinas",
            id:'limo'
        },
        {
            pav:"Pikapas",
            id:'pickup'
        },
        {
            pav:"Kita",
            id:'other'
        },
    ]   
}

export const gearBox = {
    title: "Greičio dėžė",
    SubCat:[
        {
            pav:"Mechaninė",
            id:'manual'
        },
        {
            pav:"Automatinė",
            id: 'automatic'
        },
    ]
}

export const driveWheels ={
    title:"Varomiejo ratai",
    SubCat:[
        {
            pav:"Prierkiniai",
            id:'front'
        },
        {
            pav:"Galiniai",
            id:'rear'
        },
        {
            pav:"Visi",
            id:'all'
        },
    ]
}

export const steering_Wheel_Position = {
    title:"Varomiejo ratai",
    SubCat:[
        {
            pav:"Kairėje",
            id:'left'
        }, {
            pav:"Dešinėje",
            id:'right'
        },
    ]
}

export const part_Of_Place = {
    title:"Dalies vieta",
    SubCat:[
        {
            pav:"Visos",
            id:'all'
        },
        {
            pav:"Kairė",
            id:'left'
        },
        {
            pav:"Centras",
            id:'center'
        },
        {
            pav:"Dešinėje",
            id:'right'
        },
        {
            pav:"Komplektas",
            id:'left'
        },
        {
            pav:"Kairėje, gale",
            id:'left, rear'
        },
        {
            pav:"Dešinėje, gale",
            id:'right, rear'
        },
        {
            pav:"Kairėje, priekyje",
            id:'left, front'
        },
        {
            pav:"Dešinėje, priekyje",
            id:'right, front'
        },
        {
            pav:"Priekyje",
            id:'front'
        },
        {
            pav:"Gale",
            id:'rear'
        },
       
    ]
}

  