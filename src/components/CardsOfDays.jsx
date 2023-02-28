import { useEffect, useState } from 'react'
import moment from 'moment'
import api from '../services/Api'

const CardsOfDays = (props) => {
  const [today, setToday] = useState('')
  const [dayBtn, setDayBtn] = useState('')
  const day = props.day._d
  // const [holidays, setHolidays] = useState([])
  // const [hday, setHday] = useState('')
  // const [checkHolidays, setCheckHolidays] = useState([])

  useEffect(() => {
    // api.get(moment().format('YYYY')).then(({ data }) => {
    //   setHolidays(data.map(hday => hday.date))
    //   return holidays
    // })

    const currentMonth = new Date(props.month + ',01,' + props.year)
    if (day.getMonth() !== currentMonth.getMonth()) {
      setDayBtn('noInMonth')
      return
    }

    const currentDay = new Date(moment().format('MM/DD/YYYY'))
    if (day.getTime() === currentDay.getTime()) {
      setToday('today')
    }

    // holidays.filter(hday => new Date(moment(hday, 'YYYY-MM-DD').format('MM/DD/YYYY')).getTime()) === day.getTime()
    // setX('hday')
    // setCheckHolidays([...checkHolidays, day])

    props.checkDate.find((value) => value.getTime() === day.getTime()) ? setDayBtn('ok') : setDayBtn('')
  }, [[day, holidays, checkHolidays, props.checkDate, props.month, props.year]])

  const handleClickDate = () => {
    if (dayBtn !== 'noInMonth')
      if (props.checkDate.find((value) => value.getTime() === day.getTime())) {
        setDayBtn('')
        props.setCheckDate(props.checkDate.filter((value) => value.getTime() !== day.getTime()))
      } else {
        setDayBtn('ok')
        props.setCheckDate([...props.checkDate, day])
      }
  }

  return (
    <div onClick={handleClickDate} className={`cursor-pointer select-none	font-semibold w-[27px] h-[27px] rounded-lg ${dayBtn == 'ok' ? 'bg-yellow-200' : ''} ${dayBtn === 'noInMonth' ? 'text-gray-50 cursor-not-allowed' : ''} ${today === 'today' ? 'bg-blue-200' : ''} ${hday === 'hday' ? 'bg-green-200' : ''}`}>
      {props.day.format('DD').toString()}
    </div>
  )
}

export default CardsOfDays