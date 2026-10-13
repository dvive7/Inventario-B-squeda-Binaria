    class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info() {
        return "Código: " + this.codigo +
               ", Nombre: " + this.nombre +
               ", Costo: " + this.costo +
               ", Cantidad: " + this.cantidad;
    }

    infoHtml() {
        return "<p>" +
               "Código: " + this.codigo +
               ", Nombre: " + this.nombre +
               ", Costo: " + this.costo +
               ", Cantidad: " + this.cantidad +
               "</p>";
    }
}