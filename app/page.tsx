"use client"
import React from "react"
import Component from "../components/component"
import HackText from "@/components/HackText"
import { useSearchParams } from "next/navigation"
import { animated, useSpring } from "react-spring"
import GuideText from "@/components/GuideText"

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
        <GuideText
          guideText={[
            "Swipe left for Contacts!",
            "Swipe right for About!",
            "Swipe up for Works!",
            "Swipe down for Articles!",
          ]}
        />
      </animated.div>
    </Component>
  )
}
