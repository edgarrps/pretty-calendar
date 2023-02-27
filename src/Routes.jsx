import {Routes, Route} from 'react-router-dom'
import Holiday from './components/Holiday'
import Calendar from './pages/Calendar'

export default () => {
    return (
        <>
        <Routes>
           <Route exact path='/' element={<Calendar />}/> 
           <Route exact path='/holidays' element={<Holiday />}/>
        </Routes>
        </>
    )
}