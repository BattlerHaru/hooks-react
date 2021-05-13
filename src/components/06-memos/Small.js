import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("me volvi a llamar :c");
  return <small>{value}</small>;
});
