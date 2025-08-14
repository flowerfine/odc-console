import { IPage, PageType } from "@/constants";
import { SQLPage } from "@/store/helper/page/pages";

const titleText = {
  [PageType.OTHER]: '其他',
};

export function getPageTitleText(page: IPage) {
  const { type, title, params, key } = page;
  const simpleTitle = titleText[type];
  if (simpleTitle) {
    return simpleTitle;
  }
  switch (type) {
    case PageType.SQL: {
      return SQLPage.getTitleByParams(params);
    }
    default: {
      return title;
    }
  }
}