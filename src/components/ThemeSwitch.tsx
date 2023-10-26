import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import React, { useEffect } from 'react';

const ThemeSwitch = () => {
	const [mounted, setMounted] = React.useState(false);
	const { theme, setTheme } = useTheme();
	const [isSelected, setIsSelected] = React.useState(theme === 'dark');

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<Switch
				isSelected={isSelected}
				onValueChange={(isSelected) => {
					setIsSelected(isSelected);
					setTheme(isSelected ? 'dark' : 'light');
				}}
				size="lg"
				color="secondary"
				startContent={<MdLightMode />}
				endContent={<MdDarkMode />}
			/>
		</div>
	);
};

export default ThemeSwitch;
