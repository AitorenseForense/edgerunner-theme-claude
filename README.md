# Luna Edgerunner

Tema oscuro para Claude inspirado en una noche en la luna. Tiene un fondo de espacio negro con estrellas que parpadean despacio, la Tierra asomando por el horizonte con su halo azul y el suelo lunar en primer plano. Botones, enlaces y títulos van en amarillo neón, y las herramientas llevan detalles lavanda y azules.

Paleta: `#04040F` fondo · `#0D1424` / `#16213A` superficies · `#F2EDE0` texto · `#FCF427` acento · `#4FA3D1` halo · `#E1E7FF` lavanda · `#E0444F` errores.

## Dónde se ve

| Dónde | ¿Se ve el tema? |
| --- | --- |
| Pestaña **Code** de la app de escritorio (icono `</>`) | ✅ Sí |
| Sesiones de Code en la app del móvil | ✅ Sí |
| Chats normales de la app de escritorio o del móvil | ❌ No |
| claude.ai en el navegador | ❌ No |
| Terminal y editores (VS Code, JetBrains) | ❌ No: ahí no se pintan temas |

> ⚠️ **Los chats normales no muestran el tema.** Es un límite de Claude, no del plugin. Hoy la app solo pinta los temas de los plugins en las sesiones de Code; en los chats normales no se carga el código de los plugins que cambia el aspecto. Desde el plugin no se puede cambiar. Si Claude lo permite en el futuro, el tema funcionará ahí sin tocar nada.

### Sesiones anteriores

- **Sesiones de Code que ya existían:** el tema se aplica al volver a abrirlas en la app de escritorio o del móvil. Si una sesión ya estaba abierta cuando instalaste el plugin, ciérrala y ábrela de nuevo.
- **Chats normales anteriores:** no pueden tenerlo, por lo que se explica arriba.

## Instalar

**En la app (la forma más fácil):** descarga [`dist/luna-edgerunner.plugin`](dist/luna-edgerunner.plugin) (botón de descarga en la página del archivo). Luego ve a **Plugins → Agregar → Subir plugin**, elige el archivo y pulsa **Continue**. Abre una sesión nueva en la pestaña Code.

**Desde una sesión de Claude Code (terminal):**

```
/plugin install luna-edgerunner --marketplace AitorenseForense/edgerunner-theme-claude
```

**Desde una shell:**

```
claude plugin marketplace add AitorenseForense/edgerunner-theme-claude
claude plugin install luna-edgerunner@luna-edgerunner
```

Para instalarlo desde GitHub hace falta tener **git** instalado. Sin git (por ejemplo, en Windows sin Git for Windows), descarga el repositorio como ZIP, descomprímelo y usa `claude plugin marketplace add <carpeta>` antes de `install`.

## Quitar

Usa `claude plugin uninstall luna-edgerunner` o desactívalo desde **Plugins**. La app vuelve a su tema por defecto.

## Licencia

MIT.
