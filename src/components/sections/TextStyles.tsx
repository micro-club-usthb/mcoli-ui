function TextStyles() {
  return (
    <div className="bg-red w-full space-y-8">
      <h2 className="header-md font-bold underline">Text Styles:</h2>
      <div className="space-y-6">
        {/* Headers */}
        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Header XL:</h3>
          <ul className="flex items-center justify-between w-full">
            <h6 className="header-xl">Regular</h6>
            <h6 className="header-xl font-medium">Medium</h6>
            <h6 className="header-xl font-semibold">Semi Bold</h6>
            <h6 className="header-xl font-bold">Bold</h6>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Header LG:</h3>
          <ul className="flex items-center justify-between w-full">
            <h6 className="header-lg">Regular</h6>
            <h6 className="header-lg font-medium">Medium</h6>
            <h6 className="header-lg font-semibold">Semi Bold</h6>
            <h6 className="header-lg font-bold">Bold</h6>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Header MD:</h3>
          <ul className="flex items-center justify-between w-full">
            <h6 className="header-md">Regular</h6>
            <h6 className="header-md font-medium">Medium</h6>
            <h6 className="header-md font-semibold">Semi Bold</h6>
            <h6 className="header-md font-bold">Bold</h6>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Header SM:</h3>
          <ul className="flex items-center justify-between w-full">
            <h6 className="header-sm">Regular</h6>
            <h6 className="header-sm font-medium">Medium</h6>
            <h6 className="header-sm font-semibold">Semi Bold</h6>
            <h6 className="header-sm font-bold">Bold</h6>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Header XS:</h3>
          <ul className="flex items-center justify-between w-full">
            <h6 className="header-xs">Regular</h6>
            <h6 className="header-xs font-medium">Medium</h6>
            <h6 className="header-xs font-semibold">Semi Bold</h6>
            <h6 className="header-xs font-bold">Bold</h6>
          </ul>
        </div>

        {/* Paragraphs */}
        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Paragraph XL:</h3>
          <ul className="flex items-center justify-between w-full">
            <li className="paragraph-xl">Regular</li>
            <li className="paragraph-xl font-medium">Medium</li>
            <li className="paragraph-xl font-semibold">Semi Bold</li>
            <li className="paragraph-xl font-bold">Bold</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Paragraph LG:</h3>
          <ul className="flex items-center justify-between w-full">
            <li className="paragraph-lg">Regular</li>
            <li className="paragraph-lg font-medium">Medium</li>
            <li className="paragraph-lg font-semibold">Semi Bold</li>
            <li className="paragraph-lg font-bold">Bold</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Paragraph MD:</h3>
          <ul className="flex items-center justify-between w-full">
            <li className="paragraph-md">Regular</li>
            <li className="paragraph-md font-medium">Medium</li>
            <li className="paragraph-md font-semibold">Semi Bold</li>
            <li className="paragraph-md font-bold">Bold</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Paragraph SM:</h3>
          <ul className="flex items-center justify-between w-full">
            <li className="paragraph-sm">Regular</li>
            <li className="paragraph-sm font-medium">Medium</li>
            <li className="paragraph-sm font-semibold">Semi Bold</li>
            <li className="paragraph-sm font-bold">Bold</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h3 className="header-xs font-semibold underline">Paragraph XS:</h3>
          <ul className="flex items-center justify-between w-full">
            <li className="paragraph-xs">Regular</li>
            <li className="paragraph-xs font-medium">Medium</li>
            <li className="paragraph-xs font-semibold">Semi Bold</li>
            <li className="paragraph-xs font-bold">Bold</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TextStyles;
