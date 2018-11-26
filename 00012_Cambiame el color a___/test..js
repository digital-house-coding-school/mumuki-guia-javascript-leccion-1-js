/*<output#*//*#output>*/
/*<tests#*/it("Cambio style color", function() {
  _dispatch_('load', document);
  document.querySelector('body').style.backgroundColor.should.be.eql('blue');
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/