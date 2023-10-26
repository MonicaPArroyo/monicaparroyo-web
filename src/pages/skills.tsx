import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Link } from '@nextui-org/react';
import Layout from '@/components/Layout';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['index', 'layout'])),
	},
});

const Skills = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	const { t } = useTranslation('index');

	const lang = router.locale === 'en' ? 'es' : 'en';
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<p>{t('comming-soon')}...</p>
			<Link href="/" locale={lang} as={NextLink} color="secondary">
				Cambiar idioma
			</Link>
		</>
	);
};

export default Skills;
