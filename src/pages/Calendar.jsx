import { useState } from 'react'
import { CardsOfYear } from '../components/CardsOfYear'
import moment from 'moment'

const Calendar = () => {

    const [currentYear, setCurrentYear] = useState(moment().format('YYYY'))

    const monthX = ['January','February','March','April','May','June',
        'July','August','September','October','November','December']

    moment.updateLocale('Brasil sil sil', { months: ['JAN','FEV','MAR','ABR',
    'MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ']})


    return (
        <div>
            <h1 className='text-4xl text-center'>{moment().format('YYYY')}</h1>
            <div className='grid-cols-[16rem_calc(100vw-16rem)]'></div>
            <div className='border-2'>
                {monthX.map(value => (<CardsOfYear key={value} month={value} currentYear={currentYear} />))}
            </div>
        </div>
    )
}

export default Calendar