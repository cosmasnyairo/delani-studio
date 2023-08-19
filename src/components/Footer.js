import { icons } from "../data/Data";

const Footer = () => {
  return (
    <div id="footer" className="p-10">
      <div className="grid grid-cols-9 lg:pr-96 lg:pl-96 pr-64 pl-64 mx-auto mb-12">
        {icons.social_icons.map((link, index) => (
            <img
              src={link.socialicon}
              alt=""
              key={index}
              className="w-12 h-12 rounded-xl lhg"
            />
        ))}
      </div>
      <p className="text-center">Delani Studio </p>
      <p className="text-center">2019</p>

    </div>
  );
};

export default Footer;
