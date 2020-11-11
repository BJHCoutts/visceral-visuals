import React, { useState } from 'react'

export const slideUpOnScroll = ({children}) => {
		const [active, setActive] = useState(false)
		// half way through the image
		const slideInAt = (window.scrollY + window.innerHeight) - el.height / 2
		// bottom of the image
		const elBottom = el.offsetTop + el.height
		const isHalfShown = slideInAt > el.offsetTop
		const isNotScrolledPast = window.scrollY < elBottom
		if (isHalfShown && isNotScrolledPast) {
			setActive(true)
		} else {
			setActive(false)
		}
		return(
			
		)
}