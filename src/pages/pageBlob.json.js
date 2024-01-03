import { getStore } from "@netlify/blobs";

export async function GET() {
  const testing = getStore("netlifyFunction");
  await testing.set("testing", "netlify function");

  return new Response(
    JSON.stringify({
      name: "Blob",
      res: "Set testing to netlify function",
    })
  );
}
