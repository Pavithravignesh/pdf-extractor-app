# 📄 PDF Text Extractor

<div align="center">

![PDF Extractor Logo](./public/demo-screenshot1.png)

**A modern, fast, and secure web application for extracting text from PDF documents**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

[Live Demo](#) • [Features](#-features) • [Getting Started](#-getting-started) • [Documentation](#-documentation)

</div>

---

## ✨ Features

### 🚀 Core Functionality
- **Instant Text Extraction** - Extract text from PDFs in seconds using browser-based processing
- **Multi-Page Support** - Handle single and multi-page PDFs with automatic page detection
- **Live Preview** - View PDF and extracted text side-by-side with an intuitive split-screen interface
- **One-Click Copy** - Copy extracted text to clipboard instantly
- **No File Size Limits** - Process PDFs of any size directly in your browser

### 🔐 Security & Privacy
- **100% Client-Side Processing** - Your files never leave your browser
- **No Server Upload** - All processing happens locally on your device
- **Secure Authentication** - Built with Better Auth for robust user authentication
- **Privacy First** - We never store or access your files

### 🎨 Modern Design
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Ready** - Beautiful UI with gradient backgrounds and smooth transitions
- **Intuitive UX** - Clean, modern interface built with Radix UI components
- **Tailwind CSS** - Styled with the latest Tailwind CSS 4.0

### 📱 SaaS Features
- **User Authentication** - Email/Password and Social login (GitHub, Google)
- **Session Management** - Secure session handling with Better Auth
- **Dashboard** - Personalized user dashboard with history
- **Profile Management** - User profile with avatar and settings

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15.5, React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 4.0, Radix UI, Lucide Icons |
| **Authentication** | Better Auth 1.4 |
| **Database** | PostgreSQL (Neon), Prisma ORM |
| **PDF Processing** | PDF.js (Client-side) |
| **Deployment** | Vercel, Railway, or any Node.js hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Neon account)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pdf-extractor-app.git
   cd pdf-extractor-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@host:5432/database"
   DIRECT_URL="postgresql://user:password@host:5432/database"

   # Better Auth
   BETTER_AUTH_SECRET="your-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"

   # Social Auth (Optional)
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

   Generate a secret key:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Project Structure

```
pdf-extractor-app/
├── app/
│   ├── api/
│   │   └── auth/[...all]/     # Authentication API routes
│   ├── auth/                  # Authentication pages
│   ├── dashboard/             # Dashboard page
│   ├── components/            # React components
│   │   └── home/              # Home page components
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   └── ui/                    # Reusable UI components
├── lib/
│   ├── actions/               # Server actions
│   ├── auth.ts                # Better Auth configuration
│   └── utils.ts               # Utility functions
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
└── .env.local                 # Environment variables
```

---

## 🎯 Usage

### Basic Workflow

1. **Sign Up / Sign In**
   - Create an account or log in with email or social providers

2. **Upload PDF**
   - Click "Upload PDF" button
   - Select a PDF file from your device

3. **Extract Text**
   - Text is automatically extracted and displayed
   - View PDF preview alongside extracted text

4. **Copy or Download**
   - Click "Copy" to copy text to clipboard
   - Use the text in your documents or applications

### Advanced Features

- **Split View Mode** - View PDF and text side-by-side
- **PDF Only Mode** - Focus on the PDF preview
- **Text Only Mode** - Focus on the extracted text
- **Responsive Design** - Optimized for all screen sizes

---

## 🔧 Configuration

### Database Setup (Neon)

1. Create a free account at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string (both pooled and direct)
4. Update `.env.local` with your database URLs

### Social Authentication

#### GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env.local`

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project and enable Google+ API
3. Create OAuth 2.0 credentials
4. Set authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
5. Copy Client ID and Client Secret to `.env.local`

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 **Mobile** - 320px to 767px
- 📱 **Tablet** - 768px to 1023px
- 💻 **Desktop** - 1024px and above
- 🖥️ **Large Screens** - 1440px and above

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pdf-extractor-app)

### Deploy to Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and initialize
railway login
railway init
railway up
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Website: [yourwebsite.com](https://yourwebsite.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Better Auth](https://www.better-auth.com/) - Authentication for Next.js
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF rendering library
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

## 📧 Support

If you have any questions or need help, please:

- Open an [issue](https://github.com/yourusername/pdf-extractor-app/issues)
- Email: your.email@example.com
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Your Name](https://github.com/yourusername)

</div>