import { useTitulo } from '../hooks/useTitulo'

export default function Nosotros() {
  useTitulo('Nosotros | APEKEYS')

  return (
    <div className="contenedor">
      <div className="section-head">
        <div>
          <span className="eyebrow">Quiénes somos</span>
          <h1>Sobre APEKEYS</h1>
          <p>
            Una tienda digital pensada para que comprar un juego sea tan rápido como empezar a
            jugarlo.
          </p>
        </div>
      </div>

      <section className="card card-body">
        <div className="prose">
          <h2>Qué hacemos</h2>
          <p>
            APEKEYS es una tienda en línea dedicada exclusivamente a la venta de claves digitales:
            videojuegos para PC, PlayStation y Xbox, y licencias de software como sistemas operativos
            y suscripciones. No vendemos productos físicos, por lo que no hay despachos ni tiempos de
            espera: esta versión académica simula la compra y registra la orden en la base de datos
            de demostración.
          </p>

          <h2>Cómo trabajamos</h2>
          <p>
            Cada producto del catálogo indica de forma explícita la plataforma en la que se canjea la
            clave, el precio en pesos chilenos y la disponibilidad real en inventario. Cuando un
            cliente completa una compra, el stock se descuenta automáticamente, de modo que nadie
            pueda comprar una unidad que ya no existe.
          </p>
          <p>
            El sitio distingue tres perfiles de usuario. El <strong>cliente</strong> navega el
            catálogo y compra; el <strong>vendedor</strong> puede consultar el inventario y las
            órdenes; y el <strong>administrador</strong> gestiona el mantenedor completo de productos
            y usuarios.
          </p>

          <h2>El equipo de desarrollo</h2>
          <p>
            Este proyecto fue desarrollado por estudiantes de analista programador de Duoc UC para la
            asignatura Desarrollo Fullstack II.
          </p>

          <h2>Tecnologías utilizadas</h2>
          <ul>
            <li>
              <strong>React y TypeScript</strong> con componentes, props, estado y hooks, y rutas con
              react-router.
            </li>
            <li>
              <strong>Tailwind CSS</strong> con tema propio, diseño responsivo, grid y flexbox.
            </li>
            <li>
              <strong>json-server</strong> como API REST para productos, usuarios, órdenes y mensajes.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
