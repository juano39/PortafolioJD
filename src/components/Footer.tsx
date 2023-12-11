
export const Footer = () => {
  return (
    <footer className="pt-6 mx-8 border-t border-[#c3c0c0] flex flex-wrap justify-center items-center">
      <article className="w-[160px] flex gap-8 mb-6">
        <img src="instagramfooter.png" alt="icono de instagram" />
        <img src="discordfooter.png" alt="icono de discord" />
        <img src="githubfooter.png" alt="icono de github" />
      </article>

      <article className="flex flex-wrap justify-center mb-6">
        <p className="mb-6">© 2023 SinanTokmak. All rights reserved.</p>
        <div className=" flex justify-evenly w-full">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </article>

      <p>
        Design By<span className="text-[#12F7D6]">Juan Daniel Valderrama</span>
      </p>
    </footer>
  );
};
