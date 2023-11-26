import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { value } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tamrakarashish387@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: "tamrakarashish387@gmail.com",
      to: "dangolice@gmail.com",
      subject: `${value.topic}`,
      html: `
      <div style={{ backgroundColor: 'white', padding: '20px', border: '4px solid black', borderRadius: '10px' }}>
        <h3> Name:</h3>
        <p style={{ fontSize: '22px' }}> ${value.name}</p>
        <h3> Email:</h3>
        <p style={{ fontSize: '22px' }}>${value.email}</p>
        <h3> Number:</h3> 
        <p style={{ fontSize: '22px' }}> ${value.number}</p>
        <h3> Message: </h3> 
        <p style={{ fontSize: '22px' }}>${value.message}</p>
      </div>
        
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
