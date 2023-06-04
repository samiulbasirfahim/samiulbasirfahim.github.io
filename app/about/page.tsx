"use client"
import React from "react"
import Component from "../../components/component"
import HackText from "@/components/HackText"
import { useSpring, animated } from '@react-spring/web'
import GuideText from "@/components/GuideText"

export default function About() {
  const springs = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
  })

  return (
    <Component>
      <animated.div style={{ ...springs }}>
        <HackText text="About page" />
        <GuideText
          guideText={[
            "Swipe left for Home!",
            "Swipe up for Works!",
            "Swipe down for Articles!",
          ]}
        />
      </animated.div>
    </Component>
  )
}
