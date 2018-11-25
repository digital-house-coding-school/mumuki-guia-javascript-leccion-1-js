/*<output#*//*#output>*/
/*<tests#*/it("Enviar una alerta que diga 'Bienvenido!'", function() {
  console.log(_last_alert_message_)
  var hayUltimaAlerta = typeof _last_alert_message_ !== "null"
  
  true.should.eql(hayUltimaAlerta, "¿Llamaste a la función alert?")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/