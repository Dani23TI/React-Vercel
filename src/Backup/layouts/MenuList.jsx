import { MdDashboard } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { FiHeadphones } from "react-icons/fi";

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      icon: <MdDashboard className="mr-4 text-xl" />,
      label: "Dashboard",
    },
    {
      id: 2,
      icon: <AiOutlineBars className="mr-4 text-xl" />,
      label: "Orders",
    },
    {
      id: 3,
      icon: <FiHeadphones className="mr-4 text-xl" />,
      label: "Customers",
    },
  ];

  return (
    <ul className="space-y-3">
      {menuItems.map((item) => (
        <li key={item.id}>
          <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            {item.icon}
            <span>{item.label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;