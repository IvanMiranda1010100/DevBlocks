import '../index.css';
import { HeaderPage } from '@Components/Navegation/Header';
import { Footer } from '@Components/Footer';

export const PageLayout = ({ children }) => {
  return (
    <>
      <HeaderPage />
      <main className='min-h-screen bg-[#AAD576] dark:bg-[#1A4301] mt-[60px] transition-colors duration-300 ease-in-out '>
        {children}
      </main>
      <Footer />
    </>
  );
};

