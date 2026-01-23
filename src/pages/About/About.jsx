import { Link } from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito em React no front-end e Firebase no back-end</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, debitis. Eaque amet, doloremque praesentium voluptatibus temporibus ab accusantium. Ratione exercitationem quibusdam in ex quaerat praesentium rem, dolor ipsam eum fuga!</p>

      <Link to='/posts/create' className='btn'>Criar Post</Link>
    </div>
  )
}

export default About