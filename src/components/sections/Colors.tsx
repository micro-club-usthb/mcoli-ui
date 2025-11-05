function Colors() {
  return (
    <div className="bg-red w-full space-y-8">
      <h2 className="header-md font-bold underline">Colors:</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="header-xs font-semibold text-primary">Primary</h3>
          <ul className="flex border w-fit border-primary">
            <li className="size-[80px] bg-primary-50"></li>
            <li className="size-[80px] bg-primary-100"></li>
            <li className="size-[80px] bg-primary-200"></li>
            <li className="size-[80px] bg-primary-300"></li>
            <li className="size-[80px] bg-primary-400"></li>
            <li className="size-[80px] bg-primary-500"></li>
            <li className="size-[80px] bg-primary-600"></li>
            <li className="size-[80px] bg-primary-700"></li>
            <li className="size-[80px] bg-primary-800"></li>
            <li className="size-[80px] bg-primary-900"></li>
            <li className="size-[80px] bg-primary-950"></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="header-xs font-semibold text-gray-500">
            Neutral (Gray)
          </h3>
          <ul className="flex border w-fit border-gray-500">
            <li className="size-[80px] bg-gray-50"></li>
            <li className="size-[80px] bg-gray-100"></li>
            <li className="size-[80px] bg-gray-200"></li>
            <li className="size-[80px] bg-gray-300"></li>
            <li className="size-[80px] bg-gray-400"></li>
            <li className="size-[80px] bg-gray-500"></li>
            <li className="size-[80px] bg-gray-600"></li>
            <li className="size-[80px] bg-gray-700"></li>
            <li className="size-[80px] bg-gray-800"></li>
            <li className="size-[80px] bg-gray-900"></li>
            <li className="size-[80px] bg-gray-950"></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="header-xs font-semibold">Accent</h3>
          <ul className="flex w-fit">
            <li className="size-[80px] bg-electric-cyan"></li>
            <li className="size-[80px] bg-mint-green"></li>
            <li className="size-[80px] bg-teal-green"></li>
            <li className="size-[80px] bg-teal"></li>
            <li className="size-[80px] bg-golden-sun"></li>
            <li className="size-[80px] bg-sunset-orange"></li>
            <li className="size-[80px] bg-rose-pink"></li>
            <li className="size-[80px] bg-indigo-blue"></li>
            <li className="size-[80px] bg-amber-mustard"></li>
            <li className="size-[80px] bg-sky-blue"></li>
            <li className="size-[80px] bg-soft-blue"></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="header-xs font-semibold text-success-200">Success</h3>
          <ul className="flex w-fit border border-success-200">
            <li className="size-[80px] bg-success-50"></li>
            <li className="size-[80px] bg-success-100"></li>
            <li className="size-[80px] bg-success-200"></li>
            <li className="size-[80px] bg-success-300"></li>
            <li className="size-[80px] bg-success-400"></li>
            <li className="size-[80px] bg-success-500"></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="header-xs font-semibold text-warning-200">Warning</h3>
          <ul className="flex w-fit border border-warning-200">
            <li className="size-[80px] bg-warning-50"></li>
            <li className="size-[80px] bg-warning-100"></li>
            <li className="size-[80px] bg-warning-200"></li>
            <li className="size-[80px] bg-warning-300"></li>
            <li className="size-[80px] bg-warning-400"></li>
            <li className="size-[80px] bg-warning-500"></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="header-xs font-semibold text-error-200">Error</h3>
          <ul className="flex w-fit border border-error-200">
            <li className="size-[80px] bg-error-50"></li>
            <li className="size-[80px] bg-error-100"></li>
            <li className="size-[80px] bg-error-200"></li>
            <li className="size-[80px] bg-error-300"></li>
            <li className="size-[80px] bg-error-400"></li>
            <li className="size-[80px] bg-error-500"></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="header-xs font-semibold text-info-200">Info</h3>
          <ul className="flex w-fit border border-info-200">
            <li className="size-[80px] bg-info-50"></li>
            <li className="size-[80px] bg-info-100"></li>
            <li className="size-[80px] bg-info-200"></li>
            <li className="size-[80px] bg-info-300"></li>
            <li className="size-[80px] bg-info-400"></li>
            <li className="size-[80px] bg-info-500"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Colors;
