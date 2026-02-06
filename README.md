# Resume Website

A clean, professional resume website with smooth animations and a PDF-like design.

## 📁 Project Structure

```
resume-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── script.js      # JavaScript for smooth transitions
└── assets/
    └── images/        # Place your photos/icons here
```

## 🚀 Getting Started

### Local Development

1. **Open the project**
   - Navigate to the `resume-website` folder
   - Double-click `index.html` to open in your browser
   - Or use VS Code's Live Server extension for auto-refresh

2. **Customize your content**
   - Edit `index.html` to add your information
   - Replace placeholder text with your actual resume content
   - Update colors/fonts in `css/style.css` if desired

### Deploying to GitHub Pages (FREE)

1. **Initialize Git**
   ```bash
   cd resume-website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository**
   - Go to github.com and create a new repository
   - Name it `yourusername.github.io` (replace with your GitHub username)
   - Don't initialize with README

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Your site is live!**
   - Visit `https://yourusername.github.io`
   - It may take a few minutes to go live

## ✨ Features

- **Smooth animations**: Fade-in effects as you scroll
- **PDF-like design**: Professional, print-ready layout
- **Responsive**: Looks great on mobile and desktop
- **Print-friendly**: Use Cmd+P to generate a PDF
- **Clean code**: Easy to customize and maintain

## 🎨 Customization Tips

### Change Colors
Edit `css/style.css`:
- Main text: Change `#333` to your preferred color
- Links: Update `#0066cc`
- Border color: Modify `#ddd`

### Add a Profile Photo
1. Save your photo to `assets/images/profile.jpg`
2. Add to HTML header:
   ```html
   <img src="assets/images/profile.jpg" alt="Your Name" class="profile-photo">
   ```
3. Add CSS:
   ```css
   .profile-photo {
       width: 150px;
       height: 150px;
       border-radius: 50%;
       margin-bottom: 20px;
   }
   ```

### Adjust Animations
In `js/script.js`, you can:
- Disable typing effect by commenting out that section
- Change scroll animation speed
- Remove parallax effect if you prefer

## 📝 Next Steps

1. Fill in your actual resume content
2. Add a professional photo (optional)
3. Test print functionality (Cmd+P)
4. Deploy to GitHub Pages
5. Share your link!

## 💡 Pro Tips

- Keep it to one page if possible
- Use action verbs in bullet points
- Include quantifiable achievements
- Make sure all links work
- Test on mobile devices
- Validate HTML at validator.w3.org

## 🔗 Alternative Hosting Options

- **Netlify**: Drag and drop your folder at netlify.com
- **Vercel**: Connect your GitHub repo at vercel.com
- **Cloudflare Pages**: Deploy via Git at pages.cloudflare.com

All are free and easy to use!