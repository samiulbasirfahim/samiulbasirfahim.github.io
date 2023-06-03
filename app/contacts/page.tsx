"use client"
import React from "react"
import Component from "../../components/component"
import HackText from "@/components/HackText"
import { useSpring, animated } from '@react-spring/web'


export default function Contact() {
  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  })
  return (
    <Component>
      <animated.div style={{ ...springs }}>
        <HackText text="Contact page" />
      </animated.div>
    </Component>
  )
}
