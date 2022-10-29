# Lección 7 y 8 profundizando en los Service Workers y añadiendo funcionalidad para Notificaciones Push

1. Cargamos la aplicación PWA de la lista de la compra

2. Instalamos web push global y generamos las vapid keys
npm i web-push -g
web-push generate-vapid-keys [--json]

3. Guardamos las keys en ServiceWorkerRegistration

4. Modificamos register() en el ServiceWorkerRegistration

5. Probamos que se puedan habilitar los permisos -> los habilitamos

6. Crearemos la primera notificación push automática, cada vez que haya una nueva versión disponible
self.registration.showNotification(title, { body })

----------------------------------------------------------------

7. Crearemos el servidor en express ¡Muy, Muy Sencillito!
creamos carpeta server y dentro de ella
npm init
npm i express cors
creamos index.js
node index para iniciar el servidor
