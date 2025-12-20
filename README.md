# Sambhav Regmi - Portfolio Website

A modern, responsive portfolio website for Sambhav Regmi, an engineering student at IOE Pulchowk Campus, Kathmandu, Nepal.

## Features

- Animated background with floating particles
- Responsive design for all devices
- Sections: Hero, About Me, Technical Skills, Projects, Connect
- Dark theme with greyish color palette
- Integration with GitHub and LinkedIn

## Setup Instructions

### Option 1: Using shadcn CLI (Recommended)

1. Download the ZIP file from v0
2. Extract the ZIP file
3. Open your terminal and navigate to the extracted folder
4. Run the following command:

```bash
npx shadcn@latest init
```

5. Once installed, start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Option 2: Manual Setup

1. Download the ZIP file from v0
2. Extract the ZIP file
3. Open your terminal and navigate to the extracted folder
4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Your Profile Picture

Replace the placeholder image in `components/hero.tsx`:

1. Add your profile image to the `public` folder (e.g., `public/profile.jpg`)
2. In `components/hero.tsx`, update the image source:

```tsx
<img
  src="/profile.jpg"
  alt="Sambhav Regmi"
  className="w-full h-full object-cover"
/>
```

### Updating Content

- **Personal Info**: Edit `components/hero.tsx`
- **About Section**: Edit `components/about-me.tsx`
- **Projects**: Edit `components/projects.tsx`
- **Skills**: Edit `components/technical-skills.tsx`
- **Contact**: Edit `components/connect.tsx`

## Technologies Used

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript
- shadcn/ui components

## Contact

- Email: sambhavregmi999@gmail.com
- GitHub: [github.com/sambhav605](https://github.com/sambhav605)
- LinkedIn: [linkedin.com/in/sambhav-regmi-350512321](https://www.linkedin.com/in/sambhav-regmi-350512321/)
