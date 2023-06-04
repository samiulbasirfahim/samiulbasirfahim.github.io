"use client"
import React from "react"
import Component from "../../components/component"
import HackText from "@/components/HackText"
import { useSpring, animated } from "@react-spring/web"
import GuideText from "@/components/GuideText"

export default function Article() {
  const springs = useSpring({
    from: { y: -1000 },
    to: { y: 0 },
  })
  return (
    <Component>
      <animated.div style={{ ...springs }}>
        <HackText text="Article page" />
        <GuideText
          guideText={[
            "Swipe left for Contacts!",
            "Swipe right for About!",
            "Swipe up for Home!",
          ]}
        />
      </animated.div>
    </Component>
  )
}
