import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type SidebarContextType = {
  isCollapsed: boolean;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebarContext() {
  const value = useContext(SidebarContext);
  if (value == undefined) throw Error("Cannot use outside of SidebarProvider");

  return value;
}

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, toggleSidebar] = useState(false);

  const toggle = useCallback(() => {
    toggleSidebar((s) => !s);
  }, [toggleSidebar]);

  const screensizeValue = useMemo(
    () => ({ isCollapsed, toggle }),
    [isCollapsed, toggle]
  );

  return (
    <SidebarContext.Provider value={screensizeValue}>
      {children}
    </SidebarContext.Provider>
  );
}
