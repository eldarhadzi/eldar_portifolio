"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 11,
    text: "Projects completed",
  },
  {
    num: 17,
    text: "Technologies mastered",
  },
  {
    num: 128,
    text: "Code commits",
  },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index)=>{
            return <div
                    key={index}
                    className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                    >
              {/* delay=0 makes CountUp animate on mount even when using the
                  render-prop form below; the span's own text (the real
                  number) is what SSR/no-JS clients see. */}
              <CountUp end={item.num} duration={2.5} delay={0}>
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="text-4xl xl:text-6xl font-extrabold"
                  >
                    {item.num}
                  </span>
                )}
              </CountUp>
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
