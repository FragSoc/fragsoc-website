# Environment Variables Guide

This project uses environment variables to configure various services and features. This guide explains how to set them up for different environments.

## Required Environment Variables

### `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- **Description**: Your Formspree form ID for the contact form
- **Format**: String (e.g., `xpwlkawk`)
- **Where to get it**: Sign up at [Formspree.io](https://formspree.io/), create a form, and copy the form ID from the URL
- **Example**: If your form URL is `https://formspree.io/f/xpwlkawk`, your form ID is `xpwlkawk`

## Setup Instructions

### Local Development

1. **Copy the example file**:
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** with your actual values:
   ```bash
   NEXT_PUBLIC_FORMSPREE_FORM_ID=your_actual_form_id_here
   ```

3. **The `.env.local` file is ignored by Git** for security reasons.

### GitHub Actions / CI

Add these as **repository secrets** in GitHub:

1. Go to your repository settings
2. Navigate to **Secrets and variables** → **Actions**
3. Add the following secrets:
   - `FORMSPREE_FORM_ID`: Your Formspree form ID

### Production Deployment

The Docker build process automatically includes environment variables during the build step, so no additional configuration is needed on the production server.

## Security Notes

- **Never commit sensitive values** to the repository
- **Use the `.env.local`** file for local development (it's gitignored)
- **Store production values** as GitHub secrets
- **Public variables** (prefixed with `NEXT_PUBLIC_`) are embedded in the client-side bundle

## Troubleshooting

### "Formspree form ID is not configured" Error

This error occurs when the environment variable is not set. Check:

1. **Local development**: Ensure `.env.local` exists and contains the correct value
2. **GitHub Actions**: Verify the `FORMSPREE_FORM_ID` secret is set in repository settings
3. **Variable name**: Ensure you're using `NEXT_PUBLIC_FORMSPREE_FORM_ID` (note the `NEXT_PUBLIC_` prefix)

### Contact Form Not Working

1. **Check browser console** for JavaScript errors
2. **Verify Formspree form** is active and accessible
3. **Test the form ID** by visiting `https://formspree.io/f/YOUR_FORM_ID` directly
4. **Check network requests** in browser dev tools to see if the fetch request is being made

## Adding New Environment Variables

When adding new environment variables:

1. **Add to `.env.example`** with a placeholder value
2. **Update this documentation** with the new variable
3. **Add to GitHub secrets** if needed for CI/CD
4. **Update Docker build args** if the variable is needed at build time
5. **Consider whether it should be public** (client-side) or private (server-side only)
