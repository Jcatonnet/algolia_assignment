import { Menu } from "react-instantsearch";

const CustomMenu = ({ attribute }: any) => {
  return (
    <Menu
      attribute={attribute}
      limit={6}
      showMore={true}
      showMoreLimit={25}
      sortBy={["name:asc"]}
      transformItems={(items) =>
        items.map((item) => ({
          ...item,
          label: item.label.charAt(0).toUpperCase() + item.label.slice(1),
        }))
      }
      classNames={{
        root: "bg-white rounded-lg shadow p-4 my-4",
        list: "list-none m-0 p-0",
        item: "mb-2 p-2 hover:bg-gray-100 rounded cursor-pointer",
        selectedItem: "font-semibold bg-secondary text-white rounded p-2",
        link: "flex justify-between items-center space-x-2",
        label: "text-gray-700",
        count: "text-sm text-gray-600 bg-gray-100 p-1 rounded",
        showMore: "text-secondary hover:underline",
        disabledShowMore: "text-gray-400",
      }}
    />
  );
};

export default CustomMenu;
