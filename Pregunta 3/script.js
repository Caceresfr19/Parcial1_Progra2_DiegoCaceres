function guardar(){

    var _prod = document.getElementById("prod").value;
    var _cant = document.getElementById("cant").value;
    var _precio = document.getElementById("precio").value;
    var _subtotal = document.getElementById("cant").value*document.getElementById("precio").value


    var fila="<tr><td>"+_prod+"</td><td>"+_cant+"</td><td>"+_precio+"</td><td>"+_subtotal+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}