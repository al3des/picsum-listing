import Link from "next/link";

export default function Header({ title }) {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sale">
              <a>Sale</a>
            </Link>
          </li>
          <li>
            <Link href="/products/list">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
