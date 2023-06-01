"use client"
import React from "react"
import Component from "../../components/component"
import { usePathname } from "next/navigation"

export default function Works() {
  const pathname = usePathname()
  return (
    <Component>
      <h1>Works page</h1>
    </Component>
  )
}
