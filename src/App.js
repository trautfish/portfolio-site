import './App.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Icon } from '@iconify/react';
import logo from './images/logo-portrait.jpg';
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
										duration={600}
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
								alt='Portrait of Dan Trauten'
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
						<div className='card-container'>
							<div className='card'>
								<div className='card-text'>
									<h3>SNES Randomizer</h3>
									<br></br>
									<div class='divider-custom-line-card'></div>
									<br></br>
									<div className='card-text-body'>
										<p>
											Lightweight website that pulls data from
											randomly selected Super Nintendo games using
											the RAWG API - displaying that info for the
											viewer.
										</p>
										<br></br>
									</div>
									<p>JavaScript • CSS • HTML5</p>
									<br></br>
									<p>
										Demo /{' '}
										<a
											className='a-card'
											href='https://github.com/trautfish/snes-randomizer'
										>
											GitHub
										</a>
									</p>
								</div>
							</div>
							<div className='card'>
								<div className='card-text'>
									<h3>Boss Monster Bagels</h3>
									<br></br>
									<div class='divider-custom-line-card'></div>
									<br></br>
									<div className='card-text-body'>
										<p>
											Menu and online ordering website for local,
											freshly-baked NY-style bagels with the options
											for pickup and delivery.
										</p>
										<br></br>
									</div>
									<p>React • Tailwind CSS</p>
									<br></br>
									<p>
										Demo /{' '}
										<a
											href='https://github.com/trautfish/bossbagels-react'
											className='a-card'
										>
											GitHub
										</a>
									</p>
								</div>
							</div>
							<div className='card'>
								<div className='card-text'>
									<h3>Nucamp Project Site</h3>
									<br></br>
									<div class='divider-custom-line-card'></div>
									<br></br>
									<div className='card-text-body'>
										<p>
											Responsive, REST-ful campsite reservation web
											app created during the Nucamp Front-End Web
											Development Bootcamp in 2023.
										</p>
										<br></br>
									</div>
									<p>React Native • Bootstrap</p>
									<br></br>
									<p>
										Demo /{' '}
										<a
											className='a-card'
											href='https://github.com/trautfish/nucampsite-reactnative'
										>
											GitHub
										</a>
									</p>
								</div>
							</div>
						</div>

						<div className='illo-thumbs'>




                     
                  </div>

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
						<div className='contact-container'>
							<h3>
								<a href='mailto: dan.trauten@gmail.com'>
									dan.trauten@gmail.com
								</a>
							</h3>

							<a href='https://docs.google.com/document/d/1hNxlhBsEFLyJGwmAuDAIxBsR17_V3kddGkCeMlSk8ic/edit?usp=sharing'>
								<button>Resume</button>
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
