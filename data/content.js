import Ton from "../public/promo/ton.svg";
import Brave from "../public/promo/brave.svg";
import PicPay from "../public/promo/picpay.svg";
import DO from "../public/promo/do.svg";

export const profile = {
  pt: {
    description: `Sou desenvolvedor front-end, consultor, professor e palestrante. Atualmente trabalho como líder técnico na Sallve. Amo aviões, a web e burritos.`,
  },
  en: {
    description: `I am a brazilian software engineer, consultant, teacher, and public speaker. Currently at Sallve as a Tech Lead. I love airplanes, the web, and burritos.`,
  },
};

export const footer = {
  pt: {
    sourceLink: {
      text: "Código Fonte",
    },
  },
  en: {
    sourceLink: {
      text: "View Source",
    },
  },
};

export const cards = {
  enabled: false,
  pt: [
    {
      id: "",
      url: "",
      title: "",
      description: "",
    },
  ],
  en: {},
};

export const social = {
  defaultStart: [
    {
      title: "Twitter",
      url: "http://twitter.com/breakzplatform",
    },
    {
      title: "GitHub",
      url: "http://github.com/breakzplatform",
    },
    {
      title: "Unsplash",
      url: "https://unsplash.com/@breakzplatform",
    },
  ],
  pt: [
    {
      title: "PicPay",
      url: "http://joselito.pw/picpay",
    },
  ],
  en: [
    {
      title: "Ko-fi",
      url: "http://joselito.pw/bmc",
    },
  ],
  defaultEnd: [
    {
      title: "E-mail",
      url: "mailto:joseli.to@joseli.to",
    },
  ],
};

export const ads = {
  pt: [
    {
      name: "PicPay",
      logo: () => <PicPay height={32} width={32} />,
      link: {
        text: "Baixe agora",
        url: "http://joselito.pw/picpay-521",
      },
      text: [
        "Use o PicPay para pagar amigos, boletos, recarregar o celular e muito mais. Ao criar sua conta, insira o código 52Z1 e ganhe R$10 de volta. ",
        "!",
      ],
    },
    {
      name: "Digital Ocean",
      logo: () => <DO height={32} width={32} />,
      link: {
        text: "Faça seu cadastro",
        url: "http://joselito.pw/do",
      },
      text: [
        "Ganhe $100 em créditos na DigitalOcean para experimentar uma cloud feita de developers para developers. ",
        " agora!",
      ],
    },
  ],
  en: [
    {
      name: "Digital Ocean",
      logo: () => <DO height={32} width={32} />,
      link: {
        text: "Sign up now",
        url: "http://joselito.pw/do",
      },
      text: [
        "Deploy your next app in seconds. Get $100 in cloud credits from Digital Ocean: ",
        ".",
      ],
    },
  ],
};
