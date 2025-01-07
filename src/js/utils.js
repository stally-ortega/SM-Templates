/** Funcion para validar si el equipo cumple */
function validacionEquipo(datosValidacion=datosValidacionRequisitos, valueListk=valueListOk, values=valueList, datosPap=datosPapObj, necesitaFacilitador = true) {
    let tecnicoPhrases = [];
    let necesitaTecnico = false;
    let timeSuspended = values.suspensiones[`${datosPap.motivo}`];
  
    if(valueListk.antivirus.includes(values.antivirus.findIndex(element => element == datosValidacion.antivirus)) == false) {
      if(necesitaFacilitador) {
        tecnicoPhrases.push("Además, debe validar con su técnico de confianza para");
      } else {
        tecnicoPhrases.push("debe validar con su técnico de confianza para");
      }
      tecnicoPhrases.push("la instalación del antivirus licenciado");
      necesitaTecnico = true;
    }
  
    if(values.windows.findIndex(element => element == datosValidacion.windows) != valueListk.windows) {
      if(tecnicoPhrases.length == 0 && necesitaFacilitador) {
        tecnicoPhrases.push("Además, debe validar con su técnico de confianza para"); 
      } else if(tecnicoPhrases.length == 0){
        tecnicoPhrases.push("debe validar con su técnico de confianza para");
      }
      tecnicoPhrases.push(`la correción del windows (${datosValidacion.windows.split(',', 2)[1]})`);
      necesitaTecnico = true;
    }
  
    if(values.caracteristicas.findIndex(element => element == datosValidacion.caracteristicas) != valueListk.caracteristicas) {
      if(tecnicoPhrases.length == 0 && necesitaFacilitador) {
        tecnicoPhrases.push("Además, debe validar con su técnico de confianza para"); 
      } else if(tecnicoPhrases.length == 0){
        tecnicoPhrases.push("debe validar con su técnico de confianza para");
      }
      tecnicoPhrases.push(`la correción de las caracteristicas del equipo o el cambio del mismo por uno que cumpla los requisitos (${datosValidacion.caracteristicas})`);
      necesitaTecnico = true;
    }
  
    return {
      "phrase" : arrayToString(tecnicoPhrases),
      "timeSuspended" : (necesitaTecnico) ? timeSuspended : 0
    };
}

/** Funcion para validar si el servicio está bien creado*/
function validacionServicio(datosValidacion=datosValidacionRequisitos, valueListk=valueListOk, values=valueList, datosPap=datosPapObj) {
  let facilitadorPhrases = [];
  let necesitaFacilitador = false;
  let timeSuspended = 0;

  if(valueListk.confronta.includes(values.confronta.findIndex(element => element == datosValidacion.confronta)) == false) {
    if(necesitaFacilitador == false) { facilitadorPhrases.push("debe validar con su facilitador de canales para");}
    facilitadorPhrases.push("la emisión de la confronta");
    necesitaFacilitador = true;
    timeSuspended = 3;
    datosValidacionRequisitos.estado = "Sin confronta";
  }

  /**if(valueListk.portatil.includes(values.portatil.findIndex(element => element == datosValidacion.portatil)) == false) {
    if(necesitaFacilitador == false) { facilitadorPhrases.push("debe validar con su facilitador de canales para");}
    facilitadorPhrases.push("la emision de la autorización para instalación equipo portatil");
    necesitaFacilitador = true;
    timeSuspended = 3;
    datosValidacionRequisitos.estado = "Sin Aut. portatil";
  }*/

  if(datosValidacion.numeroCoinciden == "No") {
    if(necesitaFacilitador == false) { facilitadorPhrases.push("debe validar con su facilitador de canales para");}
    facilitadorPhrases.push("la correción del número de telefono");
    necesitaFacilitador = true;
    timeSuspended = -1;
    datosValidacionRequisitos.estado = "Números no coinciden";
  }

  return {
    "phrase" : arrayToString(facilitadorPhrases),
    "timeSuspended" : timeSuspended
  };
}

/** Funcion para convertir una arreglo de frases en una oración */
function arrayToString(array) {
  if(array.length < 1){ return ""};
  let length = array.length - 1;
  let arr = array.map((element, index) => {
    if(length >= 1){
      if(index < length && index >= 1) { 
        return element + ",";
      } else if(index == length && index > 1) {
        return "y " + element;
      }
    }

    return element;
  });
  return arr.join(" ") + ".";
}

/** Funcion para convertir una arreglo de frases en una oración */
function calcularDiasHabiles(diasSuspension=1, date = new Date(), festivos=diasFestivos){
  let contadorSuspensiones = diasSuspension;
  
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate() + 1;
  let tomorrow = new Date(year,month,day);
  let isoString = tomorrow.toISOString();

  let weekend = ["Sat", "Sun"];
  let weekday = tomorrow.toDateString().substring(0, 3);

  if(weekend.includes(weekday) || festivos.some(festivo => festivo.start == isoString)){
      return calcularDiasHabiles(contadorSuspensiones, tomorrow);
  } else {
      contadorSuspensiones -= 1;
      if(contadorSuspensiones == 0){
        return tomorrow.toLocaleDateString();
      } else {
          return calcularDiasHabiles(contadorSuspensiones, new Date(year,month,day));
      }
  }
}


/** Funcion para validar los prerrequisitos del equipo y determinar si cumple */
function validacionServicioCompleto(datosValidacion=datosValidacionRequisitos, datosPap=datosPapObj, valueListk=valueListOk, values=valueList) {
  let phrase = ["Se le indica que por favor"];
  let validacionservicio = validacionServicio(datosValidacion, valueListk, values, datosPap);
  let necesitaFacilitador = (validacionservicio.timeSuspended != 0);
  let validacionequipos = validacionEquipo(datosValidacion, valueListk, values, datosPap, necesitaFacilitador);
  let necesitaTecnico = (validacionequipos.timeSuspended != 0);
  let tiemposSuspension = "Se confirman tiempos de gestión hasta el ";

  if(necesitaFacilitador) {
    phrase.push(validacionservicio.phrase);
    if(validacionservicio.timeSuspended < 0) {
      tiemposSuspension = `Se confirman tiempos de gestión de 2 horas.`;
    } else if(validacionservicio.timeSuspended > 0) {
      tiemposSuspension = `Se confirman tiempos de gestión hasta el ${calcularDiasHabiles(validacionservicio.timeSuspended)}`;
      if(necesitaTecnico){
        phrase.push(validacionequipos.phrase);
      }
    }
  } else if(necesitaTecnico){
    datosValidacionRequisitos.estado = "Equipo no cumple";
    phrase.push(validacionequipos.phrase);
    diasSuspension = validacionequipos.timeSuspended;
    tiemposSuspension = `Se confirman tiempos de gestión hasta el ${calcularDiasHabiles(validacionequipos.timeSuspended)}`;
  } else{
    tiemposSuspension = "debe estar atent@ a nuestra llamada saliente. Ya que por motivos de seguridad no es posible continuar con el proceso en llamada entrante.";
  }

  phrase.push(tiemposSuspension);
  return phrase.join(' ');
}

/** Funcion para calcular la diferencia de días entre dos fechas */
function diferenciaFechasPorDias(fechaLicencia = '2024-12-31') {
  let currentdate = new Date();
  let now = moment(new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate()));
  let futureDate = moment(fechaLicencia);

  return futureDate.diff(now, 'days');
}