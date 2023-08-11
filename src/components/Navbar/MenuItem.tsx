interface Props {
  children: React.ReactNode;
}

const MenuItem = ({ children }: Props) => {
  return <a className="font-medium">{children}</a>;
};
export default MenuItem;
