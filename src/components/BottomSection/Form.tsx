"use client"
import logo from "../../assets/images/Noise & Texture.png"
import sendEmail from "@/server/actions/sendEmail"

function Form() {

    
    return (
        <div id="project" className='pt-[140px] text-white bg-no-repeat bg-cover'
            style={{
                background: `url("${logo.src}")`
            }}
        >
            <div className='m-auto w-[1000px] max-w-full py-[100px] px-10 rounded-t-3xl md:rounded-t-[200px] bg-secondary-red'>
                <div className='font-news-reader text-center mb-10'>
                    <h2 className='text-[30px] md:text-[64px] italic'>Got a big idea?</h2>
                    <span className='text-[20px] md:text-[33px] italic'>Let discuss your project and start something great</span>
                </div>
                <form action={sendEmail} className='flex flex-col gap-8 w-[650px] max-w-full m-auto' >
                    <div className='flex flex-col text-[20px] md:text-[30px]'>
                        <label className='ml-[40px] font-[600]' htmlFor="name">Name</label>
                        <input  className='block outline-none border-none bg-[#E07A7A] h-[60px] md:h-[90px] rounded-[30px] px-10 placeholder:text-[#ffffffaa] font-[400] w-full' id='name' name='name' type="text" placeholder='Bismuth Inc.' required />
                    </div>
                    <div className='flex flex-col text-[20px] md:text-[30px]'>
                        <label className='ml-[40px] font-[600]' htmlFor="email">Email</label>
                        <input className='block outline-none border-none bg-[#E07A7A] h-[60px] md:h-[90px] rounded-[30px] px-10 placeholder:text-[#ffffffaa] font-[400] w-full' id='email' type="email" name="email" required placeholder='example@bismuth.com' />
                    </div>
                    <textarea className='outline-none border-none bg-[#E07A7A] h-[300px] rounded-[30px] py-8 px-10 md:p-10 placeholder:text-[#ffffffaa] text-[20px] md:text-[30px] font-[400]' name="idea" id="idea" cols={30} rows={10} required placeholder='Project Idea'></textarea>
                    <button type="submit" className="block ml-auto text-secondary-red bg-white py-3 px-[30px] rounded-full text-[24px] font-[700]">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form