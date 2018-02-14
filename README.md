# ng-component-seed
Plantilla para crear y publicar un componente Angular 2+

## tsconfig.json
Archivo para configuración typescript durante el desarrollo. Intellisense, etc...

### tsconfig-esm2015.json
Configuración typescript para compilación EcmaScript 2015.

### compilerOptions.rootDir
Se utiliza para indicar el directorio base donde se considerarán los archivos indicados en "files".

### angularCompilerOptions.skipTemplateCodegen
Evita la creación de los archivos .ngfactory.js y .ngsummary.json

### angularCompilerOptions.flatModuleOutFile, angularCompilerOptions.flatModuleId
Archivo e ID para generar el archivo FESM2015 (archivo que integra todos los módulos en un único archivo)

## ROLLUP
Agrupa los módulos, clases en un sólo archivo. Reconoce formato ES2015 y ES5. Los archivos ya deben venir en el formato deseado y rollup únicamente los agrupa.

### rollup external:[]
Se utiliza para evitar que las librerías externas utilizadas se intenten compilar como parte de la librería. Considerarlos tal cual, como externas.

### rollup globals
Se utiliza para compilación en UMD, para que las referencias las lea del objeto global (window).