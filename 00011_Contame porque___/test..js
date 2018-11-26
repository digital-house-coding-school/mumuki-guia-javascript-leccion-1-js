/*<output#*//*#output>*/
/*<tests#*/it("calls alert() saying hello", function() {
  _confirm_response_ = true;
  _dispatch_('load', document);
  _last_alert_message_.should.be.eql("hola");
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/