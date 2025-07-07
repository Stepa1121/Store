import Header from '../Header/Header.jsx' // Убедитесь в правильности пути
import "./MainLayout.css"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-12 grid-rows-12 z-0">
      <Header />
      <main className="col-span-12 row-span-11 row-start-2">
        {children}
      </main>
    </div>
  )
}

export default MainLayout;