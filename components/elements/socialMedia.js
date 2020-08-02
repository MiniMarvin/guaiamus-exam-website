import MediaButton from './mediaButton'

function SocialMedia(props) {
	return (
		<div className="grid">
			<div className="btn">
				{props.github === false ? null : (
					<MediaButton width="36px" height="36px" href="https:s//github.com/minimarvin">
						<img src="/github.svg" />
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.medium === false ? null : (
					<MediaButton width="36px" height="36px" href="https://medium.com/@caiogomes_dev">
						<img src="/medium.svg" />
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.instagram === false ? null : (
					<MediaButton width="36px" height="36px" href="https://instagram.com/caiogomes_dev">
						<img src="/instagram.svg" />
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.twitter === false ? null : (
					<MediaButton width="36px" height="36px" href="https://twitter.com/caiogomes_dev">
						<img src="/twitter.svg" />
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.email === false ? null : (
					<MediaButton width="36px" height="36px" href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@caiogomes.dev&su=Gostaria%20de%20conversar%20com%20você">
						<img src="/email.svg" />
					</MediaButton>
				)}
			</div>
			
			<style jsx>{`
				.grid {
					display: flex;
					flex-direction: row;
				}

				.btn {
					margin: 2px;
				}
			`}</style>
		</div>
	)
}

export default SocialMedia