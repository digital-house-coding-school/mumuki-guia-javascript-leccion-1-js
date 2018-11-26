/*<output#*//*#output>*/
/*<tests#*/it("Busca PHP", function() {
  _prompt_response_ = "PHP"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  document.querySelector("iframe").getAttribute("src").should.be.eql('https://www.youtube.com/results?search_query=' + _prompt_response_);  
});

it("Busca JS", function() {
  _prompt_response_ = "JS"
  
  _dispatch_('load', document);
  
  var hayUltimoPrompt = _last_prompt_message_ !== null
  
  true.should.eql(hayUltimoPrompt, "<b><u>¿Llamaste a la función prompt?</u></b>")
  
  document.querySelector("iframe").getAttribute("src").should.be.eql('https://www.youtube.com/results?search_query=' + _prompt_response_);  
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/