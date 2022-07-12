import Link from 'next/link'
import { Layout } from '../components/Layout'

export const Nosotros = () => {
  return (
    <div>
      <Layout pagina='Sobre Nosotros'>
        <h1>Desde Nosotros</h1>
        <Link href='/'>Inicio</Link>
      </Layout>
    </div>
  )
}
