# Entrega TPO FS-Python Frontend (HTML, CSS, JS)

[URL](https://fbtejada.github.io/paradox_tpo/) navegable.

## Paradox

Es un sitio pensado para alterar la intuición, redefinir el "sentido común" del visitante, hacerlo pensar de manera un poco más profunda sobre sus creencias personales e invitar al estudio.

Para esto utiliza libremente el lenguaje de la matemática. La intención de Paradox no es predigerir todo hablando el lenguaje más amplio posible. Si el lector no conoce determinado tema o no tiene el nivel matemático necesario para comprender una parte, Paradox lo invita a estudiarlo por su cuenta.

El sitio no está de ninguna manera terminado. Todo es preliminar, dado que fue hecho rápidamente para cumplir con el TPO de codo a codo. Federico hubiera querido tener más tiempo para escribir todo el contenido de manera original, sobre todo en Banach Tarski donde hubiera querido dar una demostración propia. En definitiva no está listo para su publicación.

Federico dudó mucho sobre si dejar o no Gender Equality por miedo a que una versión tan preliminar se pudiera filtrar al público, así que espera que esto no suceda.

El sitio contiene imágenes y partes traducidas de otros autores todavía no referenciados.

## API utilizada en el TPO

OpenWeatherMap.

https://api.openweathermap.org/data/2.5/

Primero obtengo la geolocalización, y si el usuario lo autoriza obtengo con esta api la temperatura y estado del tiempo y la indico al lado del logo.
Notar que si el usuario no lo autoriza no se mostrará nada.
La geolocalización puede tardar, pero si se logra se almacena el resultado en Session Storage para usarlo en las otras páginas sin volver a consultarlo.
La temperatura y estado del tiempo se vuelven a consultar cada vez que se entra a una página distinta.

## Tipo de sitio

Es una MPA: Multi Page Application (varias páginas).

## Validación del formulario en JS

Pudimos hacerla, el código se encuentra en un archivo .JS aparte.

## ¿En qué página/s utilizaron iframes? *

banach-tarski.html

## ¿En qué página/s utilizaron íconos (FontAwesome u otros)? *

Todas: en el footer.

## ¿Qué tipos de fuente utilizaron? *

Fuentes de Google.

## ¿Qué páginas son responsivas? Indicar nombre o "todas" *

Todas. Salvo por un detalle que se usó TeX para la matemática y MathJax no es responsivo. Está explicado en comentario al principio de paradox.css (incluyo este comentario al final del Readme).

## Ubicación y descripción breve de la animación, transformación o transición utilizada *

El logo rota cuando se hace hover. Los iconos del footer transicionan al rojo. Los links del header también transicionan, tanto en el menu normal como en el hamburguesa.
Las cards también transicionan cuando se hace hover (se hacen más chicas).
Los botones del formulario hacen sonido 'click' cuando se los presiona.

## Tecnologías utilizadas para maquetar: *

Flexbox y Grid.

## ¿Qué páginas fueron maquetadas? Indicar nombre o "todas". En caso de no haber maquetado escribir un "-" *

Todas: index.html con grid y flex para las cards y resto ﬂex. Las demás páginas con ﬂex.

## En el caso de que el TPO haya sido realizado de a 2 o de manera individual especiﬁcar el motivo.

Somos dos. Primero perdimos un integrante, luego conseguimos otro, pero no sabemos si sigue yendo. 
Dijo que había comenzado tarde y que se iba a poner al día. Nunca mas supimos de ella.
No la vimos últimamente en clase.

## Comentarios adicionales que considere importantes sobre la entrega del TPO (opcional)

Desarrollamos bastante el contenido nosotros mismos, pero no quisiéramos que salga al público porque todavía es muy preliminar y puede no ser adecuado para el público general.
Una vez autorizada la geolocalización se debe esperar un rato para que esto suceda y recién ahí se consulte y muestre la temperatura y el estado del tiempo. 
Incluyo a continuación el comentario al principio de paradox.css sobre la responsividad de la matemática incluida.
Muchas gracias por todo JP!

## Sobre la responsividad de la matemática includa

Para la matemática se utiliza TeX o LaTeX que es lo usual en todo el mundo para matemática y física. 
Y para eso se usa MathJax en este sitio.
La matemática de MathJax no es responsive.
Por eso introduje varios puntos de corte en las ecuaciones. 
No obstante eso algunos celulares hacen un override de los seteos de tipo de fuente y tamaño.
Por eso para prevenir que el sitio se rompa uso "overflow: auto;" en las clases paradox-clear y paradox-dark.
Pero no se utiliza en la mayoría de los dispositivos.
Es sólo una precaución.
Lo ideal sería que MathJax fuera totalmente responsive.
La alternativa sería usar MathML pero es muy limitado comparado con TeX.

