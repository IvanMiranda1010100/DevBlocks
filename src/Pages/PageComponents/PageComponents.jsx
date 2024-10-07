import { PageLayout } from '@Layouts/Page.jsx'
import { Sidebar } from './Components/Sidebar'
import { DocsMain } from './Components/Main'

function PageComponents() {

  return (
    <>
    <PageLayout>
      <Sidebar>
        <DocsMain/>
      </Sidebar>
    </PageLayout>
    </>
  )
}

export default PageComponents
