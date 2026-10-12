# ⭐ Star Shop

A pink, glittery little app for Jelena and Nikola. They send each other stars,
count them like coins, and spend them in their own shop (the other person has to
say yes first). It works on iPhone and Android and can be added to the home screen like a real app.

---

## How it works

- **Start screen:** pick Jelena or Nikola. The phone remembers who you are.
- **Sending stars:** gifts are free. You pick how many stars to send, and the other
  person's balance goes up. Your balance is "stars received minus stars spent".
- **Quick-send buttons:** one tap sends a fixed amount for a category
  (Natjecanja, 5 u skoli, Bicepsi...). There's a confirm popup so nobody sends 50 stars by accident.
- **Shop:** each person has 13 items. Buying sends a request to the other person.
  The stars are **held** while they wait. If the other person says **Allow**, the stars
  are spent. If they say **No**, the stars are refunded.
- **No stock limits:** you can buy the same item as many times as you can afford.
- **Live updates:** the app checks for news every 4 seconds, so each phone sees stars and
  requests show up on its own, with a popup.

---

## ✏️ How to change the placeholder names

Open **`public/config.js`** in any text editor (Notepad, TextEdit, VS Code). That's the only file you need.

### 1. Rename the stars (a different name for each person)

```js
starName: {
  Jelena: "Star Name (Jelena)",
  Nikola: "Star Name (Nikola)",
},
```
The name under `Jelena` is what **Jelena's own stars** are called (her balance and shop), and the name under `Nikola` is what **Nikola's own stars** are called.
When Jelena **sends** stars to Nikola, they are called by **Nikola's** name (they become his stars). When Nikola sends stars to Jelena, they are called by **Jelena's** name.
Change the text inside the quotes, for example `Jelena: "Zvjezdice"`.

### 2. Rename the shop items

```js
{ name: "Jelena Item 1", cost: 1 },
```
Change the text inside the quotes after `name:`. For example:
```js
{ name: "Massage", cost: 1 },
```
Don't touch the `cost` unless you want a different price. The prices are already set
to what you asked for.

- **Jelena's shop:** the list under `Jelena:` (costs 1, 2, 3, 3, 3, 4, 5, 6, 7, 10, 20, 75, 100)
- **Nikola's shop:** the list under `Nikola:` (costs 1, 2, 3, 4, 5, 6, 7, 10, 12, 13, 20, 75, 100)

### 3. Change the quick-send buttons

The `quick:` section at the bottom of `config.js`:
```js
{ category: "Natjecanja", amounts: [50, 39, 34] },
```
- `category` is the name shown above the buttons.
- `amounts` are the buttons. `[50, 39, 34]` makes three buttons.
- The person whose name is on the list is the one who **sends** the stars.

Rules are standard JavaScript: keep the quotes, the commas and the curly brackets exactly as they are.

### 4. (Optional) Change the app title
```js
appTitle: "Star Shop",
```

After editing, **publish again** (see below) and the phones will update. If a phone
still shows the old names, close the app fully and open it again.

---

## 🚀 How to publish on Netlify (step by step)

This app needs a tiny bit of server (so both phones share the same stars). Netlify gives you that for
free through "Functions" and "Blobs". The easiest way that always works is **GitHub + Netlify**.

### Option A: GitHub + Netlify (recommended, easiest to update later)

1. **Make a GitHub account** at https://github.com (free).
2. Click the **+** in the top right, then **New repository**. Name it `star-shop`.
   Choose **Private** if you want, then click **Create repository**.
3. On the new repo page click **uploading an existing file**.
4. **Unzip** the project folder on your computer. Open it and **drag everything inside**
   (the folders `public` and `netlify`, plus `package.json`, `netlify.toml`, `README.md`,
   `.gitignore`) into the GitHub upload box. Make sure the folders keep their structure.
   Click **Commit changes**.
5. **Make a Netlify account** at https://app.netlify.com (use "Sign up with GitHub").
6. Click **Add new project**, then **Import an existing project**, then **GitHub**.
   Allow access and pick your `star-shop` repo.
7. Netlify reads `netlify.toml` and fills in all the settings by itself.
   Don't change anything. Click **Deploy**.
8. Wait about a minute. When it says **Published**, click the link
   (something like `https://random-name-123.netlify.app`).
9. *(Optional)* Go to **Site configuration → Change site name** and pick a nicer address,
   for example `jelena-nikola-stars.netlify.app`.

**To update later** (new item names, for example): edit `public/config.js` on GitHub
(click the file, then the ✏️ pencil icon, then **Commit changes**). Netlify republishes automatically.

### Option B: Netlify CLI (if you're comfortable with a terminal)

1. Install Node.js from https://nodejs.org
2. In the project folder run:
   ```
   npm install
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```
3. When asked, create a new project, and use `public` as the publish folder.

> **Why not plain drag-and-drop?** Dropping only the `public` folder on Netlify Drop
> publishes the pretty site but **not** the server part, so the app would run in
> "Demo mode" (stars are only saved on one phone, not shared). Use option A or B for the real thing.

---

## 📱 How to put it on your phone's home screen

Open your Netlify link on each phone:

**Android (Chrome):** a pink popup appears at the bottom of the screen. Tap **Add**, then confirm.
If you don't see it, tap the **⋮** menu, then **Install app** (or **Add to Home screen**).

**iPhone (Safari):** Apple doesn't allow automatic install buttons, so the app shows a pink popup
with instructions: tap the **Share** button (square with an arrow), scroll down, tap
**Add to Home Screen**, then **Add**. It must be opened in **Safari** the first time.

Then pick your name (Jelena or Nikola) on each phone. Done! 💖

---

## 🔧 Good to know

- **Demo mode banner:** if you see a yellow "Demo mode" message, the app can't reach the server
  (for example when opened from a file on your computer). Everything still works, but only on that one phone.
- **Reset the stars:** in Netlify go to **Blobs** (in the project menu), open the `star-shop` store,
  and delete the key `state`. Everyone starts again from 0.
- **Not a bank:** the app trusts both players. There are no passwords, so anyone with the link who
  taps your name can act as you. Keep the link private and don't share it.
- **Folder overview:**
  ```
  public/config.js            ← names, prices, quick buttons (edit this)
  public/index.html           ← the app and the glittery design
  public/logic.mjs            ← the rules (stars, shop, approvals)
  public/manifest.webmanifest ← "install like an app" info + icons
  public/sw.js                ← lets the app load fast/offline
  netlify/functions/state.mjs ← the shared storage for both phones
  netlify.toml, package.json  ← Netlify settings
  ```
