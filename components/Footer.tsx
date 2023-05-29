import React from "react"
import Button from "./Button"
import Link from "next/link"
import Card from "./Card"
import CircleBackground from "./CircleBackground"
import { Inter } from "next/font/google"
import cx from "clsx"

export default function Footer() {
  return (
    <footer className="bg-[#A3F7F7] py-32 px-12 relative overflow-hidden">
      <Card className="rounded-2xl bg-white flex flex-col justify-center items-center z-10">
        <div className="flex flex-col gap-8 items-center">
          <p className="font-medium text-secondary-black">
            Get Involved with the future of ZKML today!
          </p>

          <h1 className="font-bold text-6xl max-w-2xl text-center">
            We seek for all brains focusing ZKML
          </h1>

          <Button className={cx("bg-[#F0C5FF] text-secondary-black uppercase")}>
            Apply to Hack {"->"}
          </Button>

          <Link
            href="https://t.me/AntalphaLabs"
            target="_blank"
            className="underline tracking-widest"
          >
            or contact us at telegram
          </Link>
        </div>
      </Card>

      {/* <div className="absolute z-0 top-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2"> */}
      <CircleBackground className="animate-spin-slow absolute z-0 top-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2" />
      {/* </div> */}
    </footer>
  )
}
