import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Please set this environment variable to your verified sending domain (e.g. hello@yourdomain.com)
// If not set, it uses Resend's default testing domain (which only allows sending to your own email account).
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Mohammed Saqeeb <onboarding@resend.dev>';
const TO_EMAIL = 'alikhanmohammed342@gmail.com';

const emailHtmlTemplate = (name: string, opportunityType: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff; color: #0F172A;">
  <div style="border: 1px solid #E2E8F0; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <h2 style="color: #0F172A; font-size: 24px; margin-top: 0; margin-bottom: 24px; font-weight: 700;">Thanks for reaching out!</h2>
    <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 16px;">Hi ${name},</p>
    <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 16px;">
      Thank you for reaching out through my portfolio. I’ve received your message regarding <strong>${opportunityType}</strong> and will review it shortly.
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 24px;">
      I appreciate you taking the time to connect with me. I’ll get back to you as soon as possible. In the meantime, feel free to explore my portfolio and projects.
    </p>
    
    <div style="margin-bottom: 32px;">
      <a href="https://saqeebkhan.vercel.app/" style="background-color: #2563EB; color: #ffffff; font-weight: 600; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">View Portfolio</a>
    </div>

    <hr style="border: none; border-top: 1px solid #E2E8F0; margin-top: 32px; margin-bottom: 32px;" />
    
    <p style="font-size: 16px; line-height: 1.6; color: #475569; margin-bottom: 4px; font-weight: 600;">Best regards,</p>
    <p style="font-size: 16px; margin-top: 0; margin-bottom: 4px; color: #0F172A; font-weight: 700;">Mohammed Saqeeb</p>
    <p style="font-size: 14px; margin-top: 0; color: #2563EB;">Software Engineer</p>
  </div>
</div>
`;

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { success: false, message: 'Email service is not configured correctly.' },
            { status: 500 }
        );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { name, email, opportunityType, message } = body;

        // Basic validation
        if (!name || !email || !opportunityType || !message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address.' },
                { status: 400 }
            );
        }

        if (message.length > 5000) {
            return NextResponse.json(
                { success: false, message: 'Message is too long.' },
                { status: 400 }
            );
        }

        console.log(`Processing contact form from ${email} regarding ${opportunityType}`);

        // EMAIL 1: Notification to Saqeeb
        const notificationContent = `
New Portfolio Contact

Name: ${name}
Email: ${email}
Opportunity: ${opportunityType}

Message:
${message}

--------------------------------
Portfolio: https://saqeebkhan.vercel.app/
        `.trim();

        const notificationResult = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `New Portfolio Contact — ${opportunityType}`,
            text: notificationContent,
        });

        if (notificationResult.error) {
            console.error('Resend notification tracking error:', notificationResult.error);
            return NextResponse.json(
                { success: false, message: 'Unable to send your message right now. Please try again.' },
                { status: 500 }
            );
        }

        // EMAIL 2: Acknowledgement to the sender
        // Note: This won't reach visitors if using onboarding@resend.dev domain on the free tier until a real domain is verified.
        // It will just fail silently or return an error from Resend, which we will catch but still return success to the user (since the primary mail worked).
        try {
            const ackResult = await resend.emails.send({
                from: FROM_EMAIL,
                to: email,
                subject: 'Thanks for reaching out — Mohammed Saqeeb',
                html: emailHtmlTemplate(name, opportunityType),
            });
            if (ackResult.error) {
                console.error("Acknowledgement email failed to send (this is normal if using a test domain):", ackResult.error);
            }
        } catch (ackError) {
             console.error("Acknowledgement email exception:", ackError);
             // We do not fail the request if the acknowledgement failed.
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact endpoint error:', error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}
