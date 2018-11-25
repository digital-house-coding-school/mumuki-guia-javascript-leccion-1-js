describe("Ejercicio 2", function() {
  it("Existe Ginobili", function() {
    assert(typeof ginobili !== 'undefined', "La variable ginobili parecería no existir")
  })
  
  it("Es objeto", function() {
    assert(typeof ginobili === 'object', "La variable ginobili parecería no ser un objeto literal")
  })
  
  it("Tiene atributos", function() {
    assert(typeof ginobili.nombre !== 'undefined', "La variable ginobili debe tener un atributo nombre")
    
    assert(typeof ginobili.apellido !== 'undefined', "La variable ginobili debe tener un atributo apellido")
    
    assert(typeof ginobili.puntos !== 'undefined', "La variable ginobili debe tener un atributo puntos")
  })
})