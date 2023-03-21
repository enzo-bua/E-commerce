import { useRef } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import { BsCart} from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import './Header.css'
import { useCart } from "../../hooks/useCart";

export function Header () {

	const { cart } = useCart()

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<a href="/"><h3 className="logo">Books Shop</h3></a>
			
			<nav ref={navRef}>
				<a href="/#">Libros</a>
				<a href="/#">Categorias</a>
				<a href="/#">Favoritos</a>
				<a href="/#">Historial</a>
        <div className="div-section">
          <a><IoMdNotifications className="notification"/></a>
          <a  href='/book/cart'><BsCart className="cart" /> {cart.length > 0 && <b className="Header-alert">{cart.length}</b>}</a>
          <a  href=""><FaUserAlt className="user"/></a>
        </div>


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}