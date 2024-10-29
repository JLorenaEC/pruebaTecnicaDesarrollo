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
    let desRec = 0;
    let porcentajeDesRec = 0;

    if (tipoAfiliado === "extranjero") {
      total = tarifaTotal / this.trm;
    } else {
      total = tarifaTotal * this.tipoAfiliados[tipoAfiliado];

      if (tipoAfiliado === "asociado") {
        desRec = tarifaTotal - total;
        porcentajeDesRec = (desRec / tarifaTotal) * 100;
      } else if (tipoAfiliado === "noAsociado") {
        desRec = total - tarifaTotal;
        porcentajeDesRec = (desRec / tarifaTotal) * 100;
      }
    }
    console.log(`tarifaTotal: ${tarifaTotal}, total: ${total}, desRec: ${desRec}, porcentajeDesRec: ${porcentajeDesRec}`);
    return {
      valorSinIVA: valorBase,
      iva: iva,
      total: total,
      desRec: desRec,
      porcentajeDesRec: porcentajeDesRec,
    };
  }
}
