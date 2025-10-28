# DemandCapture Website

Simple static HTML website for DemandCapture.

## Structure

- `index.html` - Main landing page
- `.htaccess` - Apache configuration for routing and caching
- `public/` - Static assets (images, logos, etc.)

## Deployment

This site is automatically deployed to cPanel via Git integration.

When you push to the `main` branch, cPanel will:
1. Copy `index.html` to the web root
2. Copy `.htaccess` for proper routing
3. Copy all assets from `public/` folder
4. Set proper permissions

## Local Development

Simply open `index.html` in your browser or use any local web server:

```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js http-server
npx http-server
```

Then visit `http://localhost:8000`

## Technologies

- Pure HTML5
- CSS3 (embedded in HTML)
- Vanilla JavaScript (for tracking scripts)

No build process required!
