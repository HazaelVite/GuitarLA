import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <div>
      <Layout pagina='Sobre Nosotros'>
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='Sobre Nosotros'/>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus mattis turpis, in porta lorem facilisis id. Vestibulum et urna vehicula, maximus felis nec, pharetra nunc. In laoreet ex quis felis venenatis, sed eleifend turpis imperdiet. Cras nisi risus, convallis a lorem quis, fermentum sollicitudin dolor.</p>
              <p>Donec in gravida leo, a ullamcorper ligula. Mauris fringilla pretium neque nec pellentesque. Aenean dictum aliquam rutrum. Proin in neque a sem hendrerit iaculis sed sed tellus. Maecenas metus enim, volutpat et quam sit amet, varius pharetra massa. Integer a tellus sed lorem dapibus egestas sit amet a urna.</p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default Nosotros