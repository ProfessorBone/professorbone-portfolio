export default function Nav({ page, setPage }) {
  const links = ["about", "projects", "research", "education", "academy"];

  return (
    <nav>
      <button className="nav-logo" onClick={() => setPage("home")}>
        <span className="p">P</span><span className="b">B</span> Home
      </button>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <button
              className={page === l ? "active" : ""}
              onClick={() => setPage(l)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          </li>
        ))}
        <li>
          <button className="nav-cta" onClick={() => setPage("contact")}>
            Let's Talk
          </button>
        </li>
      </ul>
    </nav>
  );
}
