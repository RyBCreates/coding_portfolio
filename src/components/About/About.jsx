import "./About.css";

function About() {
  return (
    <div className="about">
      <h2 className="about__title">Hey there, I'm Ryan</h2>
      <p className="about__description">
        I’m a full stack software engineer who loves turning ideas into
        interactive, scalable web applications. My main toolkit includes the
        <strong> MERN stack (MongoDB, Express, React, Node.js)</strong>, along
        with experience in <strong>TypeScript</strong>,
        <strong>PostgreSQL</strong>, and
        <strong> KeystoneJS</strong>.
      </p>
      <p className="about__description">
        I’ve built a range of projects, from an
        <strong> e-commerce store with real-time Stripe payments</strong> to a
        <strong> wildfire prevention platform</strong> built with React,
        TypeScript, and Docker. I enjoy crafting clean UIs, designing efficient
        APIs, and ensuring everything works smoothly from front to back.
      </p>
      <p className="about__description">
        My experience spans both solo and collaborative environments, including
        externship work and multiple <strong>1st-place CodeJam wins</strong>.
        Whether I’m leading a small team or refining a personal project, I’m
        always focused on writing maintainable code and delivering great user
        experiences.
      </p>
      <p className="about__description">
        When I’m not coding, I’m usually exploring new frameworks, improving my
        design workflow, or brainstorming the next app idea. I’m passionate
        about problem-solving, continuous learning, and building meaningful
        digital experiences.
      </p>
    </div>
  );
}

export default About;
