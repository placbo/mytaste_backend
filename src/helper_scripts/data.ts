export type ItemTypeFromFirebase = {
  date?: string;
  image: string;
  creator: string;
  averageRatingCount: number;
  rating?: string | null;
  title: string;
  tags: string[];
  ratings?: any;
  averageRating: number;
  comment?: string;
  id: string | null;
};

export const items: ItemTypeFromFirebase[] = [
  {
    date: '17.06.2021',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F2aba4f73-bca3-42ca-9409-89870c6e6fa8.jpg?alt=media&token=1feb6db2-38b6-401d-868e-a73b825124aa',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Stobi flips',
    tags: ['Ostepop'],
    ratings: {
      'perbjester@gmail.com': 2,
      'nraanes2@gmail.com': 3,
    },
    averageRating: 2.5,
    comment: 'Litt papp. Litt off-taste',
    id: '0scebmUiAk8dpHQBY3EO',
  },
  {
    date: '12.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F6e7aa98f-3f7c-4bb9-871c-409b98043a22.jpg?alt=media&token=952d5fa1-fd0a-41a7-aec8-ba808bb6412b',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Grønnsaksuppe Rema1000',
    tags: ['Ferdigrett', 'suppe'],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Slimete, litt tyggemotstand. Ikke god smak',
    id: null,
  },
  {
    date: '06.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F072500d8-85c5-4ebb-a461-d9db2773394e.jpg?alt=media&token=1b4af11e-20d6-4153-bfc8-a32bc661c44f',
    creator: 'nraanes2@gmail.com',
    averageRatingCount: 3,
    rating: null,
    title: 'Pizza Grandiosa',
    tags: ['Pizza'],
    ratings: {
      'perbjester@gmail.com': 2,
      'nraanes2@gmail.com': 5,
      'emma.olivia.sindre@gmail.com': 2,
    },
    averageRating: 3,
    comment: 'En klassiker på middagsfatet i de tusen hjem',
    id: '38bfc4qlwrKOesjXnkke',
  },
  {
    date: '05.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F54dd01be-10f8-4a91-b0f2-ce9a3328cf59.jpg?alt=media&token=fa3fd837-cd8f-487c-ad02-9d1981b0ca69',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 4,
    rating: null,
    title: 'Greenland Garada "Rice balls Cuttlefish flavoured" ',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 4,
      'nraanes2@gmail.com': 3,
      'stine.bechmann@gmail.com': 2,
      'gabriel.gregor@gmail.com': 4,
    },
    averageRating: 3.5,
    comment: 'Veldig søte, litt chili, bare antydning til sjømstsmak. Helt sprø, ikke harde.',
    id: '3g17VrAznZNnkLFDNhoo',
  },
  {
    date: '18.05.2021',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fd5124583-4be7-4afc-b890-1f20545e0f0d.jpg?alt=media&token=9745c483-bb65-448a-bcfb-ccda146d5b3f',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Tilt Carolina style mustard sauce',
    tags: ['Saus'],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Litt off-taste. Gurkemeiesmaken? ',
    id: null,
  },
  {
    date: '26.02.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F16f1d477-2059-40b3-854f-bd7f1fdbea6d.jpg?alt=media&token=13a91f81-721c-4f4c-8893-89879bae2317',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Cheetos Pandilla',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'Litt tam, grei nok. Smaker mye som kims bamser. Litt sur i ettersmaken.',
    id: null,
  },
  {
    date: '11.10.2021',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fed697750-31c1-4d9e-8039-f0efa0238a22.jpg?alt=media&token=7719340c-44ea-4314-9756-0a9c653ad41e',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Bondens havsalt og balsamico',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'Lite eddiksmak. Ganske kjedelig.',
    id: null,
  },
  {
    date: '17.02.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F397b8cb8-d589-48e6-9ef9-d1f4bb3760e6.jpg?alt=media&token=34e39dfa-4140-461a-878b-017a226d3d7f',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Delikat julesild',
    tags: ['Sild'],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Smaker bare veldig salt. Lite sødme eller andre smaker. ',
    id: null,
  },
  {
    date: '08.12.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F78174c7d-95a1-4ca1-a05d-e6bd2a3b9174.jpg?alt=media&token=76a8f11a-0197-47c9-ab9d-aeb19e191712',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Maui onion style potato chips. Sticky fingers',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 3,
      'gabriel.gregor@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'Mye løk. Søt. Bra til dip? ',
    id: 'HKc7LgTz2bHqcGqgygWn',
  },
  {
    date: '21.11.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fa0fc1cbc-d302-44b0-b7c8-ac4a255c347a.jpg?alt=media&token=b0b7d9d1-a0cc-4c55-83d2-141dfb13a068',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Pataks Jalfrezi curry sauce',
    tags: ['saus'],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'For sur. Funket med ekstra salt og sødme',
    id: null,
  },
  {
    date: '13.02.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fbdefa625-863d-424c-9f0c-0e76a2befa1c.jpg?alt=media&token=a3f1091e-bd28-4e55-b75f-b3abcd5b10e3',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Gilde karbonader',
    tags: ['Karbonader'],
    ratings: {
      'perbjester@gmail.com': 1,
    },
    averageRating: 1,
    comment: 'Ingen likte. Kjenpesterk lukt. Tett, slintrete konsistens. Nesten litt stram smak.',
    id: 'KuIlYIvALh4O7540GXID',
  },
  {
    date: '09.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F00eb41d5-5c8d-494d-9a38-08c027a5b691.jpg?alt=media&token=9526d5f0-1648-4f48-b670-843f2a0f483c',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Poppa quinoa chips crème fraiche',
    tags: [],
    ratings: {
      'perbjester@gmail.com': 3,
    },
    averageRating: 3,
    id: null,
    comment: '',
  },
  {
    date: '18.05.2021',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F1996a870-6518-4953-8521-d1811d9834cf.jpg?alt=media&token=8bf8a95c-2fa7-4f70-bc6c-004da6ff7026',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Idun honey mustard',
    tags: ['Saus'],
    ratings: {
      'perbjester@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'God med skinke. Ikke like god alene',
    id: null,
  },
  {
    date: '30-.01.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Ffa962765-cfeb-4c20-b078-3cd750ebb66c.jpg?alt=media&token=05542a91-fc43-46d1-8b6b-6b2d9836c9f9',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Nesquik sjokolade',
    tags: ['Sjokolade'],
    ratings: {
      'perbjester@gmail.com': 4,
      'gabriel.gregor@gmail.com': 2,
    },
    averageRating: 3,
    comment: 'Vel søt melkesjokolade med ekstra søtt hvit sjokoladefyll. Veldig lik kinder-sjokolade.',
    id: 'PlSfFRisyVOIFbNJm2XC',
  },
  {
    date: '09.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F90da5f6e-4d2f-4166-a36a-34e7a0476405.jpg?alt=media&token=44729452-7d07-4742-b1a5-f364d07d99d3',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Fun light strawberry passion',
    tags: ['Saft'],
    ratings: {
      'perbjester@gmail.com': 2,
      'emma.olivia.sindre@gmail.com': 2,
    },
    comment: '',
    averageRating: 2,
    id: 'QKFiaTozHMn9nQwoAjjG',
  },
  {
    date: '20.02.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fccae8026-ec49-4763-a717-580bb1c55e30.jpg?alt=media&token=69243056-2763-4b5a-9168-05152452c12b',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Rema proteinpudding, Vanilje',
    tags: ['Protein', ' Proteinpudding '],
    ratings: {
      'perbjester@gmail.com': 4,
    },
    averageRating: 4,
    comment:
      'Godteri. Deilig konsistens. God smak  litt emmen ettersmak. 15g protein pr boks. 9g karb. (Konsistensen har blitt hardere ved senere kjøp)',
    id: null,
  },
  {
    date: '06.11.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F58a26bac-619e-4ce4-80e7-267eafae7b65.jpg?alt=media&token=c9512b2a-57d3-490b-84b3-f1515317b75a',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Sørlandschips. Champagne med stjernedryss',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Smaker fyll. Med glitter',
    id: null,
  },
  {
    date: '30.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F3e3167d1-0f45-4f61-a648-4ae62fb35f17.jpg?alt=media&token=3472fa88-cc61-48b4-9fea-0da5fc7c6e3c',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Cheetos xtra flamin hot (Mexico import) ',
    tags: ['Ostepop'],
    ratings: {
      'perbjester@gmail.com': 5,
    },
    averageRating: 5,
    comment: ' Veldig sterke, crunch og fargesterke. Eneste minus at msg-smaken trenger litt igjennom',
    id: null,
  },
  {
    date: '09.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F0e230f16-be0f-4611-8e1c-97ed583aefd8.jpg?alt=media&token=2fc79ac2-3d20-463f-844f-9e2fd407824b',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Coop linsechips med havsalt',
    tags: [],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Tørr, smakløs. Smaker linser',
    id: 'eLYCZX2sw6PDpDTEu9gA',
  },
  {
    date: '02.09.2021',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F4bc79bf6-33d6-4885-9a56-3566bea45d24.jpg?alt=media&token=b17399df-dd36-40c9-bc13-0556270ec10f',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Tyrells sea salt and cider vinegar',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 3,
      'gabriel.gregor@gmail.com': 5,
    },
    comment: '',

    averageRating: 4,
    id: 'eoGinbjYNLujhv9YPPPL',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F70fb1eb1-c8be-40f6-925e-dbe350709d00.jpg?alt=media&token=2f095ce1-94e2-4139-a963-aa6ccfe158fb',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    title: 'Meny leverpostei',
    tags: ['Leverpostei'],
    ratings: {
      'perbjester@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'God, men vel tørr. Ikke så mye smak.',
    id: 'fFzoc9Rb7IIRCMvETz1H',
  },
  {
    date: '13.02.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F5e0df5a7-6274-477f-ac61-29f1cb2aa482.jpg?alt=media&token=7bf1f1ed-f9b7-46f5-8f0f-9d5821896862',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Flying Goose Sriracha Mayo Sauce',
    tags: ['Chili', ' Sriracha', ' Chilisaus'],
    ratings: {
      'perbjester@gmail.com': 5,
    },
    averageRating: 5,
    comment: 'Perfekt blanding av chilisaus og majones. Funker på det meste. ',
    id: 'hDGIWCl4xEBn93s9jKjp',
  },
  {
    date: '30.01.2022',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F1040942c-8692-4146-856c-ee7f7f90cce6.jpg?alt=media&token=b87163d0-c7bf-4485-b575-03b1230358dd',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Maarud Cashewmiks',
    tags: [],
    ratings: {
      'perbjester@gmail.com': 5,
    },
    averageRating: 5,
    comment: 'Søtt og salt og knas. God honningsmak. Myyye kalorier ',
    id: null,
  },
  {
    date: '30.01.2022',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F59e03c28-3f79-4faf-92b0-695c50ad9fd7.jpg?alt=media&token=8c3fb0de-0e0a-4769-a545-03add6f198cc',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Cheetos crunchos sweet chili',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Sprø, litt vel msg- ikke spes god',
    id: null,
  },
  {
    date: '29.01.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F9764b66d-b702-4461-bf14-670878120736.jpg?alt=media&token=790ce2e3-5fab-42d7-9bdb-fcf66e5d43c8',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Kiddylicious bringebær Crispy fruktfisk',
    tags: [],
    ratings: {
      'perbjester@gmail.com': 3,
      'nraanes2@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'Ganske god. Litt emmen ettersmak. Godt med knas. Smaker litt tykningsmiddel',
    id: 'kuyBe9sOA1k8yET4iWEc',
  },
  {
    date: '02.03.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F07012d2e-46c3-4db3-9aea-32b01cabd530.jpg?alt=media&token=bb7946a9-b051-4e6a-bdb7-8365b0a6e190',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Maarud Potetgull, Sourcream & Onion',
    tags: ['Potetgull'],
    ratings: {
      'perbjester@gmail.com': 4,
    },
    averageRating: 4,
    comment: 'God, samtidig ikke masse smak. Laget for massekonsum. Lett å spise mye, perfekt for dip.',
    id: 'nq1L7PDhIxOCVYbiDtKH',
  },
  {
    date: '09.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fdd769483-51fb-468e-b108-871e83566e38.jpg?alt=media&token=514da5eb-1208-489e-80df-4563746ddf21',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 3,
    rating: null,
    title: 'Nice flerkornchips Jalaoeno',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 4,
      'nraanes2@gmail.com': 4,
      'gabriel.gregor@gmail.com': 4,
    },
    averageRating: 4,
    comment: 'Sterke. Bra crunch. Mye smak',
    id: 'o3G0XQFzfKpJ7yp2PgFQ',
  },
  {
    date: '19.02.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F2a6e6b61-c7ed-4021-a149-0d3cdfd4eb99.jpg?alt=media&token=baaabccf-8b46-4df2-a805-df368d500016',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Sweet switch Belgia Milk chocolate',
    tags: ['Sjokolade'],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Tørr, lite smak. Hjalp neppe at den var gått ut på dato. Kjøpt på Holdbart',
    id: null,
  },
  {
    date: '12.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F7aaff852-1d14-4ab2-87e2-7cb7535538da.jpg?alt=media&token=da00419d-53b7-40f8-9698-b04556ef2f7c',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Pataks korma',
    tags: ['Saus'],
    ratings: {
      'perbjester@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'Grei nok. Litt mye konserveringssmak',
    id: null,
  },
  {
    date: '27.02.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fad53f228-be78-4034-a868-aaa41d1649b9.jpg?alt=media&token=6aaf7797-2a7a-405d-9c45-4fb60981b0b6',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'Jans Sea Salt Sweet potato chips',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 3,
    },
    averageRating: 3,
    comment: 'God men kjedelig . Lite smak. Spesielt mangler den salt. Bra crunch.',
    id: null,
  },
  {
    date: '20.02.2021',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F6dfdd271-03f2-4e3e-88f1-b8d488824155.jpg?alt=media&token=ae3d84a0-0d22-44b1-81b4-4e5bd949c06a',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 1,
    rating: null,
    title: 'REMA chilisnacks ferdig preppa',
    tags: [],
    ratings: {
      'perbjester@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Sprø men feil smak',
    id: null,
  },
  {
    date: '24.01.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F2fb8ae34-fde2-44c8-8a2a-3beb407c49bc.jpg?alt=media&token=5deabc6d-4f96-4ef1-a278-f774d87eee85',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Tesco Cheese balls',
    tags: ['Ostepop'],
    ratings: {
      'perbjester@gmail.com': 5,
      'nraanes2@gmail.com': 5,
    },
    averageRating: 5,
    comment: 'Veldig sprø. God ostesmak. Ikke for sure. God maissmak',
    id: 'ucYYA4kpLdH5NDyZZmHm',
  },
  {
    date: '31.01.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F0ac5ef34-efa6-47c1-a2b4-be719f834652.jpg?alt=media&token=bd1f738d-858a-4bb6-b373-209b9c092dab',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Snyders og hanover Pretzel ',
    tags: ['Snacks'],
    ratings: {
      'perbjester@gmail.com': 5,
      'nraanes2@gmail.com': 4,
    },
    averageRating: 4.5,
    comment: 'Bra crunch. Bra styrke. God smak. Litt fettete. God eddiksmak. Mye smak',
    id: 'vFc9qFsRYY5cirgwQNK2',
  },
  {
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2F615dc255-9c5a-4e9d-ab04-67aaf27b41b2.jpg?alt=media&token=2be5d96c-68af-4471-b324-904799cb7312',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    title: 'Cheetos spirals',
    tags: ['Ostepop'],
    ratings: {
      'perbjester@gmail.com': 2,
      'emma.olivia.sindre@gmail.com': 2,
    },
    averageRating: 2,
    comment: 'Lite crunch. Fin form. Lite smak',
    id: 'vk0WKE6ImHPZzLY7Qm5h',
  },
  {
    date: '25.01.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Ff0ac81fd-12df-457a-8d7a-9319e7d518d6.jpg?alt=media&token=fa906b71-9780-47e0-bbf0-4b0e4dac0865',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Captain Chrup',
    tags: ['Ostepop', ' Mais'],
    ratings: {
      'perbjester@gmail.com': 1,
      'nraanes2@gmail.com': 1,
    },
    averageRating: 1,
    comment: 'Tørt, smakløs. Kanskje fin til dip. Kun mais. Ikke veldig sprø. Som Tempur. Ikke ost (selvsagt)',
    id: 'x5380TiZgZeohP0nnwyo',
  },
  {
    date: '18.05.2021',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fbf3b4bd0-2fee-4d77-8bbc-dd507a531d0d.jpg?alt=media&token=4ab7709d-a481-49f8-a1a0-8254ccb0515d',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 2,
    rating: null,
    title: 'Rin-Bee cheese sticks ',
    tags: ['Ostepop'],
    ratings: {
      'perbjester@gmail.com': 4,
      'nraanes2@gmail.com': 4,
    },
    averageRating: 4,
    comment: 'Ikke så salt. Heller ikke sterk ostesmak. Vanedannende ',
    id: 'xMqaA19bY8fnzdEJhOw1',
  },
  {
    date: '09.10.2020',
    image:
      'https://firebasestorage.googleapis.com/v0/b/mytaste-app.appspot.com/o/images%2Fa02cd235-3235-4f77-be29-81a0a398c2dc.jpg?alt=media&token=36f97911-896c-48c3-96b0-8b429f92f39a',
    creator: 'perbjester@gmail.com',
    averageRatingCount: 3,
    rating: null,
    title: 'Greenland Garada Nugget "chicken spicy" ',
    tags: ['Chips'],
    ratings: {
      'perbjester@gmail.com': 4,
      'nraanes2@gmail.com': 3,
      'gabriel.gregor@gmail.com': 3,
    },
    averageRating: 3.5,
    comment: 'Veldig søt, ikke mye smak. Bra crunch.',
    id: 'zziWs2Uz8zQT7NzA8owI',
  },
];
