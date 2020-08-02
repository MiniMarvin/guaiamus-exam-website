import globalTheme from './theme'

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
          padding: 10px 20px;
          border: none;
          border-radius: 9px;
          margin: 0px 5px;
          font-weight: bold;
        }
      `}</style>
		</button>
	)
}
