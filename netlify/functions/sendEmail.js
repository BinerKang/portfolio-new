import fetch from 'node-fetch'

const RESEND_API_KEY = process.env.RESEND_API_KEY

export const handler = async function (event, context) {
  const eventBody = JSON.parse(event.body)
  const senderEmail = eventBody.senderEmail
  const message = eventBody.message
  
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "545929899@qq.com",
      subject: "🚀🚀来自于作品集网站的消息🚀🚀",
      reply_to: senderEmail,
      html: `
        <body style="background-color:#ffffff;">
          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:360px;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;margin:0 auto;padding:68px 0 130px">
            <tbody>
              <tr style="width:100%">
                <td><img alt="Plaid" height="88" src="https://avatars.githubusercontent.com/u/18752585?s=64" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" />
                <p style="font-size:14px;line-height:16px;margin:16px 8px 8px 8px;color:#0a85ea;height:16px;text-align:center">收到来自网站的消息</p>
                <p style="color:#000;font-size:20px;text-align:center">发送人: ${senderEmail}</p>
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background:rgba(0,0,0,.05);border-radius:4px;margin:16px auto 14px;vertical-align:middle;width:280px">
                <tbody>
                  <tr>
                    <td>
                      <p style="font-size:18px;margin:0 auto;color:#000;display:inline-block;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">${message}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </body>

      `,
    })
  });

  console.log(res)

  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Send Success!'})
  }
}