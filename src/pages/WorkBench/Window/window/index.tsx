import { ReactNode, useState } from "react";
import { Dropdown, MenuProps, Space, Tooltip } from "antd";
import {
  CloseOutlined,
  DownOutlined,
  EllipsisOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { IPage, PageType } from "@/constants";
import DndTabs from "./DndTabs";
import styles from "./index.less";
import { pageMap } from "./config";
import { getPageTitleText } from "./helper";
import DefaultPage from "../page/DefaultPage";
import { movePagePostion } from "@/store/helper/page/util";

interface IProps {
  pages: IPage[];
  activeKey: string;
  onActivatePage: (activePageKey: string) => void;
  onOpenPage: () => void;
  onClosePage: (targetPageKey: string) => void;
}

const WindowManager = ({
  pages,
  activeKey,
  onActivatePage,
  onOpenPage,
  onClosePage,
}: IProps) => {
  const [closePageKey, setClosePageKey] = useState<string>(null);

  const handleSwitchTab = (clickParam: MenuInfo) => {
    onActivatePage(clickParam.key?.toString());
  };

  const handleEditPage = (targetKey: any, action: string) => {
    if (action === "add") {
      onOpenPage();
    }
  };

  /** 处理 Tab 关闭事件 */
  const handleCloseTab = (pageKey: string) => {
    const targetPage = pages.find((p) => p.key === pageKey);
    if (targetPage && targetPage.isSaved) {
      handleClosePage(pageKey);
    } else {
      setClosePageKey(pageKey);
      onActivatePage(pageKey);
    }
  };
  const handleClosePage = (targetKey: string) => {
    onClosePage(targetKey);
    setClosePageKey("");
  };

  function doTabAction(page: IPage, params: MenuInfo) {
    params.domEvent.stopPropagation();
    const { key } = params;
    switch (key) {
      case "closePage": {
        return handleCloseTab(page.key);
      }
      default: {
      }
    }
  }

  const menu: MenuProps = {
    style: {
      width: "320px",
    },
    selectedKeys: [activeKey],
    onClick: handleSwitchTab,
    items: pages.map((page) => {
      return {
        key: page.key,
        label: (
          <Space>
            <span
              className={styles.icon}
              style={{
                display: "flex",
                color: `${pageMap[page.type]?.color}`,
                lineHeight: 1,
                fontSize: 14,
              }}
            >
              {pageMap[page.type].icon}
            </span>
            {getPageTitleText(page)}
          </Space>
        ),
      };
    }),
  };

  function getPageTitle(page: IPage): ReactNode {
    const iconColor = pageMap[page.type]?.color;
    const pageTitle = getPageTitleText(page);
    return (
      <Dropdown
        trigger={["contextMenu"]}
        menu={{
          className: styles.tabsContextMenu,
          onClick: doTabAction.bind(null, page),
          items: [
            {
              key: "closePage",
              label: "关闭该窗口",
            },
            {
              type: "divider",
            },
            page.type === PageType.SQL && {
              key: "copyPage",
              label: "复制 SQL 窗口",
            },
            {
              key: "openNewPage",
              label: "打开新的 SQL 窗口",
            },
          ].filter(Boolean) as MenuProps["items"],
        }}
      >
        <Tooltip
          placement="bottom"
          classNames={{
            root: styles.tabTooltip,
          }}
          arrow={false}
          title={
            <div>
              <div>{pageTitle}</div>
            </div>
          }
        >
          <span className={styles.pageTitle}>
            <span
              className={styles.icon}
              style={{
                display: "flex",
                color: `${iconColor}`,
                lineHeight: 1,
                fontSize: 14,
              }}
            >
              {pageMap[page.type].icon}
            </span>
            <span className={styles.title}>{pageTitle}</span>
            <span
              style={{
                width: 16,
              }}
            >
              <CloseOutlined
                className={styles.closeBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseTab(page.key);
                }}
                style={{
                  fontSize: "8px",
                }}
              />
            </span>
          </span>
        </Tooltip>
      </Dropdown>
    );
  }

  return (
    <>
      <DndTabs
        type={"editable-card"}
        tabBarGutter={0}
        activeKey={activeKey}
        onChange={onActivatePage}
        onEdit={handleEditPage}
        moveTabNode={(d, h) => {
          movePagePostion(d, h);
        }}
        addIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "stretch",
              flexDirection: "row",
              height: "100%",
              alignItems: "center",
            }}
          >
            <PlusOutlined style={{ color: "var(--icon-color-normal)" }} />
            <Dropdown
              trigger={["click"]}
              menu={{
                items: [
                  {
                    key: "newSQL",
                    label: "新建 SQL 窗口", //'新建 SQL 窗口'
                    onClick: (e) => {
                      e.domEvent.stopPropagation();
                      handleEditPage(null, "add");
                    },
                  },
                ],
              }}
            >
              <div
                className={styles.addMoreIcon}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <DownOutlined style={{ color: "var(--icon-color-normal)" }} />
              </div>
            </Dropdown>
          </div>
        }
        tabBarExtraContent={
          <Dropdown
            overlayClassName={styles.menuList}
            menu={menu}
            trigger={["click"]}
            placement="bottomRight"
          >
            <EllipsisOutlined className={styles.moreBtn} />
          </Dropdown>
        }
        items={pages.map((page) => {
          const Page = pageMap[page.type].component;
          const pageParams = Object.assign(
            {},
            pageMap[page.type].params || {},
            page.params
          );
          if (!Page) {
            return null;
          }
          return {
            key: page.key,
            label: getPageTitle(page),
            closable: false, // hide close btn
            children: (
              <Page
                page={page}
                pageKey={page.key}
                isSaved={page.isSaved}
                params={pageParams}
                isShow={activeKey == page.key}
                closeSelf={handleCloseTab.bind(null, page.key)}
              />
            ),
          };
        })}
      />

      {(!activeKey || !pages?.length) && <DefaultPage />}
    </>
  );
};

export default WindowManager;
