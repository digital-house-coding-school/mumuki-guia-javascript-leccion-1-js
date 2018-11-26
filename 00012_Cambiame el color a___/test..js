/*<output#*//*#output>*/
/*<tests#*/it("Cambio de color", function() {
  true.should.be.eql(false, document.querySelector("body").style.backgroundColor);
document.querySelector("body").style.backgroundColor.should.be.eql("pink");
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/