import { useRef } from "react";
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";
import '../../components/NavBar/Header.css'

export function Header () {


  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<header>
			<a href="/"><h3 className="logo">Books Shop</h3></a>
			
			<nav ref={navRef}>
				<a href="/">Libros</a>
				<a href="/category">Categorias</a>

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

		</>
		);
}