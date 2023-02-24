import { useState } from 'react'
import { CardsOfYear } from '../components/CardsOfYear'
import moment from 'moment'

const Calendar = () => {

    const [currentYear, setCurrentYear] = useState(moment().format('YYYY'))

    const monthX = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']

    moment.updateLocale('pt-br', {
        months: ['JAN', 'FEV', 'MAR', 'ABR',
            'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
    })


    return (
        <div className='grid sm:grid-cols-1 flex'>
            <div className='grid grid-cols-3 w-screen flex justify-content align-items shadow-purple-100 border pt-2 shadow-lg'>
                <button onClick={() => setCurrentYear(currentYear - 1)} className='text-4xl text-gray-400 transition duration-150 ease-out hover:ease-in hover:text-gray-300'> ← </button>
                <h1 className='text-4xl font-bold text-gray-400 text-center pb-4'>{currentYear}</h1>
                <button onClick={() => setCurrentYear(currentYear + 1)} className='text-4xl text-gray-400 transition duration-150 ease-out hover:ease-in hover:text-gray-300'> → </button>
            </div>
            <div className='pb-10' />
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center h-screen w-full'> {/* Posicionamento dos meses */}
                {monthX.map(value => (<CardsOfYear key={value} month={value} currentYear={currentYear} />))}
            </div>
        </div>
    )
}

export default Calendar