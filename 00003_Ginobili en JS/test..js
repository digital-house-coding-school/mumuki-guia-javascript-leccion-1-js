describe("Ejercicio 2", function() {
  it("Existe Ginobili", function() {
    assert(typeof ginobili !== 'undefined', "La variable ginobili parecería no existir")
  })
  
  it("Es objeto", function() {
    assert(typeof ginobili !== 'object', "La variable ginobili parecería no ser un objeto literal")
    assert(false, typeof ginobili);
  })
})