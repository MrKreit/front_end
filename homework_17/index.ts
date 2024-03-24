interface Airplane {
    numderOfEngines: number, //количество двигателей
    isJet: boolean, //реактивный
    maxHeight: number,  //максимальная высота полета
    capacity?: number, //опциональное поле вместимость

}
const airplaneAn2: Airplane = {
    numderOfEngines: 1,
    isJet: false,
    maxHeight: 4500,
    //capacity: 12,

}

const airplaneBoing747: Airplane = {
    numderOfEngines: 4,
    isJet: true,
    maxHeight: 13700,
    capacity: 624,

}
