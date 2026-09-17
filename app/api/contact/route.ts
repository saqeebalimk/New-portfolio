import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Please set this environment variable to your verified sending domain (e.g. hello@yourdomain.com)
// If not set, it uses Resend's default testing domain (which only allows sending to your own email account).
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Mohammed Saqeeb <onboarding@resend.dev>';
const TO_EMAIL = 'alikhanmohammed342@gmail.com';

// Helper function to generate tailored response bodies based on opportunity type
function getPreFilledReplyBody(name: string, opportunityType: string): string {
    const signature = `Best regards,
Mohammed Saqeeb
Full Stack Software Engineer
Phone: +91 8792248396
Email: alikhanmohammed342@gmail.com
Portfolio: https://saqeebkhan.vercel.app/`;

    switch (opportunityType) {
        case "Freelancing":
            return `Hi ${name},

Thank you for reaching out regarding your project! I would love to learn more about the scope, tech stack, and timeline you have in mind.

Could we schedule a brief call or connect via email to discuss the details?

${signature}`;

        case "Collaborate":
            return `Hi ${name},

Thank you for contacting me about collaborating! I am always excited to work on innovative full-stack, AI, or open-source engineering projects.

Let's connect to discuss how we can partner up to build something great together.

${signature}`;

        case "Part Time":
            return `Hi ${name},

Thank you for considering me for a part-time engineering opportunity! With 4 years of experience delivering production web applications and AI workflows, I would be happy to contribute to your team's goals.

Please let me know a convenient time for us to discuss the role and requirements.

${signature}`;

        case "Full Time":
            return `Hi ${name},

Thank you for reaching out regarding a full-time software engineering opportunity! I am actively open to impactful Full Stack and AI Engineering roles.

I would welcome the opportunity to discuss my background, architecture experience, and how I can add value to your team. Please let me know when you are available for a brief conversation.

${signature}`;

        default:
            return `Hi ${name},

Thank you for connecting with me through my portfolio! I would love to learn more about the opportunity you have in mind.

Please feel free to share additional details or let me know when you would like to schedule a call.

${signature}`;
    }
}

// ─── EMAIL 1: Beautiful HTML Notification for Saqeeb ─────────────────────────────
const notificationHtmlTemplate = (name: string, email: string, opportunityType: string, message: string) => {
    const replySubject = encodeURIComponent(`Re: ${opportunityType} Inquiry — Mohammed Saqeeb`);
    const replyBody = encodeURIComponent(getPreFilledReplyBody(name, opportunityType));
    const mailtoUrl = `mailto:${email}?subject=${replySubject}&body=${replyBody}`;

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <div style="max-width: 600px; margin: 30px auto; padding: 0 16px;">
    
    <!-- Outer Card -->
    <div style="background-color: #ffffff; border: 1px solid #E2E8F0; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);">
      
      <!-- Gradient Header -->
      <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 32px 36px;">
        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #93C5FD; margin-bottom: 6px;">
          PORTFOLIO INQUIRY
        </div>
        <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
          New Message from ${name}
        </h1>
      </div>

      <!-- Main Body -->
      <div style="padding: 32px 36px;">
        
        <!-- Details Table -->
        <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 24px; background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #E2E8F0; width: 120px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748B;">Sender Name</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 700; color: #0F172A;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid #E2E8F0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748B;">Email Address</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid #E2E8F0; font-size: 14px; font-weight: 600;">
              <a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748B;">Opportunity</td>
            <td style="padding: 12px 16px;">
              <span style="display: inline-block; background-color: #EFF6FF; border: 1px solid #BFDBFE; color: #1E40AF; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px;">
                ${opportunityType}
              </span>
            </td>
          </tr>
        </table>

        <!-- Message Box Label -->
        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748B; margin-bottom: 8px;">
          MESSAGE CONTENT
        </div>

        <!-- Message Content Box -->
        <div style="background-color: #F8FAFC; border-left: 4px solid #2563EB; border-radius: 0 12px 12px 0; padding: 18px 20px; font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 28px; white-space: pre-wrap;">${message}</div>

        <!-- Reply Button with Auto-filled Body -->
        <div style="text-align: center; margin-bottom: 16px;">
          <a href="${mailtoUrl}" style="display: inline-block; background-color: #2563EB; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 12px 28px; border-radius: 10px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);">
            Reply Directly to ${name} →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 16px 36px; text-align: center; font-size: 11px; color: #94A3B8;">
        Submitted via portfolio contact form at <a href="https://saqeebkhan.vercel.app/" style="color: #64748B; text-decoration: underline;">saqeebkhan.vercel.app</a>
      </div>

    </div>
  </div>
</body>
</html>
`;
};

// ─── EMAIL 2: Beautiful Ack Email for Visitor ────────────────────────────────────
const emailHtmlTemplate = (name: string, opportunityType: string) => `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 30px auto; padding: 0 16px; color: #0F172A;">
  <div style="border: 1px solid #E2E8F0; border-radius: 20px; padding: 36px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); background-color: #ffffff;">
    
    <div style="display: inline-block; background-color: #EFF6FF; color: #2563EB; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 12px; border-radius: 20px; margin-bottom: 16px;">
      MESSAGE RECEIVED
    </div>

    <h2 style="color: #0F172A; font-size: 22px; margin-top: 0; margin-bottom: 16px; font-weight: 800;">Thanks for reaching out!</h2>
    <p style="font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 16px;">Hi ${name},</p>
    <p style="font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 16px;">
      Thank you for contacting me regarding <strong>${opportunityType}</strong>. I have received your message and will review it shortly.
    </p>
    <p style="font-size: 15px; line-height: 1.6; color: #334155; margin-bottom: 24px;">
      I will get back to you as soon as possible. In the meantime, feel free to explore my full portfolio and projects.
    </p>
    
    <div style="margin-bottom: 28px;">
      <a href="https://saqeebkhan.vercel.app/" style="background-color: #2563EB; color: #ffffff; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 10px; text-decoration: none; display: inline-block; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);">View Full Portfolio →</a>
    </div>

    <hr style="border: none; border-top: 1px solid #E2E8F0; margin-top: 28px; margin-bottom: 24px;" />
    
    <p style="font-size: 14px; line-height: 1.6; color: #475569; margin-bottom: 2px; font-weight: 600;">Best regards,</p>
    <p style="font-size: 16px; margin-top: 0; margin-bottom: 2px; color: #0F172A; font-weight: 800;">Mohammed Saqeeb</p>
    <p style="font-size: 13px; margin-top: 0; color: #2563EB; font-weight: 600;">Full Stack Software Engineer</p>
  </div>
</div>
`;

// ─── POST ROUTE HANDLER ──────────────────────────────────────────────────────────
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

        // EMAIL 1: Formatted HTML Notification to Saqeeb
        const notificationResult = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `New Portfolio Contact — ${opportunityType} (${name})`,
            html: notificationHtmlTemplate(name, email, opportunityType, message),
        });

        if (notificationResult.error) {
            console.error('Resend notification tracking error:', notificationResult.error);
            return NextResponse.json(
                { success: false, message: 'Unable to send your message right now. Please try again.' },
                { status: 500 }
            );
        }

        // EMAIL 2: Formatted HTML Acknowledgement to the Visitor
        try {
            const ackResult = await resend.emails.send({
                from: FROM_EMAIL,
                to: email,
                subject: 'Thanks for reaching out — Mohammed Saqeeb',
                html: emailHtmlTemplate(name, opportunityType),
            });
            if (ackResult.error) {
                console.error("Acknowledgement email failed to send (normal if using test domain):", ackResult.error);
            }
        } catch (ackError) {
             console.error("Acknowledgement email exception:", ackError);
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
