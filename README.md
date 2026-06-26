# 🏖️ Beach Resort | Luxury Hotel Rooms

A fully responsive **Beach Resort Booking Website** built with React. Browse luxurious rooms and suites with ocean views, filter by preferences, and view detailed room information — all from a modern, fast single-page application.

---

## 🚀 Live Demo

> Run locally with `npm start` — available at `http://localhost:3000`

---

## ✨ Features

- **Room Browsing** — Browse all available resort rooms with images and details
- **Advanced Room Filtering** — Filter rooms by:
  - Room type (single, double, suite, etc.)
  - Guest capacity
  - Max price range
  - Room size (min/max sqft)
  - Breakfast included
  - Pets allowed
- **Featured Rooms** — Highlighted featured rooms on the Home page
- **Single Room Detail Page** — Full details, image carousel, and amenities for each room
- **About Page** — Resort information and story
- **Contact Page** — Contact form for guest inquiries
- **Lazy-Loaded Pages** — Code-split routes via `React.lazy` + `React.Suspense` for fast initial load
- **Scroll To Top** — Automatically scrolls to top on every route change
- **404 Error Page** — Custom styled error page for unknown routes
- **Mobile-Friendly** — Fully responsive design across all screen sizes
- **Open Graph Meta Tags** — Social media preview support

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://reactjs.org/) | 17.0.1 | UI framework |
| [React Router DOM](https://reactrouter.com/) | 5.2.0 | Client-side routing |
| [Styled Components](https://styled-components.com/) | 5.2.3 | Component-level CSS styling |
| [React Icons](https://react-icons.github.io/react-icons/) | 4.2.0 | Icon library |
| [React Scripts](https://create-react-app.dev/) | 5.0.1 | Build tooling (CRA) |

**Fonts:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

---

## 📁 Project Structure

```
Beach-Resort-Website/
├── public/
│   ├── index.html          # HTML entry point with meta tags & Google Fonts
│   ├── favicon.ico
│   ├── manifest.json
│   └── _redirects          # Netlify SPA redirect rule
├── src/
│   ├── App/
│   │   ├── App.js          # Root component — routing & layout
│   │   └── App.css         # Global app styles
│   ├── Components/
│   │   ├── About/          # About page component
│   │   ├── Banner/         # Hero banner section
│   │   ├── Contact/        # Contact form component
│   │   ├── FeaturedRooms/  # Featured rooms grid on Home
│   │   ├── Footer/         # Site-wide footer
│   │   ├── Hero/           # Hero image section
│   │   ├── ImageCarousel/  # Room image carousel
│   │   ├── Loading/        # Suspense fallback spinner
│   │   ├── Navbar/         # Navigation bar
│   │   ├── Room/           # Individual room card
│   │   ├── RoomsContainer/ # Room listing + filter UI
│   │   ├── ScrollToTop/    # Auto-scroll on route change
│   │   ├── Services/       # Resort services section
│   │   ├── StyledHero/     # Styled hero wrapper
│   │   └── Title/          # Reusable section title
│   ├── Context/
│   │   └── Context.jsx     # React Context — global room state & filtering logic
│   ├── Data/
│   │   └── data.js         # Static room data (Contentful-style structure)
│   ├── Pages/
│   │   ├── Home.jsx        # Home page
│   │   ├── Room.jsx        # All rooms listing page
│   │   ├── SingleRoom.jsx  # Individual room detail page
│   │   └── Error.jsx       # 404 not found page
│   ├── assets/             # Images and static assets
│   ├── index.js            # React DOM entry point
│   └── index.css           # Base CSS reset & variables
└── package.json
```

---

## 🔗 Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, featured rooms, services |
| `/rooms` | Rooms | Full room listing with filter sidebar |
| `/rooms/:slug` | Single Room | Detailed view with image carousel |
| `/about` | About | Resort story and info |
| `/contact` | Contact | Guest contact form |
| `*` | Error | Custom 404 page |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm v6 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/alirazaay/Beach-Resort-Website.git
cd Beach-Resort-Website

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run test suite |
| `npm run eject` | Eject CRA configuration |

---

## 🏗️ Architecture Notes

- **State Management** — Uses React Context API (`RoomContext`) to share room data and filtering state across the entire component tree without prop drilling.
- **Lazy Loading** — All page components are lazy-loaded via `React.lazy()`, reducing the initial JS bundle size and improving Time-to-Interactive.
- **Data Layer** — Room data is stored in `src/Data/data.js` as a static Contentful-compatible structure, making it easy to swap in a live Contentful or headless CMS API later.
- **Styled Components** — Component-level scoped styles using `styled-components` to avoid CSS conflicts.

---

## 👥 Team Members

| Name | Role | CMS ID |
|---|---|---|
| Ali Raza | Full Stack Developer | 023-21-0115 |
| Sejal Makhani | Frontend Developer | 023-21-0134 |

---

## 📄 License

This project is for academic purposes.
