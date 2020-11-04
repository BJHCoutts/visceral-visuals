import React from 'react'

export interface IWebsite {
	name: string,
	imagePath: string,
	url: string,
	description: JSX.Element
}

export const websiteList:IWebsite[] = [
	{
		name: 'Who Studio',
		imagePath:'',
		url: 'https://whostudio.com/',
		description:<>
			<p>
				Who Studio is a mid range web design and development company that offers custom solutions for clients, where I am a lead front-end developer and designer. My responsibilities are brand identity, web designs and Figma site map prototypes, UX implementation, building the final site including graphic assets, protocol, and training new hires (along with the production of protocol and documentation). 
			</p>
			<p>
				I worked on both the design and development of our site. The final static site was built in Gatsby, Typescript React, and used Styled Components for CSS-in-JS.
			</p>
		</>
	},
	{
		name: 'Dunbar Masonry',
		imagePath: '',
		url:'https://dunbarmasonry.ca/',
		description:<>
			<p>
				I worked with stakeholders on a complete rebrand and designed and built this site from scratch in Typescript React. Graphics were made using both the Adobe suite and Affinity applications.
			</p>
		</>
	},
	{
		name: 'Claire Rushton Counselling',
		imagePath: '',
		url: 'https://clairerushtoncounselling.com/',
		description:<>
			<p>
				This was developed as a WordPress site so that my client could manage her own backend and blog. It was based on a template and involved a fair amount of custom code to personalize the site.
			</p>
		</>
	},
	{
		name: 'Better Basics',
		imagePath: '',
		url: 'https://www.betterbasics.co/',
		description:<>
			<p>
				A Shopify based teaser site built with custom code inside/compatible with the Shopify theme UI.
			</p>
		</>
	},
	{
		name: 'The Masonry Awards',
		imagePath: '',
		url: 'https://masonryawards.ca/',
		description:<>
			<p>
				A custom React site that hooks into the Shopify API. The design was supplied, my responsibilities were
			</p>
		</>
	},
	{
		name: 'Nod Mattress',
		imagePath: '',
		url: 'https://nodmattress.com/',
		description:<>
			<p>
				A custom React site that hooks into the Shopify API. The design was supplied, my responsibilities were building the front end to supplied specifications.
			</p>
		</>
	},
]
