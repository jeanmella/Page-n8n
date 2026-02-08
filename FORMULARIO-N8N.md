# 📤 Formulario de Contacto - Integración N8N

## 🌐 Webhook URL
```
https://jeanc.app.n8n.cloud/webhook/dce35ebc-cebf-4d45-93b4-827717af53d0
```

## 📋 Datos que se Envían (JSON)

Cuando un usuario llena y envía el formulario, se envía un objeto JSON con la siguiente estructura:

```json
{
  "nombre": "Nombre del cliente",
  "email": "email@ejemplo.com",
  "telefono": "123-456-7890",
  "mensaje": "Mensaje del cliente aquí...",
  "fecha": "8 de febrero de 2026, 14:11",
  "origen": "Famili Cars - Landing Page"
}
```

## 🔍 Descripción de Campos

| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| `nombre` | String | Nombre completo del cliente | ✅ Sí |
| `email` | String | Email del cliente | ✅ Sí |
| `telefono` | String | Teléfono del cliente | ❌ No (muestra "No proporcionado" si está vacío) |
| `mensaje` | String | Mensaje del cliente | ✅ Sí |
| `fecha` | String | Fecha y hora del envío (formato: DD de MMMM de YYYY, HH:MM) | ✅ Automático |
| `origen` | String | Identificador de origen (siempre "Famili Cars - Landing Page") | ✅ Automático |

## 📨 Método HTTP

- **Método**: `POST`
- **Content-Type**: `application/json`
- **Body**: JSON con los datos del formulario

## ✅ Mensaje de Éxito

Cuando el formulario se envía correctamente, el usuario ve un **modal personalizado** con:

- ✅ Icono de éxito grande
- ✅ Título: "¡Mensaje Enviado!"
- ✅ Mensaje: "Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible."
- ✅ Botón "Cerrar" con efecto hover
- ✅ Fondo oscuro con blur
- ✅ Borde verde neón (#22C55E)
- ✅ Animaciones suaves (fade in + slide up)

### Características del Modal:
- Se puede cerrar haciendo clic en el botón "Cerrar"
- Se puede cerrar haciendo clic fuera del modal
- Se puede cerrar presionando la tecla `Escape`
- El formulario se limpia automáticamente después del envío exitoso

## ❌ Mensaje de Error

Si hay un error al enviar, el usuario ve un **modal de error** con:

- ❌ Icono de error
- ❌ Título: "Error al Enviar"
- ❌ Mensaje: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o contáctanos directamente por teléfono."
- ❌ Botón "Cerrar" con efecto hover
- ❌ Borde rojo (#EF4444)

## 🔄 Estados del Botón

### 1. Estado Normal
```
[ Enviar Mensaje ]
```

### 2. Estado Enviando (Loading)
```
[ Enviando... ] (deshabilitado, opacidad 60%)
```

### 3. Estado Después del Envío
```
[ Enviar Mensaje ] (vuelve al estado normal)
```

## 🎯 Ejemplo de Uso en N8N

### Paso 1: Recibir Webhook
```javascript
// Los datos llegan automáticamente en formato JSON
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "809-555-1234",
  "mensaje": "Estoy interesado en comprar un SUV",
  "fecha": "8 de febrero de 2026, 14:11",
  "origen": "Famili Cars - Landing Page"
}
```

### Paso 2: Posibles Acciones en N8N

#### Opción 1: Enviar Email
```
Webhook → Email Node
- Para: ventas@familicars.com
- Asunto: Nuevo Lead - {{$json.nombre}}
- Cuerpo: 
  Nombre: {{$json.nombre}}
  Email: {{$json.email}}
  Teléfono: {{$json.telefono}}
  Mensaje: {{$json.mensaje}}
  Fecha: {{$json.fecha}}
```

#### Opción 2: Guardar en Google Sheets
```
Webhook → Google Sheets Node
- Acción: Append Row
- Columnas: nombre, email, telefono, mensaje, fecha, origen
```

#### Opción 3: Crear Contacto en CRM
```
Webhook → CRM Node (HubSpot, Salesforce, etc.)
- Crear contacto con los datos del formulario
```

#### Opción 4: Notificación por WhatsApp/Telegram
```
Webhook → WhatsApp/Telegram Node
- Enviar notificación al equipo de ventas
- Mensaje: "Nuevo lead: {{$json.nombre}} - {{$json.email}}"
```

#### Opción 5: Respuesta Automática
```
Webhook → Email Node
- Para: {{$json.email}}
- Asunto: Gracias por contactar a Famili Cars
- Cuerpo: Email personalizado de confirmación
```

## 🧪 Cómo Probar

### 1. Abrir la Web
```
http://localhost:8000
```

### 2. Ir a la Sección de Contacto
Scroll hasta el final de la página

### 3. Llenar el Formulario
- **Nombre**: Tu nombre
- **Email**: tu@email.com
- **Teléfono**: (opcional)
- **Mensaje**: Mensaje de prueba

### 4. Click en "Enviar Mensaje"

### 5. Verificar en N8N
- Ve a tu workflow en N8N
- Revisa las ejecuciones
- Deberías ver los datos JSON que enviaste

## 📊 Validación de Campos

### Campos Requeridos (HTML5 Validation)
- ✅ **Nombre**: `required`
- ✅ **Email**: `required` + validación de formato email
- ✅ **Mensaje**: `required`

### Campos Opcionales
- ❌ **Teléfono**: No requerido (si está vacío, se envía "No proporcionado")

## 🔒 Seguridad

- ✅ Validación HTML5 en el frontend
- ✅ Envío HTTPS al webhook
- ✅ Content-Type: application/json
- ✅ Manejo de errores con try/catch
- ✅ Mensajes de error amigables

## 🎨 Diseño del Modal

### Colores
- **Éxito**: Verde Neón (#22C55E)
- **Error**: Rojo (#EF4444)
- **Fondo**: Negro semi-transparente con blur
- **Texto**: Blanco (#FFFFFF) y Gris Claro (#E4E4E7)

### Animaciones
- **Overlay**: Fade in (0.3s)
- **Modal**: Slide up (0.4s)
- **Botón**: Hover effect (translateY + box-shadow)

## 📝 Notas Importantes

1. **Formato de Fecha**: Se usa `toLocaleString('es-ES')` para formato en español
2. **Campo Teléfono**: Si está vacío, se envía "No proporcionado" en lugar de null o string vacío
3. **Campo Origen**: Siempre se envía "Famili Cars - Landing Page" para identificar la fuente
4. **Limpieza del Formulario**: Solo se limpia después de un envío exitoso
5. **Estado del Botón**: Se deshabilita durante el envío para evitar múltiples envíos

## 🚀 Próximos Pasos Recomendados

1. ✅ **Configurar Email Automático** en N8N
2. ✅ **Guardar Leads en Google Sheets** o CRM
3. ✅ **Configurar Notificaciones** (WhatsApp, Telegram, Slack)
4. ✅ **Crear Respuesta Automática** al cliente
5. ✅ **Agregar Analytics** para trackear conversiones

---

**¡El formulario está completamente funcional y listo para recibir leads!** 🎉
