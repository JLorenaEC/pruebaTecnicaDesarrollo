class Model {
  constructor() {
    this.tarifas = {
      comprador: 500000,
      vendedor: 400000,
      expositor: 120000,
    };

    this.tipoAfiliados = {
      asociado: 0.9,
      noAsociado: 1.1,
      extranjero: 1,
    };

    this.iva = 0.19;
    this.trm = 4200;
  }

  calcularValorBase(tarifaTotal) {
    return tarifaTotal / (1 + this.iva);
  }

  calcularIVA(valorBase) {
    return valorBase * this.iva;
  }

  calcularTotal(tarifa, tipoAfiliado) {
    const tarifaTotal = this.tarifas[tarifa];
    const valorBase = this.calcularValorBase(tarifaTotal);
    const iva = this.calcularIVA(valorBase);

    let total;

    if (tipoAfiliado === "extranjero") {
      total = tarifaTotal / this.trm;
    } else {
      total = tarifaTotal * this.tipoAfiliados[tipoAfiliado];
    }

    return {
      valorSinIVA: valorBase,
      iva: iva,
      total: total,
    };
  }
}
