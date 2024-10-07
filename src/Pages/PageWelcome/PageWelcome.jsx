import '../../index.css'
import { PageLayout } from '@Layouts/Page.jsx'
import {SectionInitial} from './Sections/SectionInitial.jsx'
import {SectionComponents} from './Sections/SectionComponents.jsx'
import {SectionFinal} from './Sections/SectionFinal.jsx'
import { Compatibility } from './Components/Compatibility.jsx'

function PageWelcome() {

  return (
    <>
    <PageLayout>
      <div className='py-5 p-2'>
          <SectionInitial/>
          <Compatibility/>
          <SectionComponents/>
          <SectionFinal/>
      </div>
    </PageLayout>
    </>
  )
}

export default PageWelcome
