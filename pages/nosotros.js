import Link from 'next/link'
import { Layout } from '../components/Layout'

const Nosotros = () => {
  return (
    <div>
      <Layout pagina='Sobre Nosotros'>
        <h1>Desde Nosotros</h1>
        <Link href='/'>Inicio</Link>
      </Layout>
    </div>
  )
}

export default Nosotros