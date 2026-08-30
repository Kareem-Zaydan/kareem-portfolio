import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return Response.json(
                {
                    message: "Name, email, and message are required.",
                },
                {
                    status: 400,
                }
            );
        }

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string"
        ) {
            return Response.json(
                {
                    message: "Invalid form data.",
                },
                {
                    status: 400,
                }
            );
        }

        const { error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["kareem02zaydan@gmail.com"],
            subject: `New portfolio message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
            replyTo: email,
        });

        if (error) {
            console.error("Resend error:", error);

            return Response.json(
                {
                    message: "Failed to send message.",
                },
                {
                    status: 500,
                }
            );
        }

        return Response.json(
            {
                message: "Message sent successfully!",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return Response.json(
            {
                message: "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}