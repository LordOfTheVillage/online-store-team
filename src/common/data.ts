import { FullProductProps, IPromo } from './types';

export const SELECT_ITEMS = ['1', '2', '3'];

export const PROMOS: IPromo[] = [
  { name: 'RS', value: 10 },
  { name: 'VSU', value: 10 },
];

export const PRODUCTS: FullProductProps[] = [
  {
    id: '1',
    title: 'The Fifth Season',
    annotation:
      "At the end of the world, a woman must hide her secret This is the way the world ends. . .for the last time. It starts with the great red rift across the heart of the world's sole continent, spewing ash that blots out the sun. It starts with death, with a murdered son and a missing daughter. It starts with betrayal, and long dormant wounds rising up to fester. This is the Stillness, a land long familiar with catastrophe, where the power of the earth is wielded as a weapon. And where there is no mercy. Read the first book in the critically acclaimed, three-time Hugo award-winning trilogy by NYT bestselling author N. K. Jemisin.",
    category: 'Fantasy',
    author: 'N. K. Jemisin',
    price: 9.99,
    rating: 100,
    stock: 100,
    images: [
      'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/128/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_1.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_2.jpg',
    ],
  },
  {
    id: '2',
    title: 'The Name of the Wind',
    annotation:
      'My name is Kvothe. I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. You may have heard of me. So begins a tale unequaled in fantasy literature—the story of a hero told in his own voice. It is a tale of sorrow, a tale of survival, a tale of one man’s search for meaning in his universe, and how that search, and the indomitable will that drove it, gave birth to a legend.',
    category: 'Fantasy',
    author: 'Patrick Rothfuss',
    price: 9.99,
    rating: 100,
    stock: 20,
    images: ['./assets/products_img/2/1', './assets/products_img/2/2'],
  },
];
// {
// 	id: 2,
// 	title: "The Name of the Wind",
// 	annotation: "My name is Kvothe. I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep. You may have heard of me. So begins a tale unequaled in fantasy literature—the story of a hero told in his own voice. It is a tale of sorrow, a tale of survival, a tale of one man’s search for meaning in his universe, and how that search, and the indomitable will that drove it, gave birth to a legend.",
// 	genre: "Fantasy",
// 	author: "Patrick Rothfuss",
// 	publisher: "DAW Books",
// 	price: 9.99,
// 	stock: 50,
// 	images: [
// 		"./assets/products_img/2/1",
// 		"./assets/products_img/2/2",
// 	]
// },
// {
// 	id: 3,
// 	title: "Assassin's Apprentice",
// 	annotation: "Twenty-five years ago, Robin Hobb’s first novel featuring FitzChivalry Farseer and his mysterious, often maddening friend the Fool struck like a bolt of brilliant lightning. Thus began a beloved saga spanning multiple series, full of adventure, magic, and sinister plots. To celebrate a quarter-century of wonder, this special edition of Assassin’s Apprentice presents a modern classic as it’s never been seen before: in hardcover, with ten beautiful full-color illustrations by Magali Villeneuve. Young Fitz is the bastard son of the noble Prince Chivalry, raised in the shadow of the royal court by his father’s gruff stableman. He is treated as an outcast by all the royalty except the devious King Shrewd, who has him secretly tutored in the arts of the assassin. For in Fitz’s blood runs the magic Skill—and the darker knowledge of a child raised with the stable hounds and rejected by his family. As barbarous raiders ravage the coasts, Fitz is growing to manhood. Soon he will face his first dangerous, soul-shattering mission. And though some regard him as a threat to the throne, he may just be the key to the survival of the kingdom.",
// 	genre: "Fantasy",
// 	author: "Robin Hobb",
// 	publisher: "Del Rey",
// 	price: 21.00,
// 	stock: 70,
// 	images: [
// 		"./assets/products_img/3/1",
// 		"./assets/products_img/3/2",
// 		"./assets/products_img/3/3",
// 	]
// },
// {
// 	id: 4,
// 	title: "The Way of Kings: Book One of the Stormlight Archive",
// 	annotation: "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter. It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them. One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where ten armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable. Brightlord Dalinar Kholin commands one of those other armies. Like his brother, the late king, he is fascinated by an ancient text called The Way of Kings. Troubled by over-powering visions of ancient times and the Knights Radiant, he has begun to doubt his own sanity. Across the ocean, an untried young woman named Shallan seeks to train under an eminent scholar and notorious heretic, Dalinar's niece, Jasnah. Though she genuinely loves learning, Shallan's motives are less than pure. As she plans a daring theft, her research for Jasnah hints at secrets of the Knights Radiant and the true cause of the war. The result of over ten years of planning, writing, and world-building, The Way of Kings is but the opening movement of the Stormlight Archive, a bold masterpiece in the making.",
// 	genre: "Fantasy",
// 	author: "Brandon Sanderson",
// 	publisher: "Tor Books",
// 	price: 7.93,
// 	stock: 55,
// 	images: [
// 		"./assets/products_img/4/1",
// 		"./assets/products_img/4/2",
// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: "Fantasy",
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: "Fantasy",
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: ,
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: ,
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: ,
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: ,
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: ,
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },
// {
// 	id: ,
// 	title: ,
// 	annotation: ,
// 	genre: ,
// 	author: ,
// 	publisher: ,
// 	price: ,
// 	stock: ,
// 	images: [

// 	]
// },

export const ALL_PRODUCTS = [
  {
    id: '1',
    title: 'Fantasy - N. K. Jemisin',
    annotation:
      "At the end of the world, a woman must hide her secret This is the way the world ends. . .for the last time. It starts with the great red rift across the heart of the world's sole continent, spewing ash that blots out the sun. It starts with death, with a murdered son and a missing daughter. It starts with betrayal, and long dormant wounds rising up to fester. This is the Stillness, a land long familiar with catastrophe, where the power of the earth is wielded as a weapon. And where there is no mercy. Read the first book in the critically acclaimed, three-time Hugo award-winning trilogy by NYT bestselling author N. K. Jemisin.",
    category: 'Fantasy',
    author: 'N. K. Jemisin',
    price: 5.99,
    rating: 76,
    stock: 10,
    images: [
      'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/128/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_1.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_2.jpg',
    ],
  },
  {
    id: '2',
    title: 'Fantasy - N. K. Jemisin',
    annotation:
      "At the end of the world, a woman must hide her secret This is the way the world ends. . .for the last time. It starts with the great red rift across the heart of the world's sole continent, spewing ash that blots out the sun. It starts with death, with a murdered son and a missing daughter. It starts with betrayal, and long dormant wounds rising up to fester. This is the Stillness, a land long familiar with catastrophe, where the power of the earth is wielded as a weapon. And where there is no mercy. Read the first book in the critically acclaimed, three-time Hugo award-winning trilogy by NYT bestselling author N. K. Jemisin.",
    category: 'Fantasy',
    author: 'N. K. Jemisin',
    price: 19.99,
    rating: 90,
    stock: 100,
    images: [
      'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/128/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_1.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_2.jpg',
    ],
  },
  {
    id: '3',
    title: 'Novel - Dreiser',
    annotation:
      "At the end of the world, a woman must hide her secret This is the way the world ends. . .for the last time. It starts with the great red rift across the heart of the world's sole continent, spewing ash that blots out the sun. It starts with death, with a murdered son and a missing daughter. It starts with betrayal, and long dormant wounds rising up to fester. This is the Stillness, a land long familiar with catastrophe, where the power of the earth is wielded as a weapon. And where there is no mercy. Read the first book in the critically acclaimed, three-time Hugo award-winning trilogy by NYT bestselling author N. K. Jemisin.",
    category: 'Novel',
    author: 'T. H. Dreiser',
    price: 2.99,
    rating: 12,
    stock: 100,
    images: [
      'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/128/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_1.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_2.jpg',
    ],
  },
  {
    id: '4',
    title: 'Science Fiction - Dreiser',
    annotation:
      "At the end of the world, a woman must hide her secret This is the way the world ends. . .for the last time. It starts with the great red rift across the heart of the world's sole continent, spewing ash that blots out the sun. It starts with death, with a murdered son and a missing daughter. It starts with betrayal, and long dormant wounds rising up to fester. This is the Stillness, a land long familiar with catastrophe, where the power of the earth is wielded as a weapon. And where there is no mercy. Read the first book in the critically acclaimed, three-time Hugo award-winning trilogy by NYT bestselling author N. K. Jemisin.",
    category: 'Science Fiction',
    author: 'T. H. Dreiser',
    price: 9.99,
    rating: 20,
    stock: 100,
    images: [
      'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/128/945/24/101/101024945_0.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_1.jpg',
      'https://s3-page.ozstatic.by/1000/945/24/101/101024945_2.jpg',
    ],
  },
];

export const GENRES = [
  {
    id: '1',
    title: 'Fantasy',
  },
  {
    id: '2',
    title: 'Adventure',
  },
  {
    id: '3',
    title: 'Romance',
  },
  {
    id: '4',
    title: 'Mystery',
  },
  {
    id: '5',
    title: 'Horror',
  },
  // {
  // 	id: '6',
  // 	title: "Thriller"
  // }
];

export const IMGS = [
  'https://s3-goods.ozstatic.by/2000/945/24/101/101024945_0.jpg',
  'https://s3-page.ozstatic.by/128/945/24/101/101024945_0.jpg',
  'https://s3-page.ozstatic.by/1000/945/24/101/101024945_1.jpg',
  'https://s3-page.ozstatic.by/1000/945/24/101/101024945_2.jpg',
];
