import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';


export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['index', 'layout'])),
	},
});

const Projects = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation('index');

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<p>{t('comming-soon')}...</p>
		</>
	);
};

export default Projects;
