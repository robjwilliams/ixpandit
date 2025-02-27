import { JSX } from "react";

interface Props {
  url: string;
}

function ImageCellRenderer({ url }: Props): JSX.Element {
  return <img style={{ height: "70px", width: "70px" }} src={`${url}`} />;
}

export default ImageCellRenderer;
