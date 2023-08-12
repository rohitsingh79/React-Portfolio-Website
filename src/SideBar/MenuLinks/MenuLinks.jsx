import { Links } from "./style";

const MenuLinks = (props) => {

  console.log('Menu Link')
  return <Links>{props.children}</Links>;
};

export default MenuLinks;
