import {Navbar} from '@Components/Navegation/Navbar'
import ThemeToggleButton from '../Theme/Theme'

export const HeaderPage = () => {
  return(
    <>
      <Navbar>
        <ThemeToggleButton/>
      </Navbar>
    </>
  )
}