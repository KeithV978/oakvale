import Link from 'next/link';

export default function Partnership() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="px-4 py-20 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-navy-900 mb-6">{`Let's Partner Togethe`}r</h1>
          <p className="text-xl text-navy-900 mb-8">
            {`This page is coming soon. We're excited to discuss partnership opportunities with you.`}
          </p>
          <p className="text-lg text-navy-900 mb-12">
            Get in touch with our team to explore how we can work together to transform healthcare
            learning in your region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:partnerships@oakvale.com" className="btn-primary">
              Contact Us
            </a>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mt-12 text-left">
            <h2 className="text-2xl font-bold text-health-primary mb-4">Expected Content</h2>
            <ul className="space-y-3 text-navy-900">
              <li>✓ Partnership inquiry form</li>
              <li>✓ Our partnership models (B2G, B2B, Academic)</li>
              <li>✓ Timeline and next steps</li>
              <li>✓ Case studies from existing partners</li>
              <li>✓ Direct contact information</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
