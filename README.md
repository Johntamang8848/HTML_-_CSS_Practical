# HTML & CSS — Navigation Bar and Card Design

## 1. Student Information

| | |
|---|---|
| **Name** | [TODO: your full name] |
| **Student ID** | [TODO] |
| **Course / Module** | [TODO] |
| **Level** | [TODO] |
| **Assignment title** | HTML & CSS Practical Assignment: Building a Navigation Bar and Responsive Card Layout |

## 2. Project Description

I built a small website for a fictional online course provider called **CodeLab**. The page has:

- a sticky **navigation bar** (brand, Home, About, Courses, Blog, Contact) that turns into a hamburger menu on small screens;
- an **introduction section** with a heading, short text and two buttons;
- a **course card section** with six cards, arranged in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile);
- a **footer** with the brand blurb, quick links and contact details.

The assignment was developed in stages. Each stage is kept in the `parts/` folder, and the finished page is `index.html`.

## 3. Technologies Used

- HTML5 (semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`, `address`)
- CSS3 with custom properties (variables)
- CSS Flexbox
- CSS Grid
- Responsive CSS (media queries, `aspect-ratio`, `object-fit`)
- A small amount of JavaScript for the mobile menu toggle

## 4. Project Structure

```
html-css-assignment/
├── index.html            # complete webpage (Part D)
├── css/
│   └── style.css
├── js/
│   └── script.js         # mobile menu toggle
├── images/               # course card illustrations (SVG)
├── parts/                # earlier stages
│   ├── navbar.html       # Part A
│   ├── card.html         # Part B
│   └── card-layout.html  # Part C
├── screenshots/
└── README.md
```

## 5. Learning Resources

> Only list resources you really used, and write the last two columns in your own words.

| No. | Resource | Topic Learned | What I Learned | How I Applied It |
|-----|----------|---------------|----------------|------------------|
| 1 | [TODO: e.g. teacher's lecture/material] | [TODO] | [TODO] | [TODO] |
| 2 | [TODO: e.g. university material] | [TODO] | [TODO] | [TODO] |
| 3 | [TODO: e.g. YouTube tutorial (title + channel)] | [TODO] | [TODO] | [TODO] |
| 4 | [TODO: e.g. MDN Web Docs (page title)] | [TODO] | [TODO] | [TODO] |

## 6. Screenshots

### Navigation Bar
![Navigation Bar](screenshots/navigation-bar.png)

### Card Design
![Card Design](screenshots/card-design.png)

### Card Layout
![Card Layout](screenshots/card-layout.png)

### Responsive Design
![Responsive Design](screenshots/responsive-design.png)

### Complete Page
![Complete Page](screenshots/full-page.png)

## 7. Key Concepts Learned

**Semantic HTML.** Elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` and `<footer>` describe what each part of the page is. Screen readers and search engines can use them, whereas a page made only of `<div>` elements gives no such information. A navigation menu is a list of links, so I used `<ul>` and `<li>` inside `<nav>`. Each card is an `<article>` because it is self-contained.

**CSS selectors.** I used element selectors (`body`), class selectors (`.card`, `.btn`), descendant selectors (`.nav-links a`), pseudo-classes (`:hover`, `:focus-visible`) and the universal selector (`*`) for the reset. When two rules have the same specificity, the one written later wins, so I placed `.btn-secondary` after `.btn:hover`.

**Box model.** Every element is content, padding, border and margin. With `box-sizing: border-box`, padding and borders are included in the element's width, which makes sizes easier to predict. I used padding to make the nav links and buttons larger to click, and margin to centre the `.container`.

**Flexbox.** Flexbox arranges items in one direction. I used it for the navbar (`justify-content: space-between` and `align-items: center`), the link list, the inside of each card (`flex-direction: column`) and the footer.

**Grid.** Grid arranges items in rows and columns together. The card section uses `grid-template-columns: repeat(3, 1fr)` and `gap`. I chose Grid for the card layout because the cards form a two-dimensional arrangement of equal columns, and Grid does not need width calculations the way Flexbox wrapping does.

**Typography.** The page uses one font stack (`Segoe UI`, `system-ui`, Arial) throughout, with a consistent size scale: headings are larger and in the dark navy colour, body text is smaller and grey. The line length of the intro text is limited with `max-width: 60ch` for readability.

**Spacing.** Spacing comes from `gap` (between flex/grid items), `padding` (inside elements) and a shared `.container` (page edges), so the page keeps the same rhythm.

**Hover effects.** The nav links change colour and show an underline, the cards lift with `transform: translateY(-6px)` and a larger `box-shadow`, and the card image zooms slightly. `transition` makes each change smooth. I also added `:focus-visible` so keyboard users get the same feedback.

**Responsive design.** Media queries change the layout at 900px (grid goes from 3 to 2 columns) and at 720px and 600px (hamburger menu, then a single column). The `viewport` meta tag is needed for these to work on phones.

## 8. Challenges and Solutions

> Replace these with problems you really faced. Keep them only if they match your experience.

1. **Keeping all cards the same height.** [TODO: describe in your own words. In my code the fix was to let the grid stretch each row, make the card a flex column and use `margin-top: auto` on the info row so that the buttons line up.]
2. **The sticky navbar covered section headings when using anchor links.** [TODO: describe in your own words. In my code the fix was `scroll-padding-top` on `html`.]

## 9. AI Usage Disclosure

I used Claude (Anthropic) as an AI assistant. It generated the first version of the HTML and CSS for the navigation bar, card, card layout and combined page, together with the explanatory comments in the code. [TODO: describe what you changed or tested yourself, for example colours, text, images and any fixes.] I reviewed the code and can explain it.

## 10. GitHub Repository

[TODO: https://github.com/your-username/html-css-assignment]
