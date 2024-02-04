const CompanyCard = ({image, title, subtitle, desc}) => {
    return(
      <div className='flex max-w-full w-[377px] flex-col lg:flex-row gap-[30px] lg:w-[577px] min-h-[329px] p-[30px] bg-white'>
        <img className='object-top w-[300px]' src={image} alt="" />
        <div className='flex flex-col gap-[40px]'>
          <div>
            <h2 className='w-[300px] md:w-full text-[24px]'>{title}</h2>
            <h3 className='font-news-reader italic font-[300] text-[16px]'>{subtitle}</h3>
          </div>
          <p className='w-[300px] md:w-full text-[16px] font-[300]'>{desc}</p>
        </div>
      </div>
    )
  }
  
export default CompanyCard  