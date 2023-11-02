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
};

const $inputDepartamento = document.getElementById("departamento");
const $inputMunicipio = document.getElementById("municipio");
const $input = document.getElementById("dpi");

function obtenerDepartamentoYmunicipio(codigoDPI){
    let resultado = { departamento: 'Desconocido', municipio: 'Desconocido' };
    const codigoDepartamento = codigoDPI.substring(0, 2);
    const codigoMunicipio = codigoDPI.substring(0, 4);

    if (codigoDPI.length >= 2) {
        const departamento = departamentos[codigoDepartamento];

        if (departamento) {
            resultado.departamento = departamento.nombre;

            if (codigoDPI.length >= 4) {
                const municipio = departamento.municipios[codigoMunicipio];
                resultado.municipio = municipio;
            }
        }
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