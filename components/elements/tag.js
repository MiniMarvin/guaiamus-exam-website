import theme from '../theme'

export default function Tag(props) {
	return (
		<>
			<div>
				<div {...props} className="tag">
					<span>{props.title}</span>
					<img src="/close.svg" onClick={props.action} />
				</div>
			</div>

			<style jsx>
				{`
          div {
            display: inline-block;
            margin: 0px 3px;
          }

					.tag {
						padding: 10px;
						border-radius: 5px;
						display: flex;
            flex-direction: row;
						background-color: ${theme.colors.darkGreen};
            font-size: 1em;
					}

					img {
						cursor: pointer;
            width: 14px;
            margin: 0px 0px 0px 10px;
					}
				`}
			</style>
		</>
	)
}
