import { useEffect, useState } from "react"

const CardsOfDays = (props) => {
  const [dayBtn, setDayBtn] = useState('')
  const day = props.day._d

  useEffect(() => {
    const currentMonth = new Date(props.month + ',01,' + props.year)

    day.getMonth() !== currentMonth.getMonth() ? setDayBtn('noInMonth') : ''
  })

  const handleClickDate = () => {
    (dayBtn == '') ? setDayBtn('ok') : setDayBtn('')
  }


  return (
    <div onClick={handleClickDate} className={`cursor-pointer select-none	font-semibold w-[27px] h-[27px] rounded-lg ${dayBtn == 'ok' ? 'bg-yellow-200' : ''} ${dayBtn === 'noInMonth' ? 'text-gray-50 cursor-default' : ''}`}> {props.day.format('DD').toString()}</div>
  )
}

export default CardsOfDays