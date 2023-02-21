import moment from 'moment'
import { useEffect, useState } from 'react'
import Days from './Days'


export const CardsOfYear = (props) => {

    const [monthsOfYearCard, setMonthsOfYearCard] = useState(moment().locale('pt-br').month(props.month).year(props.currentYear))
    const [weeks, setWeeks] = useState([]) //forma de renderizar as semanas
    const daysOfTheWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']


    useEffect(() => {
        const initialDayOfMonthCard = monthsOfYearCard.clone().startOf('month').startOf('week') //dia início do card
        const finaDayOfMonthCard = monthsOfYearCard.clone().endOf('month').endOf('week') //dia fim do card
        const day = initialDayOfMonthCard.clone().subtract(1, 'day')

        //While para setar os sete dias da semana no calendário - clone para não afetar o valor do dia
        while (day.isBefore(finaDayOfMonthCard, 'day')) weeks.push(Array(7).fill(0).map(() => day.add(1, 'day').clone()))
    }, [monthsOfYearCard]) 

    return (
        <div className='border-2 border-radius-4xl' id='month-card'>
            <div className='text-2xl'>{monthsOfYearCard.format('MMMM')}</div>
            <div>{daysOfTheWeek.map(position =>(<div className='' key={position}>{position}</div>))}</div>
            {weeks.map((week, index) => (<div key={index}>
                {week.map(day => (<Days key={day._d.getTime() + props.month} day={day} month={props.month} year={props.currentYear} />))}
            </div>
            ))
            }
        </div>
    )
}
