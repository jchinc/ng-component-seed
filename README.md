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

# Distribución de archivos

src
    |__hellow-word.component.ts
    |__hellow-word.component.html

# Referencias
[dillinger](https://dillinger.io): Herramienta en línea Markdown, para realización del archivo readme.md
