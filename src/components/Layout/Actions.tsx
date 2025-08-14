import { Question, SelectLang } from "../RightContent";

interface IProps {}

export default ({}: IProps) => {
  return [<Question key="doc" />, <SelectLang key="SelectLang" />];
};
