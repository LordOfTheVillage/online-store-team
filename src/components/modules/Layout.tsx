import React, {FC} from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: FC = () => {
  return <>
  <Header />
  <main>
    <Outlet/>
  </main>
  <Footer/>
  </>
}