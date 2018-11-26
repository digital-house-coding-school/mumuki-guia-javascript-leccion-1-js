/*<output#*//*#output>*/
/*<tests#*/it("Caso True", function() {
  _confirm_response_ = true;
  _dispatch_('load', document);
  
  var hayUltimoConfirm = _last_confirm_message_ !== null
  
  true.should.eql(hayUltimoConfirm, "<b><u>¿Llamaste a la función confirm?</u></b>")
  
  _last_confirm_message_.should.eql("Quiere nuestro newsletter?", "<b><u>La confirmación debería decir 'Quiere nuestro newsletter?'</u></b>")
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt luego de confirm?</u></b>")
  
  _last_prompt_message_.should.eql("¿Cuales son tus intereses?")
});

it("Caso False", function() {
  _confirm_response_ = false;
  _dispatch_('load', document);
  
  var hayUltimoConfirm = _last_confirm_message_ !== null
  
  true.should.eql(hayUltimoConfirm, "<b><u>¿Llamaste a la función confirm?</u></b>")
  
  _last_confirm_message_.should.eql("Quiere nuestro newsletter?", "<b><u>La confirmación debería decir 'Quiere nuestro newsletter?'</u></b>")
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt luego de confirm?</u></b>")
  
  _last_prompt_message_.should.eql("Porque no?")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/