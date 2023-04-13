export const About = () => {
  return (
    <div className="about-section">
      <div className="inner-container">
        <h1 className="carter-one">About Us</h1>
        <p className="text">
          {
            "Atomus Developers is a digital product design agency that specializes in creating impactful digital experiences. We offer a wide range of services, including marketing website design, mobile and web product design (UI/UX), search-engine optimization, and web app development."
          }
        </p>
        <div className="skills">
          <span>Programming</span>
          <span>Figma & Photoshop </span>
          <span>Hosting</span>
        </div>
        <div className="skills">
          <span>Web Design</span>
          <span>Marketing</span>
          <span>SEO</span>
        </div>
      </div>
    </div>
  );
};
