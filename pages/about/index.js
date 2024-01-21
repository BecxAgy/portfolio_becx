// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaJava />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'Certificações',
    info: [
      {
        title: 'Capacitação em Gestão de Projetos Ágeis',
        stage: '2023',
      },
      {
        title: 'Capacitação em Inteligência Artificial',
        stage: '2023',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Estágio em Desenvolvimento Web',
        stage: 'Junho 2023 - Atualmente',
      },
      {
        title: 'Monitoria em Lógica de Programação',
        stage: 'Dezembro 2022 - Atualmente',
      },
      {
        title: 'Estágio em Desenvolvimento de Sistemas',
        stage: 'Junho 2022 - Novembro 2022',
      },
    ],
  },
  {
    title: 'Formação',
    info: [
      
      {
        title: 'Análise e Desenvolvimento de Sistemas - Instituto Federal da Bahia',
        stage: '2022',
      },
     
    ],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
