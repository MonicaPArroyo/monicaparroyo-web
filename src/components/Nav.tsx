import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
} from '@nextui-org/react';
import NextLink from 'next/link';
import Image from 'next/image';
import ThemeSwitch from '@/components/ThemeSwitch';
import logo from 'public/logo.png';
import { useTranslation } from 'next-i18next';
import React from 'react';

const Nav: React.FC<NavProps> = ({ section }) => {
	const { t } = useTranslation('layout');
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	return (
		<Navbar
			position="sticky"
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			classNames={{
				item: [
					'flex',
					'relative',
					'h-full',
					'items-center',
					"data-[active=true]:after:content-['']",
					'data-[active=true]:after:absolute',
					'data-[active=true]:after:bottom-0',
					'data-[active=true]:after:left-0',
					'data-[active=true]:after:right-0',
					'data-[active=true]:after:h-[2px]',
					'data-[active=true]:after:rounded-[2px]',
					'data-[active=true]:after:bg-secondary',
				],
			}}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="md:hidden"
				/>
				<NavbarBrand>
					<Link as={NextLink} href="/" color="foreground">
						<Image src={logo} alt="logo" width="64" height="64" />
						<p className="font-bold text-inherit">
							Mónica P. Arroyo
						</p>
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden md:flex gap-4" justify="center">
				<NavbarItem isActive={section === 'about'}>
					<Link color="secondary" href="/about" as={NextLink}>
						{t('about')}
					</Link>
				</NavbarItem>
				<NavbarItem isActive={section === 'skills'}>
					<Link color="secondary" href="/skills" as={NextLink}>
						{t('skills')}
					</Link>
				</NavbarItem>
				<NavbarItem isActive={section === 'projects'}>
					<Link color="secondary" href="/projects" as={NextLink}>
						{t('projects')}
					</Link>
				</NavbarItem>
				<NavbarItem isActive={section === 'contact'}>
					<Link color="secondary" href="/contact" as={NextLink}>
						{t('contact')}
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				<NavbarMenuItem>
					<Link
						color="secondary"
						className="w-full"
						size="lg"
						href="/about"
						as={NextLink}
					>
						{t('about')}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						color="secondary"
						className="w-full"
						size="lg"
						href="/skills"
						as={NextLink}
					>
						{t('skills')}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						color="secondary"
						className="w-full"
						size="lg"
						href="/projects"
						as={NextLink}
					>
						{t('projects')}
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						color="secondary"
						className="w-full"
						size="lg"
						href="/contact"
						as={NextLink}
					>
						{t('contact')}
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</Navbar>
	);
};

export default Nav;
