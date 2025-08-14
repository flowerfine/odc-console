import MenuItem from "@/layouts/SpaceContainer/Sider/MenuItem";
import { HomeOutlined } from "@ant-design/icons";
import { MenuDataItem } from "@ant-design/pro-components";
import { Link, useLocation } from "@umijs/max";

interface IProps {
  item: MenuDataItem & {
    isUrl: boolean;
    onClick: () => void;
  };
  dom: React.ReactNode;
  menuProps: any;
}

export default ({ item, dom, menuProps }: IProps) => {
  const location = useLocation();
  const selected = location?.pathname?.split("/")[1];

  const path = item.path?.split("/")[1] || "";

  console.log("MenuDataItem", item);
  console.log("dom", dom);
  console.log("menuProps", menuProps);
  return (
    <>
      <Link to={path}>
        <MenuItem
          key={item.key}
          selected={location?.pathname === item.path}
          icon={HomeOutlined}
          collapsed={menuProps.collapsed}
          label={item.name}
        />
      </Link>
    </>
  );
};
