"use client"
import React from "react"
import Component from "../components/component"
import { usePathname } from "next/navigation"

export default function App() {
  const pathname = usePathname()
  let i = 0;
  return (
    <Component>
      <h1>Home page</h1>
    </Component>
  )
}
