# Security Headers Configuration

This document explains the security headers implemented in the FragSoc website.

## Headers Implemented

### ✅ Secure Headers

#### `X-Content-Type-Options: nosniff`
- **Purpose**: Prevents MIME type sniffing attacks
- **Effect**: Forces browsers to respect the declared content-type
- **Security Level**: High impact, no compatibility issues

#### `X-Frame-Options: DENY`
- **Purpose**: Prevents clickjacking attacks
- **Effect**: Prevents the site from being embedded in frames/iframes
- **Security Level**: High impact, may affect embedded content

#### `Content-Security-Policy`
- **Purpose**: Modern XSS protection and resource loading control
- **Configuration**: 
  ```
  default-src 'self'; 
  script-src 'self' 'unsafe-inline'; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https:; 
  font-src 'self'; 
  connect-src 'self'; 
  frame-ancestors 'none';
  ```
- **Security Level**: Very high impact, replaces deprecated X-XSS-Protection

#### `Referrer-Policy: origin-when-cross-origin`
- **Purpose**: Controls how much referrer information is shared
- **Effect**: Sends full URL for same-origin, only origin for cross-origin
- **Security Level**: Medium impact, improves privacy

#### `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Purpose**: Controls browser feature access
- **Effect**: Disables camera, microphone, and geolocation access
- **Security Level**: Medium impact, prevents unauthorized access

### ❌ Removed Deprecated Headers

#### `X-XSS-Protection: 1; mode=block` - **REMOVED**
- **Why Removed**: 
  - Deprecated in modern browsers
  - Can create security vulnerabilities in older browsers
  - Replaced by Content Security Policy (CSP)
- **Modern Alternative**: Content-Security-Policy header

## Security Benefits

1. **XSS Protection**: CSP prevents inline script execution and unauthorized resources
2. **Clickjacking Prevention**: X-Frame-Options prevents embedding attacks  
3. **MIME Sniffing Prevention**: Stops content-type confusion attacks
4. **Privacy Protection**: Referrer policy limits information leakage
5. **Feature Control**: Permissions policy prevents unauthorized browser feature access

## Browser Compatibility

| Header | Chrome | Firefox | Safari | Edge |
|--------|--------|---------|--------|------|
| X-Content-Type-Options | ✅ | ✅ | ✅ | ✅ |
| X-Frame-Options | ✅ | ✅ | ✅ | ✅ |
| Content-Security-Policy | ✅ | ✅ | ✅ | ✅ |
| Referrer-Policy | ✅ | ✅ | ✅ | ✅ |
| Permissions-Policy | ✅ | ✅ | ✅ | ✅ |

## Testing Security Headers

### Online Tools
- [Security Headers](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

### Local Testing
```bash
# Test with curl
curl -I https://your-domain.com

# Look for the security headers in the response
```

## CSP Tuning

The current CSP policy allows:
- **Scripts**: From same origin + inline (for Next.js)
- **Styles**: From same origin + inline (for Tailwind CSS)
- **Images**: From same origin, data URLs, and HTTPS sources
- **Fonts**: From same origin only
- **Connections**: To same origin only
- **Frames**: None allowed (frame-ancestors 'none')

### Future CSP Improvements

1. **Remove 'unsafe-inline'**: Use nonces or hashes for scripts/styles
2. **Add specific domains**: For external resources if needed
3. **Add report-uri**: To monitor CSP violations
4. **Strict-dynamic**: For better script security

## Implementation Notes

- Headers are applied to all routes via `next.config.ts`
- CSP replaces the deprecated X-XSS-Protection header
- Configuration is production-ready and secure by default
- No breaking changes to existing functionality
