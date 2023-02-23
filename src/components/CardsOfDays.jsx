import { useState } from "react"

const CardsOfDays = (props) => {
  const [dayBtn, setDayBtn] = useState('')

  const handleClickDate = () => {
    ((dayBtn === '') ? setDayBtn('select') : ('select' ? setDayBtn('') : ''))
    }
  

  return (
    <div onClick={handleClickDate} className='font-semibold'>{props.day.format('DD').toString()}</div>
  )
}

export default CardsOfDays