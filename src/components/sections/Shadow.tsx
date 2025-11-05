function Shadow() {
  return (
    <div className="bg-red w-full space-y-8">
      <h2 className="header-md font-bold underline">Shadow:</h2>
      <div className="p-4 bg-white rounded-lg">
        <ul className="flex items-center justify-between w-full">
          <li className="rounded-md size-[80px] bg-white shadow-xs"></li>
          <li className="rounded-md size-[80px] bg-white shadow-sm"></li>
          <li className="rounded-md size-[80px] bg-white shadow-md"></li>
          <li className="rounded-md size-[80px] bg-white shadow-lg"></li>
          <li className="rounded-md size-[80px] bg-white shadow-xl"></li>
          <li className="rounded-md size-[80px] bg-white shadow-2xl"></li>
          <li className="rounded-md size-[80px] bg-white shadow-3xl"></li>
        </ul>
      </div>
    </div>
  );
}

export default Shadow;
