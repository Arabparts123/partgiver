// app/api/googleSheets/route.ts
import { google } from "googleapis"

const sheets = google.sheets("v4")

// Export the POST method handler
export async function POST(req: Request) {
  try {
    // Get the request body, which contains the feedback
    const { feedback } = await req.json()

    const CLIENT_EMAIL = process.env.GSHEET_CLIENT_EMAIL!
    const PRIVATE_KEY = process.env.GSHEET_PRIVATE_KEY!.replace(/\\n/g, "\n")
    const SHEET_ID = process.env.GSHEET_SHEET_ID!
    const RANGE = "Sheet2!A:B"

    const auth = new google.auth.JWT(CLIENT_EMAIL, undefined, PRIVATE_KEY, [
      "https://www.googleapis.com/auth/spreadsheets",
    ])

    const timestamp = new Date().toISOString()

    const request = {
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: "RAW",
      auth,
      requestBody: {
        values: [[timestamp, feedback]],
      },
    }

    const response = await sheets.spreadsheets.values.append(request)

    return new Response(
      JSON.stringify({
        message: "Feedback added successfully",
        data: response.data,
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: "error.message" }), {
      status: 500,
    })
  }
}
