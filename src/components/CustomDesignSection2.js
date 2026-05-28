export default function CustomDesignSection2() {
  return (
    <section className="texture-facet bg-[#f3f1ef] py-20">
      
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center px-6">
        
        {/* LEFT SIDE - IMAGE */}
       <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-sm shadow-lg">
          <img
            src="/images/crafting.webp"
            alt="Jewellery Crafting"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="text-center md:text-left space-y-6">
          
          <h2 className="font-serif-heading text-4xl leading-tight text-[#013220]">
            Customise Your Own Unique Design
          </h2>

          <p className="text-[15px] text-[#013220]/80 leading-relaxed max-w-md mx-auto md:mx-0">
            Bring your visions to life and tailor every detail to reflect your style and individuality.
            Explore endless possibilities and make your jewellery as unique as you are.
          </p>

          <button className="mt-4 px-10 py-3 border border-[#013220] text-[13px] tracking-[0.25em] uppercase text-[#013220] relative overflow-hidden transition-all duration-500 group hover:shadow-[0_10px_30px_rgba(1,50,32,0.25)]">
            
            <span className="absolute inset-0 bg-[#013220] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

            <span className="relative group-hover:text-white transition-colors duration-300">
              Get Started
            </span>

          </button>

        </div>

      </div>
    </section>
  );
}