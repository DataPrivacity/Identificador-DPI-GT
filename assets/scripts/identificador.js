const departamentos = {
    '01': {
        nombre: 'Guatemala',
        municipios: {
        '0101': 'Guatemala',
        '0102': 'Santa Catarina Pinula',
        '0103': 'San José Pinula',
        }
    },
    '02': {
        nombre: 'El Progreso',
        municipios: {
        '0201': 'Guastatoya',
        '0202': 'Morazán',
        }
    },
    '03': {
        nombre: 'Sacatepéquez',
        municipios: {
        'null': 'null',
        }
    },
    '04': {
        nombre: 'Chimaltenango',
        municipios: {
        'null': 'null',
        }
    },
    '05': {
        nombre: 'Escuintla',
        municipios: {
        'null': 'null',
        }
    },
    '06': {
        nombre: 'Santa Rosa',
        municipios: {
        'null': 'null',
        }
    },
    '07': {
        nombre: 'Sololá',
        municipios: {
        'null': 'null',
        }
    },
    '08': {
        nombre: 'Totonicapán',
        municipios: {
        'null': 'null',
        }
    },
    '09': {
        nombre: 'Quetzaltenango',
        municipios: {
        'null': 'null',
        }
    },
    '10': {
        nombre: 'Suchitepéquez',
        municipios: {
        'null': 'null',
        }
    },
    '11': {
        nombre: 'Retalhuleu',
        municipios: {
        'null': 'null',
        }
    },
    '12': {
        nombre: 'San Marcos',
        municipios: {
        'null': 'null',
        }
    },
    '13': {
        nombre: 'Huehuetenango',
        municipios: {
        'null': 'null',
        }
    },
    '14': {
        nombre: 'Quiché',
        municipios: {
        'null': 'null',
        }
    },
    '15': {
        nombre: 'Baja Verapaz',
        municipios: {
        'null': 'null',
        }
    },
    '16': {
        nombre: 'Alta Verapaz',
        municipios: {
        'null': 'null',
        }
    },
    '17': {
        nombre: 'Petén',
        municipios: {
        'null': 'null',
        }
    },
    '18': {
        nombre: 'Izabal',
        municipios: {
        'null': 'null',
        }
    },
    '19': {
        nombre: 'Zacapa',
        municipios: {
        'null': 'null',
        }
    },
    '20': {
        nombre: 'Chiquimula',
        municipios: {
        'null': 'null',
        }
    },
    '21': {
        nombre: 'Chiquimula',
        municipios: {
        'null': 'null',
        }
    },
    '22': {
        nombre: 'Jalapa',
        municipios: {
        'null': 'null',
        }
    },
    '23': {
        nombre: 'Jutiapa',
        municipios: {
        'null': 'null',
        }
    },
};

const $inputDepartamento = document.getElementById("departamento");
const $inputMunicipio = document.getElementById("municipio");
const $input = document.getElementById("dpi");

function obtenerDepartamentoYmunicipio(codigoDPI){
    let resultado = { departamento: 'Desconocido', municipio: 'Desconocido' };
    const codigoDepartamento = codigoDPI.substring(0, 2);
    const codigoMunicipio = codigoDPI.substring(0, 4);

    const departamento = departamentos[codigoDepartamento];

    if(departamento){
        resultado.departamento = departamento.nombre;
        const municipio = departamento.municipios[codigoMunicipio];

        if (municipio) {
            resultado.municipio = municipio;
        }else{
            return resultado;
        }
    }else{
        return resultado;
    }
    return resultado;
}

$input.addEventListener("input", function(e){
    let codigoDPI = e.target.value;
    if(codigoDPI.length >= 2){
        const resultado = obtenerDepartamentoYmunicipio(codigoDPI);
        mostrarResultado(resultado);
    }else{
        limpiarResultado();
    }
});

function mostrarResultado({ departamento, municipio }){
    $inputDepartamento.value = `${departamento}`;
    $inputMunicipio.value = `${municipio}`;
}

function limpiarResultado(){
    $inputDepartamento.value = '';
    $inputMunicipio.value = '';
}