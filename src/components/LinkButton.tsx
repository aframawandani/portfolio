import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import classNames from "classnames";

export default function LinkButton({ className, ...restProps}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
  return (
    <a className={classNames('inline-block px-4 py-2 border border-solid border-[--primary] text-[--white] font-semibold', className)} {...restProps} />
  )
}
