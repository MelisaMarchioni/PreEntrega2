const obtenerInformacion = (pais)=>{
    paises = {
        Australia: ["Gumtree", "Bartender", "skiPatrol", "Barista", "Recepcionista"],
        Canada: ["Niagaras", "Bartender", "Housekeeping", "skiPatrol"],
        España: ["IbizaParty","Bartender", "Housekeeping", "Busser", "Barista", "Recepcionista"],
        Dinamarca: ["GrabJobs","Bartender", "Housekeeping", "Busser", "Barista", "Recepcionista"]
    }
    if (paises[pais] !== undefined){
        return [paises[pais], pais, paises];
    } else {
        return paises;
    }
}

const mostrarInformacion = (pais)=>{
    let informacion = obtenerInformacion (pais);

    if(informacion !== false){
    let empresa = informacion[0][0];
    trabajos = informacion[0];
    trabajos.shift();
    console.log (`La empresa de ${informacion[1]} es: ${empresa} y los trabajos son: ${trabajos}`)
}
}
const cantidadDeClases = (trabajo)=>{
    let informacion = obtenerInformacion()
    let sitiosPresente = []; 
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(trabajo)){
            cantidadTotal++;
            sitiosPresente.push(" " + info);
        }
    }
    return `${trabajo} esta en ${cantidadTotal} paises. Los sitios son: ${sitiosPresente}`;
}


mostrarInformacion ("Australia");
mostrarInformacion ("Canada");
mostrarInformacion ("España");
mostrarInformacion ("Dinamarca");

  
console.log (cantidadDeClases("Barista"))
console.log(cantidadDeClases("Recepcionista"))









// const obtenerInformacion = (pais)=>{
//     paises = {
//         Dinamarca: ['Busser',1800, 'Inglés'],
//         Holanda: ['FrontDesk', 1500, 'Holandes'],
//         EstadosUnidos:['Housekeeping',1200, 'Indiferenciado'],
//         Australia:['Farmer', 2000 , 'Inglés'],
    
//     }
//     if(paises[pais] !== undefined ){
//         return paises[pais], pais;
//     }else{
//         return false;
//     }
// };

// let informacion = obtenerInformacion ("Holanda");
// if (informacion !== false){
//     console.log (`Alumnos presentes en ${informacion[1]} : ${informacion [2]} `)
// }