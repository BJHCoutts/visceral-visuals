import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Inria+Sans:wght@700&display=swap');

	:root {
		--display-font: 'Amatic SC', cursive;
		--body-font: 'Inria Sans', sans-serif;

		--white: rgb(245, 245, 245);
		--black: rgb(21, 53, 74, 0.8);
		--black-transparent: rgb(21, 53, 74, 0.5);
		--mid-grey: hsl(0,0%,50%);
		--pink: hsl(354, 84, 90);
		--green: hsl(174, 80, 10);
		
		--primary: #334355;
		--primary-transparent: rgba(51, 67, 85, .75);
		--secondary: none;
		--accent: none;
		
		--light-grey: hsl(0, 0%, 90%);

		--mobile: 576px;
		--tablet: 768px;
		--desktop: 992px;
		--wide: 1200px;
		
		--grid: minmax(15px, 1fr) minmax(0, 80%) minmax(15px, 1fr);
		--banner-padding-mobile: 1.5em 0 2em 0;
		--banner-padding-desktop: 2.5em 0 3em 0;
		--section-padding-mobile: 2em 0 1em 0;
		--section-padding-desktop: 2.5em 0 3.5em 0;
		
		--shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.075);
		
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		transition: color .2s ease-in;
	}

	body {
		overflow-y: scroll;
		scroll-behavior: smooth;
		background-color: var(--white);
		color: ${({theme}) => theme.text};
		/* color: var(--black); */
		font-family: var(--body-font);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	p {
		font-size: 1rem;
		line-height: 1.25em;
		margin-bottom: 0.75em;

	}

	ul {
		list-style-type: none;
	}

	img {
		max-width: 100%;
	}

	::selection {
		background-color: var(--primary);
		color: var(--black);
	}
`