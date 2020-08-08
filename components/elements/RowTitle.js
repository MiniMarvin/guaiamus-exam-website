import theme from '../theme'

export default function RowTitle(props) {
	return (
		<>
			<div>
				<span>{props.title}:</span>
				<span className="content">{props.content}</span>
			</div>

			<style jsx>{`
				div {
					display: flex;
					flex-direction: row;
          margin: 10px 0px;
				}

				span {
					font-size: 1em;
				}

				.content {
          margin-left: 5px;
					color: ${theme.colors.baseGreen};
				}
			`}</style>
		</>
	)
}