"use client"
import React from "react"
import Component from "../../components/component"
import { usePathname } from "next/navigation"

export default function About() {
  const pathname = usePathname()
  return (
    <Component>
      <h1>About page</h1>
    </Component>
  )
}
