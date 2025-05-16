// Mock simplificado para next/image
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextImage = (props: any) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt || "NextImage"} />;
};

export default NextImage;
