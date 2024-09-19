var productos;
var tiposdesuelos;
var profundida;
var evapotraspiracion;
var diasdecosechas;
var huellaAzul;
var huellaverde;
var huellagris;
var huellatotal;
var etAzul=0;
var etaverde=0;
var totalEto=0;
var tasaderecubrimiento = 235.224;
var cmax=1000;
var cnat= 0.0148;

window.onload = function(){
    
   productos=[[0,1.05, 0.95 ,0.3], [0,1.05, 0.95 ,0.4], [0,1.05, 0.95 ,0.4], [0,1.05, 0.95 ,0.3], [0,1.05, 0.95 ,0.4], [0,1.05, 1 ,0.6],
    [0,1 , 0.7 ,0.3], [0,1 , 0.95 ,0.3], [0,1.05,0.75 ,0.4], [0,1, 1 ,0.3], [0,1.05 , 0.8 ,0.5], [0,1, 0.95, 0.3], [0, 0.9 , 0.85, 0.3], 
    [0,1.05, 0.9, 0.8],[0,1.05, 0.9, 0.7],[0,1.15, 0.70, 0.6],[0.5,0.85, 0.60, 0.3],[0.6,1, 0.75, 0.3],[0.5,1, 0.9, 0.3],
    [0,1, 0.8, 0.4],[0,0.95, 0.75, 0.30],[0,1.05,0.75, 0.40],[0.4,1, 0, 0.40],[0,1.05, 0.95, 0.40],[0.3,0.80, 0.30, 1.00],
    [0.3, 1.10, 0.50, 1.50],[0.5, 1.05, 0.95, 0.40],[0, 1.15, 0.75, 0.60],[0,1.15, 0.65, 0.40],[0,1.10, 0.95, 0.60],[0.35,1.20, 0.70, 0.50],
    [0.5,1.05, 0.90, 0.40],[0.4,1.15, 0.35, 0.40],[0,1.00, 0.35, 0.40],[0.5,1.15, 1.10, 0.80],[0.5, 1.15, 0.30, 0.80],[0.4,1.15, 0.35, 0.80],
    [0,1.05, 0.60, 0.40],[0,1.15, 0.60,0.40],[0,1.10, 0.30, 0.50],[0.5,1.15, 1.10, 0.50],[0,1.15, 0.30, 0.50],[0,1.15, 0.50, 0.8],
    [0.5, 1, 0.95,0.7],[0.5, 1, 0.3, 0,6],[0.6,0,0,0.8],[0.4, 0, 0, 0.2],[0,1.15,0, 1.2],[0,1.1, 0, 1.2],
    [0,0.4, 0, 1.5],[0,1.15, 0.55, 0.3],[0,1.0, 0.35, 0.6],[0,1.15,0.25, 1],[0,1.15, 0.25, 1]];

    diasdecosechas=[[35,45,40,15],[0],[40,60,50,15],[20,30,30,20],[35,50,40,15],[25,40,95,20],[35,50,50,15],[20,30,20,10],
    [20,35,110,45],[20,45,20,10],[20,45,165,45],[20,30,40,10],[10,10,15,5],[30,40,40,20],[30,45,110,30],[35,45,70,30],[30,45,35,10],
    [20,30,40,15],[25,35,50,20],[20,30,30,20],[25,35,25,15],[30,45,65,20],[10,20,20,30],[25,30,25,10],[20,40,90,60],[150,40,110,60],
    [0],[25,30,30,30],[15,30,50,30],[0],[35,60,70,40],[15,25,25,10],[20,30,40,20],[0],[15,25,35,15],[20,30,35,15],[0],[20,30,30,20],
    [35,35,35,35],[25,35,70,40],[20,30,35,15],[15,25,35,15],[15,15,40,15],[40,40,250,30],[90,30,200,45],[0],[0],[30,50,60,55],
    [30,40,100,50],[0],[25,40,65,50],[0],[20,25,60,30],[0]];
    
   evapotraspiracion=[[67.6557063],[80.37522088],[69.05159595],[46.33478696],[44.59383965],[49.42521295],[56.03413672],
    [60.67677663],[56.4519627],[47.7707903],[39.65926932],[60.4625152]];

   tiposdesuelos=[[10.5, 0 ,1.65],[15, 0, 1.4],[14, 0, 1.4],[22.5, 0.6, 1.4],[30, 0, 1.35],[14, 0, 1.4],[50,0, 1.25],[16.5, 0, 1.4],
    [10.5, 0.25, 1.35],[14, 0, 1.35],[20, 0, 1.35],];

   profundida=[[0.5],[0.5],[0.65],[0.75],[0.55],[0.4],[0.4],[0.4],[0.45],[0.45],[0.45],[0.4],[0.4],[0.95],[0.75],[1.10],[1.2],[0.95],
   [1.25],[0.8],[1.15],[1.15],[1.15],[0.8],[0.65],[0.85],[0.75],[0.5],[1.25],[0.75],[0.95],[0.6],[0.75],[0.8],[0.6],[0.6],
   [0.8],[0.75],[0.70],[0.8],[0.9],[1],[0.75],[1.5],[0.6],[0.25],[1.35],[1.25],[0.75],[1.5],[1.25],[1.25],[1.25]];
   
   document.getElementById("divResultado").hidden = true;
   document.getElementById("divContactanos").hidden = true;
}
    
    const cbxSuelo = document.getElementById("cbxSuelo");
    const cbxProducto = document.getElementById("cbxProducto");

    cbxSuelo.addEventListener("change", (event) => {
       
    });
    
    cbxProducto.addEventListener("change", (event) => {        
        document.getElementById("txtProfund").value=profundida[parseInt(cbxProducto.value)].toString();    
    });
    
    function calcularEtAzul(hg, z, da){
        etAzul= ((hg /( 100/100)* z * da))-0.9;
    }

    function calcularhuellaAzul(la,totalarea,distanciasurcos,distanciaplanta) {
        huellaAzul=((10*100*la)*distanciasurcos*distanciaplanta)/ totalarea;    
    }
    function calcularhuellaverde(etaverde,totalarea,distanciasurcos,distanciaplanta){
       
       var a=(totalarea/(distanciasurcos*distanciaplanta));
       var b=(10*100*etaverde);
        huellaverde=(b/a);
    }

   
   
    function calcuarEto (){
        
        var fechacosecha = new Date();
        var fechacosecha2 = new Date();
        var fechacosecha3 = new Date();
        var fechacosecha4 = new Date(); 
        var fechaSelect = new Date(document.getElementById("txtFecha").value);
        var evapotraspiracion1 =0;
        var evapotraspiracion2 =0;
        var evapotraspiracion3 =0;
        var evapotraspiracion4=0;
               
        fechacosecha.setDate((fechaSelect.getDate()+1) + (diasdecosechas[parseInt(cbxProducto.value)][0]));
        fechacosecha2.setDate((fechaSelect.getDate()+1)+ ((diasdecosechas[parseInt(cbxProducto.value)][0])+(diasdecosechas[parseInt(cbxProducto.value)][1])));
        fechacosecha3.setDate((fechaSelect.getDate()+1)+ ((diasdecosechas[parseInt(cbxProducto.value)][0])+(diasdecosechas[parseInt(cbxProducto.value)][1])+(diasdecosechas[parseInt(cbxProducto.value)][2])));
        fechacosecha4.setDate((fechaSelect.getDate()+1) + ((diasdecosechas[parseInt(cbxProducto.value)][0])+(diasdecosechas[parseInt(cbxProducto.value)][1])+(diasdecosechas[parseInt(cbxProducto.value)][2])+(diasdecosechas[parseInt(cbxProducto.value)][3])));
        const dia = fechacosecha.getDate()+1;
        const mesfecha1 =fechacosecha.getMonth();
        const mesfecha2=fechacosecha2.getMonth();
        const mesfecha3=fechacosecha3.getMonth();
        const mesfecha4=fechacosecha4.getMonth();

         evapotraspiracion1 = evapotraspiracion[mesfecha1-1] * productos[parseInt(cbxProducto.value)][0];
         evapotraspiracion2 = evapotraspiracion[mesfecha2-1] * productos[parseInt(cbxProducto.value)][1];
         evapotraspiracion3 = evapotraspiracion[mesfecha3-1] * productos[parseInt(cbxProducto.value)][2];
         evapotraspiracion4 = evapotraspiracion[mesfecha4-1] * productos[parseInt(cbxProducto.value)][3];
        totalEto= evapotraspiracion1+evapotraspiracion2+evapotraspiracion3+evapotraspiracion4;
        
    }

    
    function calcularEtaVerde(eta,etaAzul){
        etaverde= (eta-etaAzul);
    }

    function calcularhuellagris(){
        
        const fertilizante =parseInt(document.getElementById("txtCantidadfertilizante").value);
        const m= (fertilizante*tasaderecubrimiento);
        const n= (cnat-cmax);
        huellagris=(m/n);
    }

    function calcularhuellatotal(huellaAzul,huellaverde,huellagris) {
        
       huellatotal=(huellaAzul+huellaverde+huellagris);
       huellatotal=Number(huellatotal.toFixed(2));
       var porcentajeazul =((huellaAzul*100)/huellatotal);
       porcentajeazul=Number(porcentajeazul.toFixed(2));
       var porcentajeverde =((huellaverde*100)/huellatotal);
       porcentajeverde=Number(porcentajeverde.toFixed(2));
       var porcentajegris=((huellagris*100)/huellatotal);
       porcentajegris=Number(porcentajegris.toFixed(2));
       var totalenlitroazul=(huellaAzul/1000);
       totalenlitroazul=Number(totalenlitroazul.toFixed(2));
       var totalenlitroverde=(huellaverde/1000);
       totalenlitroverde=Number(totalenlitroverde.toFixed(2));
       var totalenlitrogris=(huellagris/1000);
       totalenlitrogris=Number(totalenlitrogris.toFixed(2));
       var progressAzul = document.getElementById("progressAzul");
       progressAzul.style.width=""+porcentajeazul+"%";
       var progressVerde = document.getElementById("progressVerde");
       progressVerde.style.width=""+porcentajeverde+"%";
       var progressGris = document.getElementById("progressGris");
       progressGris.style.width=""+porcentajegris+"%";
       document.getElementById('porcentajeAzul').innerHTML=' Porcentaje= '+porcentajeazul + ' %';
       document.getElementById('TotalLitros').innerHTML='total en litros= '+totalenlitroazul+ ' ha/l';
       document.getElementById('porcentajeVerde').innerHTML=' Porcentaje= '+porcentajeverde + ' %';
       document.getElementById('TotalLitrosverde').innerHTML='total en litros= '+totalenlitroverde + ' ha/l';
       document.getElementById('porcentajeGris').innerHTML='Porcentaje=  '+porcentajegris + ' %';
       document.getElementById('TotalLitrosgris').innerHTML=' total en litros='+totalenlitrogris + ' ha/l';
    }
    

    function generar(){ 
        calcuarEto();       
        const hg=tiposdesuelos[parseInt(cbxSuelo.value)][0];
        const z = profundida[parseInt(cbxProducto.value)];
        const da=tiposdesuelos[parseInt(cbxSuelo.value)][2];
        
        const totalarea = parseInt(document.getElementById("txtCantidadTerre").value);
        const distanciasurcos = parseInt(document.getElementById("txtDistanciasurcos").value);
        const distanciaplanta = parseInt(document.getElementById("txtDistanciaPlantas").value);
        calcularEtAzul(hg,z,da);
        calcularhuellaAzul(etAzul,totalarea,distanciasurcos,distanciaplanta);
        const kc=productos[parseInt(cbxProducto.value)][0];
        calcularEtaVerde(totalEto,etAzul);
        calcularhuellaverde(etaverde,totalarea,distanciasurcos,distanciaplanta); 
        calcularhuellagris();
        calcularhuellatotal(huellaAzul,huellaverde,huellagris);
        huellaAzul=Number(huellaAzul.toFixed(2));
        huellaverde=Number(huellaverde.toFixed(2));
        huellagris=Number(huellagris.toFixed(2));
        document.getElementById('divResultado').hidden=false;
        document.getElementById('divPrincipal').hidden=true;
        document.getElementById('resultadoAzul').innerHTML='Total: '+ huellaAzul + '   ha/m3';
        document.getElementById('resultadoVerde').innerHTML='Total: '+ huellaverde + '   ha/m3';
        document.getElementById('resultadoGris').innerHTML='Total: '+ huellagris + '   ha/m3';
        document.getElementById('spanResultado').innerHTML=''+ huellatotal+'   ha/m3';
        document.getElementById("spanResultado").value=huellatotal+'   ha/m3';
        
        console.log(etAzul);
        
    }

       

    function ocultarDiv(){    
        if(productos[document.getElementById("cbxProducto").selectedIndex-1]==undefined){
        }
        document.getElementById("divPrincipal").hidden = true;
        document.getElementById("divResultado").hidden = false;
    }

    function volver(){
        document.getElementById("divPrincipal").hidden = false;
        document.getElementById("divResultado").hidden = true;
    }

    function contactanos(){
        document.getElementById("divPrincipal").hidden = true;
        document.getElementById("divResultado").hidden = true;
        document.getElementById("divContactanos").hidden = false;

    }
    function cancelEnvio(){
        document.getElementById("divPrincipal").hidden = false;
        document.getElementById("divContactanos").hidden = true;
    }

    function Recomendaciones(){ 
        document.getElementById('contentTitleModal').innerHTML=`
        <h1 class="modal-title fs-5" id="exampleModalLabel">
            <strong>Recomendaciones</strong>
        </h1>`;
        document.getElementById('contentModal').innerHTML=`
        <p style="font-size: 70%;">Opciones disponibles a los agricultores para reducir su huella hídrica</p>
        <strong> Huella hídrica verde:</strong>
        Aumentar la productividad del suelo en agricultura de secado mejorando las prácticas agrícolas,
        como la lluvia en el suelo se mantiene constante, su productividad aumentará y la huella hídrica verde disminuirá.
        <br><strong>Huella hídrica azul: </strong>Cambiar a una técnica de riego con menor perdida por evaporación elegir
            un nuevo cultivo u otra variedad que se adapte mejor al clima regional que necesite menos riego. 
            Aumentar la productividad del agua azul, en ez de maximizar la productividad del suelo.`;

    }

    function tiposHuellas(){
        document.getElementById('contentTitleModal').innerHTML=`<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>Tipos de huellas </strong></h1>`;
        document.getElementById('contentModal').innerHTML=` <img src="calculadora/Images/Huellahidrica.PNG" class="img-fluid" alt="...">`;
    }

    function queEs(){
        document.getElementById('contentTitleModal').innerHTML=`<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>Qué es</strong></h1>`;
        document.getElementById('contentModal').innerHTML=`La huella hídrica agrícola es una medida que se utiliza para evaluar el uso y la gestión del agua en las actividades agrícolas, así como su impacto en el medio ambiente. Esta medida nos permite entender cuánta agua se utiliza directamente en los cultivos (agua azul), cuánta se utiliza para procesar los productos agrícolas (agua verde), y cuánta se necesita para diluir los contaminantes generados por la agricultura (agua gris).
        La huella hídrica agrícola es una herramienta importante para la gestión sostenible del agua en la agricultura, ya que nos ayuda a identificar áreas donde se puede mejorar la eficiencia del uso del agua, reducir la contaminación del agua y minimizar el impacto ambiental.`;
    }