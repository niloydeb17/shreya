# 🍪 Shreya - Fortune Cookie App

A magical fortune cookie application built with Next.js 15, TypeScript, and Tailwind CSS. Experience the joy of cracking digital fortune cookies with beautiful animations and interactive features.

## ✨ Features

- **🎬 Magical Loading Animation**: SparklesText component with animated sparkles during cookie cracking
- **🎯 Category-Specific Fortunes**: Choose from Vision, Work, Life, and Mystic categories
- **📋 Copy to Clipboard**: Easily copy your fortune to share with others
- **💾 Save as JSON**: Download your fortune as a JSON file with metadata
- **🔄 New Fortune Generation**: Get fresh fortunes with a single click
- **🎨 Beautiful UI**: Modern design with smooth animations and responsive layout
- **📱 Mobile Responsive**: Optimized for all device sizes

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🎮 How to Use

1. **Open the App**: Navigate to the homepage
2. **Select Category**: Use the category button in the top-right to cycle through options
3. **Crack Cookie**: Click the "Crack Cookie" button to open the modal
4. **Watch Animation**: Enjoy the "Cracking a new cookie..." animation with sparkles
5. **Read Fortune**: Discover your personalized fortune message
6. **Interact**: Copy, save, or generate a new fortune

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/shreya.git
cd shreya

# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 📁 Project Structure

```
src/
├── app/
│   └── page.tsx              # Main homepage with video background
├── components/
│   └── ui/
│       ├── button.tsx       # Shadcn button component
│       ├── dialog.tsx       # Shadcn dialog component
│       ├── cookie-modal.tsx # Fortune cookie modal with animations
│       ├── glow-effect.tsx  # Animated background effects
│       └── sparkles-text.tsx # Animated text with sparkles
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Key Components

### SparklesText
Animated text component with floating sparkles that creates magical loading animations.

### CookieModal
Interactive modal featuring:
- Fortune cookie image
- Category-specific fortune messages
- Copy/Save functionality
- New fortune generation
- Loading animations

### GlowEffect
Versatile animated background component with multiple animation modes.

## 📝 Fortune Categories

- **Vision**: Creative and inspirational fortunes
- **Work**: Career and professional guidance
- **Life**: Personal and life wisdom
- **Mystic**: Spiritual and mysterious insights

## 🚀 Deployment

The app is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ and lots of fortune cookies 🍪
