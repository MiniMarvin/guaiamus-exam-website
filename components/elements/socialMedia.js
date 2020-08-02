import MediaButton from './mediaButton'

function SocialMedia(props) {
	return (
		<div className="grid">
			<div className="btn">
				{props.github === false ? null : (
					<MediaButton name="github" width="36px" height="36px" href="https:s//github.com/minimarvin">
						<img src="/github.svg" alt="github"/>
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.medium === false ? null : (
					<MediaButton name="medium" width="36px" height="36px" href="https://medium.com/@caiogomes_dev">
						<img src="/medium.svg" alt="medium"/>
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.instagram === false ? null : (
					<MediaButton name="instagram" width="36px" height="36px" href="https://instagram.com/caiogomes_dev">
						<img src="/instagram.svg" alt="instagram"/>
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.twitter === false ? null : (
					<MediaButton name="twitter" width="36px" height="36px" href="https://twitter.com/caiogomes_dev">
						<img src="/twitter.svg" alt="twitter"/>
					</MediaButton>
				)}
			</div>
			<div className="btn">
				{props.email === false ? null : (
					<MediaButton name="email" width="36px" height="36px" href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@caiogomes.dev&su=Gostaria%20de%20conversar%20com%20você">
						<img src="/email.svg" alt="email"/>
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
