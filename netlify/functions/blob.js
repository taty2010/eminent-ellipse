import { getStore } from "@netlify/blobs";

export default async function (req, context) {
  const testing = getStore("netlifyFunction");
  await testing.set("testing", "netlify function");

  return new Response("Set testing to netlify function");
}
