# cPanel Node.js Application Setup Guide

## Step 1: Create Node.js Application in cPanel

1. **Log into cPanel**
2. **Navigate to "Setup Node.js App"** (under Software section)
3. **Click "Create Application"**
4. **Configure the application:**
   - **Node.js version**: Select latest available (14.x or higher)
   - **Application mode**: Production
   - **Application root**: `repositories/demandcapture`
   - **Application URL**: `appointments.demandcapture.com` (or your domain)
   - **Application startup file**: `server.js`
   - **Passenger log file**: Leave default

5. **Click "Create"**

## Step 2: Set up Git Deployment

1. **Navigate to "Git™ Version Control"** in cPanel
2. **Click "Create"**
3. **Configure repository:**
   - **Clone URL**: `https://github.com/ChrisAnz19/demandcapture.git`
   - **Repository Path**: `/home/demaumbe/repositories/demandcapture`
   - **Repository Name**: `demandcapture`
   - **Branch**: `main`

4. **Click "Create"**
5. **Enable "Pull or Deploy" tab**
6. **Configure deployment path** (should already be set in .cpanel.yml)

## Step 3: Environment Setup

After Git deployment completes:

1. Go back to **"Setup Node.js App"**
2. Click on your application
3. Verify the **"Run NPM Install"** option is enabled
4. Click **"Restart"** to start the application

## Step 4: Verify Deployment

1. Check application status in "Setup Node.js App" - should show "Running"
2. Visit your domain: `https://appointments.demandcapture.com`
3. Check logs in cPanel if issues occur

## Deployment Workflow

After initial setup, future deployments are automatic:

```bash
# On your local machine:
npm run build          # Build the React app
git add .
git commit -m "Update"
git push origin main
```

cPanel will automatically:
1. Pull the latest code
2. Copy files to application directory
3. Run `npm install --production`
4. Run `npm run build`
5. Restart the Node.js application (automatic with Passenger)

## Troubleshooting

### Application won't start
- Check Node.js version compatibility
- Verify `server.js` is in the root directory
- Check logs in cPanel Node.js App interface

### Build folder missing
- Ensure `.gitignore` allows `build/` folder to be committed
- Or let cPanel build it (current .cpanel.yml configuration)

### Port conflicts
- The app uses `process.env.PORT` which cPanel sets automatically
- Don't hardcode port 3000 in production

### Dependencies not installing
- Check that `package.json` is in repository root
- Verify npm is available in cPanel (check Node.js app logs)

## Important Files

- `server.js` - Express server that serves the React app
- `.cpanel.yml` - Deployment configuration
- `package.json` - Includes Express dependency and server script
- `build/` - Built React files (can be committed or built on server)

