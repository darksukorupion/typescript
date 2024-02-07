type Props = {
  children: React.ReactNode;
  color: string;
  fontSize: string;
};

export const Text = (props: Props) => {
  const { children, color, fontSize } = props;
  return <p style={{ color, fontSize }}>{children}</p>;
};
