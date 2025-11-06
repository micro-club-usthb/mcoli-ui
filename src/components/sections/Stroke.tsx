function Stroke() {
  return (
    <div className="w-full space-y-8">
      <h2 className="header-md font-bold underline">Stroke:</h2>
      <div className="p-4 bg-white rounded-lg">
        <ul className="flex items-center justify-between w-full">
          <li className="border-[0.5px] border-border rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">0.5px</p>
          </li>
          <li className="border border-border rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">1px</p>
          </li>
          <li className="border-[1.5px] border-border rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">1.5px</p>
          </li>
          <li className="border-[2px] border-border rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold text-black">2px</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Stroke;
