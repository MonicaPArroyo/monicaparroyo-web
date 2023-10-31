import React from 'react';
import Nav from '@/components/Nav';
import Footer from './Footer';

type LayoutProps = {
	section: NavProps['section'];
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ section, children }) => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
				}}
			>
				<Nav section={section} />
				<div
					style={{
						margin: '2rem auto',
					}}
				>
					{children}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
