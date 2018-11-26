En este caso la página nos presenta una lista de series.

Lo que te pedimos, es una vez más que dispares un `prompt` pidiendo "Elegi un color"

Una vez elegido un color por el usuario te pedimos que modifiques la propiedad color **de cada uno** de los `<li>` por el color elegido por el usuario.

No queremos que modifiques el estilo del `<ul>` sino de cada uno de los `<li>`. Para esto tendras que utilizar la función `querySelectorAll` y un `for` para recorrer la lista de elementos.

No olvides que para preguntar la longitud de una lista de elementos podes escribir `lista.length`