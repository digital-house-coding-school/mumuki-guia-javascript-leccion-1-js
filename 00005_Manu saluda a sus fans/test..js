describe("Ejercicio 4", function() {
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
  
  it("Valores atributos", function() {
    assert(ginobili.nombre === "Emanuel", "El nombre de Ginobili debe ser el string Emanuel")
    
    assert(ginobili.apellido === "Ginobili", "El apellido de Ginobili debe ser el string Ginobili")
    
    assert(ginobili.puntos === 0, "Los puntos de Ginobili debe ser el integer 0")
  })
  
  it("Saludar", function() {
    assert(typeof ginobili.saludar === "function", "La variable ginobili debe definir un método saludar")
    
    assert(ginobili.saludar.length === 1, "El método saludar ahora debería recibir un argumento")
    
    
    var saludo = ginobili.saludar("Dario")
    
    assert(saludo !== "undefined", "La función saludar no tiene valor de retorno")
    
    assert(saludo === "Hola Dario soy Manu", "El método saludar esta retornando el texto '" + saludo + "' en vez de decir 'Hola Dario soy Manu'")
    
    var saludo = ginobili.saludar("Martin")
    
    assert(saludo !== "undefined", "La función saludar no tiene valor de retorno")
    
    assert(saludo === "Hola Martin soy Manu", "El método saludar esta retornando el texto '" + saludo + "' en vez de decir 'Hola Martin soy Manu'")
  })
})