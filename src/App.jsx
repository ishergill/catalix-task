
import './App.css'
import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard'

function App() {

  return (
    <section className='mainPage'>
      
      {/* Side Navigation Panel */}
      
      <Sidebar />

      {/* Dashboard Panel */}

      <Dashboard />
      
    </section>
  )
}

export default App;
