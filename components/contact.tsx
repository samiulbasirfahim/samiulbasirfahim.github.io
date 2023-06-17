import {
  TbBrandGithub,
  TbBrandFacebook,
  TbBrandDiscord,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb"

export default function Contact() {
  return (
    <div className="fixed bottom-0 left-10 flex flex-col items-center gap-4 z-20">
      <a
        className="animate-bounce cursor-pointer"
        href="https://github.com/samiulbasirfahim"
        target="_blank"
      >
        <TbBrandGithub className="text-gray-400" size="0.8em" />
      </a>
      <a
        className="animate-bounce cursor-pointer"
        href="https://facebook.com/samiulbasirfahim"
        target="_blank"
      >
        <TbBrandFacebook className="text-gray-400" size="0.8em" />
      </a>
      <a className="animate-bounce cursor-pointer" href="" target="_blank">
        <TbBrandDiscord className="text-gray-400" size="0.8em" />
      </a>
      <a className="animate-bounce cursor-pointer" href="" target="_blank">
        <TbBrandLinkedin className="text-gray-400" size="0.8em" />
      </a>
      <a
        className="animate-bounce cursor-pointer"
        href="https://github.com/samiulbasirfahim"
        target="_blank"
      >
        <TbBrandTwitter className="text-gray-400" size="0.8em" />
      </a>
      <div className="w-[1px] bg-gray-400 h-20" />
    </div>
  )
}
