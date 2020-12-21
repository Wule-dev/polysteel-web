import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container about">
      <div className="row">
        <div className="col-md-7">
          <h2>CONHEÇA A POLYSTEEL</h2>
          <p className="subtitle">
            Fundada desde 1995, a Poly-Steel vem ocupando seu espaço no mercado,
            contratando sempre profissionais com vasto conhecimento técnico,
            mantento sempre uma ótima equipe técnica.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            placerat odio euismod turpis consequat, in mattis nisi eleifend.
            Donec euismod sapien felis, nec auctor felis pretium tempus. Etiam
            vitae congue purus. Nulla non arcu et justo egestas dictum. Aenean
            est ante, ultricies eget rutrum a, convallis nec odio. Nam in ante
            nisi. Donec tincidunt arcu ipsum, eu sollicitudin risus ultrices
            vel. Nunc ultrices dui in rutrum scelerisque. Cras elementum enim
            lectus, sed viverra ipsum mollis nec. Curabitur finibus lectus arcu,
            ac facilisis arcu posuere vel. Praesent turpis massa, fermentum non
            nunc et, ullamcorper vulputate velit. Maecenas rutrum est vulputate
            dignissim gravida. Sed blandit augue non metus venenatis gravida a
            ac mi.
          </p>
        </div>
        <div className="col-md-5 vertical-align-center">
          <img
            src="./images/about.jpg"
            alt="Sobre a PolySteel"
            className="img-responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
