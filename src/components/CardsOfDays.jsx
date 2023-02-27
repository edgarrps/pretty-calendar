import { useEffect, useState } from 'react'
import moment from 'moment'
import Holiday from './Holiday'

const CardsOfDays = (props) => {
  const [currentDay, setCurrentDay] = useState(new Date(moment().format('MM') + ',' + moment().format('DD') + ',' + moment().format('YYYY')))
  const [dayBtn, setDayBtn] = useState('')
  const day = props.day._d

  useEffect(() => {
    const currentMonth = new Date(props.month + ',01,' + props.year)
    if (day.getMonth() !== currentMonth.getMonth()) {
      setDayBtn('noInMonth')
      return
    }

    if (day.getTime() === currentDay.getTime()) {
      setCurrentDay('today')
      return
    }

    props.checkDate.find((value) => value.getTime() === day.getTime()) ? setDayBtn('ok') : setDayBtn('')
  }, [])

  const handleClickDate = () => {
    if (dayBtn !== 'noInMonth')
      if (props.checkDate.find((value) => value.getTime() === day.getTime())) {
        setDayBtn('')
        props.setCheckDate(
          props.checkDate.filter(
            (value) => value.getTime() !== day.getTime()
          )
        )
      } else {
        setDayBtn('ok')
        props.setCheckDate([...props.checkDate, day])
      }
  }


  return (
    <div onClick={handleClickDate} className={`cursor-pointer select-none	font-semibold w-[27px] h-[27px] rounded-lg ${dayBtn == 'ok' ? 'bg-yellow-200' : ''} ${dayBtn === 'noInMonth' ? 'text-gray-50 cursor-not-allowed' : ''} ${currentDay === 'today' ? 'bg-blue-200 hover:' : ''}`}> {props.day.format('DD').toString()}
    </div>
  )
}

export default CardsOfDays