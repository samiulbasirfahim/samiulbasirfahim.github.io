"use client"

import { usePathname, useRouter } from "next/navigation"
import { useDrag } from "react-use-gesture"

export default function Component({ children }: any) {
  const router = useRouter()
  const pathname = usePathname()
  const bind = useDrag(({ movement: [x, y] }) => {
    console.log(pathname)
    if (x > 300) {
      router.push(
        pathname == "/"
          ? "/contacts"
          : pathname == "/about"
          ? "/"
          : pathname == "/contacts"
          ? "/contacts"
          : "/contacts"
      )
    } else if (x < -300) {
      router.push(
        pathname == "/"
          ? "/about"
          : pathname == "/contacts"
          ? "/"
          : pathname == "/about"
          ? "/about"
          : "/about"
      )
    } else if (y < -300) {
      router.push(
        pathname == "/"
          ? "/works"
          : pathname == "/articles"
          ? "/"
          : pathname == "/works"
          ? "/works"
          : "/works"
      )
    } else if (y > 300) {
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
    <div {...bind()} className="h-[100vh] w-[100vw] flex justify-center items-center font-mono text-3xl">
      {children}
    </div>
  )
}
