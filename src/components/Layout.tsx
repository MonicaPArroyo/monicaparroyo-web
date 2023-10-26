import React from 'react';
import Nav from '@/components/Nav';

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

				{children}
			</div>
		</div>
	);
};

export default Layout;
