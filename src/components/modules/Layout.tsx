import React, {FC} from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const Layout: FC = () => {
  return <>
  <Header />
  <main>
    <Outlet/>
  </main>
  <footer>
    <div> Created with love</div>
  </footer>
  </>
}