## Arcade Navigation

Librería que permite añadir una nave espacial a cualquier sitio web, con la cual puedes moverte por toda la página y disparar sobre los enlaces y botones para visitarlos

## Instalación

```
npm i arcade-navigation
```

Añade los archivos javascript de la carpeta dist "phaser.js" y "arcade-navigation.js" y la carpeta "assets"
Añade el siguiente script en el pie de todas las páginas donde quieras que aparezca

## Init
```html
    document.addEventListener('DOMContentLoaded', function () {
        var arcadeNavigator = new ArcadeNavigation();
        arcadeNavigator.init();
    });
```

Al hacer new ArcadeNavigation puedes pasarle un objecto con los parametros de configuración
Estos son los que tiene por defecto:

## configuración
```html
    new ArcadeNavigation({
        id: 'contentGameArcadeNavigation',
        zIndex: 3,
        imagenes: {
            nave: 'player.png',
            laser: 'bullet.png',
            explosion: 'explode.png',
            hueco: 'hole.png',
            particula: 'particle.png'
        },
        ruta: '/assets/',
        delay: 400,
        enemigos: [
        'a', 'button', '[role=button]',
        'input[type="submit"]', 'input[type="reset"]'
        ]
    });
```