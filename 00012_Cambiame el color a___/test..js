/*<output#*//*#output>*/
/*<tests#*/it("Cambio de color", function() {
  _dispatch_('load', document);
  
  document.querySelector("body").style.backgroundColor.should.eql("pink");
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/