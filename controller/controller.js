class Controller {
  constructor() {
    this.model = new Model();
  }

  calcular(tarifaInscripcion, tipoAfiliado) {
    console.log("Calculando para:", tarifaInscripcion, tipoAfiliado);
    return this.model.calcularTotal(tarifaInscripcion, tipoAfiliado);
  }
}
