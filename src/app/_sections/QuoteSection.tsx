import quoteBg from "@/assets/images/Minimalistic Brown Fashion Photo Collage (1) 1.png"

function QuoteSection() {
  return (
    <section 
        className="mt-[200px]"
    >
        <div
            className="h-[400px]"
            style={{
                background: `url("${quoteBg.src}"), lightgray -43px -529px / 104.983% 171.957% no-repeat`
            }}
        />
        <div className=" shadow-xl flex flex-col gap-[40px] lg:gap-[80px] w-[70vw] py-10 md:py-[60px] px-10 md:px-[60px] bg-white m-auto -mt-[250px] rounded-md">
            <p className="font-news-reader text-[20px] lg:text-[30px] italic font-[500] text-center leading-[1.2]">"There has never been a better time to drive the next change through ideas and our mission is to encourage more people to choose entrepreneurship. The world can be better when more people build the future we want together."</p>
            <span className="text-center font-news-reader text-[22px] lg:text-[32px] font-[300] italic">- The Bismuth Team</span>
        </div>
    </section>
  )
}

export default QuoteSection