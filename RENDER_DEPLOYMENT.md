# Render Deployment Guide

This guide will walk you through deploying this Node.js/Express application to Render.

## Prerequisites

- A GitHub/GitLab/Bitbucket account with your code pushed to a repository
- A Render account (sign up at [render.com](https://render.com) - free tier available)

## Deployment Steps

### Method 1: Using render.yaml (Recommended - Easiest)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Connect to Render**
   - Log in to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" and select "Blueprint"
   - Connect your Git repository
   - Render will automatically detect `render.yaml` and configure your service

3. **Deploy**
   - Render will automatically deploy your service
   - You'll get a URL like `https://wt-assignment5.onrender.com`

### Method 2: Manual Setup

1. **Create a new Web Service**
   - Log in to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" and select "Web Service"
   - Connect your Git repository

2. **Configure the Service**
   - **Name:** `wt-assignment5` (or your preferred name)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Root Directory:** `Assignment5` (if your code is in a subdirectory)

3. **Environment Variables**
   - Render automatically sets `PORT`
   - `NODE_ENV` is automatically set to `production`

4. **Deploy**
   - Click "Create Web Service"
   - Render will start building and deploying

## Important Notes

- **Free Tier:** Render's free tier services spin down after 15 minutes of inactivity. The first request after spin-down may take 30-50 seconds.
- **Port:** Your app already uses `process.env.PORT || 3000`, so Render's automatic PORT assignment will work perfectly.
- **Auto-Deploy:** Render automatically deploys on every push to your main branch (configurable).

## Troubleshooting

### Build Fails
- Check that `package.json` has correct dependencies
- Ensure Node.js version is compatible (Render defaults to Node 18+)

### App Crashes on Start
- Check Render logs in the dashboard
- Verify `PORT` is being used (it's automatically set by Render)
- Ensure all dependencies are listed in `package.json`, not just `devDependencies`

### Service Unavailable
- Free tier services may be spinning up (first request takes time)
- Check service status in Render dashboard
- Review logs for errors

## Updating Your Deployment

Simply push changes to your connected Git branch:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Render will automatically detect changes and redeploy.

## Custom Domain (Optional)

1. Go to your service settings in Render dashboard
2. Click "Custom Domains"
3. Add your domain and follow DNS configuration instructions

## Need Help?

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- Check your service logs in the Render dashboard

