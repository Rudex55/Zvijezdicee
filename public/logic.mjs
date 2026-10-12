// Shared rules. Used by the Netlify Function (real shared data)
// AND by the browser (offline/local fallback). One source of truth.

export const PEOPLE = ["Jelena", "Nikola"];

export const other = (p) => (p === "Jelena" ? "Nikola" : "Jelena");

export const initialState = () => ({
  stars: { Jelena: 0, Nikola: 0 }, // current balance ("coins") of each person
  orders: [],                      // shop purchase requests
  log: [],                         // history of sent stars / purchases
  nextId: 1,
});

// Mutates `state`. Returns { ok: true } or { ok: false, error }.
export function applyAction(state, a) {
  const now = Date.now();
  const addLog = (entry) => {
    state.log.unshift({ id: state.nextId++, ts: now, ...entry });
    state.log.length = Math.min(state.log.length, 80);
  };

  if (!a || typeof a !== "object") return { ok: false, error: "Bad request" };

  switch (a.type) {
    case "send": {
      const { from, to } = a;
      const amount = Math.floor(Number(a.amount));
      if (!PEOPLE.includes(from) || to !== other(from)) return { ok: false, error: "Bad people" };
      if (!(amount >= 1 && amount <= 10000)) return { ok: false, error: "Bad amount" };
      state.stars[to] += amount;
      addLog({ type: "send", from, to, amount, reason: String(a.reason || "").slice(0, 40) });
      return { ok: true };
    }

    case "buy": {
      const { buyer } = a;
      const cost = Math.floor(Number(a.cost));
      if (!PEOPLE.includes(buyer)) return { ok: false, error: "Bad people" };
      if (!(cost >= 1)) return { ok: false, error: "Bad cost" };
      if (state.stars[buyer] < cost) return { ok: false, error: "Not enough stars" };
      // Stars are held ("escrow") until the other person decides.
      state.stars[buyer] -= cost;
      state.orders.unshift({
        id: state.nextId++,
        buyer,
        item: String(a.item || "Item").slice(0, 60),
        cost,
        status: "pending",
        ts: now,
      });
      state.orders.length = Math.min(state.orders.length, 100);
      return { ok: true };
    }

    case "respond": {
      const order = state.orders.find((o) => o.id === a.id);
      if (!order) return { ok: false, error: "Order not found" };
      if (order.status !== "pending") return { ok: false, error: "Already answered" };
      if (a.by !== other(order.buyer)) return { ok: false, error: "You can't answer your own request" };
      if (a.approve) {
        order.status = "approved";
        addLog({ type: "buy", from: order.buyer, to: a.by, amount: order.cost, reason: order.item });
      } else {
        order.status = "declined";
        state.stars[order.buyer] += order.cost; // refund
      }
      order.answeredTs = now;
      return { ok: true };
    }

    default:
      return { ok: false, error: "Unknown action" };
  }
}
