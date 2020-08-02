import theme from '../theme'

export default function Anchor(props) {
	return (
		<a {...props}>
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
}
