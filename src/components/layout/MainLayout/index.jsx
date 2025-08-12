import { Outlet } from "react-router-dom"; // Добавьте этот импорт
import Header from '../Header' // Убедитесь в правильности пути
import "@assets/styles/globals.css"
import "./mainLayout.css"

const MainLayout = () => {
  return (
    <div className="main-layout-container min-h-screen flex flex-col">
      <header className="flex justify-start">
        <Header />
      </header>
      <main className="flex-1 overflow-y-auto grid grid-cols-12 grid-rows-12">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout;