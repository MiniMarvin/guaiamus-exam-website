import MediaButton from './mediaButton'

function SocialMedia(props) {
	return (
		<div className="grid">
			{props.github ? (
				<div className="btn">
					<MediaButton
						name="github"
						width="36px"
						height="36px"
						href="https:s//github.com/minimarvin"
						target="_blank"
					>
						<img src="/github.svg" alt="github" />
					</MediaButton>
				</div>
			) : null}
			{props.medium ? (
				<div className="btn">
					<MediaButton
						name="medium"
						width="36px"
						height="36px"
						href="https://medium.com/@guaiamus"
						target="_blank"
					>
						<img src="/medium.svg" alt="medium" />
					</MediaButton>
				</div>
			) : null}
			{props.instagram ? (
				<div className="btn">
					<MediaButton
						name="instagram"
						width="36px"
						height="36px"
						href="https://instagram.com/guaiamus"
						target="_blank"
					>
						<img src="/instagram.svg" alt="instagram" />
					</MediaButton>
				</div>
			) : null}
			{props.twitter ? (
				<div className="btn">
					<MediaButton
						name="twitter"
						width="36px"
						height="36px"
						href="https://twitter.com/guaiamus"
						target="_blank"
					>
						<img src="/twitter.svg" alt="twitter" />
					</MediaButton>
				</div>
			) : null}
			{props.email ? (
				<div className="btn">
					<MediaButton
						name="email"
						width="36px"
						height="36px"
						href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@guaiamus.com&su=Gostaria%20de%20conversar%20com%20você"
						target="_blank"
					>
						<img src="/email.svg" alt="email" />
					</MediaButton>
				</div>
			) : null}

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
