interface Props {
  iconImg: string;
  url: string;
}

export const CustomSocial = ({ iconImg, url }: Props) => {
  const handleLinkClick = () => {
    window.open(url, "_blank");
  };
  return (
    <button
      onClick={handleLinkClick}
      className="w-12 p-2 h-12 relative bg-gradient-to-tl from-[#3b1b7394] to-[#1c9de786] rounded-lg"
    >
      <img src={iconImg} alt="" />
    </button>
  );
};
