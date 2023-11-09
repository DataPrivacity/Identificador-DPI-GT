const departamentos = {
    '01': {
        nombre: 'GUATEMALA',
        municipios: {
            '0101': 'GUATEMALA',
            '0102': 'SANTA CATARINA PINULA',
            '0103': 'SAN JOSE PINULA',
            '0104': 'SAN JOSE DEL GOLFO',
            '0105': 'PALENCIA',
            '0106': 'CHINAUTLA',
            '0107': 'SAN PEDRO AYAMPUC',
            '0108': 'MIXCO',
            '0109': 'SAN PEDRO SACATEPEQUEZ',
            '0110': 'SAN JUAN SACATEPEQUEZ',
            '0111': 'SAN RAYMUNDO',
            '0112': 'CHUARRANCHO',
            '0113': 'FRAIJANES',
            '0114': 'AMATITLAN',
            '0115': 'VILLA NUEVA',
            '0116': 'VILLA CANALES',
            '0117': 'SAN MIGUEL PETAPA',
        }
    },
    '02': {
        nombre: 'EL PROGRESO',
        municipios: {
            '0201': 'GUASTATOYA',
            '0202': 'MORAZAN',
            '0203': 'SAN AGUSTIN ACASAGUASTLAN',
            '0204': 'SAN CRISTOBAL ACASAGUASTLAN',
            '0205': 'EL JICARO',
            '0206': 'SANSARE',
            '0207': 'SANARATE',
            '0208': 'SAN ANTONIO LA PAZ',         
        }
    },
    '03': {
        nombre: 'SACATEPEQUEZ',
        municipios: {
            '0301': 'ANTIGUA',
            '0302': 'JOCOTENANGO',
            '0303': 'PASTORES',
            '0304': 'SUMPANGO',
            '0305': 'SANTO DOMINGO XENACOJ',
            '0306': 'SANTIAGO SACATEPEQUEZ',
            '0307': 'SAN BARTOLOME MILPAS ALTAS',
            '0308': 'SAN LUCAS SACATEPEQUEZ',
            '0309': 'SANTA LUCIA MILPAS ALTAS',
            '0310': 'MAGDALENA MILPAS ALTAS',
            '0311': 'SANTA MARIA DE JESUS',
            '0312': 'CIUDAD VIEJA',
            '0313': 'SAN MIGUEL DUENAS',
            '0314': 'ALOTENANGO',
            '0315': 'SAN ANTONIO AGUAS CALIENTES',
            '0316': 'SANTA CATARINA BARAHONA',
        }
    },
    '04': {
        nombre: 'CHIMALTENANGO',
        municipios: {
            '0401': 'CHIMALTENANGO',
            '0402': 'SAN JOSE POAQUIL',
            '0403': 'SAN MARTIN JILOTEPEQUE',
            '0404': 'SAN JUAN COMALAPA',
            '0405': 'SANTA APOLONIA',
            '0406': 'TECPAN GUATEMALA',
            '0407': 'PATZUN',
            '0408': 'SAN MIGUEL POCHUTA',
            '0409': 'PATZICIA',
            '0410': 'SANTA CRUZ BALANYA',
            '0411': 'ACATENANGO',
            '0412': 'SAN PEDRO YEPOCAPA',
            '0413': 'SAN ANDRES ITZAPA',
            '0414': 'PARRAMOS',
            '0415': 'ZARAGOZA',
            '0416': 'EL TEJAR',
        }
    },
    '05': {
        nombre: 'ESCUINTLA',
        municipios: {
            '0501': 'ESCUINTLA',
            '0502': 'SANTA LUCIA COTZUMALGUAPA',
            '0503': 'LA DEMOCRACIA',
            '0504': 'SIQUINALA',
            '0505': 'MASAGUA',
            '0506': 'TIQUISATE',
            '0507': 'LA GOMERA',
            '0508': 'GUANAGAZAPA',
            '0509': 'SAN JOSE',
            '0510': 'IZTAPA',
            '0511': 'PALIN',
            '0512': 'SAN VICENTE PACAYA',
            '0513': 'NUEVA CONCEPCION',
        }
    },
    '06': {
        nombre: 'SANTA ROSA',
        municipios: {
            '0601': 'CUILAPA',
            '0602': 'BARBERENA',
            '0603': 'SANTA ROSA DE LIMA',
            '0604': 'CASILLAS',
            '0605': 'SAN RAFAEL LAS FLORES',
            '0606': 'ORATORIO',
            '0607': 'SAN JUAN TECUACO',
            '0608': 'CHIQUIMULILLA',
            '0609': 'TAXISCO',
            '0610': 'SANTA MARIA IXHUATAN',
            '0611': 'GUAZACAPAN',
            '0612': 'SANTA CRUZ NARANJO',
            '0613': 'PUEBLO NUEVO VIÑAS',
            '0614': 'NUEVA SANTA ROSA',
        }
    },
    '07': {
        nombre: 'SOLOLA',
        municipios: {
            '0701': 'SOLOLA',
            '0702': 'SAN JOSE CHACAYA',
            '0703': 'SANTA MARIA VISITACION',
            '0704': 'SANTA LUCIA UTATLAN',
            '0705': 'NAHUALA',
            '0706': 'SANTA CATARINA IXTAHUACAN',
            '0707': 'SANTA CLARA LA LAGUNA',
            '0708': 'CONCEPCION',
            '0709': 'SAN ANDRES SEMETABAJ',
            '0710': 'PANAJACHEL',
            '0711': 'SANTA CATARINA PALOPO',
            '0712': 'SAN ANTONIO PALOPO',
            '0713': 'SAN LUCAS TOLIMAN',
            '0714': 'SANTA CRUZ LA LAGUNA',
            '0715': 'SAN PABLO LA LAGUNA',
            '0716': 'SAN MARCOS LA LAGUNA',
            '0717': 'SAN JUAN LA LAGUNA',
            '0718': 'SAN PEDRO LA LAGUNA',
            '0719': 'SANTIAGO ATITLAN',
        }
    },
    '08': {
        nombre: 'TOTONICAPAN',
        municipios: {
            '0801': 'TOTONICAPAN',
            '0802': 'SAN CRISTOBAL TOTONICAPAN',
            '0803': 'SAN FRANCISCO EL ALTO',
            '0804': 'SAN ANDRES XECUL',
            '0805': 'MOMOSTENANGO',
            '0806': 'SANTA MARIA CHIQUIMULA',
            '0807': 'SANTA LUCIA LA REFORMA',
            '0808': 'SAN BARTOLO AGUAS CALIENTES',
        }
    },
    '09': {
        nombre: 'QUETZALTENANGO',
        municipios: {
            '0901': 'QUETZALTENANGO',
            '0902': 'SALCAJA',
            '0903': 'OLINTEPEQUE',
            '0904': 'SAN CARLOS SIJA',
            '0905': 'SIBILIA',
            '0906': 'CABRICAN',
            '0907': 'CAJOLA',
            '0908': 'SAN MIGUEL SIGUILA',
            '0909': 'SAN JUAN OSTUNCALCO',
            '0910': 'SAN MATEO',
            '0911': 'CONCEPCION CHIQUIRICHAPA',
            '0912': 'SAN MARTIN SACATEPEQUEZ',
            '0913': 'ALMOLONGA',
            '0914': 'CANTEL',
            '0915': 'HUITAN',
            '0916': 'ZUNIL',
            '0917': 'COLOMBA COSTA CUCA',
            '0918': 'SAN FRANCISCO LA UNION',
            '0919': 'EL PALMAR',
            '0920': 'COATEPEQUE',
            '0921': 'GENOVA COSTA CUCA',
            '0922': 'FLORES COSTA CUCA',
            '0923': 'LA ESPERANZA',
            '0924': 'PALESTINA DE LOS ALTOS',
        }
    },
    '10': {
        nombre: 'SUCHITEPEQUEZ',
        municipios: {
            '1001': 'MAZATENANGO',
            '1002': 'CUYOTENANGO',
            '1003': 'SAN FRANCISCO ZAPOTITLAN',
            '1004': 'SAN BERNARDINO',
            '1005': 'SAN JOSE EL IDOLO',
            '1006': 'SANTO DOMINGO SUCHITEPEQUEZ',
            '1007': 'SAN LORENZO',
            '1008': 'SAMAYAC',
            '1009': 'SAN PABLO JOCOPILAS',
            '1010': 'SAN ANTONIO SUCHITEPEQUEZ',
            '1011': 'SAN MIGUEL PANAM',
            '1012': 'SAN GABRIEL',
            '1013': 'CHICACAO',
            '1014': 'PATULUL',
            '1015': 'SANTA BARBARA',
            '1016': 'SAN JUAN BAUTISTA',
            '1017': 'SANTO TOMAS LA UNION',
            '1018': 'ZUNILITO',
            '1019': 'PUEBLO NUEVO',
            '1020': 'RIO BRAVO',
        }
    },
    '11': {
        nombre: 'RETALHULEU',
        municipios: {
            '1101': 'RETALHULEU',
            '1102': 'SAN SEBASTIAN',
            '1103': 'SANTA CRUZ MULUA',
            '1104': 'SAN MARTIN ZAPOTITLAN',
            '1105': 'SAN FELIPE',
            '1106': 'SAN ANDRES VILLA SECA',
            '1107': 'CHAMPERICO',
            '1108': 'NUEVO SAN CARLOS',
            '1109': 'EL ASINTAL',
        }
    },
    '12': {
        nombre: 'SAN MARCOS',
        municipios: {
            '1201': 'SAN MARCOS',
            '1202': 'SAN PEDRO SACATEPEQUEZ',
            '1203': 'SAN ANTONIO SACATEPEQUEZ',
            '1204': 'COMITANCILLO',
            '1205': 'SAN MIGUEL IXTAHUACAN',
            '1206': 'CONCEPCION TUTUAPA',
            '1207': 'TACANA',
            '1208': 'SIBINAL',
            '1209': 'TAJUMULCO',
            '1210': 'TEJUTLA',
            '1211': 'SAN RAFAEL PIE DE LA CUESTA',
            '1212': 'NUEVO PROGRESO',
            '1213': 'EL TUMBADOR',
            '1214': 'SAN JOSE EL RODEO',
            '1215': 'MALACATAN',
            '1216': 'CATARINA',
            '1217': 'AYUTLA (TECUN UMAN)',
            '1218': 'OCOS',
            '1219': 'SAN PABLO',
            '1220': 'EL QUETZAL',
            '1221': 'LA REFORMA',
            '1222': 'PAJAPITA',
            '1223': 'IXCHIGUAN',
            '1224': 'SAN JOSE OJETENAN',
            '1225': 'SAN CRISTOBAL CUCHO',
            '1226': 'SIPACAPA',
            '1227': 'ESQUIPULAS PALO GORDO',
            '1228': 'RIO BLANCO',
            '1229': 'SAN LORENZO',
        }
    },
    '13': {
        nombre: 'HUEHUETENANGO',
        municipios: {
            '1301': 'HUEHUETENANGO',
            '1302': 'CHIANTLA',
            '1303': 'MALACATANCITO',
            '1304': 'CUILCO',
            '1305': 'NENTON',
            '1306': 'SAN PEDRO NECTA',
            '1307': 'JACALTENANGO',
            '1308': 'SAN PEDRO SOLOMA',
            '1309': 'SAN ILDEFONSO IXTAHUACAN',
            '1310': 'SANTA BARBARA',
            '1311': 'LA LIBERTAD',
            '1312': 'LA DEMOCRACIA',
            '1313': 'SAN MIGUEL ACATAN',
            '1314': 'SAN RAFAEL LA INDEPENDENCIA',
            '1315': 'TODOS SANTOS CUCHUMATAN',
            '1316': 'SAN JUAN ATITAN',
            '1317': 'SANTA EULALIA',
            '1318': 'SAN MATEO IXTATAN',
            '1319': 'COLOTENANGO',
            '1320': 'SAN SEBASTIAN HUEHUETENANGO',
            '1321': 'TECTITAN',
            '1322': 'CONCEPCION HUISTA',
            '1323': 'SAN JUAN IXCOY',
            '1324': 'SAN ANTONIO HUISTA',
            '1325': 'SAN SEBASTIAN COATAN',
            '1326': 'SANTA CRUZ BARILLAS',
            '1327': 'AGUACATAN',
            '1328': 'SAN RAFAEL PETZAL',
            '1329': 'SAN GASPAR IXCHIL',
            '1330': 'SANTIAGO CHIMALTENANGO',
            '1331': 'SANTA ANA HUISTA',
            '1332': 'UNIÓN CANTINIL',
        }
    },
    '14': {
        nombre: 'EL QUICHE',
        municipios: {
            '1401': 'SANTA CRUZ DEL QUICHE',
            '1402': 'CHICHE',
            '1403': 'CHINIQUE',
            '1404': 'ZACUALPA',
            '1405': 'CHAJUL',
            '1406': 'STO TOMAS CHICHICASTENANGO',
            '1407': 'PATZITE',
            '1408': 'SAN ANTONIO ILOTENANGO',
            '1409': 'SAN PEDRO JOCOPILAS',
            '1410': 'CUNEN',
            '1411': 'SAN JUAN COTZAL',
            '1412': 'JOYABAJ',
            '1413': 'NEBAJ',
            '1414': 'SAN ANDRES SAJCABAJA',
            '1415': 'SAN MIGUEL USPANTAN',
            '1416': 'SACAPULAS',
            '1417': 'SAN BARTOLOME JOCOTENANGO',
            '1418': 'CANILLA',
            '1419': 'CHICAMAN',
            '1420': 'IXCAN',
            '1421': 'PACHALUN',
            '1422': 'PLAYA GRANDE',
        }
    },
    '15': {
        nombre: 'BAJA VERAPAZ',
        municipios: {
            '1501': 'SALAMA',
            '1502': 'SAN MIGUEL CHICAJ',
            '1503': 'RABINAL',
            '1504': 'CUBULCO',
            '1505': 'GRANADOS',
            '1506': 'SANTA CRUZ EL CHOL',
            '1507': 'SAN JERONIMO',
            '1508': 'PURULHA',
        }
    },
    '16': {
        nombre: 'ALTA VERAPAZ',
        municipios: {
            '1601': 'COBAN',
            '1602': 'SANTA CRUZ VERAPAZ',
            '1603': 'SAN CRISTOBAL VERAPAZ',
            '1604': 'TACTIC',
            '1605': 'TAMAHU',
            '1606': 'TUCURU',
            '1607': 'PANZOS',
            '1608': 'SENAHU',
            '1609': 'SAN PEDRO CARCHA',
            '1610': 'SAN JUAN CHAMELCO',
            '1611': 'LANQUIN',
            '1612': 'SANTA MARIA CAHABON',
            '1613': 'CHISEC',
            '1614': 'CHAHAL',
            '1615': 'FRAY BARTOLOME DE LAS CASAS',
            '1616': 'LA TINTA',
            '1617': 'RAXRUHA',
        }
    },
    '17': {
        nombre: 'EL PETEN',
        municipios: {
            '1701': 'FLORES',
            '1702': 'SAN JOSE',
            '1703': 'SAN BENITO',
            '1704': 'SAN ANDRES',
            '1705': 'LA LIBERTAD',
            '1706': 'SAN FRANCISCO',
            '1707': 'SANTA ANA',
            '1708': 'DOLORES',
            '1709': 'SAN LUIS',
            '1710': 'SAYAXCHE',
            '1711': 'MELCHOR DE MENCOS',
            '1712': 'POPTUN',
        }
    },
    '18': {
        nombre: 'IZABAL',
        municipios: {
            '1801': 'PUERTO BARRIOS',
            '1802': 'LIVINGSTON',
            '1803': 'EL ESTOR',
            '1804': 'MORALES',
            '1805': 'LOS AMATES',
        }
    },
    '19': {
        nombre: 'ZACAPA',
        municipios: {
            '1901': 'ZACAPA',
            '1902': 'ESTANZUELA',
            '1903': 'RIO HONDO',
            '1904': 'GUALAN',
            '1905': 'TECULUTAN',
            '1906': 'USUMATLAN',
            '1907': 'CABANAS',
            '1908': 'SAN DIEGO',
            '1909': 'LA UNION',
            '1910': 'HUITE',
        }
    },
    '20': {
        nombre: 'CHIQUIMULA',
        municipios: {
            '2001': 'CHIQUIMULA',
            '2002': 'SAN JOSE LA ARADA',
            '2003': 'SAN JUAN LA ERMITA',
            '2004': 'JOCOTAN',
            '2005': 'CAMOTAN',
            '2006': 'OLOPA',
            '2007': 'ESQUIPULAS',
            '2008': 'CONCEPCION LAS MINAS',
            '2009': 'QUEZALTEPEQUE',
            '2010': 'SAN JACINTO',
            '2011': 'IPALA',
        }
    },
    '21': {
        nombre: 'JALAPA',
        municipios: {
            '2101': 'JALAPA',
            '2102': 'SAN PEDRO PINULA',
            '2103': 'SAN LUIS JILOTEPEQUE',
            '2104': 'SAN MANUEL CHAPARRON',
            '2105': 'SAN CARLOS ALZATATE',
            '2106': 'MONJAS',
            '2107': 'MATAQUESCUINTLA',
        }
    },
    '22': {
        nombre: 'JUTIAPA',
        municipios: {
            '2201': 'JUTIAPA',
            '2202': 'EL PROGRESO',
            '2203': 'SANTA CATARINA MITA',
            '2204': 'AGUA BLANCA',
            '2205': 'ASUNCION MITA',
            '2206': 'YUPILTEPEQUE',
            '2207': 'ATESCATEMPA',
            '2208': 'JEREZ',
            '2209': 'EL ADELANTO',
            '2210': 'ZAPOTITLAN',
            '2211': 'COMAPA',
            '2212': 'JALPATAGUA',
            '2213': 'CONGUACO',
            '2214': 'MOYUTA',
            '2215': 'PASACO',
            '2216': 'SAN JOSE ACATEMPA',
            '2217': 'QUESADA',
        }
    },
};

const $inputDepartamento = document.getElementById("departamento");
const $inputMunicipio = document.getElementById("municipio");
const $input = document.getElementById("cui");

function obtenerDepartamentoYmunicipio(cui){
    let resultado = {
        departamento_codigo: '',
        departamento_nombre: 'Desconocido',
        municipio_codigo: '',
        municipio_nombre: 'Desconocido'
    };
    const codigoDepartamento = cui.substring(9, 11);
    const codigoMunicipio = cui.substring(9, 13);
    console.table(codigoDepartamento);
    console.table(codigoMunicipio);

    const departamento = departamentos[codigoDepartamento];

    if(departamento){
        resultado.departamento_codigo = codigoDepartamento;
        resultado.departamento_nombre = departamento.nombre;
        const municipio = departamento.municipios[codigoMunicipio];

        if (municipio) {
            resultado.municipio_codigo = codigoMunicipio;
            resultado.municipio_nombre = municipio;
        }else{
            return resultado;
        }
    }else{
        return resultado;
    }
    return resultado;
}

$input.addEventListener("input", function(e){
    let cui = e.target.value;
    if(cui.length >= 11){
        const resultado = obtenerDepartamentoYmunicipio(cui);
        mostrarResultado(resultado);
    }else{
        limpiarResultado();
    }
});

function mostrarResultado({ departamento_codigo, departamento_nombre, municipio_codigo, municipio_nombre }){
    const departamento = $inputDepartamento.options[0];
    departamento.value = `${departamento_codigo}`;
    departamento.text = `${departamento_nombre}`;
    const municipio = $inputMunicipio.options[0];
    municipio.value = `${municipio_codigo}`;
    municipio.text = `${municipio_nombre}`;
}

function limpiarResultado() {
    $inputDepartamento.options[0].value = '';
    $inputDepartamento.options[0].text = '';
    $inputMunicipio.options[0].value = '';
    $inputMunicipio.options[0].text = '';
}