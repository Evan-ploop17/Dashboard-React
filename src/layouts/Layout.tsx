import Header from "@/components/molecules/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="bg-gray-100 h-screen">
        <Header />
        <main className="container mx-auto py-16 shadow-md rounded-lg bg-white">
            <Outlet />
        </main>
    </div>
  )
}

export default Layout