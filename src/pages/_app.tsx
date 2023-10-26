import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();
	const page = router.pathname.split('/')[1];
	const section = page === '' ? 'about' : page;
	return (
		<NextUIProvider>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<DefaultSeo {...SEO} />
				<Layout section={section}>
					<Component {...pageProps} />
				</Layout>
				<Analytics />
			</NextThemesProvider>
		</NextUIProvider>
	);
};

export default appWithTranslation(MyApp);
