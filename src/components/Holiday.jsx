import api from '../services/Api'

export default function Holiday(props) {
    api.get().then(({ data }) => {
        props.setHolidays(data)
        console.log(props.holidays)
    })
    return (Holiday)
}

