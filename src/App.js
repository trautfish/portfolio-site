import './App.css';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Footer from './components/Footer';

function App() {
	const menuItems = [
		{
			id: 1,
			title: 'About',
		},
		{
			id: 2,
			title: 'Work',
		},
		{
			id: 3,
			title: 'Contact',
		},
	];

	return (
		<>
			<div className='App'>
				<header>
					<nav>
						<h2 onClick={scroll.scrollToTop}>Dan Trauten</h2>

						<ul>
							{menuItems.map((menu) => (
								<li>
									<Link
										to={menu.id}
										smooth={true}
										offset={0}
										duration={500}
									>
										{menu.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>

				<main>
					<div className='content'>
						<div className='logo-spacing'>
							<div className='logo'></div>
						</div>
						<h1 className='home-title'>Dan Trauten</h1>
						<h2 className='home-subtitle'>
							Web Developer // Illustrator
						</h2>
					</div>
					<div className='content' id='1'>
						<h1 className='content-header'>About</h1>
						<h2 className='about-text'>
							I’m a Frontend Web Developer interested in creating
							engaging, accessible web content using HTML5, CSS,
							JavaScript, React and React Native. With my creative
							background, I’m looking to work with folks designing web
							apps that focus on both form and function while maintaining
							accessibility.
						</h2>
					</div>
					<div className='content' id='2'>
						<h1 className='content-header'>Work</h1>
						<h2 className='work-text'>
							I have many years of experience as a Freelance Illustrator
							working in digital and traditional media, with a focus on
							visual storytelling. I’ve also designed visual assets for
							several iOS apps, including advertisements and games.
						</h2>
						<a href='http://www.github.com/trautfish'>Github</a>
						<a href='https://www.instagram.com/dantrauten/'>Instagram</a>
					</div>
					<div className='content' id='3'>
						<h1 className='content-header'>Contact</h1>
						<a href='mailto: dan.trauten@gmail.com'>
							dan.trauten@gmail.com
						</a>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
