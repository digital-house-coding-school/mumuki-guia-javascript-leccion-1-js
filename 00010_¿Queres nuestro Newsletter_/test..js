/*<output#*//*#output>*/
/*<tests#*/it("Enviar una confirkmación que diga que diga 'Quiere nuestro newsletter?'", function() {
  var hayUltimaAlerta = _last_confirm_message_ !== null
  
  true.should.eql(hayUltimaAlerta, "<b><u>¿Llamaste a la función confirm?</u></b>")
  
  _last_confirm_message_.should.eql("Quiere nuestro newsletter?", "<b><u>La confirmación debería decir 'Quiere nuestro newsletter?'</u></b>")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/