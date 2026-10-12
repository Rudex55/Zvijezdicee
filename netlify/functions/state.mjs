import { getStore } from "@netlify/blobs";
import { applyAction, initialState } from "../../public/logic.mjs";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req) => {
  const store = getStore("star-shop");
  const state = (await store.get("state", { type: "json" })) || initialState();

  if (req.method === "GET") return json({ ok: true, state });

  if (req.method === "POST") {
    let action;
    try {
      action = await req.json();
    } catch {
      return json({ ok: false, error: "Bad JSON" }, 400);
    }
    const result = applyAction(state, action);
    if (!result.ok) return json({ ...result, state }, 400);
    await store.setJSON("state", state);
    return json({ ok: true, state });
  }

  return json({ ok: false, error: "Method not allowed" }, 405);
};

export const config = { path: "/api/state" };
