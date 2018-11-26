/*<output#*//*#output>*/
/*<tests#*/
function foo() {
  return this.querySelector("body").style.backgroundColor == "pink";
}

it("Cambio de color", function() {
  _dispatch_('load', document);
  _wait_for_(foo.bind(document), function() {
      document.querySelector("body").style.backgroundColor.should.eql("pink");
  })
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/