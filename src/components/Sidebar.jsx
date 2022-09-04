import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Avatar from '../img/eu.jpeg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar}  id="vini" alt="Vinicius Krummenauer" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="#" className="btn">
      Download curriculo
    </a>
  </aside> 
}

export default Sidebar