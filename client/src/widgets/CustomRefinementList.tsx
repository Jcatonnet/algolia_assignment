import { RefinementList } from "react-instantsearch";

const CustomRefinementList = ({ attribute }: any) => {
  return (
    <RefinementList
      attribute={attribute}
      operator="and"
      showMore
      searchable
      searchablePlaceholder="Filter by types"
      classNames={{
        root: "bg-white rounded-lg shadow p-4 my-4",
        searchBox: "w-full mb-4",
        list: "list-none m-0 p-0",
        item: "mb-2 p-2 hover:bg-gray-100 rounded cursor-pointer",
        selectedItem: "font-semibold bg-secondary text-white-100 rounded p-2",
        label: "flex items-center space-x-2",
        checkbox: "form-checkbox text-secondary rounded checkbox-checked",
        labelText: "text-gray-700",
        count: "text-sm text-gray-600 bg-gray-100 p-1 rounded",
        showMore: "text-secondary hover:underline",
        disabledShowMore: "text-gray-400",
      }}
    />
  );
};

export default CustomRefinementList;
