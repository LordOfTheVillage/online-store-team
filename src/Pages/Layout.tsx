import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout () {
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