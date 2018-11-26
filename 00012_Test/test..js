/*<output#*//*#output>*/
/*<tests#*/it("Definir una func que devuelva 2", function() {
  _confirm_response_ = true;
  _dispatch_('load')

  
  _last_alert_message_.should.eql("hola", "<b><u>La funcion debería retornar 2'</u></b>")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/