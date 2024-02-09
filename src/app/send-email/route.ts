const nodemailer = require("nodemailer")
const {google} = require("googleapis")

export async function POST(req:Request){

    const {name, email, idea} = await req.json()


    const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, EMAIL} = process.env

    const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)

    auth.setCredentials({
        refresh_token: GOOGLE_REFRESH_TOKEN
    })

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

    try {
        const emailResponse =  await transport.sendMail({
            from: `${name} - ${email} <${email}>`,
            to: process.env.EMAIL,
            subject: `Bismuth Partnership Request - ${name} <${name}>`,
            text:  `    
${idea}
            `,
        })        

        if(emailResponse){
            return Response.json({
                success: "message sent successfully"
            },{
                status: 200
            })
        }

        return Response.json({
            error: "error, message not sent"
        },{
            status: 500
        })
    } catch (error) {
        return Response.json({
            error: "error, message not sent"
        },{
            status: 500
        })
    }   
}
