import { useState } from 'react'
import moment from 'moment'


export default Calendar = () => {
    const [currentYear, setCurrentYear] = useState()

    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    moment.updateLocale('pt', {
        months: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ]
    })

    return (
        <div className='text-center text-gray-400 text-4xl'>Hello World</div>
    )
}
