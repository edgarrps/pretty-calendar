import { useEffect, useState } from 'react'
import api from '../services/Api'
import moment from 'moment'

export default function Holiday() {
    const [holidays, setHolidays] = useState([])

    useEffect(() => {
        api.get(moment().format('YYYY')).then(({ data }) => {
            setHolidays(data)
        })
    }, [])
    
    return (
        <div>
            {holidays.map((holiday, key) => (
                    <h2 key={key}>
                        - {holiday.name}: {holiday.date}
                        <></>
                    </h2>
            ))}
        </div>
    )
}

