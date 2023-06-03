"use client"
import React from "react"
import Component from "../../components/component"
import { usePathname } from "next/navigation"
import HackText from "@/components/HackText"

export default function Works() {
  return (
    <Component>
      <HackText text="Works page" />
    </Component>
  )
}
