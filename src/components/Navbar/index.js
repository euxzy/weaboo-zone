import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex w-full justify-center">
      <nav className="w-[85%]">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.path}>
            <a>{link.title}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
