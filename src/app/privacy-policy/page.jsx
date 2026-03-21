export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Data Collection</h2>
            <p>We collect information when you visit our site, request a quote for APIs or Intermediates, or contact our support team. This includes your name, company details, and email address.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Use of Information</h2>
            <p>The information collected is used to process your orders, provide technical documentation (MSDS/COA), and improve our pharmaceutical services.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your sensitive industrial data and personal information.</p>
          </section>
        </div>
      </div>
    </div>
  );
}