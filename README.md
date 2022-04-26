# Gesitión

*Aplicación para aprender esto:*

- Crear una carpeta shared para guardar componente compartido
- Crear componentes por funcionabilidad ( Clientes, Proveedores, Paises )
- Cargar módulos,
- Rutas hijas
- Comunicar componentes
- Pipes

## Pasos para crear lazy-load
Ejemplo:


ng g m paises --routing

ng g c paises/pages/paises 
( la página con la tabla de paises )

ng g s paises/services/paises

1. configurar las rutas del módulo paises.
2. configurar el lazy-load en app-routing module
3. decir a angular que existe el módulo de paiese ( app.module )
