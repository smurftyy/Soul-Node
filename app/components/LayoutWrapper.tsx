'use client';

import { usePathname } from "next/navigation";
import { MeshProviderWrapper } from "./MeshProviderWrapper";
import Navbar from "./Navbar";
import { AttestationProvider } from "../context/AttestationContext";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Hide Navbar and MeshProviderWrapper on landing page
  const showNavbar = pathname !== "/";
  const showMeshProvider = pathname !== "/";

  if (showMeshProvider) {
    return (
      <MeshProviderWrapper>
        <AttestationProvider>
          {showNavbar && <Navbar />}
          {children}
        </AttestationProvider>
      </MeshProviderWrapper>
    );
  }

  return <>{children}</>;
}
