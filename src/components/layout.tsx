"use client";

import Background from "../assets/BackGround.png";
import Draggable, { DraggableData } from "react-draggable";
import Image from "next/image";
import Link from "next/link";
import VsCode from "../assets/vscode.png";
import {
  Box,
  Bug,
  ChevronsUpDown,
  FileJson,
  Files,
  GitFork,
  Minus,
  MoreHorizontal,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";
import { File } from "../components/File";
import { Folder } from "../components/Folder";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleDrag = ({ x, y }: DraggableData) => {
    setPos({ x: x, y: y });
  };

  const handleMouseDown = () => {
    setPos({ x: 0, y: 0 });
  };
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Image
          src={Background}
          alt=""
          fill={true}
          quality={80}
          className="object-cover"
        />
        <div
          className="relative h-screen flex overflow-clip"
          style={{ padding: maximize ? "0px" : "25px" }}
        >
          <div
            className="absolute m-1 text-white items-center justify-center flex-col flex cursor-pointer"
            onClick={() => setMinimize(!minimize)}
          >
            <Image src={VsCode} alt="" className="w-14" />
            <p>Visual Studio...</p>
          </div>
          <Draggable
            disabled={maximize ? true : false}
            onDrag={(e, data) => handleDrag(data)}
            position={pos}
          >
            <div
              className="bg-[#232135] aspect-video shadow-md w-full overflow-clip z-50"
              style={{
                display: minimize ? "none" : "block",
                maxWidth: maximize ? "none" : "1490px",
                borderRadius: maximize ? "0px" : "8px",
              }}
            >
              <div className="flex-row flex-1 flex items-center pl-3 pt-1">
                <div className="flex justify-between w-14">
                  <div
                    className="w-3 h-3 bg-red-400 hover:bg-red-500 rounded-full cursor-pointer"
                    onClick={() => setMinimize(!minimize)}
                  >
                    <X size={12} color="black" />
                  </div>
                  <div
                    className="w-3 h-3 bg-yellow-400 hover:bg-yellow-500 rounded-full cursor-pointer"
                    onClick={() => setMinimize(!minimize)}
                  >
                    <Minus size={12} color="black" />
                  </div>
                  <div className="w-3 h-3 bg-green-400 hover:bg-green-500 rounded-full cursor-pointer">
                    <ChevronsUpDown
                      size={12}
                      color="black"
                      className="rotate-45"
                      onClick={() => {
                        handleMouseDown();
                        setMaximize(!maximize);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-1 justify-center items-center">
                  <h1 className="text-[#908caa] text-sm">
                    Portfolio — caio.dev
                  </h1>
                </div>
              </div>
              <div className="flex flex-1 h-full">
                <div className="flex-col flex">
                  <div className="">
                    <Link
                      href={"/"}
                      className="border-l-2 border-white p-2 flex mt-2"
                    >
                      <Files size={28} className="stroke-white stroke-1" />
                    </Link>
                    <Link
                      href={"/"}
                      className="border-l-2 border-transparent p-2 flex mt-2"
                    >
                      <Search
                        size={28}
                        className="stroke-[#908caa] hover:stroke-white stroke-1"
                      />
                    </Link>
                    <Link
                      href={"/"}
                      className="border-l-2 border-transparent p-2 flex mt-2"
                    >
                      <GitFork
                        size={28}
                        className="stroke-[#908caa] hover:stroke-white stroke-1"
                      />
                    </Link>
                    <Link
                      href={"/"}
                      className="border-l-2 border-transparent p-2 flex mt-2"
                    >
                      <Bug
                        size={28}
                        className="stroke-[#908caa] hover:stroke-white stroke-1"
                      />
                    </Link>
                    <Link
                      href={"/"}
                      className="border-l-2 border-transparent p-2 flex mt-2"
                    >
                      <Box
                        size={28}
                        className="stroke-[#908caa] hover:stroke-white stroke-1"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"/"}
                      className="border-l-2 border-transparent p-2 flex mt-2"
                    >
                      <User
                        size={28}
                        className="stroke-[#908caa] hover:stroke-white stroke-1"
                      />
                    </Link>
                    <Link
                      href={"/"}
                      className="border-l-2 border-transparent p-2 flex mt-2"
                    >
                      <Settings
                        size={28}
                        className="stroke-[#908caa] hover:stroke-white stroke-1"
                      />
                    </Link>
                  </div>
                </div>
                <div className="pl-1 pt-2 w-64">
                  <div className="flex flex-1 justify-between items-center p-2">
                    <h1 className="text-[#908caa] text-xs">EXPLORER</h1>
                    <MoreHorizontal size={20} color={"#908caa"} />
                  </div>
                  <div>
                    <Folder title="Visual Studio Code" defaultOpen={false}>
                      <File href="/vscode/settings" title="settings.json">
                        <FileJson
                          size={18}
                          className="stroke-[#908caa] group-hover:stroke-white"
                        />
                      </File>
                    </Folder>
                  </div>
                </div>
                <div className="flex flex-1">{children}</div>
              </div>
            </div>
          </Draggable>
        </div>
      </body>
    </html>
  );
}
