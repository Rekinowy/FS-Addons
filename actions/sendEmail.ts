'use server'

import { Resend } from "resend"

import ContactFormEmail from "@/email/contact-form"
import React from "react"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')



  await resend.emails.send({
    from: 'FS Addons Contact Form <onboarding@resend.dev>',
    to: 'baru94@gmail.com',
    subject: 'Message from Contact Form',
    reply_to: senderEmail as string,
    react: React.createElement(ContactFormEmail, {message: message as string, senderEmail: senderEmail as string})

  })
}