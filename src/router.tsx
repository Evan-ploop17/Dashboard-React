import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Clients from './views/clients/client'
import Layout from './layouts/Layout'
import CaseDetailContainer from './views/caseDetail'


export default function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Navigate to="/clients" replace />} />
                    <Route path='/clients' element={<Clients />} />
                    <Route path='/detail/:id' element={<CaseDetailContainer />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}