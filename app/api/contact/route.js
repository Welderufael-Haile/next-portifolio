
// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//     try {
//         const { name, email, subject, message } = await request.json();

//         // Validate input
//         if (!name || !email || !message) {
//             return NextResponse.json(
//                 { error: 'Name, email, and message are required fields.' },
//                 { status: 400 }
//             );
//         }

//         // Send email
//         const { data, error } = await resend.emails.send({
//             from: 'Portfolio Contact <onboarding@resend.dev>',
//             to: [process.env.SMTP_TO || 'rufaelhaile14@gmail.com'],
//             replyTo: email,
//             subject: subject ? `Portfolio: ${subject}` : `New message from ${name}`,
//             html: `
//                 <h2>New Contact Form Submission</h2>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
//                 <p><strong>Message:</strong></p>
//                 <p>${message.replace(/\n/g, '<br>')}</p>
//             `,
//             text: `New message from ${name} (${email})\n\n${message}`,
//         });

//         if (error) {
//             console.error('Resend error:', error);
//             return NextResponse.json(
//                 { error: error.message || 'Failed to send email' },
//                 { status: 500 }
//             );
//         }

//         return NextResponse.json({ 
//             success: true, 
//             message: 'Message sent successfully!' 
//         });

//     } catch (error) {
//         console.error('Error:', error);
//         return NextResponse.json(
//             { error: 'Failed to send message. Please try again later.' },
//             { status: 500 }
//         );
//     }
// }


import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    console.log('📨 Contact form API called');
    
    try {
        // Parse request body
        const body = await request.json();
        console.log('📋 Form data received:', body);
        
        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !message) {
            console.log('❌ Validation failed: Missing fields');
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log('❌ Validation failed: Invalid email');
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        console.log('✅ Validation passed');
        console.log('📤 Sending email via Resend...');
        
        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [process.env.SMTP_TO || 'rufaelhaile14@gmail.com'],
            replyTo: email,
            subject: subject ? `Portfolio Contact: ${subject}` : `New message from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
                        .field { margin-bottom: 15px; }
                        .label { font-weight: bold; color: #4b5563; }
                        .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb; margin-top: 15px; }
                        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>📨 New Contact Form Submission</h2>
                        </div>
                        <div class="content">
                            <div class="field">
                                <span class="label">👤 Name:</span>
                                <span> ${name}</span>
                            </div>
                            <div class="field">
                                <span class="label">📧 Email:</span>
                                <span> ${email}</span>
                            </div>
                            ${subject ? `
                            <div class="field">
                                <span class="label">📋 Subject:</span>
                                <span> ${subject}</span>
                            </div>
                            ` : ''}
                            <div class="field">
                                <span class="label">💬 Message:</span>
                                <div class="message">
                                    ${message.replace(/\n/g, '<br>')}
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>This message was sent from your portfolio contact form at ${process.env.NEXT_PUBLIC_SITE_URL || 'your portfolio'}</p>
                            <p>You can reply directly to this email to respond to ${name}.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
                NEW CONTACT FORM SUBMISSION
                ============================
                
                Name: ${name}
                Email: ${email}
                ${subject ? `Subject: ${subject}` : ''}
                
                Message:
                ${message}
                
                ---
                Sent from your portfolio contact form
                Reply to: ${email}
            `,
        });

        if (error) {
            console.error('❌ Resend API Error:', error);
            return NextResponse.json(
                { 
                    error: error.message || 'Email service is temporarily unavailable. Please try again later.' 
                },
                { status: 500 }
            );
        }

        console.log('✅ Email sent successfully! Message ID:', data?.id);
        console.log('📧 Email sent to:', process.env.SMTP_TO);
        
        return NextResponse.json({ 
            success: true, 
            message: 'Your message has been sent successfully! I\'ll get back to you soon.',
            messageId: data?.id,
            recipient: process.env.SMTP_TO
        });

    } catch (error) {
        console.error('❌ Server Error:', error);
        return NextResponse.json(
            { 
                error: 'An unexpected error occurred. Please try again in a few moments.' 
            },
            { status: 500 }
        );
    }
}

// Handle CORS preflight requests
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}