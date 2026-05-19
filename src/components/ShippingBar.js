export default function ShippingBar() {
  return (
    <div className="border-b border-[#E6DCD4]/80 bg-white">
      <div className="bg-[#013220] text-white py-2.5 px-4 text-center">
        <a 
           href="/shipping"
          className="group text-[12px] font-luxury tracking-[0.15em] flex items-center justify-center gap-1.5"
          >
           <span className="relative">
               Standard delivery available islandwide and worldwide. Click here to know more
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
           </span>

             <svg 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 className="w-3 h-3 stroke-[2px] transition-transform duration-300 group-hover:translate-x-1"
             >
               <path d="m9 18 6-6-6-6" />
             </svg>
  </a>
</div>
    </div>
  );
}
