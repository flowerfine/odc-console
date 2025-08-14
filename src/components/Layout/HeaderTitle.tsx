import { ReactNode } from "react";
import Icon from "@ant-design/icons";
import { ReactComponent as ODCColorSvg } from "@/svgr/odc_logo_color.svg";
import { Flex } from "antd";

interface IProps {
  logo: ReactNode;
  title: ReactNode;
  props?: any;
}

export default ({ logo, title, props }: IProps) => {
  if (props.collapsed) {
    return (
      <Icon
        style={{ fontSize: 16, marginBottom: 12, marginLeft: 5 }}
        component={ODCColorSvg}
      />
    );
  }
  return (
    <>
      <Icon style={{ fontSize: 27 }} component={ODCColorSvg} />
      <div
        style={{
          marginLeft: 10,
          fontSize: 14,
          fontFamily:
            "DIN-Bold, Alibaba-puhui-title, PingFangSC-Medium, Microsoft YaHei",
          height: 40,
        }}
      >
        <Flex vertical={true} justify="space-between" align="center">
          <div>OceanBase</div>
          <div>开发者中心</div>
        </Flex>
      </div>
    </>
  );
};
