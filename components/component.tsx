"use client"

import { usePathname, useRouter } from "next/navigation"
import { useDrag } from "react-use-gesture"

export default function Component({ children }: any) {
  const router = useRouter()
  const pathname = usePathname()
  const height = screen.height / 6
  const width = screen.width / 6
  const bind = useDrag(({ movement: [x, y] }) => {
    if (x > width) {
      router.push(
        pathname == "/"
          ? "/contacts"
          : pathname == "/about"
          ? "/"
          : pathname == "/contacts"
          ? "/contacts"
          : "/contacts"
      )
    } else if (x < width * -1) {
      router.push(
        pathname == "/"
          ? "/about"
          : pathname == "/contacts"
          ? "/"
          : pathname == "/about"
          ? "/about"
          : "/about"
      )
    } else if (y < height * -1) {
      router.push(
        pathname == "/"
          ? "/works"
          : pathname == "/articles"
          ? "/"
          : pathname == "/works"
          ? "/works"
          : "/works"
      )
    } else if (y > height) {
      router.push(
        pathname == "/"
          ? "/articles"
          : pathname == "/works"
          ? "/"
          : pathname == "/articles"
          ? "/articles"
          : "/articles"
      )
    }
  })

  return (
    <div
      {...bind()}
      className="h-[100vh] w-[100vw] flex justify-center items-center font-mono text-3xl"
    >
      {children}
    </div>
  )
}
