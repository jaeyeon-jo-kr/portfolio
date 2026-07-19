import { AppShell, Button, Group, MantineProvider, Tabs } from '@mantine/core'
import './App.css'
import { useState } from 'react'
import Profile from './profile/Profile'

const App = () => {

  return (
    <MantineProvider>
    <AppShell header={{height:60}}>
      <AppShell.Header>
        
      </AppShell.Header>
      <AppShell.Navbar>

      </AppShell.Navbar>
      <AppShell.Main>
        <Tabs color="teal" defaultValue="profile">
          <Tabs.List>
            <Tabs.Tab value="Profile" color="blue">
              Profile
            </Tabs.Tab>
            <Tabs.Tab value="Portfolio" color="blue">
              Portfolio
            </Tabs.Tab>
            <Tabs.Tab value="Contact">
              Contact
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="Profile">
            <Profile></Profile>
          </Tabs.Panel>
          <Tabs.Panel value="Portfolio">
            <div>Portfolio</div>
          </Tabs.Panel>
          <Tabs.Panel value="Contact">
            <div>Contact</div>
          </Tabs.Panel>
        </Tabs>
      </AppShell.Main>
    </AppShell>
    </MantineProvider>
  )
}

export default App
