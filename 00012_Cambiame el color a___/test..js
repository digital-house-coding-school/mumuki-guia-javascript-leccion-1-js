/*<output#*//*#output>*/
/*<tests#*/it("Cambio style color", function() {
  document.querySelector("body").innerHTML.should.eql("pink")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/