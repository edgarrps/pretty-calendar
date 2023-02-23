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
            <h1 className='text-4xl text-center pb-4'>{moment().format('YYYY')}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 h-screen w-full place-items-center'> {/* Posicionamento dos meses */}
                {monthX.map(value => (<CardsOfYear key={value} month={value} currentYear={currentYear} />))}
            </div>
        </div>
    )
}

export default Calendar