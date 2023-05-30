"use client"

import React, { useState, ComponentProps } from "react"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import "./navi.css"

import smalllogo from "../public/images/navi/logo.svg"

const montserrat = Montserrat({
  preload: true,
  subsets: ["cyrillic"],
})

export default function Header(props: ComponentProps<"div">) {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <header
      className={`navi ${montserrat.className}`}
      style={{
        ...props.style,
      }}
    >
      {/* PC端 */}
      <div className="web">
        <Link href="/">
          <div className="logo"></div>
        </Link>
        <ul className="navi-links">
          <li className="navi-links__item1">
            <Link href="https://labs.antalpha.com/hackerhouse/" rel="same">
              Hacker House
            </Link>
            <div className="line"></div>
          </li>
          <li className="navi-links__item2">
            <Link href="https://t.me/AntalphaLabs" target="_blank">
              Join Us
            </Link>
            <div className="line"></div>
          </li>
        </ul>
      </div>
      {/* 移动端 */}
      <div className="mobile">
        <a href="/" className="mobilelogo">
          <img src={smalllogo.src}></img>
        </a>
        <div
          className="menu"
          onClick={() => setIsNavShowing((prev) => !prev)}
        />
        {isNavShowing ? (
          <ul className="navi-links">
            <li className="navi-links__item">
              <Link
                href="https://labs.antalpha.com/hackerhouse"
                target="_blank"
              >
                Hacker House Event
              </Link>
            </li>
            <li className="navi-links__item">
              <Link href="https://t.me/AntalphaLabs">Join Us</Link>
            </li>
          </ul>
        ) : (
          <></>
        )}{" "}
      </div>
    </header>
  )
}
