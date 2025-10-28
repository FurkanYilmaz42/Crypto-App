import { Moon, Star, Sun, TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/theme-context.jsx';

const Header = () => {

  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container">
        <div className='flex justify-between items-center py-4'>
         {/* logo */}
         <div className="flex items-center space-x-3">
          <div className='bg-blue-600 p-2 rounded-l'>
            <TrendingUp className='text-gray-100'/>
          </div>
          <div>
            <h1 className='text-xl font-bold text-gray-900 dark:text-white'>Udemig Tracker</h1>
            <p className='text-xs text-gray-500 dark:text-gray-400'>Kripto para takip sistemi</p>
          </div>
         </div>
        
          {/* Iconlar */}
          <div className='flex items-center space-x-4'>
            {/* Favoriler */}
            <button className='flex items-center space-x-2 text-gray-600 dark:text-gray-300'>
              <Star className='size-5'/>
              <span className='text-sm'>1</span> 

            </button>
            {/* Tema butonu */}
            <button onClick={toggleTheme} className='p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-700 dark:hover:bg-gray-600'>
               {isDarkMode ? <Sun className='size-5 text-yellow-500'/> : <Moon className='size-5 text-gray-400'/>}
            </button>

            {/* Canli */}
            <div className='flex items-center space-x-2'>
              <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
              <span className='text-xs text-gray-500 dark:text-gray-400'>Canli</span>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header