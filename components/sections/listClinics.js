import ClinicBox from '../elements/clinicBox'

export default function ListClinics(props) {
	const clinics = [
		{
			name: 'dasa',
			subtitle: 'afonso olindense',
			exams: [
				{
					name: 'exame 1',
					price: 150,
				},
				{
					name: 'exame 2',
					price: 73.5,
				},
			],
			plans: ['unimed', 'cisco'],
		},
		{
			name: 'dasa',
			subtitle: 'afonso olindense',
			exams: [
				{
					name: 'exame 1',
					price: 150,
				},
				{
					name: 'exame 2',
					price: 73.5,
				},
			],
			plans: ['unimed', 'cisco'],
		},
	]

	const cards = clinics.map((clinic, i) => (
		<ClinicBox clinic={clinic} key={i + `-clinic`} />
	))

	return (
		<>
			<section>{cards}</section>

			<style jsx>{`
				section {
					margin: 30px 10px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 320px));
          grid-template-rows: repeat(auto-fill, 1fr);
          grid-row-gap: .5em;
          grid-column-gap: 1em;
				}

        @media (max-width: 600px) {
          section {
            justify-content: center;
          }
        }
			`}</style>
		</>
	)
}
