export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center min-w-[342px] mx-auto py-6 border-b border-[#c3c0c0] mb-16 sm:text-2xl">
      <a href="#">
        <span className="text-[#12F7D6]"> &lt;JD/&gt; </span> Juan Daniel
      </a>
      <ol className="flex justify-around items-center gap-x-4">
        <li>
          <a href="#hombe" translate="no">Home</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <img src="shar.png" alt="buscador" />
        </li>
        <li className="flex gap-8 ml-4 max-sm:hidden">
          <img src="Instagram.png" alt="" />
          <img src="discord.png" alt="" />
          <img src="github.png" alt="" />
        </li>
      </ol>
    </nav>
  );
};
