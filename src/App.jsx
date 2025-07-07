import MainLayout from './components/layout/MainLayout/MainLayout.jsx'
import '@assets/styles/globals.css';

const App = () => {
  return (
    <MainLayout>
      {/* Добавим тестовый контент */}
      <div className="col-span-12 bg-green-100 p-8 text-center">
        <h1 className="text-3xl font-bold">Основной контент</h1>
        <p>Сетка работает!</p>
      </div>
    </MainLayout>
  )
}

export default App;