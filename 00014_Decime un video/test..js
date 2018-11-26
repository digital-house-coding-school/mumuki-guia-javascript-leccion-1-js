/*<output#*//*#output>*/
/*<tests#*/it("Test video 1", function() {
  _prompt_response_ = "rNSnfXl1ZjU"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  var definioSrc = document.querySelector("iframe").getAttribute("src") !== null
  
  definioSrc.should.eql(true, "No definiste el atributo src del iframe")
  
  document.querySelector("iframe").getAttribute("src").should.be.eql('https://www.youtube.com/embed/' + _prompt_response_);  
});

it("Test Video 2", function() {
  _prompt_response_ = "DgdMV3IczYY"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  var definioSrc = document.querySelector("iframe").getAttribute("src") !== null
  
  definioSrc.should.eql(true, "No definiste el atributo src del iframe")
  
  document.querySelector("iframe").getAttribute("src").should.be.eql('https://www.youtube.com/embed/' + _prompt_response_);  
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/