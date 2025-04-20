import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Clients from './views/clients/client'
export default function AppRouter() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/clients' element={<Clients />} />
            </Routes>
        </BrowserRouter>
    )
}