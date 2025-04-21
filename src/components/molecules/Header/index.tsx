import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <NavLink
                            to="/clients"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-400 text-purple-900 hover:bg-purple-300 py-2 px-4 rounded-lg font-medium"
                                    : ""
                            }
                        >
                            Clients
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header