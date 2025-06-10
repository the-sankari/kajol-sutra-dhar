import PropTypes from "prop-types";

const HeroMedia = ({ name, image, media }) => {
  const isVideo = media?.endsWith(".mp4");

  return (
    <div className="relative max-w-5xl mx-auto">
      {isVideo ? (
        <video
          src={media}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-md"
        />
      ) : (
        <img
          src={image || "https://placehold.co/1200x500?text=Project+Preview"}
          alt={name}
          loading="lazy"
          className="w-full h-[250px] md:h-[400px] object-cover rounded-xl shadow-md"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-xl" />
      <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
        {name}
      </h1>
    </div>
  );
};

HeroMedia.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  media: PropTypes.string,
};

export default HeroMedia;
