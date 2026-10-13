class Inventario {
    constructor() {
        this.productos = [];
    }

    buscarPosicion(codigo) {
        let inicio = 0;
        let fin = this.productos.length - 1;

        while (inicio <= fin) {
            let medio = Math.floor((inicio + fin) / 2);

            if (this.productos[medio].codigo == codigo) {
                return medio;
            }

            if (this.productos[medio].codigo < codigo) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            }
        }

        return -1;
    }

    agregar(producto) {
        if (this.buscarPosicion(producto.codigo) != -1) {
            return false;
        }

        let posicion = 0;

        while ( posicion < this.productos.length &&
            this.productos[posicion].codigo < producto.codigo ) {
            posicion++;
        }

        this.productos.push(producto);

        for (let i = this.productos.length - 1; i > posicion; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[posicion] = producto;
        return true;
    }

    buscar(codigo) {
        let posicion = this.buscarPosicion(codigo);

        if (posicion == -1) {
            return null;
        }
        return this.productos[posicion];
    }

    eliminar(codigo) {
        let posicion = this.buscarPosicion(codigo);
        if (posicion == -1) {
            return null;
        }
        let eliminado = this.productos[posicion];
        for (let i = posicion; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }
        this.productos.pop();
        return eliminado;
    }

    insertar(posicion, producto) {
        if (
            !Number.isInteger(posicion) ||
            posicion < 0 ||
            posicion > this.productos.length
        ) {
            return false;
        }
        if (this.buscarPosicion(producto.codigo) != -1) {
            return false;
        }
        let posicionOrdenada = 0;
        while (
            posicionOrdenada < this.productos.length &&
            this.productos[posicionOrdenada].codigo < producto.codigo
        ) {
            posicionOrdenada++;
        }
        if (posicion != posicionOrdenada) {
            return false;
        }
        this.productos.push(producto);
        for (let i = this.productos.length - 1; i > posicion; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[posicion] = producto;
        return true;
    }

    listar() {
        let lista = "";
        for (let i = 0; i < this.productos.length; i++) {
            lista += this.productos[i].infoHtml();
        }
        return lista;
    }

    listarInverso() {
        let lista = "";

        for (let i = this.productos.length - 1; i >= 0; i--) {
            lista += this.productos[i].infoHtml();
        }

        return lista;
    }

    extraerPrimero() {
        if (this.productos.length == 0) {
            return null;
        }

        let primero = this.productos[0];

        for (let i = 0; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }

        this.productos.pop();

        return primero;
    }

    extraerUltimo() {
        if (this.productos.length == 0) {
            return null;
        }

        let ultimo = this.productos[this.productos.length - 1];

        this.productos.pop();

        return ultimo;
    }

    agregarInicio(producto) {
        if (
            this.productos.length > 0 &&
            producto.codigo >= this.productos[0].codigo
        ) {
            return false;
        }

        return this.agregar(producto);
    }
}