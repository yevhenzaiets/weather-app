import './App.css'
import Date from './Components/Date/Date'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className='container'>
      <Header/>
      <section className='weather-data'>
        <Date/>
      </section>
    </div>
  )
}

export default App
