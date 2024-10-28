class parametros {
  constructor() {
    this.tarifas = {
      comprador: 500000,
      vendedor: 400000,
      expositor: 120000,
    };

    this.iva = 1.19;
    this.trm = 4200;
  }

  getValorBase(tarifa) {
    return this.tarifas[tarifa];
  }

  calcularIVA(valorBase) {
    return valorBase * this.iva + descRecar;
  }
}

//controlador

class name {
  constructor(parameters) {}
}
