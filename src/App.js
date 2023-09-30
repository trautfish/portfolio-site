import './App.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from './images/logo-portrait.jpg';
import { Icon } from '@iconify/react';
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
										offset={-80}
										duration={200}
									>
										{menu.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</header>

				<main>
					<div className='content-home'>
						<div>
							<img
								className='logo'
								src={logo}
								alt='Logo with illustration of a spellbook, keyboard, brush and magic wand.'
							/>
						</div>
						<h1 className='home-title'>Dan Trauten</h1>
						<div class='divider-custom-line'></div>
						<h2 className='home-subtitle'>
							Frontend Developer - Illustrator
						</h2>
					</div>

					<div className='content-about' id='1'>
						<h1>About</h1>
						<div class='divider-custom-line-dark'></div>
						<h3 className='about-text'>
							Hi!
							<br />
							<br />
							My name's Dan, and I'm a Chicago-based Frontend Web
							Developer and Illustrator. I enjoy creating engaging web
							content utilizing my many years of experience as a working
							artist.
							<br />
							<br />
							I’m always looking to work with other collaborators to
							create accessible, human-centered web experiences.
						</h3>
					</div>

					<div className='content-work' id='2'>
						<h1>Work</h1>
						<div class='divider-custom-line'></div>
						<div className='row'>
							<div className='projects-columns'>
								<div class='card'>
									<h3>SNES Randomizer</h3>
									<p>-short explaination-</p>
									<p>
										Demo |{' '}
										<a href='https://github.com/trautfish/snes-randomizer'>
											GitHub
										</a>
									</p>
								</div>
							</div>
							<div className='projects-columns'>
								<div class='card'>
									<h3>Boss Monster Bagels</h3>
									<p>-short explaination-</p>
									<p>
										Demo |{' '}
										<a href='https://github.com/trautfish/bossbagels-react'>
											GitHub
										</a>
									</p>
								</div>
							</div>
							<div className='projects-columns'>
								<div class='card'>
									<h3>Nucamp Project Site</h3>
									<p>-short explaination-</p>
									<p>
										Demo |{' '}
										<a href='https://github.com/trautfish/nucampsite-react'>
											GitHub
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className='illo-thumbs'></div>

						<h3 className='work-text'>
							I have many years of experience as a Freelance Illustrator
							working in digital and traditional media, with a focus on
							visual storytelling. I’ve also designed visual assets for
							several iOS apps, including advertisements and games.
						</h3>
					</div>

					<div className='content-contact' id='3'>
						<h1 className='contact-title'>Contact</h1>
						<div class='divider-custom-line-dark'></div>
						<div className='content-container'>
							<h3>
								<a href='mailto: dan.trauten@gmail.com'>
									dan.trauten@gmail.com
								</a>
							</h3>

							<a href='https://docs.google.com/document/d/1hNxlhBsEFLyJGwmAuDAIxBsR17_V3kddGkCeMlSk8ic/edit?usp=sharing'>
								<button>
									<h2>Resume</h2>
								</button>
							</a>

							<div className='work-links'>
								<a href='http://www.github.com/trautfish'>
									<span class='work-icons'>
										<Icon
											icon='fa6-brands:github'
											style={{ height: 53, width: 53 }}
										></Icon>
									</span>
								</a>
								<a href='https://www.linkedin.com/dantrauten/'>
									<Icon
										icon='fa6-brands:linkedin'
										style={{ height: 53, width: 53 }}
									></Icon>
								</a>
								<a href='https://www.instagram.com/dantrauten/'>
									<Icon
										icon='fa6-brands:square-instagram'
										style={{ height: 53, width: 53 }}
									></Icon>
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>

			<Footer />
		</>
	);
}

export default App;
