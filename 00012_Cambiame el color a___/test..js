/*<output#*//*#output>*/
/*<tests#*/it("Cambio style color", function() {
  true.should.be.eql(false, 'HOLA' + JSON.stringify(document.querySelector("body")))
  document.querySelector("body").style.color.should.eql("pink")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/