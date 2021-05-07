import React from 'react';

const TopBar = () => {
	return (
		<header className='app-header'>
			<p className='user-name'>
				Hola <span>Santiago</span>
			</p>
			<nav className='main-nav'>
				<a href='#!'>Cerrar Sesión</a>
			</nav>
		</header>
	);
};

export default TopBar;
