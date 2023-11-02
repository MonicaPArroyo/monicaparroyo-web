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
				className="
					flex
					flex-col
					md:flex-row
					justify-between
					items-center
					m-4
					lg:mx-12
					gap-4
				"
			>
				<div>
					<div
						className="
							text-center
							mb-2
							text-xl
							font-bold
						"
					>
						<p>{t('language')}</p>
					</div>
					<div
						className="
							flex
							flex-row
							justify-between
							items-center
							gap-4
							h-16
						"
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
						className="
							text-center
							mb-2
							text-xl
							font-bold
						"
					>
						<p>Social</p>
					</div>
					<div
						className="
							flex
							flex-row
							justify-between
							items-center
							gap-4
						"
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
			<div className="text-center my-4">
				<p>© 2023 Mónica P. Arroyo </p>
			</div>
		</div>
	);
};

export default Footer;
