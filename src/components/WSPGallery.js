import { useState } from 'react';
import { Icon } from '@iconify/react';

import '../wsp-gallery.css';

const WSPGallery = ({ galleryImages }) => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = (index) => {
		setSlideNumber(index);
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const prevSlide = () => {
		slideNumber === 0
			? setSlideNumber(galleryImages.length - 1)
			: setSlideNumber(slideNumber - 1);
	};

	const nextSlide = () => {
		slideNumber + 1 === galleryImages.length
			? setSlideNumber(0)
			: setSlideNumber(slideNumber + 1);
	};

	return (
		<div>
			{openModal && (
				<div className='sliderWrap'>
					<Icon
						icon='fa6-solid:circle-xmark'
						style={{ height: 32, width: 32 }}
						className='btnClose'
						onClick={handleCloseModal}
					/>
					<Icon
						icon='fa6-solid:circle-arrow-right'
						style={{ height: 32, width: 32 }}
						className='btnNext'
						onClick={nextSlide}
					/>
					<Icon
						icon='fa6-solid:circle-arrow-left'
						style={{ height: 32, width: 32 }}
						className='btnPrev'
						onClick={prevSlide}
					/>
					<div className='fullScreenImage'>
						<img src={galleryImages[slideNumber].img} alt=''></img>
					</div>
				</div>
			)}
			<br />

			<div className='galleryWrap'>
				{galleryImages &&
					galleryImages.map((slide, index) => {
						return (
							<div
								className='single'
								key={index}
								onClick={() => handleOpenModal(index)}
							>
								<img src={slide.img} alt='' />
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default WSPGallery;
