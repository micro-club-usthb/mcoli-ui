function BorderRadius() {
  return (
    <div className="w-full space-y-8">
      <h2 className="header-md font-bold underline">Border Radius:</h2>
      <ul className="flex items-center justify-between w-full">
        <li className="border border-gray-300 rounded-sm size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">SM</p>
        </li>
        <li className="border border-gray-300 rounded-md size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">MD</p>
        </li>
        <li className="border border-gray-300 rounded-lg size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">LG</p>
        </li>
        <li className="border border-gray-300 rounded-xl size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">XL</p>
        </li>
        <li className="border border-gray-300 rounded-2xl size-[100px] bg-white flex items-center justify-center">
          <p className="paragraph-lg font-semibold text-black">2XL</p>
        </li>
      </ul>
    </div>
  );
}

export default BorderRadius;
