import sdg from "@/assets/images/sdg 1.svg"
import Image from "next/image"

function SDGSection() {
  return (
    <section className='px-app-padding flex flex-col gap-[100px] items-center mt-[100px]'>
        <h2 className='text-center font-news-reader italic text-[48px] font-[300]'>We and our companies align the the<br/>
Sustainable Development Goals</h2>
        <Image src={sdg.src} width={sdg.width} height={sdg.height} alt="" />
    </section>
  )
}

export default SDGSection