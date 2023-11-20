'use server'

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')


  await resend.emails.send({
    from: 'FS Addons Contact Form <onboarding@resend.dev>',
    to: 'baru94@gmail.com',
    subject: 'Message from Contact Form',
    reply_to: senderEmail as string,
    html: message as string,
  })
}