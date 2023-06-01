"use client"
import React from "react"
import Component from "../components/component"
import { usePathname } from "next/navigation"
import HackText from "@/components/HackText"

export default function App() {
  const pathname = usePathname()
  let i = 0;
  return (
    <Component>
      <HackText text={"FAHIM"}/>
    </Component>
  )
}
