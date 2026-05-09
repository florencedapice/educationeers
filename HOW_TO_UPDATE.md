# How to Update the Educationeers Website

You don't need to know how to code to update this site. This guide covers everything you'll need to do after launch.

---

## The Basic Idea

Every page on the site is a single file ending in `.html` — for example, `research.html` or `grants.html`. To update a page, you open that file in a text editor, find the part you want to change, edit the text, and save. That's it.

**The best free text editor to use:** [Visual Studio Code](https://code.visualstudio.com/) (free download). It color-codes the HTML so it's easier to read.

---

## How to Add a New Card to Any Page

Every resource, study, project, or grant on the site is a "card." Cards all look like this in the HTML:

```html
<article class="card" data-filters='{"type":"workshop","location":"nh"}'>
  <span class="card-tag">Workshop</span>
  <h2 class="card-title">Name of the Thing</h2>
  <p class="card-summary">One or two sentences describing it.</p>
  <div class="card-meta"><span>Organization Name</span><span>Location</span></div>
  <a href="https://link-to-website.com" target="_blank" class="card-link">Learn more →</a>
</article>
```

**To add a new card:**

1. Open the relevant `.html` file (e.g., `grants.html` for a new grant)
2. Find the last `</article>` tag before `</div>` near the bottom of the cards section
3. Paste a new card block after it
4. Fill in your content — replace the placeholder text with the real title, summary, organization, etc.
5. Update the `data-filters` so the card shows up correctly when people use the filter dropdowns (see filter guide below)
6. Save the file

### Grants cards also need an amount line — add this between the card-meta and card-link:
```html
<div class="card-amount">Up to $1,000</div>
```

### Professional Development cards also need a date in the card-meta:
```html
<div class="card-meta"><span>Organization</span><span>Location · Date</span></div>
```

---

## How the Filters Work

Each card has a `data-filters` attribute that tells the filter dropdowns which category it belongs to. It looks like this:

```
data-filters='{"type":"workshop","location":"nh"}'
```

**Location values to use:**

| State | Value to use |
|---|---|
| Maine | `me` |
| New Hampshire | `nh` |
| Vermont | `vt` |
| National | `national` |
| Global | `global` |
| Online / Anytime | `online` |

If something covers multiple states, list them separated by a space: `"location":"me nh"`

**Type values** are whatever you want — just use lowercase and match what's already in the filter dropdown for that page. To add a new type to the dropdown, find the `<select>` section near the top of the page's cards section and add a new line like:
```html
<option value="new type">Display Name</option>
```

---

## How to Edit Existing Text

Just find the text in the `.html` file and change it. The easiest way is:

1. Open the file in VS Code
2. Press **Cmd + F** (Mac) to open Find
3. Type a few words from the text you want to change
4. Click on it and edit directly

**Parts you might want to update:**
- Card titles: between `<h2 class="card-title">` and `</h2>`
- Card summaries: between `<p class="card-summary">` and `</p>`
- Links: inside `href="..."` — replace the URL with the new one
- Page intro paragraphs: between `<p>` and `</p>` near the top of each page

---

## How to Add or Change a Photo

All photos live in the `images/` folder. To swap out a header photo:

1. Save your new photo into the `images/` folder
2. Open the relevant `.html` file
3. Find the line that says `<img src="images/header-boardwalk.jpg"` (or whichever photo you're replacing)
4. Change the filename to match your new photo's filename
5. Save

Photo tips:
- Landscape (wide) photos work best for page headers
- Keep file sizes under 1MB if possible for faster loading
- `.jpg` works best for photos, `.png` for logos

---

## How to Update the About Page

Open `about.html`, find the section between `<div class="about-content">` and `</div>`, and edit the paragraph text directly.

---

## How to Update the Submit Form Link

If you ever create a new Google Form, search all `.html` files for the old form URL and replace it. In VS Code:
1. Press **Cmd + Shift + F** to search across all files
2. Paste the old URL
3. Replace with the new URL

---

## How to Publish Your Changes (GitHub Pages)

Once you've made changes locally, you need to push them to GitHub for the live site to update.

1. Open **Terminal** (search for it in Spotlight)
2. Type: `cd Documents/educationeers` and press Enter
3. Type: `git add .` and press Enter
4. Type: `git commit -m "describe what you changed"` and press Enter
5. Type: `git push` and press Enter

Your changes will be live on educationeers.org within a minute or two.

---

## Quick Reference — Which File is Which Page

| Page on the site | File to edit |
|---|---|
| Homepage | `index.html` |
| Research | `research.html` |
| Curricular Projects | `curricular-projects.html` |
| Extracurricular Projects | `extracurricular-projects.html` |
| Curricular Resources | `curricular-resources.html` |
| Extracurricular Resources | `extracurricular-resources.html` |
| Professional Development | `professional-development.html` |
| Grants | `grants.html` |
| About Us | `about.html` |
| 404 Error page | `404.html` |
| All colors and fonts | `css/styles.css` |

---

*If something breaks and you can't figure out why, reach out to whoever helped you build this — or open a new Claude Code session and describe what happened.*
