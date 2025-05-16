// Mock simplificado para next/link
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextLink = ({ href, children, ...rest }: any) => {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

export default NextLink;
