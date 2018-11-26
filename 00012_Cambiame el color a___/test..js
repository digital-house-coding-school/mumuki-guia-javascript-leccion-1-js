/*<output#*//*#output>*/
/*<tests#*/it("Cambio de color", function() {
  window.document.querySelector("body").style.backgroundColor.should.be.eql("pink");
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/