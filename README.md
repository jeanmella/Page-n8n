# 🚗 Famili Cars - Landing Page Premium

![Famili Cars](https://img.shields.io/badge/Status-Ready-22C55E?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0-22C55E?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)

## 📋 Descripción

Landing page premium en **Dark Mode** para **Famili Cars**, tu dealer de confianza. Diseño moderno y creativo con estética "Dark Luxury" y color principal **Verde Neón (#22C55E)**.

## ✨ Características

### 🎨 Diseño
- ✅ **Dark Luxury Aesthetic** - Modo oscuro premium
- ✅ **Verde Neón** como color principal (#22C55E)
- ✅ **Glassmorphism** en todas las cards
- ✅ **Animaciones suaves** y micro-interacciones
- ✅ **Tipografía premium** (Plus Jakarta Sans + Inter)
- ✅ **Sistema de partículas** animadas en el fondo

### 🚀 Funcionalidades
- ✅ **Flip Cards interactivas** para servicios (6 servicios)
- ✅ **Navbar sticky** con efecto blur al scroll
- ✅ **Menú hamburguesa** responsive para mobile
- ✅ **Contadores animados** en estadísticas
- ✅ **Scroll animations** con Intersection Observer
- ✅ **Formulario de contacto** funcional
- ✅ **100% Responsive** (Desktop → Tablet → Mobile)

### 📱 Secciones Incluidas
1. **Hero** - Presentación principal con CTA
2. **Social Proof** - Estadísticas y métricas
3. **Servicios** - 6 flip cards interactivas
4. **Inventario** - Showcase de vehículos disponibles
5. **Testimonios** - Reseñas de clientes
6. **Sobre Nosotros** - Historia y valores
7. **CTA Final** - Llamado a la acción
8. **Contacto** - Formulario y datos de contacto
9. **Footer** - Links y redes sociales

## 🎨 Paleta de Colores

### Fondos
```css
--bg-primary: #000000     /* Negro puro */
--bg-secondary: #09090B   /* Gris ultra oscuro */
--bg-tertiary: #18181B    /* Gris oscuro para cards */
```

### Verde Neón (Color Principal)
```css
--primary-400: #4ADE80   /* Hover states */
--primary-500: #22C55E   /* Color base principal */
--primary-600: #16A34A   /* Botones activos */
--primary-700: #15803D   /* Gradientes profundos */
```

### Textos
```css
--text-primary: #FFFFFF     /* Blanco puro */
--text-secondary: #E4E4E7   /* Gris muy claro */
--text-tertiary: #A1A1AA    /* Gris medio */
```

## 📁 Estructura de Archivos

```
famili-cars/
├── index.html          # Estructura HTML completa
├── styles.css          # Estilos CSS con sistema de diseño
├── script.js           # JavaScript para interacciones
├── README.md           # Este archivo
└── images/             # Carpeta para tus imágenes (crear)
    ├── logo.png        # Logo de Famili Cars
    ├── hero_visual.png # Visual principal del hero
    ├── service_1.png   # Venta de Vehículos
    ├── service_2.png   # Alquiler de Autos
    ├── service_3.png   # Financiamiento
    ├── service_4.png   # Mantenimiento
    ├── service_5.png   # Vehículos Certificados
    └── service_6.png   # Asesoría Personalizada
```

## 🖼️ Imágenes

### ✅ Imágenes Reales Incluidas
La web ya incluye **imágenes profesionales de alta calidad de Unsplash** en todas las secciones:

- ✅ **Logo SVG** - Icono de auto personalizado con verde neón
- ✅ **Hero Visual** - Auto de lujo premium
- ✅ **6 Servicios** - Imágenes profesionales para cada servicio
- ✅ **3 Vehículos de Inventario** - SUV, Sedán y Deportivo

### Para Personalizar con tus Propias Imágenes:

Si deseas reemplazar las imágenes de Unsplash con tus propias fotos:

1. **Crea la carpeta `images/`** en la raíz del proyecto
2. **Agrega tus imágenes** con los siguientes nombres:
   - `logo.png` (512x512px) - Logo de Famili Cars
   - `hero_car.jpg` (1200x800px) - Visual del hero
   - `service_1.jpg` a `service_6.jpg` (800x600px) - Servicios
   - `car_1.jpg`, `car_2.jpg`, `car_3.jpg` (800x600px) - Inventario

3. **Actualiza las URLs en `index.html`**:

```html
<!-- Ejemplo: Hero Visual -->
<img src="images/hero_car.jpg" alt="Luxury Car" class="hero-car-image">

<!-- Ejemplo: Servicio 1 -->
<img src="images/service_1.jpg" alt="Venta de Vehículos" class="service-image">

<!-- Ejemplo: Inventario -->
<div class="inventory-image-placeholder" style="background-image: url('images/car_1.jpg');">
```

### Recomendaciones de Imágenes:
- **Formato**: JPG para fotos, PNG para logo
- **Calidad**: Alta resolución (mínimo 1920px de ancho)
- **Optimización**: Comprimir con TinyPNG o similar
- **Estilo**: Fotos profesionales con buena iluminación


## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Abre `index.html` en tu navegador favorito
2. ¡Listo! La web está funcionando

### Opción 2: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego abre: `http://localhost:8000`

## 🎯 Personalización

### Cambiar Información del Negocio

#### 1. Datos de Contacto (Footer y Sección Contacto)
```html
<!-- Buscar en index.html línea ~850 -->
<p>Av. Principal 123<br>Ciudad, País</p>
<p>+1 (234) 567-8900<br>Lun - Sáb: 9AM - 7PM</p>
<p>info@familicars.com<br>ventas@familicars.com</p>
```

#### 2. Estadísticas (Social Proof)
```html
<!-- Buscar en index.html línea ~150 -->
<div class="stat-number" data-target="500">0</div>
<div class="stat-label">Autos Vendidos</div>
```

#### 3. Servicios
Edita el contenido de cada flip card en la sección de servicios (línea ~200)

#### 4. Inventario
Agrega o modifica los vehículos disponibles (línea ~450)

### Cambiar Color Principal

Si quieres usar otro color en lugar del verde neón:

1. Abre `styles.css`
2. Busca las variables CSS (línea ~10)
3. Reemplaza los valores de `--primary-XXX`:

```css
/* Ejemplo: Cambiar a Azul Eléctrico */
--primary-400: #60A5FA;
--primary-500: #3B82F6;
--primary-600: #2563EB;
--primary-700: #1D4ED8;
```

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados con variables CSS
- **JavaScript (Vanilla)** - Sin dependencias externas
- **Google Fonts** - Plus Jakarta Sans & Inter
- **SVG** - Iconos y placeholders vectoriales

## 📱 Responsive Breakpoints

```css
Desktop XL:  1440px+
Desktop:     1024px - 1439px
Tablet:      768px - 1023px
Mobile:      < 767px
```

## ⚡ Optimizaciones

- ✅ **Lazy loading** preparado para imágenes
- ✅ **Debounce** en eventos de scroll
- ✅ **Intersection Observer** para animaciones eficientes
- ✅ **CSS Variables** para fácil personalización
- ✅ **Partículas reducidas** en mobile (20 vs 50)
- ✅ **Animaciones optimizadas** con `will-change`

## 🎨 Efectos Especiales

### Glassmorphism
Todas las cards usan efecto de vidrio esmerilado con:
- Backdrop blur de 24px
- Bordes semi-transparentes
- Gradientes sutiles
- Sombras suaves

### Flip Cards
Los servicios usan flip 3D de 180° con:
- Transición suave de 0.8s
- Soporte para hover (desktop)
- Soporte para tap/click (mobile)
- Backface-visibility para efecto limpio

### Animaciones
- **Hero**: Fade-in-up escalonado
- **Stats**: Contadores animados al scroll
- **Cards**: Aparición con stagger de 100ms
- **Buttons**: Gradient shift infinito
- **3D Elements**: Float animation de 6s

## 📞 Soporte

Si necesitas ayuda para personalizar la web:

1. Revisa los comentarios en el código
2. Consulta este README
3. Busca las secciones por ID en el HTML

## 📄 Licencia

MIT License - Libre para uso personal y comercial

## 🎉 Créditos

- **Diseño y Desarrollo**: Creado con ❤️ para Famili Cars
- **Inspiración**: Dark Luxury Design Trends 2024
- **Tipografía**: Google Fonts (Plus Jakarta Sans, Inter)

---

## 🚀 Próximos Pasos Recomendados

1. ✅ **Agregar tus imágenes reales** en la carpeta `images/`
2. ✅ **Personalizar textos** con tu información
3. ✅ **Conectar formulario** a tu backend/email
4. ✅ **Agregar Google Analytics** para métricas
5. ✅ **Optimizar SEO** (meta tags, sitemap, etc.)
6. ✅ **Configurar dominio** y hosting
7. ✅ **Agregar más vehículos** al inventario
8. ✅ **Integrar WhatsApp** Business API

---

**¡Tu landing page premium está lista! 🎉**

Para cualquier duda, revisa los comentarios en el código o consulta este README.

**Hecho con ❤️ para Famili Cars - Tu Dealer de Confianza**
