export default function TextBlock(props) {
	return (
		<>
			<div className="main">
				<img src={props.img} />
				<div className="content">{props.children}</div>
			</div>

			<style jsx>{`
				div {
					width: 100%;
				}

				.main {
					display: flex;
					flex-direction: column;
					text-align: left;
					align-items: center;
					padding: 20px;
				}

				img {
					width: 33%;
				}
			`}</style>
		</>
	)
}
