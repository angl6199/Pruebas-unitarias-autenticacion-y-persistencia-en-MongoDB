# Pruebas-unitarias-autenticacion-y-persistencia-en-MongoDB
Tarea 4 de Laboratorio de desarrollo de aplicaciones web - Ángel Heredia Vázquez A01650574

## Instrucciones para instalación
1. Descargar o clonar el repositorio
2. Abrir una terminal en la carpeta raíz del proyecto
3. Ejecutar el comando $npm i
4. Realizar una conexión a MongoDB utilizando localhost en puerto 27017
5. En la terminal abierta en paso 2, ejecutar el comando $npm run devstart
6. Acceder a ethereal.email e iniciar sesión con las credenciales proporcionadas en el archivo /mailer/mailer.js

## Instrucciones para ejecución de pruebas unitarias con mocha
1. Haber realizado los pasos de instalación
2. Abrir una terminal secundaria (sin cerrar la terminal de ejecución del proyecto en localhost)
3. En la terminal secundaria ejecutar el comando $npm run mochatest

## Instrucciones para loggeo de usuario
1. Haber realizado los pasos de instalación
2. En la pantalla inicial del proyecto (login por defecto) seleccionar la opción de "Registrarse"
3. Llenar los campos necesarios para crear una cuenta
4. Al crear la cuenta, se deberá de abrir el buzón de etherial mailer configurado en la instalación
5. Abrir el correo enviado a la cuenta recién creada y copiar el token de identificación
6. Visitar la URL del token
7. Realizar inicio de sesión con credenciales
8. Una vez dentro, en caso de querer cerrar sesión, clickear botón de cerrar sesión en menú principal <br />
**Nota**: A la fecha de la entrega de la tarea, el servidor de ethereal parece estar caído. En caso de que al revisar la tarea, el servicio siga inhabilitado, para simular la autenticación de manera exitosa, por favor considere cambiar el valor de autenticado, en el archivo del usuario deseado, dentro de la colección de "usuarios" en la base de datos de MongoDB <br />
**Nota**: Considere que si no se inicia sesión, no podrá acceder a las pantallas del proyecto, pues estas se encuentran protegidas

## Instrucciones para reservar bicicleta
1. Haber realizado los pasos de instalación
2. Haber iniciado sesión con los pasos de loggeo de usuario
3. Crear una bicicleta a través del menú de bicicletas
4. En el listado de bicicletas, clickear el botón de reservar
5. Seleccionar un intervalo de fechas (no se cuenta con validación de que las fechas a reservar ya sean pasadas al no estar contempladas en la tarea)
6. Clickear Reservar
7. Las reservas efectuadas se podrán revisar en el apartado "Reservas hechas" <br />
**Nota**: Se cuenta con validación de verificación de disponibilidad de bicicleta conforme a otras reservaciones <br />
**Nota**: El listado de bicicletas se despliega acorde a cada usuario, sin embargo, la validación de disponibilidad se realiza con las reservaciones de todos los usuarios <br />
**Nota**: En caso de reservación no disponible, se despliega pantalla de bicicleta ocupada
