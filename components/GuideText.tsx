import { motion } from "framer-motion"

export default function GuideText({ guideText }: { guideText: string[] }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {guideText.map((text, index) => (
        <motion.h1
          key={index}
          className="fixed text-gray-700 bottom-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            repeatDelay: guideText.length * 5 - 5,
            delay: index * 5,
          }}
        >
          {text}
        </motion.h1>
      ))}
    </div>
  )
}
