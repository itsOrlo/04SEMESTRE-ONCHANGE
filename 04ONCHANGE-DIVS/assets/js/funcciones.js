// Nombre del Usuario.
nambrito="";
function nombre(){
    nambrito = "Nombre: "+document.getElementById("nambre").value +"<br>";
    document.getElementById("resp").innerHTML=""+nambrito+"" + texto2 +texto3;

}


// Función dispositivos seleccionados.
let contador = 0;
function seleccionadas(){
    
   texto = "Dispositivos seleccionados: ";
   if(contador<4){
   
   if(document.getElementById("cb1").checked){
         texto += document.getElementById("cb1").value+", ";
         contador++;
   }
   if(document.getElementById("cb2").checked){
      texto += document.getElementById("cb2").value+", ";
      contador++;
   }
   if(document.getElementById("cb3").checked){
      texto += document.getElementById("cb3").value+"... ";
      contador++;
   }
   document.getElementById("resp").innerHTML=""+nambrito+texto + texto2 +texto3;
   }
}


// Función animal seleccionado.
let texto2 = "";
function  animal(){
    let cradio = document.querySelector("input[name='rdb']:checked");
    if(cradio!= null){

      texto2 = "<br>Animal seleccionado: " + cradio.value;

      }else{
        alert("Selecciona algo oe :(");
    }
    document.getElementById("resp").innerHTML=""+nambrito+texto + texto2 +texto3;

}


// Función lenguaje seleccionado.
let texto3 = "";
function  lenguaje(){

   var selection = document.getElementById("opt");
   texto3 = "<br>Lenguaje seleccionado: " + selection.options[selection.selectedIndex].value;
   document.getElementById("resp").innerHTML=""+nambrito+texto + texto2 +texto3;


}
