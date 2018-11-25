var ginobili = {
  nombre : "Emanuel",
  apellido: "Ginobili",
  puntos: 0,
  saludar: function(fan) {
    return "Hola " + fan + " soy Manu"
  },
  doble: function() {
    this.puntos += 2
  },
  triple: function() {
    this.puntos += 3
  }
};