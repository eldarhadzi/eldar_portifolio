import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer & Builder</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Eldar Hadžović</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80">
            I build software products across web, mobile, and backend systems, with a focus on turning ideas into working products.
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                >
                  <Link href="/assets/resume/eldar-hadzovic-cv.pdf" download
                  className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" />
              </div>
            </div>
          </div>

          {/* phone */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

