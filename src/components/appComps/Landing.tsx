"use client";
import sendaiLogo from "@/assets/sendaiLogowTxt.png";
import xLogo from "@/assets/xLogo.png";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export function Landing() {
  return (
    <>
      <div className="h-[100vh] bg-neutral-950 relative antialiased">
        <div className="p-8 flex justify-between">
          {/* <h1 className="bg-neutral-950 antialiased relative z-10  text-left text-2xl md:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            SEND AI
          </h1> */}
          <Image src={sendaiLogo} alt="logo" width={100} height={100} />
          {/* <button className="relative z-10 text-sm md:text-2xl p-2 px-4 rounded-md  text-black bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Join Waitlist</button> */}
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-64">
          <div className="max-w-4xl mx-auto p-4 flex flex-col items-center justify-center">
            <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Accelerating the Solana AI Ecosystem
            </h1>
            <p></p>

            <div
              className="z-50 cursor-pointer"
              onClick={() => {
                window.open("https://twitter.com/SendAIFun", "_blank");
              }}
            >
              <Image
                className="flex items-center justify-center mt-16 z-50 "
                src={xLogo}
                alt="logo"
                width={32}
                height={32}
              />
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </div>
    </>
  );
}
