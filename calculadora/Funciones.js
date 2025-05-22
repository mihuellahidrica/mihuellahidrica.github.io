// Función js para calcular huella hidrica 
var productos;
var tiposdesuelos;
var profundida;
var evapotraspiracion;
var diasdecosechas;
var componentequimico;
let huellaAzul = 0;
let huellaverde = 0;
let huellagris = 0;
let huellatotal = 0;
var etAzul = 0;
let Etaverde = 0;
let totalEto = 0;
var tasaderecubrimiento = 235.224;
var cmax = 0;
var cnat = 0;
var uac = 0;
let uacverde = 0
rendimiento = 0;
window.onload = function () {

    productos = [[0, 1.05, 1.05, 0.95], [0, 1.05, 1.05, 0.95], [0, 1.05, 1.05, 0.95], [0, 1.05, 1.05, 0.95], [0, 1.05, 1.05, 0.95], [0, 1.05, 1.05, 1],
    [0, 1, 1, 0.7], [0, 1, 1, 0.95], [0, 1.05, 1.05, 0.75], [0, 1, 1, 1], [0, 1.05, 1.05, 0.8], [0, 1, 1, 0.95], [0, 0.9, 0.9, 0.85],
    [0, 1.05, 0.9, 0.8], [0, 1.05, 0.9, 0.7], [0, 1.15, 0.70, 0.6], [0.5, 0.85, 0.60, 0.3], [0.6, 1, 0.75, 0.3], [0.5, 1, 0.9, 0.3],
    [0, 1, 1, 0.8], [0, 0.95, 0.95, 0.75], [0, 1.05, 1.05, 0.75], [0.4, 1, 1, 0], [0, 1.05, 1.05, 0.95], [0.3, 0.80, 0.80, 0.30],
    [0.3, 1.10, 1.10, 0.50], [0.5, 1.05, 1.05, 0.95], [0, 1.15, 1.15, 0.75], [0, 1.15, 1.15, 0.65], [0, 1.10, 1.10, 0.95], [0.35, 1.20, 1.20, 0.70],
    [0.5, 1.05, 1.05, 0.90], [0.4, 1.15, 1.15, 0.35], [0, 1, 1, 0.35], [0.5, 1.15, 1.15, 1.10], [0.5, 1.15, 1.15, 0.30], [0.4, 1.15, 1.15, 0.35],
    [0, 1.05, 1.05, 0.60], [0, 1.15, 1.15, 0.60], [0, 1.10, 1.10, 0.30], [0.5, 1.15, 1.15, 1.10], [0, 1.15, 1.15, 0.30], [0, 1.15, 1.15, 0.50],
    [0.5, 1, 1, 0.95], [0.5, 1, 1, 0, 3], [0.6, 0, 0, 0], [0.4, 0, 0, 0], [0, 1.15, 1.15, 0], [0, 1.1, 1.1, 0],
    [0, 0.4, 0.4, 0], [0, 1.15, 1.15, 0.55], [0, 1, 1, 0.35], [0, 1.15, 1.15, 0.25], [0, 1.15, 1.15, 0.25]];

    diasdecosechas = [[35, 45, 40, 15], [0], [40, 60, 50, 15], [20, 30, 30, 20], [35, 50, 40, 15], [25, 40, 95, 20], [35, 50, 50, 15], [20, 30, 20, 10],
    [20, 35, 110, 45], [20, 45, 20, 10], [20, 45, 165, 45], [20, 30, 40, 10], [10, 10, 15, 5], [30, 40, 40, 20], [30, 45, 110, 30], [35, 45, 70, 30], [30, 45, 35, 10],
    [20, 30, 40, 15], [25, 35, 50, 20], [20, 30, 30, 20], [25, 35, 25, 15], [30, 45, 65, 20], [10, 20, 20, 30], [25, 30, 25, 10], [20, 40, 90, 60], [150, 40, 110, 60],
    [0], [25, 30, 30, 30], [15, 30, 50, 30], [0], [35, 60, 70, 40], [15, 25, 25, 10], [20, 30, 40, 20], [0], [15, 25, 35, 15], [20, 30, 35, 15], [0], [20, 30, 30, 20],
    [35, 35, 35, 35], [25, 35, 70, 40], [20, 30, 35, 15], [15, 25, 35, 15], [15, 15, 40, 15], [40, 40, 250, 30], [90, 30, 200, 45], [0], [0], [30, 50, 60, 55],
    [30, 40, 100, 50], [0], [25, 40, 65, 50], [0], [20, 25, 60, 30], [0]];

    evapotraspiracion = [[67.6557063], [80.37522088], [69.05159595], [46.33478696], [44.59383965], [49.42521295], [56.03413672],
    [60.67677663], [56.4519627], [47.7707903], [39.65926932], [60.4625152]];

    tiposdesuelos = [[10.5, 0, 1.65], [15, 0, 1.4], [14, 0, 1.4], [22.5, 0.6, 1.4], [30, 0, 1.35], [14, 0, 1.4], [50, 0, 1.25], [16.5, 0, 1.4],
    [10.5, 0.25, 1.35], [14, 0, 1.35], [20, 0, 1.35],];

    profundida = [[0.5], [0.5], [0.65], [0.75], [0.55], [0.4], [0.4], [0.4], [0.45], [0.45], [0.45], [0.4], [0.4], [0.95], [0.75], [1.10], [1.2], [0.95],
    [1.25], [0.8], [1.15], [1.15], [1.15], [0.8], [0.65], [0.85], [0.75], [0.5], [1.25], [0.75], [0.95], [0.6], [0.75], [0.8], [0.6], [0.6],
    [0.8], [0.75], [0.70], [0.8], [0.9], [1], [0.75], [1.5], [0.6], [0.25], [1.35], [1.25], [0.75], [1.5], [1.25], [1.25], [1.25]];

    componentequimico = [[0.005], [0.0001], [0.0001], [0.01], [0.002], [0.05], [0.0002], [0.0001], [0.001], [0.005], [0.0025], [0.0002], [0.01], [0.0002],
    [0.005], [0.0001], [0.0002], [0.0004], [0.0002], [0.001], [0.3], [0.001], [0.5], [0.01], [0.2], [0.0001], [0.008], [0.0011], [0.05], [0.01], [0.01],
    [0.02], [0.0002], [0.0005], [0.01], [0.0005]];

    document.getElementById("divResultado").hidden = true;
    document.getElementById("divContactanos").hidden = true;
}

const cbxSuelo = document.getElementById("cbxSuelo");
const cbxProducto = document.getElementById("cbxProducto");

cbxSuelo.addEventListener("change", (event) => {

});

cbxProducto.addEventListener("change", (event) => {
    document.getElementById("txtProfund").value = profundida[parseInt(cbxProducto.value)].toString();
});

//funcion para huella hidrica azul
function calcularEtAzul(hg, z, da) {
    etAzul = ((hg / (100 / 100) * z * da)) - 0.9;
}
function calcularUACazul(etaAzul) {
    uac = (etaAzul) * 10;
}
function calcularrendimiento(distanciasurcos, distanciaplanta) {
    return (distanciaplanta / distanciasurcos);
}

function calcularhuellaAzul(uac, rendimiento) {
    huellaAzul = (uac / rendimiento);
}

//funcion eto y suma de etos 


function calcularEto() {
    const producto = parseInt(document.getElementById("cbxProducto").value);
    const fechaSelect = new Date(document.getElementById("txtFecha").value);
    let fecha = new Date(fechaSelect);
    fecha.setDate(fecha.getDate() + 1);

    // Verificamos si la fecha es válida
    if (isNaN(fechaSelect)) {
        alert("Por favor selecciona una fecha válida.");
        return;
    }

    // Obtenemos los días de cosecha y los coeficientes del producto seleccionado
    const etapas = diasdecosechas[producto];
    const coeficientes = productos[producto];
    var sumaetos = 0;
    for (let i = 0; i < 4; i++) {

        // Creamos fechas para cada etapa
        const fechacosecha1 = new Date(fecha);
        fechacosecha1.setDate(fechacosecha1.getDate() + etapas[i]);
        fecha = fechacosecha1;
        var MesActual = fechacosecha1.getMonth();
        let eto = SwichEtos(MesActual, coeficientes, i);

        sumaetos = sumaetos + eto;
    }
    totalEto = sumaetos;
}

function SwichEtos(mes, coeficientes, iteracion) {
    var ResulEto1 = 0;
    if (iteracion != 3) {
        var mul1 = MultiplicarEto(evapotraspiracion[mes - 1], coeficientes[iteracion]);
        var mul2 = MultiplicarEto(evapotraspiracion[mes], coeficientes[iteracion]);
        ResulEto1 = mul1 + mul2;
    } else {

        ResulEto1 = MultiplicarEto(evapotraspiracion[mes], coeficientes[iteracion]);
    }
    return ResulEto1;
}

function MultiplicarEto(Evo, KC) {
    var resultado = Evo * KC;
    return resultado;
}
// funcion calcular huella hidrica verde 

function calcularEtaVerde(totalEto, etAzul) {
    Etaverde = (totalEto - etAzul);
    calcularuacverde(Etaverde);
}

function calcularuacverde(Etaverde) {
    uacverde = (Etaverde * 10);
}
function calcularhuellaverde(uacverde, rendimiento) {
    huellaverde = (uacverde / rendimiento);
}

//inicio calcular de huella gris 
function calcularhuellagris(Cantidadfertilizante, componentequimico, rendimiento, cnat) {
    huellagris = (((Cantidadfertilizante * 0.1) / (componentequimico - cnat)) / (rendimiento));
}
//huella hidrica total 

function calcularhuellatotal(huellaAzul, huellaverde, huellagris) {
    huellatotal = (huellaAzul + huellaverde + huellagris);
    huellatotal = Number(huellatotal.toFixed(2));
    var porcentajeazul = ((huellaAzul * 100) / huellatotal);
    porcentajeazul = Number(porcentajeazul.toFixed(2));
    var porcentajeverde = ((huellaverde * 100) / huellatotal);
    porcentajeverde = Number(porcentajeverde.toFixed(2));
    var porcentajegris = ((huellagris * 100) / huellatotal);
    porcentajegris = Number(porcentajegris.toFixed(2));
    var totalenlitroazul = (huellaAzul * 1000);
    totalenlitroazul = Number(totalenlitroazul.toFixed(2));
    var totalenlitroverde = (huellaverde * 1000);
    totalenlitroverde = Number(totalenlitroverde.toFixed(2));
    var totalenlitrogris = (huellagris * 1000);
    totalenlitrogris = Number(totalenlitrogris.toFixed(2));
    var progressAzul = document.getElementById("progressAzul");
    progressAzul.style.width = "" + porcentajeazul + "%";
    var progressVerde = document.getElementById("progressVerde");
    progressVerde.style.width = "" + porcentajeverde + "%";
    var progressGris = document.getElementById("progressGris");
    progressGris.style.width = "" + porcentajegris + "%";
    document.getElementById('porcentajeAzul').innerHTML = ' Porcentaje= ' + porcentajeazul + ' %';
    document.getElementById('TotalLitros').innerHTML = 'total en litros= ' + totalenlitroazul + ' l/ha';
    document.getElementById('porcentajeVerde').innerHTML = ' Porcentaje= ' + porcentajeverde + ' %';
    document.getElementById('TotalLitrosverde').innerHTML = 'total en litros= ' + totalenlitroverde + 'l/ha';
    document.getElementById('porcentajeGris').innerHTML = 'Porcentaje=  ' + porcentajegris + ' %';
    document.getElementById('TotalLitrosgris').innerHTML = ' total en litros=' + totalenlitrogris + ' l/ha';
}

function generar() {
    calcularEto();
    const hg = tiposdesuelos[parseInt(cbxSuelo.value)][0];
    const z = profundida[parseInt(cbxProducto.value)];
    const da = tiposdesuelos[parseInt(cbxSuelo.value)][2];
    const distanciasurcos = parseInt(document.getElementById("txtDistanciasurcos").value);
    const distanciaplanta = parseInt(document.getElementById("txtDistanciaPlanta").value);
    calcularEtAzul(hg, z, da);
    calcularUACazul(etAzul);
    rendimiento = calcularrendimiento(distanciasurcos, distanciaplanta);
    calcularhuellaAzul(uac, rendimiento);
    const kc = productos[parseInt(cbxProducto.value)][0];
    calcularEtaVerde(totalEto, etAzul);
    calcularhuellaverde(uacverde, rendimiento);
    let Cantidadfertilizante = parseInt(document.getElementById("txtCantidadfertilizante").value);
    let comQuimi = Number(componentequimico[parseInt(document.getElementById("cbxProducto").value)].join());
    calcularhuellagris(Cantidadfertilizante, comQuimi, rendimiento, cnat);
    calcularhuellatotal(huellaAzul, huellaverde, huellagris);
    huellaAzul = Number(huellaAzul.toFixed(2));
    huellaverde = Number(huellaverde.toFixed(2));
    huellagris = Number(huellagris.toFixed(2));
    document.getElementById('item1').hidden = true;
    document.getElementById('item2').hidden = true;
    document.getElementById('divResultado').hidden = false;
    document.getElementById('divPrincipal').hidden = true;
    document.getElementById('resultadoAzul').innerHTML = 'Total: ' + huellaAzul + '   m3/ha';
    document.getElementById('resultadoVerde').innerHTML = 'Total: ' + huellaverde + '  m3/ha';
    document.getElementById('resultadoGris').innerHTML = 'Total: ' + huellagris + '   m3/ha';
    document.getElementById('spanResultado').innerHTML = '' + huellatotal + '    m3/ha';
    document.getElementById("spanResultado").value = huellatotal + '   m3/ha';

    if (huellagris > 0) {
        document.getElementById('item1').hidden = false;
    }

    if (huellaAzul < huellagris) {
        document.getElementById('item2').hidden = false;
    }

    if (huellaverde < huellaAzul) {
        document.getElementById('item').hidden = false;
    }

}

function ocultarDiv() {
    if (productos[document.getElementById("cbxProducto").selectedIndex - 1] == undefined) {
    }
    document.getElementById("divPrincipal").hidden = true;
    document.getElementById("divResultado").hidden = false;
}

function volver() {
    document.getElementById("divPrincipal").hidden = false;
    document.getElementById("divResultado").hidden = true;
}

function contactanos() {
    document.getElementById("divPrincipal").hidden = true;
    document.getElementById("divResultado").hidden = true;
    document.getElementById("divContactanos").hidden = false;

}
function cancelEnvio() {
    document.getElementById("divPrincipal").hidden = false;
    document.getElementById("divContactanos").hidden = true;
}

function Recomendaciones() {
    debugger
    document.getElementById('contentTitleModal').innerHTML = `
        <h1 class="modal-title fs-5" id="exampleModalLabel">
            <strong>Recomendaciones</strong>
        </h1>`;

    document.getElementById('contentModal').innerHTML = `
        <div class="modal-content-custom">
            <p class="modal-subtitle">Indicaciones para entender tu huella </p>
            <strong>HHgris ≤ 0:</strong><br>
            indica que no se requiere agua adicional para diluir contaminantes generados por las actividades.
            <br><strong>HHverde > HHazul: </strong> Cuando la huella verde es mayor que la huella azul, 
            significa que la mayor parte del agua utilizada por el cultivo proviene de la lluvia o agua almacenada en el suelo, 
            y no tanto de fuentes de agua artificial (ríos o los pozos). Esto es positivo, ya que depende menos de recursos hídricos 
            gestionados por el agricultor.
            <br><br><strong>HHverde < HHazul :</strong> Cuando la huella verde es menor que la azul, se observa que el cultivo depende significativamente de
            la extracción de agua de fuentes superficiales o subterráneas para riego.
            <br><br><strong>HHverde > HHgris:</strong> cuando la huella verde es mayor
            que la gris, esto indica que el cultivo usa principalmente agua de lluvia, y no se requiere una gran cantidad de agua
            para diluir contaminantes generados por el uso de fertilizantes o pesticidas.
            <br><strong>HHverde < HHgris :</strong> Cuando la huella verde es menor que la gris,
            puede indicar que el cultivo depende menos del agua de lluvia y más de fuentes de agua externas, pero al mismo tiempo,
            se están utilizando insumos agrícolas que generan una mayor contaminación del agua.
            <br><strong>HHazul > HHgris:</strong> Si la huella azul es mayor que la gris, significa que el agua extraída para 
            el riego es más significativa que el impacto generado por los contaminantes en el agua.
            <br><br><strong>Si la huella gris supera la huella azul:</strong>  refleja que el impacto de la contaminación del 
            agua por el uso de insumos agrícolas es mayor que la cantidad de agua extraída para el riego.
        </div>`;

        }

function tiposHuellas() {
    document.getElementById('contentTitleModal').innerHTML = `<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>Tipos de huellas </strong></h1>`;
    document.getElementById('contentModal').innerHTML = ` <img src="calculadora/Images/Huellahidrica.PNG" class="img-fluid" alt="...">`;
}

function queEs() {
    document.getElementById('contentTitleModal').innerHTML = `<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>Qué es</strong></h1>`;
    document.getElementById('contentModal').innerHTML = `La huella hídrica agrícola es una medida que se utiliza para evaluar el uso y la gestión del agua en las actividades agrícolas, así como su impacto en el medio ambiente. Esta medida nos permite entender cuánta agua se utiliza directamente en los cultivos (agua azul), cuánta se utiliza para procesar los productos agrícolas (agua verde), y cuánta se necesita para diluir los contaminantes generados por la agricultura (agua gris).
        La huella hídrica agrícola es una herramienta importante para la gestión sostenible del agua en la agricultura, ya que nos ayuda a identificar áreas donde se puede mejorar la eficiencia del uso del agua, reducir la contaminación del agua y minimizar el impacto ambiental.`;
}