import { NextResponse } from 'next/server';
import { sendContactFormEmails } from '@/app/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the required fields
    const { firstName, lastName, email, phone, subject, message } = data;
    
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Send emails
    await sendContactFormEmails({ 
      firstName, 
      lastName, 
      email, 
      phone, 
      subject, 
      message 
    });
    
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending contact form emails:', error);
    return NextResponse.json(
      { message: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 