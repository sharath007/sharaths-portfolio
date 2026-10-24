# Sharath Naik — Developer Portfolio

A responsive dark-theme React portfolio built with Vite.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
1. Extract the ZIP.
2. Open a terminal in the `sharath-portfolio` folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Personalize before publishing
Open `src/main.jsx` and replace:
- `YOUR_EMAIL@example.com`
- `https://github.com/YOUR_GITHUB`
- `https://www.linkedin.com/in/YOUR_LINKEDIN`

### Add your profile photo
1. Put your own portrait photo in the `public` folder and name it `profile.jpg`.
2. In `src/main.jsx`, find the `portrait-placeholder` block inside the hero section.
3. Replace that block with:

   ```jsx
   <img className="profile-photo" src="/profile.jpg" alt="Sharath Naik" />
   ```

4. Add this CSS to `src/styles.css`:

   ```css
   .profile-photo {
     width: 100%;
     height: 100%;
     display: block;
     object-fit: cover;
     object-position: center;
     border-radius: 160px 160px 17px 17px;
   }
   ```

Choose a well-lit head-and-shoulders photo with a simple background.

## Add project links
In `src/main.jsx`, add a GitHub or demo link to each object in the `projects` array, then render it in the project card. Only add links to repositories you can share publicly.

## Build for deployment
```bash
npm run build
```
The production site is generated in `dist/`.

## Publish for free
### Vercel
1. Push the extracted project to a GitHub repository.
2. Sign in to Vercel and import that repository.
3. Keep the build command `npm run build` and output directory `dist`.
4. Deploy.

### Netlify
1. Push the project to GitHub.
2. Import the repository in Netlify.
3. Set build command `npm run build` and publish directory `dist`.
4. Deploy.

## Accuracy checklist
- Confirm your exact degree status and expected graduation date.
- Only say “selected” for Cognizant if that accurately reflects your current status; avoid implying you have already joined.
- Verify the 90.91% soil-model accuracy against your final report before publishing.
- Add real email, LinkedIn, GitHub, certificates, and project repositories.
- Do not present the Alzheimer’s project as a medical diagnostic tool.
