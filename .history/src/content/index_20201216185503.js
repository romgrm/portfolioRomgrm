export default {
  nav: {
    logo: 'Hello',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'About', to: 'mybio' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + '/photo_sansFond.png',
    alt: 'moi',
    text: ['Hello', "Romain", 'Je suis '],
    typical: [
      'Developper fullstack. 🖥',
      1000,
      'Passionné. ❤️',
      000,
      'Disponible.👨‍💻',
      2000,
    ],
    btnText: 'Discover More',
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
  },
};
