function cambiarfondorandom() {
      let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      color = color.padEnd(7, "0");
      document.body.style.backgroundColor = color;
}

function calcularmanzana() {
      event.preventDefault();
      const precio = document.getElementById("manzanaprecio").innerText;
      const cantidad = document.getElementById("cantidadmanzana").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalmanzana").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularplatano() {
      event.preventDefault();
      const precio = document.getElementById("platanoprecio").innerText;
      const cantidad = document.getElementById("cantidadplatano").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalplatano").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularkiwi() {
      event.preventDefault();
      const precio = document.getElementById("kiwiprecio").innerText;
      const cantidad = document.getElementById("cantidadkiwi").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalkiwi").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularpera() {
      event.preventDefault();
      const precio = document.getElementById("peraprecio").innerText;
      const cantidad = document.getElementById("cantidadpera").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalpera").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularsandia() {
      event.preventDefault();
      const precio = document.getElementById("sandiaprecio").innerText;
      const cantidad = document.getElementById("cantidadsandia").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalsandia").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularmelon() {
      event.preventDefault();
      const precio = document.getElementById("melonprecio").innerText;
      const cantidad = document.getElementById("cantidadmelon").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalmelon").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularaguacate() {
      event.preventDefault();
      const precio = document.getElementById("aguacateprecio").innerText;
      const cantidad = document.getElementById("cantidadaguacate").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalaguacate").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularlechuga() {
      event.preventDefault();
      const precio = document.getElementById("lechugaprecio").innerText;
      const cantidad = document.getElementById("cantidadlechuga").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totallechuga").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calculartomate() {
      event.preventDefault();
      const precio = document.getElementById("tomateprecio").innerText;
      const cantidad = document.getElementById("cantidadtomate").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totaltomate").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calcularajo() {
      event.preventDefault();
      const precio = document.getElementById("ajoprecio").innerText;
      const cantidad = document.getElementById("cantidadajo").value;
      const cantidadproducto = parseInt(cantidad);
      const total = cantidadproducto * precio;
      document.getElementById("totalajo").innerText = 
            `Debes pagar ${total.toFixed(2)}€`;
}
function calculartotal() {
      event.preventDefault();
      const ids = [
        "totalmanzana", "totalplatano", "totalkiwi", "totalpera",
        "totalsandia", "totalmelon", "totalaguacate",
        "totallechuga", "totaltomate", "totalajo"
    ];

    let total = 0;

    ids.forEach(id => {
        const texto = document.getElementById(id).innerText;

        const match = texto.match(/[\d.]+/);
        if (match) {
            total += parseFloat(match[0]);
        }
    });
      document.getElementById("cantidadtotal").innerText = `El total es ${total.toFixed(2)}€`;
}
