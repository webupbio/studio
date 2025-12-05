# UpBio Website - Static HTML

Professional website design agency landing page built with pure HTML, CSS, and JavaScript.

## 🚀 Features

- **Dark Netflix-style theme** with cyan (#00FFD1) accent color
- **Fully responsive** - Mobile, Tablet, and Desktop
- **Smooth animations** and transitions
- **Interactive pricing carousel** on mobile
- **Portfolio showcase** with 6 projects
- **Client testimonials** section
- **Contact links** to Instagram @upbio.pro

## 📁 File Structure

```
static-site/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # Interactive JavaScript
├── assets/
│   └── upbio-logo.png  # UpBio logo
└── README.md           # This file
```

## 🌐 How to Deploy on GitHub Pages

### Method 1: Direct Upload

1. Create a new repository on GitHub (e.g., `upbio-website`)
2. Upload all files from the `static-site` folder:
   - index.html
   - style.css
   - script.js
   - assets/ (folder with logo)
   - README.md

3. Go to **Settings** → **Pages**
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/upbio-website`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
cd static-site
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - UpBio website"

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/upbio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. Click **File** → **Add Local Repository**
3. Select the `static-site` folder
4. Click **Publish repository**
5. Enable GitHub Pages in repository settings

## 🎨 Customization

### Change Colors

Edit `style.css` and modify these variables:

```css
/* Main accent color (currently cyan #00FFD1) */
background: #00FFD1;
color: #00FFD1;

/* Change to your brand color */
background: #YOUR_COLOR;
color: #YOUR_COLOR;
```

### Update Content

- **Logo**: Replace `assets/upbio-logo.png` with your logo
- **Text**: Edit content in `index.html`
- **Portfolio images**: Update image URLs in the portfolio section
- **Instagram link**: Change all `@upbio.pro` links to your Instagram

### Add Analytics

Add Google Analytics or other tracking code before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 📱 Sections

1. **Hero** - Main landing with call-to-action buttons
2. **About** - Who We Are section with value propositions
3. **Portfolio** - Showcase of 6 projects in a grid
4. **Testimonials** - 6 client reviews with 5-star ratings
5. **Pricing** - 3 pricing plans (Start, Pro, Premium)
6. **Footer** - Links and social media

## ✨ Technical Details

- **No dependencies** - Pure HTML/CSS/JavaScript
- **SEO optimized** - Semantic HTML with meta tags
- **Fast loading** - Minimal code, optimized images
- **Cross-browser compatible** - Works on all modern browsers
- **Mobile-first design** - Responsive on all devices

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact

Instagram: [@upbio.pro](https://instagram.com/upbio.pro)

## 📄 License

This website design is for UpBio. All rights reserved.

---

**Built with ❤️ for UpBio**
