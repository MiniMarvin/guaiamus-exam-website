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
        <option>escolha uma opção...</option>
				{options}
			</select>

			<style jsx>{`
				select {
					width: 100%;
          padding: 10px 5px;
          border-radius: 9px;
          border: none;
				}
			`}</style>
		</>
	)
}
