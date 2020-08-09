import React from 'react'
import theme from '../theme'

const Anchor = React.forwardRef((props, ref) => {
	return (
		<a {...props} ref={ref}>
			{props.children}
			<style jsx>{`
      a {
					/* color: ${theme.colors.linkColor}; */
          color: white;
          background-color: ${theme.colors.linkColor};
					font-weight: bold;
					cursor: pointer;
				}
			`}</style>
		</a>
	)
})

export default Anchor
