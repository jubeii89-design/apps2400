import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  onOpenTerminal?: () => void;
}

const Layout = ({ children, onOpenTerminal }: LayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Navbar onOpenTerminal={onOpenTerminal} />
    <main className="flex-1 pt-[4.5rem]">{children}</main>
    <Footer />
  </div>
);

export default Layout;
