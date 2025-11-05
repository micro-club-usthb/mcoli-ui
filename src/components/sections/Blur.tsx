function Blur() {
  return (
    <div className="bg-red w-full space-y-8">
      <h2 className="header-md font-bold underline">Blur:</h2>
      <ul className="flex items-center justify-between w-full">
        <li className="blur-none shadow-2xl rounded-md size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">None</p>
        </li>
        <li className="blur-sm shadow-2xl rounded-md size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">SM</p>
        </li>
        <li className="blur-md shadow-2xl rounded-md size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">MD</p>
        </li>
        <li className="blur-lg shadow-2xl rounded-md size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">LG</p>
        </li>
        <li className="blur-xl shadow-2xl rounded-md size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">XL</p>
        </li>
      </ul>
    </div>
  );
}

export default Blur;
