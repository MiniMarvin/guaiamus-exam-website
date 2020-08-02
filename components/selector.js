export default function Selector(props) {
	const options = props.options.map((option, idx) => (
		<option key={idx} value={option}>
			{option}
		</option>
	))

	return (
		<>
			<select
				name={props.name}
				id={props.name}
				onChange={props.onChange}
				{...props}
			>
				{options}
			</select>

			<style jsx>{`
				select {
					width: 100%;
				}
			`}</style>
		</>
	)
}
