import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>
        <nav>Navbar</nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}
