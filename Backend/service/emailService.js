import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export const sendEmailVerification = async (toEmail, token) => {
    const link = `http://localhost:3000/auth/verify/${token}`

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: "Link for verification your email",
        html: `<p>Klik this link for verification your email: </p><a href=${link}>${link}</a>`
    })
}
