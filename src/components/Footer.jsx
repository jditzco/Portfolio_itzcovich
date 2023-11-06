import { Outlet, Link } from "react-router-dom"
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <img alt='Footer image' src='/favicon.jpg' />
            <p>Hecho con <span className="heart">❤</span> por Jero con ayuda de axel
            </p>
        </footer>
    )
}

export default Footer