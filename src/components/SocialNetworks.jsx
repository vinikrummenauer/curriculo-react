import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "github", icon: <FaGithub />},
    { name: "instagram", icon: <FaInstagram />},
    { name: "discord", icon: <FaDiscord />},
]

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href="" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}

  </section>
}

export default SocialNetworks