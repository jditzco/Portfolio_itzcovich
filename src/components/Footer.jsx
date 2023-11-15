import { Outlet, Link } from "react-router-dom"
import './styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <img alt='Footer image' src='/favicon.jpg' />
            <p>CSS Hecho con <span className="heart">❤</span> por Jero con axel
            </p>
        </footer>
    )
}

export default Footer