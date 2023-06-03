"use client"
import React from "react"
import Component from "../../components/component"
import { useSpring, animated } from '@react-spring/web'
import HackText from "@/components/HackText"

export default function Works() {
  const springs = useSpring({
    from: { y: 1000 },
    to: { y: 0 },
  })
  return (
    <Component>
      <animated.div style={{ ...springs }}>
        <HackText text="Works page" />
      </animated.div>
    </Component>
  )
}
