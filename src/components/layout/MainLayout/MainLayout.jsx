import Header from '../Header' // Убедитесь в правильности пути
import "./MainLayout.css"

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout min-h-screen grid grid-cols-12 grid-rows-12">
      <Header />
    </div>
  )
}

export default MainLayout;