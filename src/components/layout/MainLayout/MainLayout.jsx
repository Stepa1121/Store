import Header from '../Header/Header.jsx' // Убедитесь в правильности пути
import "./MainLayout.css"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-12 z-0">
      <Header />
    </div>
  )
}

export default MainLayout;