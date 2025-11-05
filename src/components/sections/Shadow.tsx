function Shadow() {
  return (
    <div className="bg-red w-full space-y-8">
      <h2 className="header-md font-bold underline">Shadow:</h2>
      <div className="p-4 bg-white rounded-lg">
        <ul className="flex items-center justify-between w-full">
          <li className="shadow-xs rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold">XS</p>
          </li>
          <li className="shadow-sm rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold">SM</p>
          </li>
          <li className="shadow-md rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold">MD</p>
          </li>
          <li className="shadow-lg rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold">LG</p>
          </li>
          <li className="shadow-xl rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold">XL</p>
          </li>
          <li className="shadow-2xl rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold">2XL</p>
          </li>
          <li className="shadow-3xl rounded-md size-[100px] bg-white flex items-center justify-center">
            <p className="paragraph-lg font-semibold">3XL</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Shadow;
