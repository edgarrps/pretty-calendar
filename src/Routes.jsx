import {Routes, Route} from 'react-router-dom'
import Calendar from './pages/Calendar'

export default () => {
    return (
        <>
        <Routes>
           <Route exact path='/' element={<Calendar />}/> 
        </Routes>
        </>
    )
}