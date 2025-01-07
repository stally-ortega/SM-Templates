/** PERSONAL FUCTIONS */
/** --------------------------------*/
function filterInteger(evt, input, maxValue = 6) {
  // ASCII https://elcodigoascii.com.ar/
  // ‘0′ = 48, ‘9′ = 57, ‘-’ = 45
  // Backspace = 8, Enter = 13, NULL = 0
  let key = window.Event ? evt.which : evt.keyCode;
  let chark = String.fromCharCode(key);
  let tempValue = input.value + chark;
  if (key >= 48 && key <= 57 /* || key == 45 */) {
    return filter(tempValue, maxValue);
  } else {
    return key == 8 || key == 13 || key == 0;
  }
}

function filter(__val__, maxValue) {
  // /^-?[0-9]*$/; // positivos y negativos
  // /^[0-9]*$/; // solo positivos
  let preg = new RegExp("^\\d{1," + parseInt(maxValue, 10) + "}$");
  return preg.test(__val__);
}

function fillSelectById(id, values = []) {
  let select = document.getElementById(id);

  values.forEach((value, index) => {
    let option = document.createElement("option");
    option.setAttribute("value", value);
    let text = document.createTextNode(value);
    option.appendChild(text);

    if (index === 0) {
      option.setAttribute("selected", true);
    }
    select.appendChild(option);
  });
}

function fillAllSelects(values = valueList) {
  fillSelectById("txtTipoPap", values.tipoPap);
  fillSelectById("txtMotivoLlamada", values.motivoLlamada);
  fillSelectById("txtMotivoReinstalacion", values.motivoReinstalacion);
  fillSelectById("txtImpresora", values.impresoras);
  fillSelectById("txtBiometrico", values.biometricos);
  fillSelectById("txtWindows", values.windows);
  fillSelectById("txtAntivirus", values.antivirus);
  fillSelectById("txtLectora", values.lectoras);
  fillSelectById("txtConfronta", values.confronta);
  fillSelectById("txtCaracteristicas", values.caracteristicas);
  fillSelectById("txtNumeroCoinciden", values.numeroTel);
  fillSelectById("txtLlamadaContestada", values.numeroTel);
  fillSelectById("txtMensajeVoz", values.numeroTel);
  fillSelectById("txtInstalacionGYF", values.intalacionGYF);
  fillSelectById("txtPortatil", values.portatil);

  // Hide some input fields
  showInputs("txtMotivoReinstalacion",false);
  showInputs("txtOtroMotivoLlamada",false);
  showInputs("txtOtraImpresora",false);
  showInputs("txtOtraLectora",false);
  showInputs("txtMensajeVoz",false);
  showInputs("sectionGYF",false);
}

function fillHistorialTable(datos = []) {
  let bodyTable = document.getElementById("historialTableBody");

  // Clear all children elements of table body
  if(datos.length > 0){
    if(bodyTable.children.length > 0){
      for (const child of bodyTable.children) {
        bodyTable.removeChild(child)
      }
    }

    // Create new children elements for the body table
    datos.forEach((item, index) => {
      let i = document.createElement('i');
      i.classList.add('fa-solid');
      i.classList.add('fa-angles-right');

      let a = document.createElement('a');
      a.href = "#";
      a.appendChild(i);

      let td1 = document.createElement('td');
      td1.scope = 'row';
      td1.appendChild(a);

      let td2 = document.createElement('td');
      td2.innerHTML = item.datosPapObj.papCodigo;

      let td3 = document.createElement('td');
      td3.innerHTML = item.datosPapObj.motivoLlamada;

      let td4 = document.createElement('td');
      td4.innerHTML = item.datosPapObj.numServicio;

      let td5 = document.createElement('td');
      td5.innerHTML = item.datosValidacionRequisitos.estado;

      let td6 = document.createElement('td');
      td6.innerHTML = item.fechaGuardado;

      let tr = document.createElement('tr');
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      bodyTable.appendChild(tr);
    });
  }
}


function fillValueOnForm(idField, value = "") {
  if(value == undefined || value == null || value.length == 0){
    return;
  }

  document.getElementById(idField).value = value;
}

function fillDatosPapForm(datosPap = datosPapObj){
  fillValueOnForm("txtPapCodigo", datosPap.papCodigo);
  fillValueOnForm("txtContactoTelefono", datosPap.contactoTelefono);
  fillValueOnForm("txtContactoNombre", datosPap.contactoNombre);
  fillValueOnForm("txtPapCiudad", datosPap.papCiudad);
  fillValueOnForm("txtPapCaja", datosPap.papCaja);
  fillValueOnForm("txtNumServicio", datosPap.numServicio);
  fillValueOnForm("txtIdLlamada", datosPap.idLlamada);
  fillValueOnForm("txtTipoPap", datosPap.tipoPap);
  fillValueOnForm("txtMotivoLlamada", datosPap.motivoLlamada);
  fillValueOnForm("txtMotivoReinstalacion", datosPap.motivoReinstalacion);
  fillValueOnForm("txtOtroMotivoLlamada", datosPap.otroMotivoLlamada);
  fillValueOnForm("plantillaDatosPap", datosPap.plantilla);
}

function fillPrerrequisitosForm(datosValidacion = datosValidacionRequisitos){
  fillValueOnForm("txtImpresora", datosValidacion.impresora);
  fillValueOnForm("txtOtraImpresora", datosValidacion.otraImpresora);
  fillValueOnForm("txtBiometrico", datosValidacion.biometrico);
  fillValueOnForm("txtWindows", datosValidacion.windows);
  fillValueOnForm("txtAntivirus", datosValidacion.antivirus);
  fillValueOnForm("txtLectora", datosValidacion.lectora);
  fillValueOnForm("txtOtraLectora", datosValidacion.otraLectora);
  fillValueOnForm("txtConfronta", datosValidacion.confronta);
  fillValueOnForm("txtCaracteristicas", datosValidacion.caracteristicas);
  fillValueOnForm("txtNumeroCoinciden", datosValidacion.numeroCoinciden);
  fillValueOnForm("txtPortatil", datosValidacion.portatil);
  fillValueOnForm("plantillaValidacion", datosValidacion.plantilla);
  fillValueOnForm("plantillaMotivoReins", datosValidacion.plantillaMotivoReinstalacion);
}

function fillLlamadaSalienteForm(datosLlamada = datosLlamadaSaliente){
  fillValueOnForm("txtNombreSaliente", datosLlamada.nombre);
  fillValueOnForm("txtIdLlamadaSaliente", datosLlamada.idLlamada);
  fillValueOnForm("txtLlamadaContestada", datosLlamada.fueContestada);
  fillValueOnForm("txtMensajeVoz", datosLlamada.permiteMensajeVoz);
  fillValueOnForm("plantillaLlamadaSaliente", datosLlamada.plantilla);
  fillValueOnForm("plantillaBorradoCrd", datosLlamada.plantillaCrd);
}

function fillInstalacionRealizadaForm(datosInstalacion = datosInstalacionHecha){
  fillValueOnForm("txtAntivirusMarca", datosInstalacion.antivirus);
  fillValueOnForm("txtFechaAntivirus", datosInstalacion.fechaLicencia);
  fillValueOnForm("txtInstalacionGYF", datosInstalacion.gyf);
  fillValueOnForm("plantillaInstalacionRealizada", datosInstalacion.plantilla);
  fillValueOnForm("plantillaGYF", datosInstalacion.plantillaGyf);
  fillValueOnForm("plantillaErrorGYF", datosInstalacion.plantillaErrorGyf);
}

function getDiasFeriados(date = new Date()) {
  const urlRequest = `https://api.generadordni.es/v2/holidays/holidays?country=CO&year=${date.getFullYear()}`;
  fetch(urlRequest)
    .then(function (response) {
      if (response.ok) {
        console.log(response.json());
      } else {
        console.log("Respuesta de red OK pero respuesta HTTP no OK");
      }
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
}

function showInputs(idChildren, condition) {
  if (condition) {
    document
      .getElementById(idChildren)
      .parentElement.classList.remove("d-none");
  } else {
    document.getElementById(idChildren).parentElement.classList.add("d-none");
  }
}

function getReinstallationTemplate(datosPap = datosPapObj) {
  let textMotivo,
    textBorradoCrd = "";
  if (datosPap.motivo === valueList.motivoLlamada.at(1)) {
    let plantillaMotivoReins = templatesMotivoReinstalacion(datosPap);
    textMotivo = document.createTextNode(plantillaMotivoReins);

    let plantillaborradoCrd = templatesBorradoCrd(datosPap);
    textBorradoCrd = document.createTextNode(plantillaborradoCrd);
  } else {
    textMotivo = document.createTextNode("");
    textBorradoCrd = document.createTextNode("");
  }

  datosValidacionRequisitos.plantillaMotivoReinstalacion = textMotivo;
  datosLlamadaSaliente.plantillaCrd = textBorradoCrd;
  document.getElementById("plantillaMotivoReins").replaceChildren(textMotivo);
  document
    .getElementById("plantillaBorradoCrd")
    .replaceChildren(textBorradoCrd);
}

function getGYFTemplate(datosPap = datosPapObj, datosInstalacion=datosInstalacionHecha) {
  let textCierre, textError = document.createTextNode("");
  let motivoGYF = document.getElementById('txtInstalacionGYF').value;
  if (motivoGYF != valueList.intalacionGYF.at(0)) {
    let plantillaCierre = templateGYFInstalacion(motivoGYF);
    textCierre = document.createTextNode(plantillaCierre);

    if(motivoGYF != valueList.intalacionGYF.at(1)){
      let plantillaErrorIn = templatesDatosPap(datosPap, `GYF - ${motivoGYF}`);
      textError = document.createTextNode(plantillaErrorIn);
    }
  }

  datosInstalacionHecha.plantillaGyf = textCierre;
  datosInstalacionHecha.plantillaErrorGyf = textError;
  document.getElementById("plantillaErrorGYF").replaceChildren(textError);
  document
    .getElementById("plantillaGYF")
    .replaceChildren(textCierre);
}

/** EVENTS LISTENERS */
/** --------------------------------*/
window.addEventListener("load", function (evt) {
    fillAllSelects();
  });

document
  .getElementById("txtPapCodigo")
  .addEventListener("keypress", function (evt) {
    if (filterInteger(evt, evt.target) === false) {
      evt.preventDefault();
    }
  });

document
  .getElementById("txtPapCodigo")
  .addEventListener("paste", function (evt) {
    let paste = (evt.clipboardData || window.clipboardData).getData("text");
    if (filter(paste, 6) === false) {
      evt.preventDefault();
    }
  });

document
  .getElementById("txtContactoTelefono")
  .addEventListener("keypress", function (evt) {
    if (filterInteger(evt, evt.target, 10) === false) {
      evt.preventDefault();
    }
  });

document
  .getElementById("txtContactoTelefono")
  .addEventListener("paste", function (evt) {
    let paste = (evt.clipboardData || window.clipboardData).getData("text");
    if (filter(paste, 10) === false) {
      evt.preventDefault();
    }
  });

document
  .getElementById("txtPapCaja")
  .addEventListener("keypress", function (evt) {
    if (filterInteger(evt, evt.target, 1) === false) {
      evt.preventDefault();
    }
  });

document.getElementById("txtPapCaja").addEventListener("paste", (evt) =>{
  let paste = (evt.clipboardData || window.clipboardData).getData("text");
  if (filter(paste, 1) === false) {
    evt.preventDefault();
  }
});

document
  .getElementById("txtMotivoLlamada")
  .addEventListener("change", (evt) => {
    let value = evt.target.value;
    showInputs(
      "txtOtroMotivoLlamada",
      value === valueList.motivoLlamada.at(-1)
    );
    showInputs(
      "txtMotivoReinstalacion",
      value === valueList.motivoLlamada.at(1)
    );
    getReinstallationTemplate(datosPapObj);
    document.getElementById("txtOtroMotivoLlamada").value = '';
    document.getElementById("txtMotivoReinstalacion").selectedIndex = 0;
  });

document.getElementById("txtImpresora").addEventListener("change", (evt) => {
  let value = evt.target.value;
  showInputs("txtOtraImpresora", value === valueList.impresoras.at(-1));
  document.getElementById("txtOtraImpresora").value = '';
});

document.getElementById("txtLectora").addEventListener("change", (evt) => {
  let value = evt.target.value;
  showInputs("txtOtraLectora", value === valueList.lectoras.at(-1));
  document.getElementById("txtOtraLectora").value = '';
});

document
  .getElementById("txtInstalacionGYF")
  .addEventListener("change", (evt) => {
    let value = evt.target.value;
    showInputs(
      "sectionGYF",
      value !== valueList.intalacionGYF.at(0)
    );
    getGYFTemplate();
  });
  

document
  .getElementById("txtLlamadaContestada")
  .addEventListener("change", (evt) => {
    let value = evt.target.value;
    showInputs("txtMensajeVoz", value == "No");
    document.getElementById("txtMensajeVoz").value = '';
  });

document
  .getElementById("txtAntivirus")
  .addEventListener("change", (evt) => {
    document.getElementById("txtAntivirusMarca").value = "Cuenta con CrowdStrike";
    document.getElementById("txtAntivirusMarca").setAttribute("disabled", String(evt.target.value).includes("servientrega"));
    document.getElementById("txtFechaAntivirus").setAttribute("disabled", String(evt.target.value).includes("servientrega"));
  });

document.getElementById("btnDatosPap").addEventListener("click", (evt) => {
  evt.preventDefault();
  let otroMotivoLlamada = null;
  let papCodigo = document.getElementById("txtPapCodigo").value;
  let tipoPap = document.getElementById("txtTipoPap").value;
  let contactoTelefono = document.getElementById("txtContactoTelefono").value;
  let contactoNombre = document.getElementById("txtContactoNombre").value;
  let papCiudad = document.getElementById("txtPapCiudad").value;
  let papCaja = document.getElementById("txtPapCaja").value;
  let motivo = document.getElementById("txtMotivoLlamada").value;
  let motivoLlamada = "Sieweb - " + motivo;
  let motivoReinstalacion = document.getElementById(
    "txtMotivoReinstalacion"
  ).value;
  let numServicio = document.getElementById("txtNumServicio").value;
  let idLlamada = document.getElementById("txtIdLlamada").value;
  let text = null;

  if (motivo === valueList.motivoLlamada.at(1)) {
    motivoLlamada += " por " + motivoReinstalacion;
  }

  if (motivo === valueList.motivoLlamada.at(-1)) {
    otroMotivoLlamada = document.getElementById("txtOtroMotivoLlamada").value;
    motivoLlamada = otroMotivoLlamada;
  }

  datosPapObj = {
    papCodigo: papCodigo,
    contactoNombre: contactoNombre,
    tipoPap: tipoPap,
    papCiudad: papCiudad,
    contactoTelefono: contactoTelefono,
    papCaja: papCaja,
    motivo: motivo,
    motivoLlamada: motivoLlamada,
    motivoReinstalacion: motivoReinstalacion,
    otroMotivoLlamada: otroMotivoLlamada,
    numServicio: numServicio,
    idLlamada: idLlamada
  };

  getReinstallationTemplate(datosPapObj);

  let plantilla = templatesDatosPap(datosPapObj);
  text = document.createTextNode(plantilla);

  if (text !== null) {
    document.getElementById("plantillaDatosPap").replaceChildren(text);
  } else {
    document.getElementById("plantillaDatosPap").appendChild(text);
  }
  datosPapObj.plantilla = plantilla;
});

document.getElementById("btnValidacion").addEventListener("click", (evt) => {
  evt.preventDefault();
  let impresora = document.getElementById("txtImpresora").value;
  let otraImpresora = document.getElementById("txtOtraImpresora").value;
  let biometrico = document.getElementById("txtBiometrico").value;
  let windows = document.getElementById("txtWindows").value;
  let antivirus = document.getElementById("txtAntivirus").value;
  let lectora = document.getElementById("txtLectora").value;
  let otraLectora = document.getElementById("txtOtraLectora").value;
  let confronta = document.getElementById("txtConfronta").value;
  let caracteristicas = document.getElementById("txtCaracteristicas").value;
  let numeroCoinciden = document.getElementById("txtNumeroCoinciden").value;
  let autorizacionPortatil = document.getElementById("txtPortatil").value;
  let text = null;

  datosValidacionRequisitos = {
    impresora: impresora,
    otraImpresora: otraImpresora,
    lectora: lectora,
    otraLectora: otraLectora,
    biometrico: biometrico,
    confronta: confronta,
    caracteristicas: caracteristicas,
    numeroCoinciden: numeroCoinciden,
    windows: windows,
    antivirus: antivirus,
    portatil: autorizacionPortatil,
  };

  let plantilla = templatesValidacionPrerrequisitos(
    datosValidacionRequisitos,
    datosPapObj
  );
  text = document.createTextNode(plantilla);

  if (text !== null) {
    document.getElementById("plantillaValidacion").replaceChildren(text);
  } else {
    document.getElementById("plantillaValidacion").appendChild(text);
  }
  datosValidacionRequisitos.plantilla = plantilla;
});

document
  .getElementById("btnLlamadaSaliente")
  .addEventListener("click", (evt) => {
    evt.preventDefault();
    let nombreUsuarioSaliente =
      document.getElementById("txtNombreSaliente").value;
    let idLlamadaSaliente = document.getElementById(
      "txtIdLlamadaSaliente"
    ).value;
    let fueContestada = document.getElementById("txtLlamadaContestada").value;
    let permiteMensajeVoz = document.getElementById("txtMensajeVoz").value;
    let text = null;

    datosLlamadaSaliente = {
      nombre: nombreUsuarioSaliente,
      idLlamada: idLlamadaSaliente,
      fueContestada: fueContestada,
      permiteMensajeVoz: permiteMensajeVoz,
    };

    let plantilla = templatesLlamadaSaliente(datosLlamadaSaliente, datosPapObj);
    text = document.createTextNode(plantilla);

    if (text !== null) {
      document.getElementById("plantillaLlamadaSaliente").replaceChildren(text);
    } else {
      document.getElementById("plantillaLlamadaSaliente").appendChild(text);
    }
    datosLlamadaSaliente.plantilla = plantilla;
  });

document
  .getElementById("btnInstalacionRealizada")
  .addEventListener("click", (evt) => {
    let licencia = document.getElementById("txtFechaAntivirus").value;
    let antivirus = document.getElementById("txtAntivirusMarca").value;
    let gyf = document.getElementById("txtInstalacionGYF").value;
    let text = null;

    datosInstalacionHecha = {
      fechaLicencia: licencia,
      antivirus: antivirus,
      gyf: gyf,
    };

    let plantilla = templatesInstalacion(
      datosInstalacionHecha,
      datosValidacionRequisitos,
      datosPapObj
    );
    text = document.createTextNode(plantilla);

    if (text !== null) {
      document
        .getElementById("plantillaInstalacionRealizada")
        .replaceChildren(text);
    } else {
      document
        .getElementById("plantillaInstalacionRealizada")
        .appendChild(text);
    }
    datosInstalacionHecha.plantilla = plantilla;
  });

document.getElementById("btnNuevaPlantilla").addEventListener("click", (evt) => {
  location.reload();
});