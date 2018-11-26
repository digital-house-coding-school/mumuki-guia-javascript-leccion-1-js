/*<output#*//*#output>*/
/*<tests#*/
function foo(document) {
  return document.querySelector("body").style.backgroundColor == "pink";
}

it("Cambio de color", function() {
  _dispatch_('load', document);
  _wait_for_(() => foo(document), function() {
      document.querySelector("body").style.backgroundColor.should.eql("pink");
  })
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/