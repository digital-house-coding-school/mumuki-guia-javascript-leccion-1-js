/*<output#*//*#output>*/
/*<tests#*/it("Enviar una alerta que diga 'Bienvenido!'", function() {
  var hayUltimaAlerta = typeof _last_alert_message_ !== "null"
  
  hayUltimaAlerta.should.eql(true, "¿Llamaste a la función alert?")
  
  
  _last_alert_message_.should.eql("Bienvenido!", "asasad");
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/