"use client"
import React from "react"
import Component from "../../components/component"
import { usePathname } from "next/navigation"
import HackText from "@/components/HackText"

export default function Article() {
  const pathname = usePathname()
  return (
    <Component>
      <HackText text="Article page" />
    </Component>
  )
}
