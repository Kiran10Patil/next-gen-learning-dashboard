import { supabase } from "../lib/supabase";
import CourseCard from "./components/CourseCard";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("progress", { ascending: true });
    console.log("COURSES:", courses);
    console.log("ERROR:", error);

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        <nav className="space-y-4">
          <p className="bg-zinc-800 p-2 rounded-lg">🏠 Home</p>
          <p>📚 Courses</p>
          <p>📊 Analytics</p>
          <p>⚙️ Settings</p>
        </nav>
      </aside>

      {/* Content */}
      <section className="flex-1 p-8">
        {/* Hero Card */}
        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h1 className="text-3xl font-bold">
            Welcome Back, Kiran Patil 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            🔥 24 Day Learning Streak
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-xl mb-4">
            {error.message}
          </div>
        )}

        {/* Dynamic Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
            />
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-zinc-900 p-5 rounded-2xl mt-6">
          <h2 className="text-xl font-bold mb-4">
            Recent Activity
          </h2>

          <p className="text-zinc-400">
            Completed React Hooks Module
          </p>

          <p className="text-zinc-400">
            Finished TypeScript Basics
          </p>

          <p className="text-zinc-400">
            Started Next.js Routing
          </p>
        </div>
      </section>
    </main>
  );
}