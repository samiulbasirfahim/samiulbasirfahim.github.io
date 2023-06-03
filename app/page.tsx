"use client"
import React from "react"
import Component from "../components/component"
import HackText from "@/components/HackText"
import { useSearchParams } from "next/navigation"
import { animated, useSpring } from "react-spring"

export default function App() {
  const prev_page: string = useSearchParams().get("prev_page") as string
  let springs: any = useSpring({
    from: {
      x: prev_page === "about" ? -1000 : prev_page === "contacts" ? 1000 : 0,
      y: prev_page === "works" ? -1000 : prev_page === "articles" ? 1000: 0,
    },
    to: {
      x: 0,
      y: 0
    },
  })

  return (
    <Component>
      <animated.div style={{ ...springs }} className="app">
        <HackText text={"FAHIM"} />
      </animated.div>

    </Component>
  )
}
