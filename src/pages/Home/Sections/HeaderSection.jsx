import Header from "../../../components/Header/Header"

function HeaderSection() {
  return (
    <section>
        <Header>
            <div className='px-app-padding mt-[200px] pb-[100px]'>
                <div className='flex items-center w-[250px] mb-[50px]' >
                    <div className='h-[2px] bg-primary-red flex-grow' />
                    <h1 className='font-news-reader text-[32px] font-[300] italic text-primary-red'>We Build</h1>                                                     
                </div>
                <p className='text-[50px] md:text-[70px] lg:text-[96px] text-light-black italic font-news-reader leading-[1] font-[270]'>SDG Tech-based Products To Address Global Solutions.</p>
                <p className='text-[24px] font-[300] leading-[28.8px] mt-[30px]'>We are actively committed to fostering and supporting innovative tech-based solutions that align with the Sustainable Development Goals (SDGs), empowering ideas and concepts that address global challenges.</p>
            </div>
        </Header>
    </section>
  )
}

export default HeaderSection