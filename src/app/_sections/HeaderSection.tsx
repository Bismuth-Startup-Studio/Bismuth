import Header from "@/components/Header/Header"
import "../_styles/header.css"

function HeaderSection() {
  return (
    <section>
        <Header>
            <div className='px-app-padding mt-[100px] md:mt-[200px] pb-[100px]'>
                <div className='we-build flex items-center w-[250px] mb-[50px]' >
                  <div className='h-[2px] bg-primary-red flex-grow' />
                  <h1 className='font-news-reader text-[32px] font-[300] italic text-primary-red'>We Build</h1>                                                     
                </div>
                <p className='sdg text-[50px] md:text-[70px] lg:text-[96px] text-light-black italic font-news-reader leading-[1] font-[270]'>SDG Tech-based Products To Address Global Solutions.</p>
                <p className='paragraph text-[16px] md:text-[20px] lg:text-[24px] font-[300] leading-[1.4] mt-[30px]'>We are actively committed to fostering and supporting innovative tech-based solutions that align with the Sustainable Development Goals (SDGs), empowering ideas and concepts that address global challenges.</p>
            </div>
        </Header>
    </section>
  )
}

export default HeaderSection