import design from "@/assets/images/skills/design.svg"
import engineering from "@/assets/images/skills/engineering.svg"
import hr from "@/assets/images/skills/hr.svg"
import it from "@/assets/images/skills/IT.svg"
import recruit from "@/assets/images/skills/recruit.svg"
import operations from "@/assets/images/skills/operations.svg"
import Image from "next/image"

function SkillsSection() {
    const skills=[{
        image: design,
        text: "Design"
    },{
        image: engineering,
        text: "Engineering"
    },{
        image: hr,
        text: "HR"
    },{
        image: it,
        text: "IT"
    },{
        image: recruit,
        text: "Recruiting"
    },{
        image: operations,
        text: "Operations"
    }]

    return (
        <section className="px-app-padding mt-[100px]">
            <div className='flex flex-col gap-[30px]'>
                <h2 className='text-[35px] lg:text-[48px] font-[600] text-primary-red text-center'>Our Built In Skills</h2>
                <p className='text-[18px] lg:text-[24px] text-center'>We’re an experienced team of founders and operators who have started dozens of companies, and created billions of dollars in enterprise value.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-[100px] mt-[50px] flex-wrap'>
                {skills.map((skill, index) => <Skill key={index} {...skill} />)}
            </div>
        </section>
    )
}

const Skill =
    (
        {image, text} :
        {image:any, text: String}
    ) => {
    return(
        <div className='flex flex-col items-center justify-between'>
            <Image src={image.src} width={image.width} height={image.height} className="w-[60px] h-auto md:w-[100px]" alt="" />
            <span className='text-[22px] md:text-[30px] lg:text-[40px] text-primary-red'>{text}</span>
        </div>
    )
}

export default SkillsSection