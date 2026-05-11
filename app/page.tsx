import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SemesterCard from "../components/SemesterCard";
import Footer from "../components/Footer";

export default function HomePage() {
  const semesters = [3, 4, 5, 6, 7, 8];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <Hero />

      {/* Semester Cards */}
      <section id="notes" className="mx-auto max-w-6xl px-6 py-12">
        <h3 className="text-3xl font-bold">Semester-wise Resources</h3>
        <p className="mt-2 text-gray-600">
          Choose your semester and access notes, PYQs, and important questions.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {semesters.map((sem) => (
            <SemesterCard key={sem} semester={sem} />
          ))}
        </div>
      </section>

      {/* Premium Section */}
      <section id="premium" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-3xl font-bold">Premium PDF Access</h3>
          <p className="mt-3 text-gray-600">
            Read content for free on the website. Download printable premium
            PDFs for only ₹33 after secure payment.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>✔ Full PDF Download</li>
            <li>✔ Printable Version</li>
            <li>✔ Premium Revision Notes</li>
            <li>✔ Important Exam Questions</li>
          </ul>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Select a subject to purchase premium PDF
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
