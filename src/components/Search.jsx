
import { useState } from 'react'
import dealers from '../dealers.json'
import moto from '../assets/moto.svg'

export const Search = () => {
  const [query, setQuery] = useState("hola")


  return (
    <div>
      <form className='flex justify-center mt-8 px-3' > 
        <input 
          type="text" 
          placeholder="Search..." 
          className='p-3 rounded-full w-96 text-gray-600 border-none focus:outline-none placeholder-gray-400' 
          onChange={(e) => setQuery(e.target.value)}/>
      </form>

      <ul className='mt-8'>
        {
          dealers.filter(user => user.name.toLowerCase().includes(query)).map(options => (
            <li 
              key={options.id} 
              className = 'text-white text-center p-1 bg-slate-800 m-2 rounded-full px-4 cursor-pointer' > 
            <div className='flex place-items-center justify-between '>
              {options.name}  
              <div className='w-7'>
                <img src={moto} />
              </div>
            </div>
            </li>
          ))
        }
      </ul>

    </div>
  )
}
