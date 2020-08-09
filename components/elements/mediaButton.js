import globalTheme from '../theme'

/**
 *
 * @param {{onClick: any?, href: string, targe: string?}} props
 */
export default function MediaButton(props) {
	let theme = globalTheme
	if (props.theme) theme = props.theme
	return (
		<a href={props.href} target={props.target}>
			<button {...props}>{props.children}</button>
			<style jsx>{`
				button {
					background-color: ${theme.colors.buttonBgColor};
					color: ${theme.colors.buttonColor};
					padding: 8px;
					border: none;
					border-radius: 6px;
					font-weight: bold;
					width: ${props.width};
					height: ${props.height};
					cursor: pointer;
				}
			`}</style>
		</a>
	)
}
