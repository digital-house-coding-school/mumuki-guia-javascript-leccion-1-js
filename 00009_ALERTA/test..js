/*<output#*//*#output>*/
/*<tests#*/it("Enviar una alerta que diga 'Bienvenido!'", function() {
  "hola".eql("chau")
  _last_alert_message_.should.eql("Bienvenido!", "asasad");
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/