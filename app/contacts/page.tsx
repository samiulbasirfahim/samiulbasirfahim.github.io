"use client"
import React from "react"
import Component from "../../components/component"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Contact() {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="sync">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={2}
      >
        <motion.div
          key={pathname}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={2}
        >
          <div className="bg-gray-400 h-[100vh] w-[100vw]">
            <Component>
              <h1>Contact page</h1>
            </Component>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
