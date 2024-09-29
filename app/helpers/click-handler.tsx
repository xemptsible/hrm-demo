import { useEffect } from "react";

interface OutsideClickHandlerProps {
  ref: React.RefObject<HTMLElement>;
  handler: () => void;
}
const useOutsideClickHandler = ({ ref, handler }: OutsideClickHandlerProps) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, handler]);
};

export default useOutsideClickHandler;
