import Link from 'next/link';

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="px-4 py-20 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-navy-900 mb-6 text-center">Our Impact</h1>
          <p className="text-xl text-navy-900 mb-12 text-center">
            Discover how we're transforming healthcare through tailored learning solutions
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-health-primary mb-4">
                Empowering Community Health Workers
              </h2>
              <p className="text-navy-900 mb-6">
                Our partnership with Healthy Entrepreneurs Nigeria successfully trained 50 community
                health workers through our tailored curriculum and digital delivery model, setting the
                stage for scalable state-wide implementation.
              </p>
              <div className="bg-navy-50 p-4 rounded text-sm">
                <p className="font-semibold text-navy-900 mb-2">Key Metrics:</p>
                <ul className="text-navy-900 space-y-1">
                  <li>✓ 50 CHWs trained</li>
                  <li>✓ 95% completion rate</li>
                  <li>✓ Multiple states ready for rollout</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-health-primary mb-4">
                Advancing Clinical Leadership
              </h2>
              <p className="text-navy-900 mb-6">
                We've partnered with leading Nigerian universities to bridge the gap between medical
                academics and practical healthcare management, modernising curricula for real-world
                application.
              </p>
              <div className="bg-navy-50 p-4 rounded text-sm">
                <p className="font-semibold text-navy-900 mb-2">Key Metrics:</p>
                <ul className="text-navy-900 space-y-1">
                  <li>✓ 3 university partnerships</li>
                  <li>✓ 200+ clinical leaders trained</li>
                  <li>✓ Integrated curriculum framework</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold text-health-primary mb-6">More Case Studies Coming</h2>
            <p className="text-navy-900 text-lg mb-6">
              We're documenting additional case studies showcasing our work with healthcare providers,
              government health systems, and academic institutions across the Global South.
            </p>
            <p className="text-navy-900">
              Each case study will detail our approach, the challenges we solved, the outcomes achieved,
              and the lasting impact on healthcare quality and capacity.
            </p>
          </div>

          <div className="text-center">
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
