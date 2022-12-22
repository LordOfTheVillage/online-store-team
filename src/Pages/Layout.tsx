import React, {FC} from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => {
  return <>
  <header>
    <div>This is header</div>
  </header>
  <main>
    <Outlet/>
  </main>
  <footer>
    <div> Created with love</div>
  </footer>
  </>
}