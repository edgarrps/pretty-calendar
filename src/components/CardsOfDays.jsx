import { useEffect, useState } from 'react'
import moment from 'moment'
import api from '../services/Api'

const CardsOfDays = (props) => {

  const [today, setToday] = useState('')
  const [dayBtn, setDayBtn] = useState('')
  const [holidays, setHolidays] = useState([])
  const day = props.day._d

  useEffect(() => {
    const currentMonth = new Date(props.month + ',01,' + props.year)

    if (day.getMonth() !== currentMonth.getMonth()) {
      setDayBtn('noInMonth')
      return
    }

    api.get(moment().format('YYYY')).then(({ data }) => {
      setHolidays(data)
      return (holidays.map((hday) => {
        return hday
      }))
    })
    console.log(holidays)

    const currentDay = new Date(moment().format('MM') + ',' + moment().format('DD') + ',' + moment().format('YYYY'))
    if (day.getTime() === currentDay.getTime()) {
      setToday('today')
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
    <div onClick={handleClickDate} className={`cursor-pointer select-none	font-semibold w-[27px] h-[27px] rounded-lg ${dayBtn == 'ok' ? 'bg-yellow-200' : ''} ${dayBtn === 'noInMonth' ? 'text-gray-50 cursor-not-allowed' : ''} ${today === 'today' ? 'bg-blue-200 hover:' : ''}`}>
      {props.day.format('DD').toString()}
    </div>
  )
}

export default CardsOfDays