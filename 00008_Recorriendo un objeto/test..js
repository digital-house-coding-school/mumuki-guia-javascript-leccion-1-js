describe("Ejercicio 7", function() {
  it("Partes Auto", function() {
    var auto = {
      color: "Verde",
      marca: "Renault",
      modelo: "Sandero"
    }
    
    var partes = partesAuto(auto)
    
    assert(false, typeof partes)
  })
})