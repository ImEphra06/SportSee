import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./header.css";

function Header() {
	return (
		<header>
			<nav>
				<Link to="/">
					<img className="logo" src={logo} alt="logo du site Spotsee" />
				</Link>
				<NavLink to="/">Accueil</NavLink>
				<NavLink to="/">Profil</NavLink>
				<NavLink to="/">Réglages</NavLink>
				<NavLink to="/">Communauté</NavLink>
			</nav>
		</header>
	);
}

export default Header;