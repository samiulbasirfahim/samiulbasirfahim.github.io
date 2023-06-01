"use client"
import React from "react"
import Component from "../../components/component"
import { usePathname } from "next/navigation"

export default function Article() {
  const pathname = usePathname()
  return (
    <Component>
      <h1>Articles page</h1>
    </Component>
  )
}
