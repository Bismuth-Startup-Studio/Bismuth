import Image from "next/image"

const CompanyCard = (
    {image, title, subtitle, desc}:
    {image: any, title: String, subtitle: String, desc: String}
  ) => {
    return(
      <div className='flex max-w-full w-[300px] lg:w-[577px] flex-col lg:flex-row gap-[10px] lg:gap-[30px] min-h-[329px] p-[30px] bg-white'>
        <Image src={image.src} width={image.width} height={image.height} className='object-top h-auto w-[250px] lg:w-[300px]' alt="" />
        <div className='flex flex-col gap-[20px] lg:gap-[40px]'>
          <div>
            <h2 className='w-[300px] md:w-full text-[24px]'>{title}</h2>
            <h3 className='font-news-reader italic font-[300] text-[16px]'>{subtitle}</h3>
          </div>
          <p className='h-[150px] w-full overflow-y-auto text-ellipsis text-[14px] sm:text-[16px] font-[300]'>{desc}</p>
        </div>
      </div>
    )
  }
  
export default CompanyCard  