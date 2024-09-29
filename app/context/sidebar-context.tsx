import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type SidebarContextType = {
  isSmall: boolean;
  isVisible: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == undefined) throw Error("Cannot use outside of SidebarProvider");

  return value;
}

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSmall, setSidebarSize] = useState(true);
  const [isVisible, toggleVisibility] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) {
        setSidebarSize(true);
      } else {
        setSidebarSize(false);
      }
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  function isScreenSmall() {
    return window.innerWidth <= 640;
  }

  const toggle = useCallback(() => {
    toggleVisibility((s) => !s);
  }, [toggleVisibility]);

  const close = useCallback(() => {
    toggleVisibility(false);
  }, [toggleVisibility]);

  const screensizeValue = useMemo(
    () => ({ isSmall, isVisible, close, toggle }),
    [isSmall, isVisible, close, toggle]
  );

  return (
    <SidebarContext.Provider value={screensizeValue}>
      {children}
    </SidebarContext.Provider>
  );
}
