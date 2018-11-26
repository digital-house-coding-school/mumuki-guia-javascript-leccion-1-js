/*<output#*//*#output>*/
/*<tests#*/it("Cambio a blue", function() {
  _prompt_response_ = "blue"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  _last_prompt_message_.should.eql("Elegi un color")
  
  var lis = document.querySelectorAll('li')
  
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color.should.be.eql('blue');  
  }
  
  
});

it("Cambio a red", function() {
  _prompt_response_ = "red"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  _last_prompt_message_.should.eql("Elegi un color")
  
  var lis = document.querySelectorAll('li')
  
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color.should.be.eql('blue');  
  }
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/