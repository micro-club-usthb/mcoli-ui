function BackgroundBlur() {
  return (
    <div className="w-full space-y-8">
      <h2 className="header-md font-bold underline">Background Blur:</h2>

      <div className="relative p-4 w-full rounded-lg overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')",
          }}
        />

        <ul className="flex items-center justify-between w-full">
          <li className="backdrop-blur-none shadow-2xl rounded-md size-[100px] bg-white/20 flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">None</p>
          </li>
          <li className="backdrop-blur-[4px] shadow-2xl rounded-md size-[100px] bg-white/20 flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">SM</p>
          </li>
          <li className="backdrop-blur-[6px] shadow-2xl rounded-md size-[100px] bg-white/20 flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">MD</p>
          </li>
          <li className="backdrop-blur-[12px] shadow-2xl rounded-md size-[100px] bg-white/20 flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">LG</p>
          </li>
          <li className="backdrop-blur-[16px] shadow-2xl rounded-md size-[100px] bg-white/20 flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">XL</p>
          </li>

          <li className="backdrop-blur-[21px] shadow-2xl rounded-md size-[100px] bg-white/20 flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">2XL</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BackgroundBlur;
