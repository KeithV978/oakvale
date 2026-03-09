import Link from 'next/link';

export default function Solutions() {
  return (
    <main className="min-h-screen bg-white">
      <div className="px-4 py-20 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">Our Solutions</h1>
          <p className="text-xl text-navy-900 mb-8">
            Explore our integrated learning solutions designed to solve real-world healthcare
            challenges.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-navy-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-health-primary mb-3">B2G Solutions</h2>
              <p className="text-navy-900 mb-4">
                Capacity building and public health training for governments and NGOs
              </p>
              <button className="text-health-primary font-semibold hover:underline">Learn more →</button>
            </div>

            <div className="bg-navy-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-health-primary mb-3">B2B Solutions</h2>
              <p className="text-navy-900 mb-4">
                Workforce development for healthcare providers and private practices
              </p>
              <button className="text-health-primary font-semibold hover:underline">Learn more →</button>
            </div>

            <div className="bg-navy-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-health-primary mb-3">Academic</h2>
              <p className="text-navy-900 mb-4">
                Curriculum partnerships and modernising clinical education
              </p>
              <button className="text-health-primary font-semibold hover:underline">Learn more →</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:solutions@oakvale.com" className="btn-primary">
              Request a Demo
            </a>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>

          <div className="bg-navy-50 p-8 rounded-lg shadow-md mt-12 text-left">
            <h2 className="text-2xl font-bold text-health-primary mb-4">Coming Soon</h2>
            <p className="text-navy-900">
              This page will feature detailed information about each of our solution offerings,
              including features, benefits, pricing tiers, and client testimonials.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
