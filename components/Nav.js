import Link from 'next/link'

export default () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      ul li {
        display: inline;
      }
      ul li a {
        display: inline-block;
        text-decoration: none;
        padding: 14px 16px;
        color: #666;
      }
      ul li a:hover {
        background-color: #ddd;
      }
    `}</style>
  </nav>
)
