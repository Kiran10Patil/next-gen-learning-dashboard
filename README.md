# Next-Gen-Learning-Dashboard #

A modern learning dashboard built with Next.js, TypeScript, Tailwind CSS, and Supabase. The dashboard displays course progress, learning streaks, and recent activity using real-time data from Supabase.

## 🚀 Live Demo  ##

https://next-gen-dashboard-azcs410db-kiran10patils-projects.vercel.app

## 📌 Features   ##

- Dynamic course progress tracking
- Supabase database integration
- Responsive dashboard UI
- Learning streak section
- Recent activity panel
- Modern dark theme design
- Real-time data fetching

## 🛠️ Tech Stack   ##

- Next.js 16
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## 📂 Project Structure  ##

```bash
app/
 ├── components/
 │    └── CourseCard.tsx
 ├── page.tsx
 ├── layout.tsx
 └── globals.css

lib/
 └── supabase.ts
```

## ⚙️ Installation  ##

```bash
git clone https://github.com/Kiran10Patil/next-gen-learning-dashboard.git

cd next-gen-learning-dashboard

npm install

npm run dev
```

## 🔑 Environment Variables  ##

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Database Schema  ##

Table: `courses`

| Column   | Type |
|----------|----------|
| id       | uuid |
| title    | text |
| progress | int4 |
| icon_name| text |
| created_at| timestamp |

## 👨‍💻 Author ##

Kiran Patil

GitHub:
https://github.com/Kiran10Patil

## Future Improvements ##

- Course management
- Analytics dashboard
- User profiles
- Progress charts
