import Icon, { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import styles from "./CollapsedButton.less";

interface IProps {
    collapsed?: boolean,
    defaultDom?: React.ReactNode
}

export default ({collapsed, defaultDom}: IProps) => {
  return (
    <div
      className={styles.collapsedBtn}
    >
      {/* <Icon component={collapsed ? CaretRightOutlined : CaretLeftOutlined} /> */}
      {defaultDom}
    </div>
  );
};
