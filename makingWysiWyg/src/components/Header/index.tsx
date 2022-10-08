export interface IHeaderProps {
  height?: string;
  image?: string;
  title?: string;
  headline?: string;
  children?: React.Component;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { height, image, title, headline, children } = props;

  return <div>d</div>;
};
export default Header;
