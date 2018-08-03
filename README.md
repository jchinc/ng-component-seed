# Pre-Requisitos

- NodeJs
- Npm
- Git

## Instalar Pre-Requisitos

### Windows
- [NodeJs, npm](https://nodejs.org)
- [Git](https://git-scm.com)

### Linux
- NodeJs
    ```sh
    $ sudo apt install node
    ```
- Npm
    ```sh
    $ sudo apt install npm
    ```
- Git
    ```sh
    $ sudo apt install git
    ```
___

# Inicializar Proyecto

```sh
npm install -y 
```

> **Nota**: 
-y : Para indicar que se coloquen todos los valores por defecto del archivo package.json

# Inicializar Git

Ejecutar el comando:
```sh
git init
```
Crear el archivo ```.gitignore``` con contenido para omitir los archivos que no se requieren versionar.
| .gitignore  |
| ----- |
| node_modules
| tmp
| dist

# Instalar paquetes mínimos

## Paquetes de proyecto
| Paquete | Descripción | Comando
| ----- | ------- | ------ 
| @angular/common | Directivas comunes, tales como *ngIf, *ngFor | `npm install --save @angular/common`
| @angular/core | ... | `npm install --save @angular/core`
| rxjs | Librería para eventos o métodos asíncronos | `npm install --save rxjs`
| zone.js | ... | `npm install --save zone.js`

> @angular/core depende de rxjs y zone.js, son dependencias por lo que se instalan de igual forma.
> De igual forma se podrían instalar indicando todas las librerías a la vez, por ejemplo `npm install --save-dev @angular/common @angular/core rxjs zone.js`

## Paquetes de desarrollo
| Paquete | Descripción | Comando
| ----- | ------- | ------ 
| @angular/compiler | Compilar typescript con opciones propias de angular | `npm install --save-dev @angular/compiler`
| @angular/compiler-cli | Cliente para compilar typescript con opciones propias de angular | `npm install --save-dev @angular/compiler-cli`
| typescript | Compila archivos typescript. Se instala como paquete de desarrollo para permitir indicar la versión específica para el proyecto y no sea necesario utilizar la instalada globalmente | `npm install --save-dev typescript`
| vinyl-fs | ... | `npm install --save-dev vinyl-fs`
| gulp-inline-ng2-template | ... | `npm install --save-dev gulp-inline-ng2-template`
| rollup | Combina todos los archivos correspondientes en uno sólo (FESM) | `npm install --save-dev rollup`
| uglify-js | Minimiza archivos javascript | `npm install --save-dev uglify-js`

# Estructura de archivos (Se crean manualmente)

- src
    - hello-world.component.ts
    - hello-world.component.html
    - hello-world.component.css
    - hello-world.module.ts
    - hello-world.ts *(Como nombre se coloca la misma que tendrá el componente, en éste caso hello-world)*
- .gitignore
- package.json  : Se crea al inicializar el proyecto (paso: ...)
- README.md     : Archivo de descripción del componente
- public_api.ts
- tsconfig.json : Configuración typescript para desarrollo (intellisense).
- tsconfig-esm2015.json : *Configuración para proceso de construcción o generación del componente (Para Webpack, Google Closure Compiler).*
- inlineAssets.js   : Coloca el contenido del html y css del componente en línea (incluído en la clase de componente).
- rollup-esm2015.conf.js : Configuración para generar FESM de ES2015

# Estructura de archivos (Se crean por proceso)

- tmp
    - src
        - hello-world.component.ts
        - hello-world.module.ts
        - hello-world.ts
    - public_api.ts

# Colocar html y css en el mismo componente (inline)

**Javascript**
inlineAssets.js

**Plugins**:
vinyl-fs
gulp-inline-ng2-template

**Comando**
npm run build:inline

# Generar módulos ES2015

**Configuración**
tsconfig-esm2015.json

**Descripción**
Tanto el origen como destino es es2015, éste proceso únicamente se utiliza para agregar declaración de tipos (d.ts)

**Comando**
npm run build:esm2015

**Generar FESM**
rollup

# Generar módulos ES5

# Generar módulos UMD
- Se utilizarán los archivos generados para ES5 (npm run build:esm5)
- Especificar nombre de componente para ambito global (Window)
- Indicar en archivo rollup, sección global para indicar los objetos globales con las que se identifican las referencias angular (@angular/core, etc...)
- Indicar en archivo rollip, sección external para indicar que las librerías angular son externas y no intente localizarlos en el proyecto del componente.

# Minificar módulos UMD
- Se utiliza la librería uglify-js
- Investigar parámetros enviados al comando -c -m -o

# Referencias
[Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs): Líneas guía para crear y publicar proyectos angular. Se agrega al repositorio para tenerlo siempre a mano.
[dillinger](https://dillinger.io): Herramienta en línea Markdown, para realización del archivo readme.md
[rsync](https://www.atareao.es/software-linux/sincronizacion-a-fondo-con-rsync/): Sincronización de archivos