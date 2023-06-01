"use client"
import React from "react"
import Component from "../../components/component"
import { usePathname } from "next/navigation"

export default function Contact() {
  const pathname = usePathname()
  return (
    <Component>
      <h1>Contact page</h1>
    </Component>
  )
}
