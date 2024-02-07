"use server"
const nodemailer = require("nodemailer")
const {google} = require("googleapis")

export default async function sendEmail(formData:FormData){

    const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, EMAIL} = process.env

    const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)

    auth.setCredentials({
        refresh_token: GOOGLE_REFRESH_TOKEN
    })

    try {
        const transport = await nodemailer.createTransport({
            service: "gmail",
            secure: false,
            auth: {
                type: "OAuth2",
                user: EMAIL,
                clientId: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                refreshToken: GOOGLE_REFRESH_TOKEN,
                accessToken: await auth.getAccessToken(),
            }
        })
        
        const emailResponse =  await transport.sendMail({
            from: `${formData.get("name")} - ${formData.get("email")} <${formData.get("email")}>`,
            to: process.env.EMAIL,
            subject: `Bismuth Partnership Request - ${formData.get("name")} <${formData.get("email")}>`,
            text:  `    
${formData.get("idea")}
            `,
        })

        console.log(emailResponse)
    } catch (error:any) {
        console.log(error.message)
    }
}
