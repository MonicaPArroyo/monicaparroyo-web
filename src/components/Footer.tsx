import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Divider, Link } from '@nextui-org/react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
	const { t } = useTranslation('layout');
	const router = useRouter();
	const { asPath, locale } = router;
	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					margin: '4rem',
				}}
			>
				<div>
					<div
						style={{
							textAlign: 'center',
							marginBottom: '.5rem',
							fontSize: '1.5rem',
							fontWeight: 'bold',
						}}
					>
						<p>{t('language')}</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '1rem',
							height: '64px',
						}}
					>
						<Link
							href={asPath}
							locale={'en'}
							as={NextLink}
							color="secondary"
							isDisabled={locale === 'en'}
						>
							English
						</Link>
						<Link
							href={asPath}
							locale={'es'}
							as={NextLink}
							color="secondary"
							isDisabled={locale === 'es'}
						>
							Español
						</Link>
					</div>
				</div>
				<div>
					<div
						style={{
							textAlign: 'center',
							marginBottom: '.5rem',
							fontSize: '1.5rem',
							fontWeight: 'bold',
						}}
					>
						<p>Social</p>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							gap: '1rem',
							marginLeft: '5%',
							marginRight: '5%',
						}}
					>
						<div>
							<NextLink
								href="https://www.linkedin.com/in/monicaparroyo/"
								target="_blank"
							>
								<Image
									src="/images/Linkedin.png"
									alt="Linkedin"
									width={64}
									height={64}
									style={{
										imageRendering: 'pixelated',
									}}
								/>
							</NextLink>
						</div>
						<div>
							<NextLink
								href="https://github.com/MonicaPArroyo"
								target="_blank"
							>
								<Image
									src="/images/Github.png"
									alt="Github"
									width={64}
									height={64}
									style={{
										imageRendering: 'pixelated',
									}}
								/>
							</NextLink>
						</div>
						<div>
							<NextLink
								href="https://www.instagram.com/monicaparroyo/"
								target="_blank"
							>
								<Image
									src="/images/Instagram.png"
									alt="Instagram"
									width={64}
									height={64}
									style={{
										imageRendering: 'pixelated',
									}}
								/>
							</NextLink>
						</div>
						<div>
							<NextLink
								href="https://monicaparroyo.itch.io/"
								target="_blank"
							>
								<Image
									src="/images/Itch.png"
									alt="Itch"
									width={64}
									height={64}
									style={{
										imageRendering: 'pixelated',
									}}
								/>
							</NextLink>
						</div>
						<div>
							<NextLink
								href="https://www.tinkercad.com/users/97kCQIzEEaU"
								target="_blank"
							>
								<Image
									src="/images/Tinkercad.png"
									alt="Tinkercad"
									width={64}
									height={64}
									style={{
										imageRendering: 'pixelated',
									}}
								/>
							</NextLink>
						</div>
					</div>
				</div>
			</div>
			<Divider />
			<div
				style={{
					textAlign: 'center',
					marginTop: '1rem',
				}}
			>
				<p>© 2023 Mónica P. Arroyo </p>
			</div>
		</div>
	);
};

export default Footer;
