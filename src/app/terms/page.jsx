
export const metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using Kontazio Private Limited's website and services.",
};

export default function TermsOfService() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Product Usage</h2>
            <p>All products, including APIs and Machineries, are intended for professional use only. Compliance with local regulatory authorities is the responsibility of the buyer.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Intellectual Property</h2>
            <p>All content, including product lists and regulatory documentation patterns, is the property of our company.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Limitation of Liability</h2>
            <p>We are not liable for any indirect damages resulting from the misuse of pharmaceutical intermediates or machinery provided through our platform.</p>
          </section>
        </div>
      </div>
    </div>
  );
}