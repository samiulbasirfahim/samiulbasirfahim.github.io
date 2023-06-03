"use client"
import React from "react"
import Component from "../../components/component"
import { usePathname } from "next/navigation"
import HackText from "@/components/HackText"

export default function Contact() {
  const pathname = usePathname()
  return (
    <Component>
      <HackText text="Contact page" />
    </Component>
  )
}
