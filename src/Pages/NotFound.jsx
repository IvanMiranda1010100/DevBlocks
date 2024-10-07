import {Link} from 'react-router-dom'

export const NotFound = () => {

  const HandleClick = () => {
    window.history.back()
  }

  return(
    <main className="min-h-screen grid bg-[#AAD576] dark:bg-[#143601]">
      <header className="flex justify-center items-center flex-col">
      <h2 className="text-8xl">Not Found</h2>
      <Link onClick={HandleClick} className='mt-3 text-xl'>° Volver hacia atras</Link> 
      <Link to={'/'} className='text-xl'>° Regresar al inicio</Link> 
      </header>
    </main>
  )
}