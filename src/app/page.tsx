import Image from 'next/image';
import qrCode from '../../public/image-qr-code.png';

import styles from './page.module.css';

export default function QrCode() {
	return (
		<section className={styles.wrapper}>
			<div className={styles['qr-block']}>
				<Image
					className={styles.image}
					src={qrCode}
					alt='Picture of the QR code'
					priority={true}
				/>
				<h1 className={styles.title}>
					Improve your front-end skills by building projects
				</h1>
				<p className={styles.desc}>
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next levell
				</p>
			</div>
		</section>
	);
}
