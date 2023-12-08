import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import { Image, Link } from '@nextui-org/react';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['index', 'layout'])),
	},
});

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation('index');
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<main
				className="
					flex
					flex-col
					lg:flex-row
					justify-between
					align-center
					w-full
				"
			>
				<div
					className="
					flex
					flex-col
					justify-center
					align-center
					w-full
					lg:w-1/2
					text-center
					px-8
					lg:pl-16
				"
				>
					<h1 className="text-4xl lg:text-5xl font-bold mb-4">
						{t('hi')}
					</h1>
					<p className="text-lg md:text-xl mb-8 ">
						{t('description-1')}
						<Link
							href="https://snowballcommunity.com"
							target="_blank"
						>
							Snowball Community
						</Link>
						{t('description-2')}
					</p>
				</div>
				<div
					className="
					flex
					justify-center
					lg:justify-end
					align-center
					w-full
					lg:w-1/2
					px-8
					lg:pr-16

				"
				>
					<Image
						src="/images/me.png"
						as={NextImage}
						alt="Mónica P. Arroyo"
						width={493}
						height={459}
						isBlurred
						disableSkeleton
					/>
				</div>
			</main>
		</>
	);
};

export default Home;
