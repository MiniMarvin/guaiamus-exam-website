import Link from 'next/link'

export default function TopImage() {
	return (
		<>
			<Link href="/">
				<a>
					<div className="logo">
						<img src="/logo_guaiamus.svg" alt="logo guaiamus" />
						<h1>Guaiamus</h1>
					</div>
				</a>
			</Link>

			<style jsx>
				{`
					h1 {
						font-size: 1.5em;
					}

					img {
						height: 3em;
						margin: 0px 10px 0px 0px;
					}
					.logo {
						display: flex;
						flex-direction: row;
						max-width: 250px;
					}
					a {
						max-width: 250px;
					}
				`}
			</style>
		</>
	)
}
