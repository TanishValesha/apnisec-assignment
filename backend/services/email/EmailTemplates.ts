import {
  IssueCreatedEmailData,
  ProfileUpdatedEmailData,
  WelcomeEmailData,
} from "@/backend/types/email.types";

export class EmailTemplates {
  static welcome(data: WelcomeEmailData) {
    return `
    <div style="background:#f6f9fc;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center">
            <table width="600" style="
              background:#ffffff;
              border-radius:12px;
              box-shadow:0 10px 25px rgba(0,0,0,0.08);
              padding:40px;
            ">
              <tr>
                <td style="text-align:center;">
                  <h1 style="color:#0f172a;margin-bottom:10px;">
                    Welcome to ApniSec 🚀
                  </h1>
                  <p style="color:#475569;font-size:16px;">
                    Hello <strong>${data.name}</strong>,
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:30px 0;color:#334155;font-size:15px;">
                  <p>
                    Your account has been successfully created. You can now
                    start reporting and tracking security issues with ease.
                  </p>
                  <p>
                    We’re excited to have you as part of the ApniSec community.
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center">
                  <div style="
                    background:#2563eb;
                    color:#ffffff;
                    padding:12px 24px;
                    border-radius:8px;
                    font-weight:bold;
                    display:inline-block;
                  ">
                    Start Using ApniSec
                  </div>
                </td>
              </tr>

              <tr>
                <td style="
                  padding-top:40px;
                  color:#64748b;
                  font-size:12px;
                  text-align:center;
                ">
                  © ${new Date().getFullYear()} ApniSec. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    `;
  }

  static issueCreated(data: IssueCreatedEmailData) {
    return `
    <div style="background:#f8fafc;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%">
        <tr>
          <td align="center">
            <table width="600" style="
              background:#ffffff;
              border-radius:12px;
              box-shadow:0 10px 25px rgba(0,0,0,0.08);
              padding:40px;
            ">
              <tr>
                <td>
                  <h2 style="color:#0f172a;margin-bottom:5px;">
                    🛡️ Issue Successfully Created
                  </h2>
                  <p style="color:#475569;">
                    Your security issue has been logged with the following details:
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:20px 0;">
                  <table width="100%" style="border-collapse:collapse;">
                    <tr>
                      <td style="
                        padding:12px;
                        background:#f1f5f9;
                        font-weight:bold;
                        width:30%;
                      ">
                        Type
                      </td>
                      <td style="padding:12px;background:#f1f5f9;">
                        ${data.type}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px;font-weight:bold;">
                        Title
                      </td>
                      <td style="padding:12px;">
                        ${data.title}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px;font-weight:bold;">
                        Description
                      </td>
                      <td style="padding:12px;">
                        ${data.description}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding-top:30px;color:#64748b;font-size:14px;">
                  You can track and update this issue anytime from your dashboard.
                </td>
              </tr>

              <tr>
                <td style="
                  padding-top:40px;
                  color:#94a3b8;
                  font-size:12px;
                  text-align:center;
                ">
                  ApniSec • Security Issue Management
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    `;
  }

  static profileUpdated(data: ProfileUpdatedEmailData) {
    return `
    <div style="background:#f6f9fc;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%">
        <tr>
          <td align="center">
            <table width="600" style="
              background:#ffffff;
              border-radius:12px;
              box-shadow:0 10px 25px rgba(0,0,0,0.08);
              padding:40px;
            ">
              <tr>
                <td>
                  <h2 style="color:#0f172a;">
                    ✅ Profile Updated
                  </h2>
                  <p style="color:#475569;">
                    ${data.name ? `Hello ${data.name},` : "Hello,"}
                  </p>
                  <p style="color:#475569;">
                    Your profile information has been updated successfully.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding-top:30px;color:#64748b;font-size:14px;">
                  If you did not make this change, please contact support immediately.
                </td>
              </tr>

              <tr>
                <td style="
                  padding-top:40px;
                  color:#94a3b8;
                  font-size:12px;
                  text-align:center;
                ">
                  ApniSec Security Notification
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    `;
  }
}
