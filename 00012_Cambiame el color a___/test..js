/*<output#*/<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body style="color: pink;">
    <marquee style="font-size:32px;font-family:Arial">Alto Fondo!</marquee>
  </body>
</html>/*#output>*/
/*<tests#*/it("Cambio style color", function() {
  true.should.be.eql(false, 'HOLA' + document.querySelector("body").getAttribute('style'))
  document.querySelector("body").style.color.should.eql("pink")
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/