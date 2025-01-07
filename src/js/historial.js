function findIndexToSave(item, array = []){
    array = getHistorialOfLocalStorage();
    return (array.length == 0) ? -1 : array.findIndex(element => element.datosPap.idLlamada.toLocaleLowerCase().includes(item.datosPap.idLlamada.toLocaleLowerCase()));
}

function filterByvalue(value, array = []){
    if(value == undefined || value == "") return [];
    array = getHistorialOfLocalStorage();
    return (array.length == 0) ? [] : array.filter(element => element.datosPap.papCaja.toString().includes(value) ||
    element.datosPap.motivoLlamada.toLocaleLowerCase().includes(value) ||
    element.datosPap.numServicio.toLocaleLowerCase().includes(value) ||
    element.datosValidacion.estado.toLocaleLowerCase().includes(value) ||
    element.fechaGuardado.toLocaleLowerCase().includes(value));
}

function saveOnHistorial(item){
    let historial = getHistorialOfLocalStorage();

    let index = findIndexToSave(item);
    if(index == -1){
        historial.push(item);
    } else{
        historial[index] = item;
    }
    // Convertir a formato JSON y guardar en localStorage
    localStorage.setItem("SM_Templates_Binding", JSON.stringify(historial));
}

function getItemOfHistorial(index){
    let historial = getHistorialOfLocalStorage();

    if(index < 0){
        let lastIndex= historial.length;
        return historial[lastIndex];
    } else{
        return historial[index];
    }
}

function getAllItemsOfHistorial(){
    let historial = getHistorialOfLocalStorage();
    return historial;
}

function getHistorialOfLocalStorage(){
    // Obtener del localStorage y convertir a formato JSON
    let historial = JSON.parse(localStorage.getItem("SM_Templates_Binding"));
    return (historial == null) ? [] : historial;
}