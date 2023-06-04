"use client"
import React from "react"
import Component from "../../components/component"
import { useSpring, animated } from '@react-spring/web'
import HackText from "@/components/HackText"
import GuideText from "@/components/GuideText"

export default function Works() {
  const springs = useSpring({
    from: { y: 1000 },
    to: { y: 0 },
  })
  return (
    <Component>
      <animated.div style={{ ...springs }}>
        <HackText text="Works page" />
        <GuideText
          guideText={[
            "Swipe left for Contacts!",
            "Swipe right for About!",
            "Swipe down for Home!",
          ]}
        />
      </animated.div>
    </Component>
  )
}
