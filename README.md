# Práctica 2 : Primeros pasos en NodeJS



## Requisitos

Reescriba los apuntes realizados en la Práctica: Tareas Iniciales para seguir una estructura de directorios diferente, simplificando el despliegue en gh-pages.
Para ello vamos a partir de un fork del repo enten/gitbook-boilerplate que ofrece una estructura inicial para la creación de un libro y su despliegue en gh-pages.

    * En el directorio scripts/ se encuentran scripts shell para la construcción y despliegue del libro
    * Este repo utiliza el módulo gh-pages para automatizar el despliegue en gh-pages del libro
    * Reescriba los scripts shell en el directorio scripts/ para la construcción y despliegue del libro en NodeJS
    * Añada un Gulpfile con tareas build, deploy, serve, etc. que automaticen la construcción y despliegue del libro en los diferentes sites
    * Despliegue el libro en su máquina del iaas
    * Reucerde usar los issues y los projects para la colaboración
    * Despliegue el libro en su máquina virtual del iaas.ull.es siguiendo las instrucciones en
            * SERVICIO IAAS de la ULL
            * Como Desplegar una Aplicación Web en iaas.ull.es

## Autores

José Luis Doblado González  
* [Github](https://github.com/alu0100767001)
* [Pagina personal](https://alu0100767001.github.io/dsi-joseluis/)


Edna Liliana Galiano Camacho  
* [Github](https://github.com/ednagc)
* [Pagina personal](https://ednagc.github.io/edna-galiano/)

Kevin Estévez Expósito  
* [Github](https://github.com/alu0100821390)
* [Pagina personal](http://alu0100821390.github.io)


## Libro 

[Despliege del libro en gh-pages](https://ull-esit-dsi-1617.github.io/primeros-pasos-en-nodejs-edna-joseluis-kevin-35l2/)

[Despliegue del libro en gitbook(falta)]()

## Enlace descripción Práctica

[Practica 2](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/practicas/practicatareasiniciales2.html)

## Asignatura DSI ULL 

[Desarrollo de Sistemas Informáticos](https://campusvirtual.ull.es/1617/course/view.php?id=1136)


## GitBook Boilerplate

## Installation

```shell
cd ~/code

git clone https://github.com/enten/gitbook-boilerplate.git awesome-project

cd awesome-project

rm -fr .git

vi package.json
# edit repository.url and repository.wiki

git remote add origin <url>

npm run build
# or
# npm run generate-gitbook && npm run generate-wiki

npm run deploy
# or
# npm run deploy-gitbook && npm run deploy-wiki
```
__Important__: Wiki must be created on Github

