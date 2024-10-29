class View {
  constructor() {
    this.elementos = document.createElement("div");
    document.body.appendChild(this.elementos);
    console.log("Elemento creado:", this.elementos);
    this.calcularForm = document.getElementById("Calculadora");
    this.selectTipoAfiliado = this.calcularForm.querySelector("#tipoAfiliado");
    this.selectTarifaInscripcion = this.calcularForm.querySelector("#tarifaInscripcion");

    this.calcularForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this.submitForm();
    });
  }

  submitForm() {
    const tipoAfiliado = this.selectTipoAfiliado.value;
    const tarifaInscripcion = this.selectTarifaInscripcion.value;

    const controller = new Controller();
    const { valorSinIVA, iva, total, desRec, porcentajeDesRec } = controller.calcular(tarifaInscripcion, tipoAfiliado);

    this.verResultado(valorSinIVA, iva, total, tipoAfiliado, desRec, porcentajeDesRec);
  }
  verResultado(valorSinIVA, iva, total, tipoAfiliado, desRec, porcentajeDesRec) {
    console.log("desRec:", desRec, "porcentajeDesRec:", porcentajeDesRec);
    const moneda = tipoAfiliado === "extranjero" ? "USD" : "COP";

    const valorBaseFormateado = this.formatNumber(valorSinIVA.toFixed(2));
    const ivaFormateado = this.formatNumber(iva.toFixed(2));
    const totalFormateado = this.formatNumber(total.toFixed(2));
    const desRecFormateado = desRec !== undefined && desRec !== null ? this.formatNumber(Math.abs(desRec).toFixed(2)) : "N/A";

    const porcentajeFormateado =
      porcentajeDesRec !== undefined && porcentajeDesRec !== null ? porcentajeDesRec.toFixed(0) + "%" : "N/A";

    const tipodesRec = tipoAfiliado === "asociado" ? "Descuento" : "Recargo";

    this.elementos.innerHTML = `
  <div class="resultados">
    <p>Valor Base (sin IVA): $${valorBaseFormateado}</p>
    <p>IVA: $${ivaFormateado}</p>
    <p>Total a Pagar: $${totalFormateado}</p>
    <p>${tipodesRec}: $${desRecFormateado} (${porcentajeFormateado})</p>
  </div>
`;
  }

  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
