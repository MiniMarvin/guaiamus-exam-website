import {useState} from 'react'
import theme from '../components/theme'
import Selector from './selector'

export default function SearchBox() {
  // TODO: query data from database
  // TODO: selected list
  // TODO: unselected list
  const [exams, setExams] = useState(['retinoplastia', 'sorologia', 'psicologia'])

  return (
    <>
      <div className="box">
        <h4>escolha seus exames</h4>
        <Selector onChange={(value) => {console.log(`did select ${value}`)}} options={exams} />
      </div>

      <style jsx>{`
        .box {
          border-radius: 10px;
          background-color: #28C5CE;
        }

        button {
          border-radius: 5px;
          background-color: ${theme.colors.buttonBgColor}
          color: ${theme.colors.buttonColor}
        }
      `}</style>
    </>
  )
}