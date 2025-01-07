const diasFestivos = [
    {
        "date": "2025-01-01 00:00:00",
        "start": "2025-01-01T05:00:00.000Z",
        "end": "2025-01-02T05:00:00.000Z",
        "name": "Año Nuevo",
        "type": "public",
        "rule": "01-01"
    },
    {
        "date": "2025-01-06 00:00:00",
        "start": "2025-01-06T05:00:00.000Z",
        "end": "2025-01-07T05:00:00.000Z",
        "name": "Día de los Reyes Magos",
        "type": "public",
        "rule": "monday after 01-06"
    },
    {
        "date": "2025-03-24 00:00:00",
        "start": "2025-03-24T05:00:00.000Z",
        "end": "2025-03-25T05:00:00.000Z",
        "name": "San José",
        "type": "public",
        "rule": "monday after 03-19"
    },
    {
        "date": "2025-04-17 00:00:00",
        "start": "2025-04-17T05:00:00.000Z",
        "end": "2025-04-18T05:00:00.000Z",
        "name": "Jueves Santo",
        "type": "public",
        "rule": "easter -3"
    },
    {
        "date": "2025-04-18 00:00:00",
        "start": "2025-04-18T05:00:00.000Z",
        "end": "2025-04-19T05:00:00.000Z",
        "name": "Viernes Santo",
        "type": "public",
        "rule": "easter -2"
    },
    {
        "date": "2025-05-01 00:00:00",
        "start": "2025-05-01T05:00:00.000Z",
        "end": "2025-05-02T05:00:00.000Z",
        "name": "Día del trabajador",
        "type": "public",
        "rule": "05-01"
    },
    {
        "date": "2025-06-02 00:00:00",
        "start": "2025-06-02T05:00:00.000Z",
        "end": "2025-06-03T05:00:00.000Z",
        "name": "La Asunción",
        "type": "public",
        "rule": "easter 43"
    },
    {
        "date": "2025-06-23 00:00:00",
        "start": "2025-06-23T05:00:00.000Z",
        "end": "2025-06-24T05:00:00.000Z",
        "name": "Corpus Christi",
        "type": "public",
        "rule": "easter 64"
    },
    {
        "date": "2025-06-30 00:00:00",
        "start": "2025-06-30T05:00:00.000Z",
        "end": "2025-07-01T05:00:00.000Z",
        "name": "Sagrado Corazón de Jesús",
        "type": "public",
        "rule": "easter 71"
    },
    {
        "date": "2025-06-30 00:00:00",
        "start": "2025-06-30T05:00:00.000Z",
        "end": "2025-07-01T05:00:00.000Z",
        "name": "San Pedro y San Pablo",
        "type": "public",
        "rule": "monday after 06-29"
    },
    {
        "date": "2025-07-20 00:00:00",
        "start": "2025-07-20T05:00:00.000Z",
        "end": "2025-07-21T05:00:00.000Z",
        "name": "Día de la Independencia",
        "type": "public",
        "rule": "07-20"
    },
    {
        "date": "2025-08-07 00:00:00",
        "start": "2025-08-07T05:00:00.000Z",
        "end": "2025-08-08T05:00:00.000Z",
        "name": "Batalla de Boyacá",
        "type": "public",
        "rule": "08-07"
    },
    {
        "date": "2025-08-18 00:00:00",
        "start": "2025-08-18T05:00:00.000Z",
        "end": "2025-08-19T05:00:00.000Z",
        "name": "Asunción",
        "type": "public",
        "rule": "monday after 08-15"
    },
    {
        "date": "2025-10-13 00:00:00",
        "start": "2025-10-13T05:00:00.000Z",
        "end": "2025-10-14T05:00:00.000Z",
        "name": "Día de la Raza",
        "type": "public",
        "rule": "monday after 10-12"
    },
    {
        "date": "2025-11-03 00:00:00",
        "start": "2025-11-03T05:00:00.000Z",
        "end": "2025-11-04T05:00:00.000Z",
        "name": "Todos los Santos",
        "type": "public",
        "rule": "1st monday in November"
    },
    {
        "date": "2025-11-17 00:00:00",
        "start": "2025-11-17T05:00:00.000Z",
        "end": "2025-11-18T05:00:00.000Z",
        "name": "Independencia de Cartagena",
        "type": "public",
        "rule": "monday after 11-11"
    },
    {
        "date": "2025-12-08 00:00:00",
        "start": "2025-12-08T05:00:00.000Z",
        "end": "2025-12-09T05:00:00.000Z",
        "name": "La inmaculada concepción",
        "type": "public",
        "rule": "12-08"
    },
    {
        "date": "2025-12-25 00:00:00",
        "start": "2025-12-25T05:00:00.000Z",
        "end": "2025-12-26T05:00:00.000Z",
        "name": "Navidad",
        "type": "public",
        "rule": "12-25"
    }
];

const valueList = {
  tipoPap: ["Contratista", "Directo"],
  biometricos: [
    "Seleccione...",
    "Morpho MSO1300 E3",
    "Digital Personal 4500 U.are.U",
  ],
  impresoras: [
    "Seleccione...",
    "Epson TM-T20 Receipt",
    "Epson TM-T88V Receipt",
    "Custom THEA XTHEA",
    "Citizen CT-S310II",
    "Otras marcas",
  ],
  lectoras: [
    "Seleccione...",
    "DataLogic TD1100 1D",
    "Metrologic Ms9520 1D",
    "HandHeld Barcode Scanner",
    "Honeywell MS5145",
    "Honeywell 1900 2D",
    "Honeywell 1950G 2D",
    "Newland NLS HR3280 2D",
    "Otras marcas",
  ],
  motivoLlamada: ["Instalacion nueva", "Reinstalacion", "Otro motivo"],
  motivoReinstalacion: [
    "Formateo Equipo",
    "Cambio de Equipo",
    "Cambio de Disco duro",
    "Daño Total del equipo",
    "Se borró CRD, cuenta con programas instalados",
  ],
  confronta: [
    "Seleccione...",
    "Si tiene, adjunta",
    "No cuenta con confronta",
    "No necesita, es NIT",
  ],
  portatil: [
    "No necesita",
    "Con autorización de portatil",
    "No cuenta con autorización",
  ],
  windows: [
    "Seleccione...",
    "Activo y cumple",
    "No cumple, está sin activar",
    "No cumple, es windows modificado",
  ],
  caracteristicas: [
    "Seleccione...",
    "Cumplen",
    "No cumple por procesador",
    "No cumple por RAM",
    "No cumple por arquitectura del sistema (32 bits)",
    "No cumple por espacio en disco"
  ],
  antivirus: [
    "Seleccione...",
    "Cumple, instalado y activo",
    "Cumple, instalado por servientrega (Crowstrike)",
    "No cumple, sin instalar",
    "No cumple, sin licencia",
  ],
  numeroTel: ["Seleccione...", "Si", "No"],
  suspensiones: { "Instalacion nueva": 1, Reinstalacion: 3 },
  intalacionGYF: [
    "No requiere",
    "Sin error",
    "Error 240",
    "Error 190",
    "Error de visualizacion",
    "Error 005",
    "Error de sintaxis"
  ],
};

const valueListOk = {
  confronta: [1, 3],
  windows: 1,
  caracteristicas: 1,
  antivirus: [1, 2],
  numeroTel: 1,
  portatil: [0, 1]
};

let datosPapObj = {
  papCodigo: parseInt("000000"),
  contactoNombre: "xxxxx",
  tipoPap: "",
  papCiudad: "",
  contactoTelefono: parseInt("0000000000"),
  papCaja: 0,
  motivo: "",
  motivoLlamada: "",
  motivoReinstalacion: "",
  otroMotivoLlamada: "",
  numServicio: "",
  idLlamada: "",
  plantilla: "",
};

let datosValidacionRequisitos = {
  impresora: "",
  otraImpresora: null,
  lectora: "",
  otraLectora: null,
  biometrico: "",
  confronta: "",
  caracteristicas: "",
  numeroCoinciden: false,
  windows: "",
  antivirus: "",
  portatil: "",
  estado: "",
  plantilla: "",
  plantillaMotivoReinstalacion: "",
};

let datosLlamadaSaliente = {
  nombre: "",
  idLlamada: "",
  fueContestada: "",
  permiteMensajeVoz: "",
  plantilla: "",
  plantillaCrd: ""
};

let datosInstalacionHecha = {
  antivirus: "",
  fechaLicencia: new Date(),
  gyf: "",
  plantilla: "",
  plantillaGyf: "",
  plantillaErrorGyf: ""
};

let historialItem = {
  "datosPap": datosPapObj,
  "datosValidacion": datosValidacionRequisitos,
  "datosLlamadaSalientes": datosLlamadaSaliente,
  "datosInstalacion": datosInstalacionHecha,
  "fechaGuardado": "none"
};

let datosPrueba = [
	{
	 "papCodigo": 913214,
	 "motivo": "Instalacion nueva",
	 "numServicio": "PT123456",
	 "estado": "No cumple",
	 "fechaGuardado": "14/01/2024 04:18 pm"
	},
	{
	 "papCodigo": parseInt("054378"),
	 "motivo": "Reinstalacion por formateo",
	 "numServicio": "PT124356",
	 "estado": "Instalado",
	 "fechaGuardado": "14/01/2024 04:21 pm"
	},
	{
	 "papCodigo": 913412,
	 "motivo": "Instalacion nueva",
	 "numServicio": "PT125634",
	 "estado": "No cumple",
	 "fechaGuardado": "14/01/2024 04:18 pm"
	},
	{
	 "papCodigo": parseInt("053421"),
	 "motivo": "Reinstalacion por formateo",
	 "numServicio": "PT123654",
	 "estado": "Instalado",
	 "fechaGuardado": "14/01/2024 04:21 pm"
	},
	{
	 "papCodigo": 921345,
	 "motivo": "Reinstalacion por cambio de disco",
	 "numServicio": "PT123465",
	 "estado": "No cumple",
	 "fechaGuardado": "14/01/2024 04:18 pm"
	},
	{
	 "papCodigo": parseInt("050978"),
	 "motivo": "Instalacion caja nueva",
	 "numServicio": "PT654321",
	 "estado": "Instalado",
	 "fechaGuardado": "14/01/2024 04:21 pm"
	},
	{
	 "papCodigo": 924567,
	 "motivo": "Instalacion caja nueva",
	 "numServicio": "PT654312",
	 "estado": "No cumple",
	 "fechaGuardado": "14/01/2024 04:18 pm"
	},
	{
	 "papCodigo": parseInt("031267"),
	 "motivo": "Reinstalacion por borrado crd",
	 "numServicio": "PT654213",
	 "estado": "Instalado",
	 "fechaGuardado": "14/01/2024 04:21 pm"
	},
	{
	 "papCodigo": 914581,
	 "motivo": "Reinstalacion por cambio de disco",
	 "numServicio": "PT654132",
	 "estado": "No cumple",
	 "fechaGuardado": "14/01/2024 04:18 pm"
	},
	{
	 "papCodigo": parseInt("025631"),
	 "motivo": "Instalacion nueva",
	 "numServicio": "PT123546",
	 "estado": "Instalado",
	 "fechaGuardado": "14/01/2024 04:21 pm"
	}
];