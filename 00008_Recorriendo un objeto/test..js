describe("Ejercicio 7", function() {
  it("Partes Auto", function() {
    var auto = {
      color: "Verde",
      marca: "Renault",
      modelo: "Sandero"
    }
    
    var partes = partesAuto(auto)
    
    assert(Array.isArray(partes), "La funcion partesAuto debe retornar un array")
    
    assert(partes.length === 3, "El array de retorno debería tener 3 elementos")
    
    assert(partes.shift() === "Verde" && partes.shift() === "Renault" && partes.shift() == "Sandero", "El array de retorno no tiene las partes recibidas")
  })
})