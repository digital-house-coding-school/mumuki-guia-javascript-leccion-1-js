/*<output#*//*#output>*/
/*<tests#*/it("Ejercicio 10", function() {
  
  var hayUltimoConfirm = _last_confirm_message_ !== null
  
  true.should.eql(hayUltimoConfirm, "<b><u>¿Llamaste a la función confirm?</u></b>")
  
  _last_confirm_message_.should.eql("Quiere nuestro newsletter?", "<b><u>La confirmación debería decir 'Quiere nuestro newsletter?'</u></b>")
  
  var hayUltimoAlert = _last_alert_message_ !== null
  
  true.should.eql(hayUltimoAlert, "<b><u>¿Llamaste a la función alert?</u></b>")
  
  _last_alert_message_.should.eql("Caso True")
});
/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/