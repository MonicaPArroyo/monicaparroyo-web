import { DefaultSeoProps } from 'next-seo';
const config: DefaultSeoProps = {
	title: 'Mónica P. Arroyo | Web Developer',
	description:
		'Mónica P. Arroyo. Desarrolladora de software especializada en desarrollo web con Next.js y Laravel',
	canonical: 'https://monicaparroyo.vercel.app/',

	openGraph: {
		type: 'website',
		title: 'Mónica P. Arroyo | Web Developer',
		description:
			'¡Hola! Soy Mónica, desarrolladora de software. Me especializo en el desarrollo web, tanto en el frontend como en el backend.',
		locale: 'es_MX',
		images: [
			{
				url: 'https://avatars.githubusercontent.com/u/42478892?v=4',
				alt: 'Mónica P. Arroyo',
			},
		],
		url: 'https://monicaparroyo.vercel.app/',
		site_name: 'Mónica P. Arroyo',
	},
	twitter: {
		handle: '@monicaparroyo',
		site: '@monicaparroyo',
		cardType: 'summary_large_image',
	},
};

export default config;
