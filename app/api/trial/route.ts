import { NextResponse } from 'next/server';
import { sendTrialRequestEmails } from '@/app/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate the required fields
    const { firstName, lastName, email, phone, goals } = data;
    
    if (!firstName || !lastName || !email || !phone || !goals) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Send emails
    await sendTrialRequestEmails({ 
      firstName, 
      lastName, 
      email, 
      phone, 
      goals 
    });
    
    return NextResponse.json(
      { message: 'Trial request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending trial request emails:', error);
    return NextResponse.json(
      { message: 'Failed to submit trial request' },
      { status: 500 }
    );
  }
} 