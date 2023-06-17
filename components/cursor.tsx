import { useEffect, useState } from "react"
import "./cursor.css"

export default function Cursor() {
  const [mousePositionX, setMousePositionX] = useState<number>(0)
  const [mousePositionY, setMousePositionY] = useState<number>(0)
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
  return (
    <div>
      <div
        id="cursor"
        className="top-0 left-0 transform-gpu"
        style={{
          transform: `translate(${mousePositionX}px,${mousePositionY}px)`,
        }}
      />
    </div>
  )
}
