import { Container } from '../styles/pages/Home';
import logo from '../assets/logo.svg';

import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      
      <a href="http://www.undergrounds.rf.gd/" target="_blank">
        <img src={logo} alt="Picture of the author" />
        <h1>Underground Devs</h1>
      </a>
      
      <h1>React Structure</h1>
      <p>A ReactJS + Next.JS structure made by Kevson</p>
    </Container>
  )
}

export default Home;