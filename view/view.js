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
    console.log("Formulario enviado");
    const tipoAfiliado = this.selectTipoAfiliado.value;
    const tarifaInscripcion = this.selectTarifaInscripcion.value;

    const controller = new Controller();
    const { valorSinIVA, iva, total } = controller.calcular(tarifaInscripcion, tipoAfiliado);

    this.verResultado(valorSinIVA, iva, total, tipoAfiliado);
  }

  verResultado(valorSinIVA, iva, total, tipoAfiliado) {
    console.log("Resultados a mostrar:", { valorSinIVA, iva, total });
    const moneda = tipoAfiliado === "extranjero" ? "USD" : "COP"; // Determinar la moneda
    this.elementos.innerHTML = `
      <p>Valor Base (sin IVA): $${valorSinIVA.toFixed(2)} COP</p>
      <p>IVA: $${iva.toFixed(2)} COP</p>
      <p>Total a Pagar: $${total.toFixed(2)} ${moneda}</p>
    `;
  }
}
