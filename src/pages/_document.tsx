import React from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';

import i18nextConfig from '../../next-i18next.config.js';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: React.Children.toArray([initialProps.styles]),
		};
	}
	render(): JSX.Element {
		return (
			<Html lang="es">
				<Head>
					<meta
						name="keywords"
						content="Portfolio, Web Developer, React, PHP, Arduino, Nextjs, Laravel Developer, React Developer, IOT"
					/>
					<meta name="author" content="Mónica P. Arroyo" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
