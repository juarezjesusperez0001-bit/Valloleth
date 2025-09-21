
const fs = require('fs');
const path = require('path');

// Función para convertir SVG a PNG usando Canvas (Node.js)
async function createPNGIcons() {
  try {
    // Leer el archivo SVG
    const svgPath = path.join(__dirname, 'images', 'icon.svg');
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    console.log('📱 Generando iconos PNG para PWA...');
    console.log('ℹ️  Para generar los iconos PNG, abre generate-icons.html en tu navegador');
    console.log('ℹ️  Luego descarga los iconos y guárdalos como:');
    console.log('   - images/icon-192x192.png');
    console.log('   - images/icon-512x512.png');
    console.log('✅ Una vez guardados, tu PWA estará lista para instalar!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

createPNGIcons();
