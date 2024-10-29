class Controller {
  constructor() {
    this.model = new Model();
  }

  calcular(tarifaInscripcion, tipoAfiliado) {
    console.log("Calculando para:", tarifaInscripcion, tipoAfiliado);
    const { valorSinIVA, iva, total, desRec, porcentajeDesRec } = this.model.calcularTotal(tarifaInscripcion, tipoAfiliado);

    return { valorSinIVA, iva, total, desRec, porcentajeDesRec };
  }
}
