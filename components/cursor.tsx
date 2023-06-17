import { useEffect, useRef, useState } from "react"

export default function Cursor() {
  const [mousePositionX, setMousePositionX] = useState<number>(0)
  const [mousePositionY, setMousePositionY] = useState<number>(0)
  const [circleHeight, setCircleHeight] = useState(0)
  const [circleWidth, setCircleWidth] = useState(0)
  const ref = useRef<any>()
  const setMousePostion = (e: any) => {
    setMousePositionX(e?.clientX as number)
    setMousePositionY(e?.clientY as number)
  }
  useEffect(() => {
    window.addEventListener("mousemove", setMousePostion)
    return () => {
      window.addEventListener("mousemove", setMousePostion)
    }
  }, [])
  useEffect(() => {
    setCircleHeight(ref.current.clientHeight)
    setCircleWidth(ref.current.clientWidth)
  })
  return (
    <div>
      <div
        className="top-0 left-0 fixed rounded-full bg-gray-600 pointer-events-none w-[0.6rem] h-[0.6rem] transform-gpu"
        style={{
          transform: `translate(${mousePositionX}px,${mousePositionY}px)`,
        }}
      />
      <div
        ref={ref}
        className="top-0 left-0 fixed rounded-full border-gray-600 border-[3px] pointer-events-none w-[5rem] h-[5rem] ease-linear transition-transform duration-200 delay-0 transform-gpu"
        style={{
          transform: `translate(${mousePositionX - circleWidth / 2}px,${
            mousePositionY - circleHeight / 2
          }px)`,
        }}
      />
    </div>
  )
}
