import Image from 'next/image';
import imgDesktop from '@/public/home/background-home-desktop.jpg';
import imgTablet from '@/public/home/background-home-tablet.jpg';
import imgMobile from '@/public/home/background-home-mobile.jpg';
import Homepage from '@/app/_components/main/Homepage';

export default function Home() {
	return (
		<div className='text-slate-50 relative'>
			<div className='fixed inset-0 -z-10 h-screen w-full'>
				<Image
					src={imgDesktop}
					alt='Background image'
					fill
					className='hidden object-cover object-top lg:block md:hidden sm:hidden filter brightness-90'
					quality={100}
					placeholder='blur'
				/>

				<Image
					src={imgTablet}
					alt='Background image'
					fill
					className='hidden object-cover md:block lg:hidden sm:hidden filter brightness-90'
					quality={100}
					placeholder='blur'
				/>
				<Image
					src={imgMobile}
					alt='Background image'
					className='object-cover h-full lg:hidden md:hidden filter brightness-90'
					fill
					quality={100}
					placeholder='blur'
				/>
			</div>

			<Homepage />
		</div>
	);
}
