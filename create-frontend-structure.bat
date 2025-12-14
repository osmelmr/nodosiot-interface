@echo off
echo ================================
echo Frontend React - Estructura src
echo ================================

set BASE=src

REM Verificación
if not exist %BASE% (
    echo ERROR: La carpeta "src" no existe.
    echo Ejecuta este script desde la raiz del proyecto Vite.
    pause
    exit /b 1
)

echo.
echo Creando directorios...

REM Directorios
mkdir %BASE%\pages 2>nul
mkdir %BASE%\pages\dashboard 2>nul

mkdir %BASE%\components 2>nul
mkdir %BASE%\components\layout 2>nul
mkdir %BASE%\components\ui 2>nul

mkdir %BASE%\routes 2>nul

mkdir %BASE%\api 2>nul
mkdir %BASE%\hooks 2>nul
mkdir %BASE%\store 2>nul
mkdir %BASE%\schemas 2>nul
mkdir %BASE%\utils 2>nul
mkdir %BASE%\styles 2>nul

echo Directorios listos.
echo.
echo Creando archivos...

REM Archivos raiz
type nul > %BASE%\main.jsx
type nul > %BASE%\App.jsx
type nul > %BASE%\routes.jsx

REM Pages
type nul > %BASE%\pages\Home.jsx
type nul > %BASE%\pages\About.jsx
type nul > %BASE%\pages\Contact.jsx
type nul > %BASE%\pages\Login.jsx
type nul > %BASE%\pages\Dashboard.jsx

REM Dashboard pages
type nul > %BASE%\pages\dashboard\DashboardLayout.jsx
type nul > %BASE%\pages\dashboard\Overview.jsx
type nul > %BASE%\pages\dashboard\Settings.jsx

REM Routing
type nul > %BASE%\routes\ProtectedRoute.jsx

REM Components
type nul > %BASE%\components\layout\Navbar.jsx
type nul > %BASE%\components\layout\Sidebar.jsx

type nul > %BASE%\components\ui\Button.jsx
type nul > %BASE%\components\ui\Card.jsx
type nul > %BASE%\components\ui\Table.jsx
type nul > %BASE%\components\ui\Spinner.jsx

REM API
type nul > %BASE%\api\axios.js
type nul > %BASE%\api\auth.api.js
type nul > %BASE%\api\nodes.api.js
type nul > %BASE%\api\sensors.api.js
type nul > %BASE%\api\readings.api.js
type nul > %BASE%\api\alerts.api.js

REM Hooks
type nul > %BASE%\hooks\useAuth.js
type nul > %BASE%\hooks\useNodes.js
type nul > %BASE%\hooks\useSensors.js
type nul > %BASE%\hooks\useReadings.js
type nul > %BASE%\hooks\useAlerts.js

REM Store
type nul > %BASE%\store\auth.store.js
type nul > %BASE%\store\ui.store.js
type nul > %BASE%\store\filters.store.js

REM Schemas
type nul > %BASE%\schemas\auth.schema.js
type nul > %BASE%\schemas\node.schema.js
type nul > %BASE%\schemas\sensor.schema.js
type nul > %BASE%\schemas\reading.schema.js
type nul > %BASE%\schemas\alert.schema.js

REM Utils
type nul > %BASE%\utils\permissions.js
type nul > %BASE%\utils\formatters.js
type nul > %BASE%\utils\dates.js

REM Styles
type nul > %BASE%\styles\globals.css

echo.
echo Estructura creada correctamente.
pause
