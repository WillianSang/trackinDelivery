import map from './assets/map.jpg'
import { Search } from './components/Search'

export const App = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-green-400 mt-8">
        Track your order
      </h1>
      <button className='p-3 rounded-full w-96  text-gray-200 border-none focus:outline-none placeholder-gray-400'> 
        Search By Name 
      </button> 
      <button className='p-3 rounded-full w-96 text-gray-200 border-none focus:outline-none placeholder-gray-400'> 
        Search By Product
      </button> 
      
      {/* buscador del repartidor */}
      <Search/>

      {/* imagen dinamica del mapa */}
      <div className='mt-10 flex justify-center  px-4' >
        <img src={map} className='rounded-xl' />
      </div>
    </div>
  )
}
