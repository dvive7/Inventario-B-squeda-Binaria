let inventario = new Inventario();

let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let cantidad = document.getElementById("cantidad");
let costo = document.getElementById("costo");
let detalles = document.getElementById("detalles");

document.getElementById("agregar").addEventListener("click", () => {
    if (
        codigo.value.trim() == "" ||
        nombre.value.trim() == "" ||
        cantidad.value == "" ||
        costo.value == ""
    ) {
        detalles.innerHTML = "Completa todos los campos.";
        return;
    }

    let nuevo = new Producto(
        Number(codigo.value),
        nombre.value,
        Number(cantidad.value),
        Number(costo.value)
    );

    if (inventario.agregar(nuevo)) {
        detalles.innerHTML = "Producto agregado:<br>" + nuevo.infoHtml();
    } else {
        detalles.innerHTML = "El código ya existe.";
    }
});

document.getElementById("listar").addEventListener("click", () => {
    detalles.innerHTML = inventario.listar();

    if (inventario.productos.length == 0) {
        detalles.innerHTML = "El inventario está vacío.";
    }
});

document.getElementById("buscar").addEventListener("click", () => {
    let producto = inventario.buscar(Number(codigo.value));

    if (producto == null) {
        detalles.innerHTML = "Producto no encontrado.";
    } else {
        detalles.innerHTML = "Producto encontrado:<br>" + producto.infoHtml();
    }
});

document.getElementById("eliminar").addEventListener("click", () => {
    let producto = inventario.eliminar(Number(codigo.value));

    if (producto == null) {
        detalles.innerHTML = "Producto no encontrado.";
    } else {
        detalles.innerHTML = "Producto eliminado:<br>" + producto.infoHtml();
    }
});

document.getElementById("extraerPrimero").addEventListener("click", () => {
    let producto = inventario.extraerPrimero();

    if (producto == null) {
        detalles.innerHTML = "El inventario está vacío.";
    } else {
        detalles.innerHTML = "Primer producto extraído:<br>" + producto.infoHtml();
    }
});

document.getElementById("extraerUltimo").addEventListener("click", () => {
    let producto = inventario.extraerUltimo();

    if (producto == null) {
        detalles.innerHTML = "El inventario está vacío.";
    } else {
        detalles.innerHTML = "Último producto extraído:<br>" + producto.infoHtml();
    }
});

document.getElementById("listarInverso").addEventListener("click", () => {
    if (inventario.productos.length == 0) {
        detalles.innerHTML = "El inventario está vacío.";
    } else {
        detalles.innerHTML = inventario.listarInverso();
    }
});

document.getElementById("cancelar").addEventListener("click", () => {
    codigo.value = "";
    nombre.value = "";
    cantidad.value = "";
    costo.value = "";
    detalles.innerHTML = "";
});