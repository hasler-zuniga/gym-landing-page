import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type TrialFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  goals: string;
  hearAboutUs: string;
};

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const createEmailTemplate = (content: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid #e0e0e0;
        }
        .header {
          background-color: #000;
          color: white;
          padding: 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .header p {
          margin: 5px 0 0;
          font-size: 14px;
        }
        .content {
          padding: 20px 40px;
        }
        .divider {
          border-top: 1px solid #e0e0e0;
          margin: 20px 0;
        }
        .footer {
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #666;
        }
        .footer p {
          margin: 5px 0;
        }
        .links {
          margin-top: 10px;
        }
        .links a {
          color: #666;
          text-decoration: none;
          margin: 0 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Decoded Training Lab</h1>
          <p>Training & Community</p>
        </div>
        <div class="content">
          ${content}
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function sendTrialRequestEmails(data: TrialFormData) {
  // 1. Send email to owners
  const ownerContent = `
    <h2>New Free Trial Request</h2>
    <p>Hello,</p>
    <p>You have received a new free trial request:</p>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>How they heard about us:</strong> ${data.hearAboutUs}</p>
    <p><strong>Fitness Goals:</strong> ${data.goals}</p>
    <div class="divider"></div>
    <p>Thank you!</p>
    <p>If you have any questions, please contact our team. <a href="mailto:decodedtraininglab@gmail.com">decodedtraininglab@gmail.com</a></p>
  `;

  const ownerEmailPromise = resend.emails.send({
    from: 'Decoded Training Lab <no-reply@info.decodedtraininglab.com>',
    to: ['haslzun08@gmail.com', 'decodedtraininglab@gmail.com'], // Replace with actual owner emails
    // to: ['haslzun08@gmail.com'], // Replace with actual owner emails
    subject: 'Free 1 Day Trial Request',
    html: createEmailTemplate(ownerContent),
  });

  // 2. Send confirmation email to user
  const userContent = `
    <h2>Thank You for Your Interest!</h2>
    <p>Hello ${data.firstName},</p>
    <p>We've received your request for a free 1-day trial. One of our team members will contact you within 24 hours to schedule your visit.</p>
    <p>We look forward to helping you achieve your fitness goals!</p>
    <div class="divider"></div>
    <p>Best regards,<br>The Decoded Training Lab Team</p>
  `;

  const userEmailPromise = resend.emails.send({
    from: 'Decoded Training Lab <no-reply@info.decodedtraininglab.com>',
    to: [data.email],
    subject: 'Your Free Trial Request - Decoded Training Lab',
    html: createEmailTemplate(userContent),
  });

  return Promise.all([ownerEmailPromise, userEmailPromise]);
}

export async function sendContactFormEmails(data: ContactFormData) {
  // 1. Send email to owners
  const ownerContent = `
    <h2>New Contact Form Submission</h2>
    <p>Hello,</p>
    <p>You have received a new contact form submission:</p>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong> ${data.message}</p>
    <div class="divider"></div>
    <p>Thank you!</p>
    <p>If you have any questions, please contact our team. <a href="mailto:decodedtraininglab@gmail.com">decodedtraininglab@gmail.com</a></p>
  `;

  const ownerEmailPromise = resend.emails.send({
    from: 'Decoded Training Lab <no-reply@info.decodedtraininglab.com>',
    to: ['haslzun08@gmail.com', 'decodedtraininglab@gmail.com'], // Replace with actual owner emails
    subject: `Contact Form: ${data.subject}`,
    html: createEmailTemplate(ownerContent),
  });

  // 2. Send confirmation email to user
  const userContent = `
    <h2>Thank You for Contacting Us</h2>
    <p>Hello ${data.firstName},</p>
    <p>We've received your message and appreciate your interest in Decoded Training Lab. Our team will review your inquiry and get back to you within 24 hours.</p>
    <div class="divider"></div>
    <p>Best regards,<br>The Decoded Training Lab Team</p>
  `;

  const userEmailPromise = resend.emails.send({
    from: 'Decoded Training Lab <noreply@info.decodedtraininglab.com>',
    to: [data.email],
    subject: "We've Received Your Message - Decoded Training Lab",
    html: createEmailTemplate(userContent),
  });

  return Promise.all([ownerEmailPromise, userEmailPromise]);
} 