import { AppShell, Button, Group, MantineProvider } from '@mantine/core'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [menuSelected, setMenuSelected] = useState('')
  const getContent = () => {
    if(menuSelected === 'Profile'){
      return (<div>Profile</div>)
    }else if(menuSelected === 'Portfolio'){
      return (<div>Portfolio</div>)
    }else if(menuSelected === 'Contact'){
      return (<div>Contact</div>)
    }
    return (<></>)
  }

  return (
    <MantineProvider>
    <AppShell header={{height:60}}>
      <AppShell.Header>
        <Group>
          <Button onClick={()=>setMenuSelected('Profile')}>
            Profile
          </Button>
          <Button onClick={()=>setMenuSelected('Portfolio')}>
            Portfolio
          </Button>
          <Button onClick={()=>setMenuSelected('Contact')}>
            Contact
          </Button>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>

      </AppShell.Navbar>
      <AppShell.Main>
        {
          getContent()
        }
      </AppShell.Main>
    </AppShell>
    </MantineProvider>
  )
}

export default App
