"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDrag } from "react-use-gesture"


export default function Component({ children }: any) {
  const router = useRouter()
  const pathname = usePathname()
  
  function router_push (path: string) {
    if (pathname === "/") {
      router.push(path)
    } else {
      router.push(`${path}?prev_page=${pathname.split("/")[1]}`)
    }
  }


  let height = 0;
  let width = 0;
  useEffect(()=> {
    height = window.screen.height / 8
    width = window.screen.width / 8
  }, [])
  const bind = useDrag(({ movement: [x, y] }) => {
    if (x > width) {
      router_push(
        pathname == "/"
          ? "/contacts"
          : pathname == "/about"
          ? "/"
          : pathname == "/contacts"
          ? "/contacts"
          : "/contacts"
      )
    } else if (x < width * -1) {
      router_push(
        pathname == "/"
          ? "/about"
          : pathname == "/contacts"
          ? "/"
          : pathname == "/about"
          ? "/about"
          : "/about"
      )
    } else if (y < height * -1) {
      router_push(
        pathname == "/"
          ? "/works"
          : pathname == "/articles"
          ? "/"
          : pathname == "/works"
          ? "/works"
          : "/works"
      )
    } else if (y > height) {
      router_push(
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
      className="h-[100vh] w-[100vw] flex justify-center items-center font-mono text-3xl cursor-grab"
    >
      {children}
    </div>
  )
}
