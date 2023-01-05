import { FullProductProps, Promo } from './types';

export const SELECT_ITEMS = ['1', '2', '3'];

export const PROMOS: Promo[] = [
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
		id: "1",
		title: "The Way of Kings: Book One of the Stormlight Archive",
		annotation: "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter. It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them.",
		category: "Fantasy",
		author: "Brandon Sanderson",
		price: 7.95,
		stock: 75,
		rating: 4.6,
		images: [
			"https://m.media-amazon.com/images/I/91v-wMSdaPL.jpg",
			"https://m.media-amazon.com/images/I/81GkWtmwhnL.jpg"
		]
	},
	{
		id: "2",
		title: "Words of Radiance: Book Two of the Stormlight Archive",
		annotation: "Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status darkeyes. Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl. The Assassin, Szeth, is active again, murdering rulers all over the world of Roshar, using his baffling powers to thwart every bodyguard and elude all pursuers. Among his prime targets is Highprince Dalinar, widely considered the power behind the Alethi throne. His leading role in the war would seem reason enough, but the Assassin's master has much deeper motives.",
		category: "Fantasy",
		author: "Brandon Sanderson",
		price: 10.31,
		stock: 40,
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/91KKmLd1UxL.jpg",
			"https://www.tor.com/wp-content/uploads/2015/11/WordsofRadiance_2560x1600.jpg"
		]
	},
	{
		id: "3",
		title: "Oathbringer: Book Three of the Stormlight Archive",
		annotation: "Dalinar Kholin’s Alethi armies won a fleeting victory at a terrible cost: The enemy Parshendi summoned the violent Everstorm, which now sweeps the world with destruction, and in its passing awakens the once peaceful and subservient parshmen to the horror of their millennia-long enslavement by humans. While on a desperate flight to warn his family of the threat, Kaladin Stormblessed must come to grips with the fact that the newly kindled anger of the parshmen may be wholly justified. Nestled in the mountains high above the storms, in the tower city of Urithiru, Shallan Davar investigates the wonders of the ancient stronghold of the Knights Radiant and unearths dark secrets lurking in its depths. And Dalinar realizes that his holy mission to unite his homeland of Alethkar was too narrow in scope. Unless all the nations of Roshar can put aside Dalinar’s blood-soaked past and stand together―and unless Dalinar himself can confront that past―even the restoration of the Knights Radiant will not prevent the end of civilization.",
		category: "Fantasy",
		author: "Brandon Sanderson",
		price: 11.95,
		stock: 65,
		rating: 4.6,
		images: [
			"https://m.media-amazon.com/images/I/91x4fchgt2L.jpg"
		]
	},
	{
		id: "4",
		title: "Rhythm of War: Book Four of The Stormlight Archive",
		annotation: "After forming a coalition of human resistance against the enemy invasion, Dalinar Kholin and his Knights Radiant have spent a year fighting a protracted, brutal war. Neither side has gained an advantage, and the threat of a betrayal by Dalinar’s crafty ally Taravangian looms over every strategic move.	Now, as new technological discoveries by Navani Kholin’s scholars begin to change the face of the war, the enemy prepares a bold and dangerous operation. The arms race that follows will challenge the very core of the Radiant ideals, and potentially reveal the secrets of the ancient tower that was once the heart of their strength",
		category: "Fantasy",
		author: "Brandon Sanderson",
		price: 15.88,
		stock: 47,
		rating: 4.6,
		images: [
			"https://m.media-amazon.com/images/I/51mXkL4fXeL._SX327_BO1,204,203,200_.jpg"
		]
	},
	{
		id: "5",
		title: "The Fellowship of the Ring: Being the First Part of The Lord of the Rings",
		annotation: "In ancient times, the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages, it fell into the hands of Bilbo Baggins, as told in The Hobbit.	In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.",
		category: "Fantasy",
		author: "J.R.R. Tolkien",
		price: 5.50,
		stock: 26,
		rating: 4.7,
		images: [
			"https://m.media-amazon.com/images/I/813UBZ-O8sL.jpg"
		]
	},
	{
		id: "6",
		title: "The Lord Of The Rings: One Volume Kindle Edition",
		annotation: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.	From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.",
		category: "Fantasy",
		author: "J.R.R. Tolkien",
		price: 15.99,
		stock: 67,
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/51OwMSETOJL.jpg"
		]
	},
	{
		id: "7",
		title: "The Lord of the Rings: The Two Towers: Trivia Quiz Book",
		annotation: "Where did Frodo tell Gollum to lead them?Frodo said that the ring was getting what? During the Helm's Deep battle Aragorn is yelling Pendriath! in Elvish. But what does it mean in English?Amaze your friends and family with all things related to the The Lord of the Rings: The Two Towers Movie If you know your Movie, there are 160+ questions sure to riddle even the most die hard fan! Ready to take the challenge? The Lord of the Rings: The Two Towers Trivia Quiz Book today!",
		category: "Fantasy",
		author: "J.R.R. Tolkien",
		price: 4.98,
		stock: 33,
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/5152ng9-WbL.jpg"
		]
	},
	{
		id: "8",
		title: "The Lord of the Rings Illustrated",
		annotation: "Since it was first published in 1954, The Lord of the Rings has been a book people have treasured. Steeped in unrivaled magic and otherworldliness, Tolkien's sweeping fantasy and epic adventure has touched the hearts of young and old alike. More than 150 million copies of its many editions have been sold around the world, and occasional collectors’ editions become prized and valuable items of publishing. This one-volume, jacketed hardcover edition contains the complete text, fully corrected and reset, which is printed in red and black and features, for the very first time, thirty color illustrations, maps and sketches drawn by Tolkien himself as he composed this epic work. These include the pages from the Book of Mazarbul, marvelous facsimiles created by Tolkien to accompany the famous ‘Bridge of Khazad-dum’ chapter. Also appearing are two removable fold-out maps drawn by Christopher Tolkien revealing all the detail of Middle-earth.",
		category: "Fantasy",
		author: "J.R.R. Tolkien",
		price: 24.99,
		stock: 56,
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/41vN31PD7SL.jpg",
			"https://travelinggladly.files.wordpress.com/2021/11/dsc00694.jpg?w=1024",
			"https://i.ytimg.com/vi/qSCBt7W7mEU/maxresdefault.jpg"
		]
	},
	{
		id: "9",
		title: "Early Works II",
		annotation: "Jane Austen is one of England's most enduring and skilled novelists. With her wit, social precision, and unerring ability to create some of literature's most charismatic and believable heroines, she mesmerises her readers as much today as when her novels were first published.	This selection of Jane Austen's earliest writing remained unpublished during her lifetime. The title story was written before she was 15, while the other stories were completed before she was 17.",
		category: "Classic",
		author: "Jane Austen",
		price: 16.50,
		stock: 57,
		rating: 4.3,
		images: [
			"https://s5-goods.ozstatic.by/2000/529/177/101/101177529_0.jpg",
			"https://s5-page.ozstatic.by/1000/529/177/101/101177529_0.jpg",
			"https://s5-page.ozstatic.by/1000/529/177/101/101177529_1.jpg",
			"https://s5-page.ozstatic.by/1000/529/177/101/101177529_2.jpg"
		]
	},
	{
		id: "10",
		title: "Early Works. Volume 1",
		annotation: "Jane Austen is one of the most enduring and skilled English novelists. Early Works remained unpublished during her lifetime even though the last one was completed before she was 17. With her wit, social perception and unerring ability to create some of literature's most charismatic and believable heroines, Jane Austen mesmerizes her readers as much today as she did when her famous novels were first published.",
		category: "Classic",
		author: "Jane Austen",
		price: 21.25,
		stock: 16,
		rating: 4.0,
		images: [
			"https://s5-goods.ozstatic.by/2000/878/863/10/10863878_0.jpg",
			"https://s5-page.ozstatic.by/1000/878/863/10/10863878_1.jpg",
			"https://s5-page.ozstatic.by/1000/878/863/10/10863878_0.jpg"
		]
	},
	{
		id: "11",
		title: "Short Stories 2",
		annotation: "Jane Austen is one of the most enduring and skilled English novelists. With her wit, social perception and unerring ability to create some of literature's most charismatic and believable heroines, she mesmerizes her readers as much today as she did when her novels were first published. Short Stories II is the collection of Jane Austen's stories, they remained unpublished during her lifetime even though the last one was completed before she was 17.",
		category: "Classic",
		author: "Jane Austen",
		price: 13.35,
		stock: 25,
		rating: 4.5,
		images: [
			"https://s4-goods.ozstatic.by/2000/507/178/101/101178507_0.jpg",
			"https://s4-page.ozstatic.by/1000/507/178/101/101178507_0.jpg"
		]
	},
	{
		id: "12",
		title: "Pride and Prejudice",
		annotation: "This book contains Jane Austen's entire classic 'Pride and Prejudice' with the addition of over 200 reading strategy experiences to help readers with BEFORE, DURING, and AFTER reading strategies that students can practice and learn with. Each chapter has multiple strategies embedded within the chapter to assist readers to become more active and purposeful readers. Additional resources such as links to free audio versions and online tools are also provided along with suggestions on how to use versions for electronic book readers to improve the reading experience and access information. This public domain story was first published as a book in 1813, and even today is on many reading lists for High Schools and Colleges. Students and teachers can use this text to assist readers needing extra guidance with their purposeful reading strategies or just an instructional or practice resource.",
		category: "Classic",
		author: "Jane Austen",
		price: 8.54,
		stock: 32,
		rating: 4.7,
		images: [
			"https://s5-goods.ozstatic.by/2000/149/164/101/101164149_0.jpg",
			"https://s5-page.ozstatic.by/1000/149/164/101/101164149_0.jpg",
			"https://s5-page.ozstatic.by/1000/149/164/101/101164149_1.jpg",
			"https://s5-goods.ozstatic.by/2000/149/164/101/101164149_100.jpg"
		]
	},
	{
		id: "13",
		title: "Mansfield Park",
		annotation: "Jane Austen is one of the most enduring and skilled English novelists. A subtle examination of social position and moral integrity, Mansfield Park is one of Jane Austen's most profound works. Taken from the poverty of her parents' home, Fanny Price is brought up with her rich cousins at Mansfield Park, acutely aware of her humble rank and with only her cousin Edmund as an ally. When Fanny's uncle is absent in Antigua, Mary Crawford and her brother Henry arrive in the neighbourhood, bringing with them London glamour and a reckless taste for flirtation. As her female cousins vie for Henry's attention, and even Edmund falls for Mary's dazzling charms, only Fanny remains doubtful about the Crawfords' influence and finds herself more isolated than ever.",
		category: "Classic",
		author: "Jane Austen",
		price: 27.3,
		stock: 21,
		rating: 4.8,
		images: [
			"https://s1-goods.ozstatic.by/2000/971/178/101/101178971_0.jpg",
			"https://s1-frame.ozstatic.by/1000/971/178/101/101178971_0.jpg",
			"https://s1-frame.ozstatic.by/1000/971/178/101/101178971_2.jpg"
		]
	},
	{
		id: "14",
		title: "The Picture of Dorian Gray",
		annotation: "The Picture of Dorian Gray altered the way Victorians understood the world they inhabited. It heralded the end of a repressive Victorianism, and after its publication, literature had—in the words of biographer Richard Ellmann—;a different look.; Yet the Dorian Gray that Victorians never knew was even more daring than the novel the British press condemned as ;vulgar,; ;unclean,; ;poisonous,; ;discreditable,; and ;a sham.; Now, more than 120 years after Wilde handed it over to his publisher, J. B. Lippincott & Company, Wilde’s uncensored typescript is published for the first time, in an annotated, extensively illustrated edition.The novel’s first editor, J. M. Stoddart, excised material—especially homosexual content—he thought would offend his readers’ sensibilities. When Wilde enlarged the novel for the 1891 edition, he responded to his critics by fur",
		category: "Classic",
		author: "Oscar Wilde",
		price: 16.23,
		stock: 21,
		rating: 4.9,
		images: [
			"https://s2-goods.ozstatic.by/2000/572/158/101/101158572_0.jpg",
			"https://s2-page.ozstatic.by/1000/572/158/101/101158572_0.jpg",
			"https://s2-page.ozstatic.by/1000/572/158/101/101158572_1.jpg",
			"https://s2-page.ozstatic.by/1000/572/158/101/101158572_2.jpg",
			"https://s2-goods.ozstatic.by/2000/572/158/101/101158572_100.jpg"
		]
	},
	{
		id: "15",
		title: "The Importange of Being Earnest",
		annotation: "The Importance of Being Earnest is celebrated not only for the lighthearted ingenuity of its plot, but for its inspired dialogue, rich with scintillating epigrams still savored by all who enjoy artful conversation.	Rich in humor, and memorable characters, Wilde offers a captivating satire of Victorian society and its repressive values and traditions, particularly in the pursuit of love and marriage. To recapture their freedom, the characters liberate themselves by leading double lives.",
		category: "Classic",
		author: "Oscar Wilde",
		price: 6.25,
		stock: 29,
		rating: 4.6,
		images: [
			"https://s4-goods.ozstatic.by/2000/196/484/10/10484196_0.jpg",
			"https://s4-page.ozstatic.by/1000/196/484/10/10484196_0.jpg",
			"https://s4-page.ozstatic.by/1000/196/484/10/10484196_1.jpg"
		]
	},
	{
		id: "16",
		title: "An Ideal Husband",
		annotation: "An Ideal Husband is a play by Oscar Wilde, which was first performed in London in 1895. The play is set in an aristocratic society in London in the same era. The play centers around the marriage between Sir Robert Chiltern, a member of the House of Commons, and Lady Chiltern, his wife. Lady Chiltern believes that her husband is a paragon of morality and virtue until she finds out a scandalous secret about his past. The play centers on the fallout from Sir Robert's secret.",
		category: "Classic",
		author: "Oscar Wilde",
		price: 8.31,
		stock: 36,
		rating: 4.3,
		images: [
			"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417045098l/5296.jpg"
		]
	},
	{
		id: "17",
		title: "Little Women",
		annotation: "Since its publication in 1868–69, Little Women, perhaps America’s most beloved children’s classic, has been handed down from mother to daughter for generations. It has been translated into more than fifty languages and inspired six films, four television shows, a Broadway musical, an opera, and a web series. This lavish, four-color edition features over 220 curated illustrations, including stills from the films, stunning art by Norman Rockwell, and iconic illustrations by children’s-book illustrators Alice Barber Stevens, Frank T. Merrill, and Jessie Wilcox Smith.	Renowned Alcott scholar John Matteson brings his expertise to the book, to the March family it creates, and to the Alcott family who inspired it all. Through numerous photographs taken in the Alcott family home expressly for this edition―elder daughter Anna’s wedding dress, the Alcott sisters’ theater costumes, sister May’s art, and Abba Alcott’s recipe book―readers discover the extraordinary links between the real and the fictional family.",
		category: "Classic",
		author: "Louise Alcott",
		price: 7.50,
		stock: 51,
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/81hdiUSHlJL.jpg",
			"https://m.media-amazon.com/images/I/713nhVHLAPL.jpg",
			"https://m.media-amazon.com/images/I/71ohb0NhTcL.jpg",
			"https://m.media-amazon.com/images/I/711nrE7+O4L.jpg"
		]
	},
	{
		id: "18",
		title: "Under the Lilacs",
		annotation: "A beautiful unabridged 150th Anniversary Edition with 8 original illustrations and a cover from an 1906 edition. SeaWolf Press is proud to offer another book in its Illustrated Classics Collection. Each book in the collection contains the text, illustrations, and cover from the first or early edition. Use Amazon's Lookinside feature to compare this edition with others. You'll be impressed by the differences. ",
		category: "Classic",
		author: "Louise Alcott",
		price: 5.60,
		stock: 31,
		rating: 4.5,
		images: [
			"https://m.media-amazon.com/images/I/41zWzoFP+SL.jpg",
			"https://m.media-amazon.com/images/I/51TGpEDbiaL.jpg"
		]
	},
	{
		id: "19",
		title: "Eight Cousins or, The Aunt-Hill",
		annotation: "The Author is quite aware of the defects of this little story, many of which were unavoidable, as it first appeared serially. But, as Uncle Alec’s experiment was intended to amuse the young folks, rather than suggest educational improvements for the consideration of the elders, she trusts that these short-comings will be overlooked by the friends of the EIGHT COUSINS, and she will try to make amends in a second volume, which shall attempt to show THE ROSE IN BLOOM.",
		category: "Classic",
		author: "Louise Alcott",
		price: 19.10,
		stock: 15,
		rating: 3.7,
		images: [
			"https://s4-goods.ozstatic.by/2000/146/179/101/101179146_0.jpg"
		]
	},
	{
		id: "20",
		title: "The Adventures of Sherlock Holmes",
		annotation: "The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, featuring his fictional detective Sherlock Holmes. It was first published on 14 October 1892; the individual stories had been serialised in The Strand Magazine between July 1891 and June 1892. The stories are not in chronological order, and the only characters common to all twelve are Holmes and Dr. Watson. The stories are related in first-person narrative from Watson's point of view. In general the stories in The Adventures of Sherlock Holmes identify, and try to correct, social injustices. Holmes is portrayed as offering a new, fairer sense of justice. The stories were well received, and boosted the subscriptions figures of The Strand Magazine, prompting Doyle to be able to demand more money for his next set of stories. The first story, A Scandal in Bohemia, includes the character of Irene Adler, who, despite being featured only within this one story by Doyle, is a prominent character in modern Sherlock Holmes adaptations, generally as a love interest for Holmes.",
		category: "Detective",
		author: "Arthur Conan Doyle",
		price: 7.98,
		stock: 21,
		rating: 4.9,
		images: [
			"https://m.media-amazon.com/images/I/515M2VXykIL.jpg"
		]
	},
	{
		id: "21",
		title: "The Hound of the Baskervilles",
		annotation: "The Hound of the Baskervilles is the third of the four crime novels by British writer Arthur Conan Doyle featuring the detective Sherlock Holmes. Originally serialised in The Strand Magazine from August 1901 to April 1902, it is set in 1889 largely on Dartmoor in Devon in England's West Country and tells the story of an attempted murder inspired by the legend of a fearsome, diabolical hound of supernatural origin. Holmes and Watson investigate the case. This was the first appearance of Holmes since his apparent death in The Final Problem, and the success of The Hound of the Baskervilles led to the character's eventual revival.",
		category: "Detective",
		author: "Arthur Conan Doyle",
		price: 4.42,
		stock: 39,
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/61Nmh3MOpKL.jpg",
			"https://m.media-amazon.com/images/I/71lXrqhkTRL.jpg"
		]
	},
	{
		id: "22",
		title: "The Return of Sherlock Holmes",
		annotation: "The Return of Sherlock Holmes is a collection of 13 Sherlock Holmes stories, originally published in 1903-1904. The stories were published in the Strand Magazine in Great Britain, and Collier's in the United States. It was the first Holmes collection since 1893, when Holmes had 'died' in 'The Final Problem'. Having published The Hound of the Baskervilles in 1902, which was set before Holmes' 'death', Doyle came under intense pressure to revive his famous character. The first story is set in 1894 and has Holmes returning in London and explaining the period from 1891–1894, a period called 'The Great Hiatus' by Sherlock enthusiasts.",
		category: "Detective",
		author: "Arthur Conan Doyle",
		price: 6.00,
		stock: 51,
		rating: 4.3,
		images: [
			"https://m.media-amazon.com/images/I/71jvzbiqklL.jpg",
			"https://m.media-amazon.com/images/I/71dP0JISsgL.jpg"
		]
	},
	{
		id: "23",
		title: "Beyond the City",
		annotation: "Arthur Conan Doyle was a British writer best known for his detective fiction featuring the character Sherlock Holmes. His works also include fantasy and science fiction, as well as plays, romances, non-fiction and historical novels. 'Beyond the City' is a novel set in the Victorian era. It tells the story of different women, whose desire for money and romance forces them to go way beyond the traditional notions of middle-class life.",
		category: "Detective",
		author: "Arthur Conan Doyle",
		price: 13.42,
		stock: 21,
		rating: 4.7,
		images: [
			"https://s2-goods.ozstatic.by/2000/523/178/101/101178523_0.jpg",
			"https://s2-page.ozstatic.by/1000/523/178/101/101178523_0.jpg"
		]
	},
	{
		id: "24",
		title: "The Valley Of Fear and The Case-Book Of Sherlock Holmes",
		annotation: "Complete in five handsome volumes, each with an introduction by a Doyle scholar, a chronology, a selected bibliography, and explanatory notes, the Oxford Sherlock Holmes series offers a definative collection of the famous detective's adventures. No home library is complete without it. Comprising the series of short stories that made the fortunes of the Strand, the magazine in which they were first published, this volume won even more popularity for Sherlock Holmes and Dr. Watson. Holmes is at the height of his powers in many of his most famous cases, including The Red-Headed League, The Speckled Band, and The Blue Carbuncle and the famous A Study in Scarlet.",
		category: "Detective",
		author: "Arthur Conan Doyle",
		price: 22.07,
		stock: 13,
		rating: 4.5,
		images: [
			"https://s5-goods.ozstatic.by/2000/409/178/101/101178409_0.jpg",
			"https://s5-page.ozstatic.by/1000/409/178/101/101178409_0.jpg"
		]
	},
	{
		id: "25",
		title: "Journey to the Center of the Earth",
		annotation: "The reason Verne is still read by millions today is simply that he was one of the best storytellers who ever lived. — Arthur C. Clarke An adventurous geology professor chances upon a manuscript in which a 16th-century explorer claims to have found a route to the earth's core. Professor Lidenbrock can't resist the opportunity to investigate, and with his nephew Axel, he sets off across Iceland in the company of Hans Bjelke, a native guide. The expedition descends into an extinct volcano toward a sunless sea, where they encounter a subterranean world of luminous rocks, antediluvian forests, and fantastic marine life — a living past that holds the secrets to the origins of human existence.",
		category: "Adventure",
		author: "Jules Verne ",
		price: 1.39,
		stock: 23,
		rating: 4.6,
		images: [
			"https://m.media-amazon.com/images/I/912HUortCAL.jpg",
			"https://m.media-amazon.com/images/I/519dF9s-vFL.jpg"
		]
	},
	{
		id: "26",
		title: "King Solomon's Mines",
		annotation: "In the late 19th century, discoveries of ancient civilizations, like those in Egypt’s Valley of the Kings, stirred the imaginations of Europeans with regard to the largely unexplored interior of Africa. First published in 1885, H. Rider Haggard’s “King Solomon’s Mines” was one the first novels to capitalize on this fascination of the public. It is the story of adventurer Allan Quatermain, who is enlisted by the aristocratic Sir Henry Curtis and his friend Captain Good to help them find Henry’s lost brother, last seen traveling into the interior of Africa in search of the riches of the fabled King Solomon’s Mines. With the aid of a mysterious map Quatermain agrees to help the two in exchange for a share of the treasure. Along the way they encounter the many perils of the African wilderness, including its vast deserts, dangerous Elephants, and its fierce native warriors. One of the most popular novels of the 19th century, regarded as the genesis of the Lost World literary genre, “King Solomon’s Mines” remains to this day as one of the greatest stories of adventure ever told. This edition is printed on premium acid-free paper and includes illustrations by A. C. Michael.",
		category: "Adventure",
		author: "H. Rider Haggard",
		price: 7.97,
		stock: 13,
		rating: 4.6,
		images: [
			"https://m.media-amazon.com/images/I/51hfmWA4lwL.jpg",
			"https://m.media-amazon.com/images/I/51A-meJ-OlL.jpg"
		]
	},
	{
		id: "27",
		title: "Eric Brighteyes Illustrated",
		annotation: "The Saga of Eric Brighteyes is an epic viking novel by H. Rider Haggard that concerns the adventures of its eponymous principal character in 10th-century Iceland. The novel was first published in 1890 by Longmans, Green & Company. It was illustrated by Lancelot Speed.",
		category: "Adventure",
		author: "H. Rider Haggard",
		price: 2.50,
		stock: 12,
		rating: 4,
		images: [
			"https://m.media-amazon.com/images/P/B0B2876LC7.01._SCLZZZZZZZ_SX500_.jpg"
		]
	},
	{
		id: "28",
		title: "She",
		annotation: "She, subtitled A History of Adventure, is a novel by the English writer H. Rider Haggard, published in book form in 1887 following serialisation in The Graphic magazine between October 1886 and January 1887. She was extraordinarily popular upon its release and has never been out of print.",
		category: "Adventure",
		author: "H. Rider Haggard",
		price: 14.99,
		stock: 14,
		rating: 4,
		images: [
			"https://m.media-amazon.com/images/P/B09R4QMQXP.01._SCLZZZZZZZ_SX500_.jpg"
		]
	},
	{
		id: "29",
		title: "The Three Musketeers",
		annotation: "The Three Musketeers by Alexandre Dumas. The Three Musketeers tells the story of the early adventures of the young Gascon gentleman, D'Artagnan and his three friends from the regiment of the King's Musketeers - Athos, Porthos and Aramis. Under the watchful eye of their patron M. de Treville, the four defend the honour of the regiment against the guards of Cardinal Richelieu, and the honour of the queen against the machinations of the Cardinal himself as the power struggles of seventeenth century France are vividly played out in the background. But their most dangerous encounter is with the Cardinal's spy, Milady, one of literature's most memorable female villains, and Dumas employs all his fast-paced narrative skills to bring this enthralling novel to a breathtakingly gripping and dramatic conclusion",
		category: "Adventure",
		author: "Alexandre Dumas",
		price: 1.30,
		stock: 31,
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/81lD4bQ1PnL.jpg",
			"https://m.media-amazon.com/images/I/51OQ7lLnTpL.jpg"
		]
	},
	{
		id: "30",
		title: "The Count of Monte Cristo",
		annotation: "A young French sailor unjustly accused of aiding the exiled Napoleon escapes from prison and seeks buried treasure on an island and revenge in Paris during the 1800s",
		category: "Adventure",
		author: "Alexandre Dumas",
		price: 5.97,
		stock: 11,
		rating: 4.5,
		images: [
			"https://m.media-amazon.com/images/I/4103SK4WC6L.jpg"
		]
	},
	// {
	// 	id: "",
	// 	title: "",
	// 	annotation: "",
	// 	category: "",
	// 	author: "",
	// 	price: ,
	// 	stock: ,
	// 	rating: ,
	// 	images: [

	// 	]
]


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
