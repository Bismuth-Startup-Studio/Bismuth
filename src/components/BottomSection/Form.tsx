"use client"
import logo from "../../assets/images/Noise & Texture.svg"
import { toast } from "react-hot-toast"
import { useRef, useState } from "react"

function Form() {

    const [disabled, setDisabled] = useState<boolean>(false)

    const form = useRef<HTMLFormElement>(null)

    const handleSubmit= async (e:any) => {
        e.preventDefault()
        if(disabled) return

        setDisabled(true)

        const toastId = toast.loading("sending message....")

        const formData = new FormData(form.current as HTMLFormElement)

        try {
            const response = await fetch("/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    idea: formData.get("idea")
                })
            })
    
            const res = await response.json()
    
            setDisabled(false)
            
            if(res.success){
                toast.success(res.success)
            }else{
                toast.error(`${res.error}`)
            }            
        } catch (error) {
            toast.error("Something went wrong. message not sent")
            
            setDisabled(false)
        }

        form.current?.reset()

        toast.dismiss(toastId)
    }

    
    return (
        <div id="project" className='pt-[100px] md:pt-[140px] text-white bg-no-repeat bg-cover'
            style={{
                background: `url("${logo.src}")`
            }}
        >
            <div className='m-auto w-[1000px] max-w-full py-[70px] md:py-[100px] px-10 rounded-t-3xl md:rounded-t-[100px] lg:rounded-t-[200px] bg-secondary-red'>
                <div className='font-news-reader text-center mb-10'>
                    <h2 className='text-[35px] md:text-[50px] lg:text-[64px] italic'>Got a big idea?</h2>
                    <span className='text-[20px] md:text-[33px] italic'>Let discuss your project and start something great</span>
                </div>
                <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-8 w-[650px] max-w-full m-auto' >
                    <div className='flex flex-col text-[15px] md:text-[20px]'>
                        <label className='ml-5 font-[600]' htmlFor="name">Name</label>
                        <input disabled={disabled}  className='block outline-none border-none bg-[#E07A7A] h-[50px] md:h-[70px] rounded-[15px] md:rounded-[20px] px-5 placeholder:text-[#ffffffaa] font-[400] w-full' id='name' name='name' type="text" placeholder='Bismuth Inc.' required />
                    </div>
                    <div className='flex flex-col text-[15px] md:text-[20px]'>
                        <label className='ml-5 font-[600]' htmlFor="email">Email</label>
                        <input disabled={disabled} className='block outline-none border-none bg-[#E07A7A] h-[50px] md:h-[70px] rounded-[15px] md:rounded-[20px] px-5 placeholder:text-[#ffffffaa] font-[400] w-full' id='email' type="email" name="email" required placeholder='example@bismuth.com' />
                    </div>
                    <textarea disabled={disabled} className='outline-none border-none bg-[#E07A7A] h-[300px] rounded-[15px] md:rounded-[20px] py-8 px-5 md:px-5 md:p-10 placeholder:text-[#ffffffaa] text-[15px] md:text-[20px] font-[400]' name="idea" id="idea" cols={30} rows={10} required placeholder='Project Idea'></textarea>
                    <button type="submit" className={`block ml-auto ${disabled ? "text-gray-700" : "text-secondary-red"} bg-white py-3 px-[30px] rounded-full font-[700] text-[15px] md:text-[20px]`}>{disabled ? "Sending" : "Submit" }</button>
                </form>
            </div>
        </div>
    )
}

export default Form