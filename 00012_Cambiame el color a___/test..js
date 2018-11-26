/*<output#*/<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <marquee style="font-size:32px;font-family:Arial">Alto Fondo!</marquee>
  </body>
</html>/*#output>*/
/*<tests#*/it("Cambio style color", function() {
  document.querySelector('body').style.color.should.be.eql('red');
});/*#tests>*/
/*<options#*/output_ignore_scripts: true
output_ignore_styles: true/*#options>*/