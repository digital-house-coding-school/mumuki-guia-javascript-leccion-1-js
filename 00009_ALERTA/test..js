/*<output#*//*#output>*/
/*<tests#*/it("Enviar una alerta que diga 'Bienvenido!'", function() {
  var hayUltimaAlerta = _last_alert_message_ !== null
  
  true.should.eql(hayUltimaAlerta, "<b><u>¿Llamaste a la función alert?</u></b>")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/