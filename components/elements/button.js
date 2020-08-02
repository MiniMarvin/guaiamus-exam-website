import globalTheme from '../theme'

/**
 *
 * @param {{onClick: any?}} props
 */
export default function Button(props) {
	let theme = globalTheme
	if (props.theme) theme = props.theme
	return (
		<button {...props}>
      {props.children}
			<style jsx>{`
        button {
          background-color: ${theme.colors.buttonBgColor};
          color: ${theme.colors.buttonColor};
          padding: 11px 20px;
          border: none;
          border-radius: 9px;
          font-weight: bold;
          width: ${props.width};
          height: ${props.height};
          cursor: pointer;
        }
      `}</style>
		</button>
	)
}
