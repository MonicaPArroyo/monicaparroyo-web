import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { Divider, Image } from '@nextui-org/react';
import NextImage from 'next/image';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['about', 'layout'])),
	},
});

const About = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation('about');
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main>
				<section className="flex flex-col lg:flex-row justify-between align-center w-full">
					<div className="flex flex-col justify-center align-center w-full lg:w-1/2 text-center px-8 lg:pl-16">
						<h1 className="text-4xl lg:text-5xl font-bold mb-4">
							{t('about')}
						</h1>
						<p className="text-xl md:text-xl font-extralight mb-8 ">
							{t('description')}
						</p>
						<p className="text-lg md:text-xl mb-8 ">
							{t('description-1')}
						</p>
						<p className="text-lg md:text-xl mb-8 ">
							{t('description-2')}
						</p>
					</div>
					<div className="flex justify-center lg:justify-end align-center w-full lg:w-1/2 px-8 lg:pr-16">
						<Image
							src="/images/me-about.png"
							as={NextImage}
							alt="Mónica P. Arroyo"
							width={500}
							height={500}
							disableSkeleton
							style={{
								filter: 'drop-shadow(-8px -7px 10px #9353d3)',
							}}
						/>
					</div>
				</section>
				<Divider />
				<section>
					<h1 className="text-4xl lg:text-5xl font-bold mb-4">
						{t('my-experience')}
					</h1>
				</section>
			</main>
		</>
	);
};

export default About;
