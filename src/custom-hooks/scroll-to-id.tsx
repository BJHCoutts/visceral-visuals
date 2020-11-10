interface IScrollToId {
	id: string
}

export const scrollToId = (id:string, position:string = 'start') => {
	const el = document.getElementById(id)
	if (el) {
		el.scrollIntoView({
			behavior: 'smooth',
			block: position,
		})
	}
}