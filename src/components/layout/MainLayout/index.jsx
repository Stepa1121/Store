import { Outlet } from "react-router-dom"; // Добавьте этот импорт
import Header from '../Header' // Убедитесь в правильности пути
import "@assets/styles/globals.css"
import "./MainLayout.css"

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout min-h-screen grid grid-cols-12 grid-rows-12">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout;