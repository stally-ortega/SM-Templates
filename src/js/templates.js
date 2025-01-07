/** Plantilla generada con los datos del PAP en la llamada entrante */
function templatesDatosPap(datos=datosPapObj, otroMotivo=null) {
  return (
    `Punto de Atención: ${datos.papCodigo}\n` +
    `Nombre y Apellido: ${datos.contactoNombre}\n` +
    `\n` +
    `Se verifica la información en Genesys (Se le informa al usuario):\n` +
    `Tipo de Punto: ${datos.tipoPap}\n` +
    `Ciudad: ${datos.papCiudad}\n` +
    `Teléfono: ${datos.contactoTelefono}\n` +
    `\n` +
    `Se solicita adicionalmente:\n` +
    `\n` +
    `Caja: ${datos.papCaja}\n` +
    `Motivo de Llamada: ${(otroMotivo == null) ? datos.motivoLlamada : otroMotivo}\n` +
    `Número de Proyecto Afectado: N/A\n` +
    `\n` +
    `N° servicio: ${datos.numServicio}\n` +
    `Id. de llamada: ${datos.idLlamada}`
  );
}

/** Plantilla generada para la validación de requisitos */
function templatesValidacionPrerrequisitos(datosValidacion=datosValidacionRequisitos, datosPap=datosPapObj){ 
  return `Se comunica sra/sr ${datosPap.contactoNombre} informando el servicio ${datosPap.numServicio} para generar la ${datosPap.motivo} de Sieweb Live en caja N° ${datosPap.papCaja}${(datosPap.motivo == valueList.motivoLlamada.at(1)) ? " por " + datosPap.motivoReinstalacion : ""}. ` + 
    `Se valida confronta del servicio y se observa que ${datosValidacion.confronta.toLowerCase()}.\n` +
    `${(datosValidacion.numeroCoinciden == "No") ? 'Se valida que número de télefono registrado en el servicio no coincide con Weblive. Número indicado '+datosPap.contactoTelefono+'\n' : ''}` +
    `Se toma conexión remota y se verifica equipo.\n` +
    `Se encuentra que Windows ${(valueList.windows.findIndex(element => element == datosValidacion.windows) != valueListOk.windows) ? datosValidacion.windows.split(',', 2)[1]+', ' : 'está activo y cumple, '}` +
    `al validar características ${datosValidacion.caracteristicas.toLowerCase()}.\n` +
    `Se verifica y se encuentra que antivirus está${datosValidacion.antivirus.split(',', 2)[1]}\n` +
    `\n` +
    `Periféricos del usuario\n` +
    `*Impresora:    ${(datosValidacion.impresora.includes("Otra")) ? datosValidacion.otraImpresora : datosValidacion.impresora}\n` + 
    `*Biométrico:   ${datosValidacion.biometrico}\n` +
    `*Lectora:         ${(datosValidacion.lectora.includes("Otra")) ? datosValidacion.otraLectora : datosValidacion.lectora} - Ya configurada\n` + 
    `\n` + 
    validacionServicioCompleto(datosValidacion, datosPap)+
    `\n` +
    `Id. de la llamada: ${datosPap.idLlamada}`;
}

/** Plantilla generada para motivo de reinstalacion */
function templatesMotivoReinstalacion(datos=datosPapObj){
    return `Motivo de Reinstalación: ${datos.motivoReinstalacion}`;
}

/** Plantilla generada para borrado crd */
function templatesBorradoCrd(datos=datosPapObj){
  return `Buen día, por favor me pueden colaborar con el borrado de credenciales para el PAP No. ${datos.papCodigo}, caja No. ${datos.papCaja} con la ${datos.numServicio}, Se solicita por (Motivo Reinstalación: ${datos.motivoReinstalacion}). Gracias`;
}

/** Plantilla generada para la llamada saliente */
function templatesLlamadaSaliente(datosLlamada=datosLlamadaSaliente, datosPap=datosPapObj, values=valueList){
  // values.suspensiones[`${datosPap.motivo}`];
  let plantilla = "";
  if(datosLlamada.fueContestada == "No"){
    plantilla = `Tratamos de comunicarnos al número registrado en el servicio para realizar la ${(datosPap.motivo.includes("Otra")) ? datosPap.otroMotivoLlamada : datosPap.motivo}. Sin embargo, no fue posible establecer contacto con el punto. Se recuerda que por tiempos de gestión el servicio se cerrará el día ${calcularDiasHabiles(values.suspensiones[`${datosPap.motivo}`])}. `;
    plantilla += (datosLlamada.permiteMensajeVoz == "Si") ? "Se deja mensaje de voz y se validará de nuevo más tarde.\n" : "Operador no permite dejar mensaje de voz, se validará de nuevo más tarde.\n";
  } else {
    plantilla = `Nos comunicamos al número de teléfono registrado en el servicio y contesta la sra ${datosLlamada.nombre}, quien nos confirma los datos del servicio y nos permite tomar conexión remota. Se procede a finalizar llamada y continuamos con el proceso de forma remota, se le brindan indicaciones para que por favor esté pendiente del chat.\n`;
  }
  return plantilla + `Id. de la llamada: ${datosLlamada.idLlamada}`;
}

/** Plantilla generada para la instalación ya realizada */
function templatesInstalacion(datosInstalacion= datosInstalacionHecha, datosValidacion=datosValidacionRequisitos, datosPap=datosPapObj){
  return `Periféricos del usuario\n` +
  `*Impresora:    ${(datosValidacion.impresora.includes("Otra")) ? datosValidacion.otraImpresora : datosValidacion.impresora}\n` + 
  `*Biométrico:   ${datosValidacion.biometrico}\n` +
  `*Lectora:         ${(datosValidacion.lectora.includes("Otra")) ? datosValidacion.otraLectora : datosValidacion.lectora} - Ya configurada\n` + 
  `\n` +
  `Se procede a realizar la descarga de controladores correspondiente:\n` +
  `*Impresora\n` + 
  `*Biométrico\n` +
  `*Lectora\n` +
  `*Framework\n` +
  `*SQL 4 0 3\n` + 
  `*Sync 2 1\n` +
  `*Controlador de biométrico 2 1 1 5\n` +
  `*Controlador de biométrico 1 4 0 66. Instaladores Morpho (Microsoft Visual C++ 2013 *Redistributable MorphoSmart USB Driver, 3 C Windows System 32 y 64\n` +
  `* Controlador fw Nemo V05.01 CBM with FFD\n` +
  `*Controlador de impresora\n` +
  `*El punto contaba con antivirus ${(datosValidacion.antivirus.includes("servientrega")) ? "Crowstrike de Servientrega instalado" : datosInstalacion.antivirus + " instalado y con licencia activa de " + diferenciaFechasPorDias(datosInstalacion.fechaLicencia) + " días y va hasta el " + datosInstalacion.fechaLicencia}\n` +
  `*Adobe Reader se instala y predetermina\n` +
  `Se realiza la instalación de la aplicación de Sieweb Live\n` +
  `*Se realiza registro de caja.\n` +
  `*Se valida ${(datosPap.motivo == valueList.motivoLlamada.at(1)) ? "el ingreso a la aplicación con apoyo del cajero." : "prueba de ingreso con * ya que cajero no está enrolado."}\n` +
  `*Se finaliza remoto garantizando la operatividad del punto.\n` +
  `*Se cierran tareas y se adjuntan evidencias.`;
}

/** Funcion para determinar los comentarios de instalacion de GYF */
function templateGYFInstalacion(resultadoInstalacionGYF=''){
  let comentario = `Se procede con la instalación de los controladores de Giros y finanzas.\n\n` +
  `1. Se verifica drivers de biométrico actualizado y biométrico ok\n` +
  `2. Se instala VC_redist.x86.exe (Microsoft Visual C++ Redistributable x86)\n` +
  `3. Se instala VC_redist.x64.exe (Microsoft Visual C++ Redistributable x64)\n` +
  `4. Se instala AzTrust.exe (Oficina Virtual Segura)\n` +
  `5. Se instala Jre-8u361-windows-x64.exe (Componente Java para plugin biométrico)\n` +
  `6. Se instala Plugin Biométrico BU V1.2\n` +
  `7. Se configuran preferencias de impresorión y opciones de Internet\n` +
  `8. En Edge se configura barra lateral, Copiloto y compatibilidad con IExplorer\n` +
  `9. Se realiza prueba de biométrico con la url:\n` +
  `   - ${(datosValidacionRequisitos.biometrico == 'Digital Personal 4500 U.are.U') ? 'http://localhost:11011/api/fingerPrint/digital' : 'http://localhost:11011/api/fingerPrint/morpho'}\n` +
  `\n`;
  if(resultadoInstalacionGYF.includes("No")){
    comentario = "";
  } else if(resultadoInstalacionGYF.includes("Sin")){
    comentario += "Se valida el ingreso a cada uno de los módulos de Banco Unión sin ninguna novedad.";
  } else {
    comentario += `Se realiza el registro de GYF, pero nos genera el ${resultadoInstalacionGYF} cuando se toman las evidencias, se escala al grupo encargado para su respectiva gestión, se cierra tarea ya que el ${resultadoInstalacionGYF} se está gestionando bajo la INxxxxxx.`;
  }

  return comentario;
}
