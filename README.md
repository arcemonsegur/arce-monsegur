# Grupo Arce Monsegur — Sitio Web
## Guía completa para publicar en arcemonsegur.com

---

## PASO 1 — Instalar Node.js (una sola vez)

1. Ir a https://nodejs.org
2. Descargar e instalar la versión **LTS** (botón verde grande)
3. Verificar instalación: abrir Terminal (Mac) o CMD (Windows) y escribir:
   ```
   node --version
   ```
   Tiene que aparecer algo como `v20.x.x`

---

## PASO 2 — Probar el sitio en tu computadora (local)

1. Abrir Terminal / CMD
2. Ir a la carpeta del proyecto:
   ```
   cd arce-monsegur
   ```
3. Instalar dependencias (solo la primera vez):
   ```
   npm install
   ```
4. Iniciar el servidor local:
   ```
   npm run dev
   ```
5. Abrir el navegador en: **http://localhost:5173**

Para detener: presionar `Ctrl + C` en la terminal.

---

## PASO 3 — Crear cuenta en GitHub (gratuito)

1. Ir a https://github.com y crear una cuenta gratuita
2. Una vez logueado, hacer clic en **"New repository"** (botón verde)
3. Nombre del repositorio: `arce-monsegur`
4. Dejarlo en **Public**
5. Hacer clic en **"Create repository"**

---

## PASO 4 — Subir el proyecto a GitHub

En la terminal, dentro de la carpeta `arce-monsegur`:

```bash
git init
git add .
git commit -m "Sitio web Grupo Arce Monsegur"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/arce-monsegur.git
git push -u origin main
```

⚠️ Reemplazar `TU-USUARIO` con tu nombre de usuario de GitHub.

---

## PASO 5 — Publicar en Vercel (gratuito)

1. Ir a https://vercel.com y crear cuenta (puede ser con la cuenta de GitHub)
2. Hacer clic en **"Add New Project"**
3. Seleccionar el repositorio `arce-monsegur` de GitHub
4. En la pantalla de configuración:
   - **Framework Preset**: Vite (lo detecta automáticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Hacer clic en **"Deploy"**
6. En 2-3 minutos el sitio estará en una URL tipo `arce-monsegur.vercel.app`

---

## PASO 6 — Conectar el dominio arcemonsegur.com

### En Vercel:
1. Ir al proyecto → **Settings** → **Domains**
2. Escribir `arcemonsegur.com` y hacer clic en **"Add"**
3. Vercel te va a mostrar los registros DNS que necesitás configurar

### En el panel de tu registrador de dominio:
Entrá donde compraste el dominio (GoDaddy, NIC.ar, Namecheap, etc.) y en la sección **DNS** / **Gestión de DNS** agregá estos registros:

| Tipo  | Nombre | Valor                    |
|-------|--------|--------------------------|
| A     | @      | 76.76.21.21              |
| CNAME | www    | cname.vercel-dns.com     |

⚠️ Los valores exactos los va a mostrar Vercel en el paso anterior.

### Tiempo de activación:
- Los cambios DNS pueden tardar **24 a 48 horas** en propagarse
- Una vez activo, `arcemonsegur.com` mostrará tu sitio con HTTPS automático

---

## PASO 7 — Actualizar el sitio en el futuro

Cuando quieras hacer cambios al contenido:
1. Editar el archivo `src/App.jsx`
2. En la terminal:
   ```bash
   git add .
   git commit -m "descripción del cambio"
   git push
   ```
3. Vercel detecta el cambio automáticamente y actualiza el sitio en ~1 minuto

---

## Estructura de archivos

```
arce-monsegur/
├── public/
│   └── favicon.svg          ← ícono del sitio
├── src/
│   ├── main.jsx             ← punto de entrada (no modificar)
│   └── App.jsx              ← TODO el contenido del sitio
├── index.html               ← HTML base (no modificar)
├── package.json             ← configuración del proyecto
├── vite.config.js           ← configuración del build
└── README.md                ← esta guía
```

---

## Soporte

Para cualquier duda técnica sobre la puesta en marcha,
el equipo de Arce Monsegur puede contactar a su desarrollador de confianza
o consultar la documentación oficial:
- Vercel: https://vercel.com/docs
- Vite: https://vitejs.dev/guide/
