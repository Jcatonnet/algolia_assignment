const SearchBox = () => {
  return (
    <SearchBox
      classNames={{
        root: "ais-SearchBox",
        form: "ais-SearchBox-form flex block items-center bg-white rounded-full border border-white-100 shadow px-4 py-2 focus-within:border-blue-500",
        input:
          "ais-SearchBox-input flex-1 outline-none text-sm text-gray-600 placeholder-gray-500",
        submit: "ais-SearchBox-submit inset-y-0 left-0 ",
        reset: "hidden",
      }}
    />
  );
};
