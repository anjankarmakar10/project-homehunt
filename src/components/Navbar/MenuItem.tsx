interface Props {
  children: React.ReactNode;
}

const MenuItem = ({ children }: Props) => {
  return <a>{children}</a>;
};
export default MenuItem;
