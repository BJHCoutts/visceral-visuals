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
			<p>Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.</p>
		</>
	},
	{
		name: 'Dunbar Masonry',
		imagePath: '',
		url:'https://dunbarmasonry.ca/',
		description:<>
			<p>Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.</p>
		</>
	},
	{
		name: 'Claire Rushton Counselling',
		imagePath: '',
		url: 'https://clairerushtoncounselling.com/',
		description:<>
			<p>Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.</p>
		</>
	},
	{
		name: 'Better Basics',
		imagePath: '',
		url: 'https://www.betterbasics.co/',
		description:<>
			<p>Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.</p>
		</>
	},
	{
		name: 'Dunbar Masonry',
		imagePath: '',
		url: 'https://masonryawards.ca/',
		description:<>
			<p>Website description Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, illo.</p>
		</>
	},
]
