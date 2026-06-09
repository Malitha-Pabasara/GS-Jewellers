import Image from "next/image";

export default function ShippingPolicyPage() {
  return (
    <main className="bg-[#f3f1ef] min-h-screen">
    
      {/* HERO */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/shippingbanner.webp"
          alt="Worldwide Shipping"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="font-serif-heading text-white text-[16px] tracking-[0.22em] uppercase">
            GS Jewellers
          </span>

          <h1 className="font-serif-heading text-white text-4xl md:text-6xl font-light">
            Shipping Policy
          </h1>

          <p className="text-white mt-4 max-w-xl">
            Delivering fine jewellery safely across Sri Lanka and worldwide.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-sm p-8 md:p-14">

          <div className="space-y-12 text-[#555] leading-8">

            <div>
              <h2 className="text-2xl font-medium text-[#2c2c2c] mb-4">
                Worldwide Shipping
              </h2>

              <p>
                GS Jewellers proudly ships fine jewellery worldwide.
                We operate exclusively online and currently we
                maintain only workshops.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#2c2c2c] mb-4">
                International Orders
              </h2>

              <p>
                We offer worldwide shipping for all eligible orders.
                International shipping typically starts from
                <strong> $250 USD</strong>, although rates may vary
                depending on destination, courier charges, customs
                requirements, and package specifications.
              </p>

              <p className="mt-4">
                Final shipping costs will be confirmed before your order
                is processed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#2c2c2c] mb-4">
                Shipping Within Sri Lanka
              </h2>

              <p>
                Delivery charges within Sri Lanka vary based on your
                location and the nature of the order. The applicable
                shipping fee will be communicated during order
                confirmation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#2c2c2c] mb-4">
                Processing & Delivery
              </h2>

              <p>
                Orders are processed after payment confirmation.
                Delivery times may vary depending on product
                availability, destination, customs clearance, and
                courier schedules.
              </p>

              <p className="mt-4">
                Tracking information will be provided whenever
                available.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#2c2c2c] mb-4">
                Customs & Duties
              </h2>

              <p>
                International orders may be subject to customs duties,
                import taxes, or additional fees imposed by the
                destination country. These charges are the
                responsibility of the customer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#2c2c2c] mb-4">
                Need Assistance?
              </h2>

              <p>
                For shipping inquiries, order updates, or delivery
                assistance, please contact us via WhatsApp.
              </p>

              <a
                href="https://wa.me/94774570794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-6 border border-[#d8c8b6] px-6 py-3 rounded-full text-[#2c2c2c] hover:bg-[#f8f5f2] transition"
              >
                Contact Us
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[#2c2c2c] mb-4">
                Policy Updates
              </h2>

              <p>
                GS Jewellers reserves the right to modify shipping
                methods, delivery estimates, and shipping charges at
                any time without prior notice.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}