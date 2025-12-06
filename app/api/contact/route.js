
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

// app/api/contact/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log('📨 Contact form API called');
    
    try {
        const { name, email, subject, message } = await request.json();
        
        console.log('📋 Form data received:', { name, email, subject, messageLength: message?.length });

        // Validation
        if (!name || !email || !message) {
            console.log('❌ Validation failed: Missing required fields');
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log('❌ Validation failed: Invalid email format');
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        console.log('✅ Validation passed');

        // Check if we have Resend API key
        if (!process.env.RESEND_API_KEY) {
            console.log('⚠️ RESEND_API_KEY not found, simulating success');
            // Simulate delay for realistic UX
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return NextResponse.json({ 
                success: true, 
                message: 'Message received! (Email service not configured)',
                simulated: true
            });
        }

        console.log('📤 Initializing Resend...');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email using Resend
        console.log('📧 Sending email to:', process.env.SMTP_TO || 'rufaelhaile14@gmail.com');
        
        const result = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [process.env.SMTP_TO || 'rufaelhaile14@gmail.com'],
            replyTo: email,
            subject: subject ? `Portfolio Contact: ${subject}` : `New message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #2563eb;">📨 New Contact Form Submission</h2>
                    <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0;">
                        <p><strong>👤 Name:</strong> ${name}</p>
                        <p><strong>📧 Email:</strong> ${email}</p>
                        ${subject ? `<p><strong>📋 Subject:</strong> ${subject}</p>` : ''}
                    </div>
                    <div style="background: #f0f9ff; padding: 15px; border-radius: 8px;">
                        <h3 style="color: #1e40af; margin-top: 0;">💬 Message:</h3>
                        <p style="white-space: pre-line;">${message}</p>
                    </div>
                </div>
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
                Sent from portfolio contact form
            `,
        });

        if (result.error) {
            console.error('❌ Resend API Error:', result.error);
            // Still return success to user, but log the error
            return NextResponse.json({ 
                success: true, 
                message: 'Message received! (Email service temporarily unavailable)',
                errorLogged: true
            });
        }

        console.log('✅ Email sent successfully! Message ID:', result.data?.id);
        
        return NextResponse.json({ 
            success: true, 
            message: 'Thank you! Your message has been sent successfully.',
            messageId: result.data?.id
        });

    } catch (error) {
        console.error('❌ Server Error:', error);
        
        // Return success even on error to not break user experience
        return NextResponse.json({ 
            success: true, 
            message: 'Message received! (Server error logged)',
            errorLogged: true
        });
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