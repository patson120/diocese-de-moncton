import { EventType, MenuType, MessageType, ParoisseType } from "@/types"

export const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'AIzaSyApdnBLqJeVW4c5tlZ32v8BzVBVWyJnYlg'
 export const BASE_URL = "http://diocese.wds-project.com/api"

export const archidiocese: MenuType[] = [
    {
        id: 1,
        image: '/assets/icons/noun-female-archbishop-1200093 1.png',
        title: 'Archevêque',
        description: 'Retrouvez tous les évêques de notre diocèse.',
        link: '/archeveques'
    },
    {
        id: 2,
        image: '/assets/icons/noun-bible-770951 1.png',
        title: 'Notre Histoire',
        description: 'Découvrez l’histoire du diocèse.',
        link: ''
    },
    {
        id: 3,
        image: '/assets/icons/noun-priest-51757 1.png',
        title: 'Catéchèse',
        description: 'Accompagner les personnes dans la foi.',
        link: '/catechese'
    },
    {
        id: 4,
        image: '/assets/icons/noun-clergy-4445372 1.png',
        title: 'Clergé',
        description: 'Tous les membres de notre diocèse.',
        link: '/clerges'
    },
    // {
    //     id: 5,
    //     image: '',
    //     title: 'Pastorale jeunesse',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     link: ''
    // },
    {
        id: 5,
        image: '/assets/icons/noun-flame-122214 1.png',
        title: 'Education de la foi de ...',
        description: 'Accompagner les jeunes dans leur cheminement de foi.',
        link: '/education-de-la-foi'
    },
    {
        id: 6,
        image: '/assets/icons/noun-bible-770951 1.png',
        title: 'Liturgie',
        description: 'Formation et engagement des laïcs dans la liturgie.',
        link: '/liturgie'
    },
    {
        id: 7,
        image: '/assets/icons/Frame.png',
        title: 'Justice & solidarité',
        description: 'Promouvoir la justice sociale et la solidarité.',
        link: '/justice-solidarite'
    },
    {
        id: 8,
        image: '/assets/icons/noun-liturgy-5166501 1.png',
        title: 'Catéchuménat',
        description: 'Accompagner les personnes dans la foi.',
        link: '/education-de-la-foi'
    },
]

export const actualites: MenuType[] = [
    {
        id: 1,
        image: '',
        title: 'Nouvelles',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '/actualites'
    },
    {
        id: 2,
        image: '',
        title: 'Evènements',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '/evenements'
    },
    {
        id: 3,
        image: '',
        title: 'Archives',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '/evenements'
    }
]

export const sacrements: MenuType[] = [
    {
        id: 1,
        image: '/assets/icons/noun-baptism-2786507 1.png',
        title: 'Baptêmes',
        description: 'Porte d’entrée dans la vie chrétienne.',
        link: '/bapteme-sacrements'
    },
    {
        id: 2,
        image: '/assets/icons/sang.png',
        title: 'Confirmations',
        description: 'Recevoir l\'Esprit-Saint et devenir un témoin du Christ',
        link: '/confirmation-sacrements'
    },
    {
        id: 3,
        image: '/assets/icons/noun-eucharist-7479333 1.png',
        title: 'Eucharisties',
        description: 'Le sacrement qui unit les fidèles au sacrifice du Christ.',
        link: '/eucharistie-sacrements'
    },
    {
        id: 4,
        image: '/assets/icons/noun-confession-886364 1.png',
        title: 'Reconcilliation',
        description: 'Un sacrement de guérison et de miséricorde',
        link: '/reconcilliation-sacrements'
    },
    {
        id: 5,
        image: '/assets/icons/Frame.png',
        title: 'Mariages',
        description: 'Une alliance d\'amour bénie par Dieu',
        link: '/mariage-sacrements'
    },
    {
        id: 6,
        image: '/assets/icons/plus.png',
        title: 'Onction des malades',
        description: 'Un sacrement de réconfort, de guérison et d\'espérance',
        link: '/onction-malade-sacrements'
    },
    {
        id: 7,
        image: '/assets/icons/noun-religion-7293616 1.png',
        title: 'Ordre',
        description: 'L’évêque, le prête et le diacre: mieux comprendre.',
        link: '/ordre-sacrements'
    }
]

export const mouvements: MenuType[] = [
    {
        id: 1,
        image: '/assets/icons/people.png',
        title: 'Chevalier de Colomb',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 2,
        image: '/assets/icons/people.png',
        title: 'Comité diocésain de l...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 3,
        image: '/assets/icons/people.png',
        title: 'Mouvements des fem...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: '/mouvements'
    },
    {
        id: 4,
        image: '/assets/icons/people.png',
        title: 'Cursillo',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 5,
        image: '/assets/icons/people.png',
        title: 'Développement et pai...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },

    {
        id: 6,
        image: '/assets/icons/people.png',
        title: 'La vie montante',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 7,
        image: '/assets/icons/people.png',
        title: 'Legion de Marie',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 8,
        image: '/assets/icons/people.png',
        title: 'Renouveau charismat...',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    },
    {
        id: 9,
        image: '/assets/icons/people.png',
        title: "Service d'animation",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        link: ''
    }
]

export const ressources: MenuType[] = [
    // {
    //     id: 1,
    //     image: '',
    //     title: 'Bulletins paroissiaux',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     link: ''
    // },
    {
        id: 1,
        image: '/assets/icons/noun-cemetery-6767879 1.png',
        title: 'Cimetières',
        description: 'Un lieu de recueillement, de mémoire et de paix.',
        link: '/cimetiere'
    },
    {
        id: 2,
        image: '/assets/icons/time.png',
        title: 'Horaires des messes',
        description: 'Horaire des messes de la semaine !',
        link: '/horaires-messes'
    },
    // {
    //     id: 4,
    //     image: '',
    //     title: 'Conférence des éveq...',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     link: ''
    // },
    // {
    //     id: 5,
    //     image: '',
    //     title: 'Village des sources',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     link: ''
    // },
    {
        id: 3,
        image: '/assets/icons/noun-law-7399804 1.png',
        title: 'Chancellerie',
        description: 'Pour les questions canoniques et historiques.',
        link: '/chancellerie'
    },
    {
        id: 4,
        image: '/assets/icons/note.png',
        title: 'Tribunal matrimonial',
        description: 'Accompagnement aux personnes divorcées ',
        link: '/tribunal-matrimonial'
    },
    // {
    //     id: 6,
    //     image: '',
    //     title: 'Commucauté féminin...',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     link: ''
    // },
    // {
    //     id: 7,
    //     image: '',
    //     title: 'Communauté mascul...',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //     link: ''
    // }
]


export const paroisses: ParoisseType[] = [
    {
        title: "Immaculée-Conception",
        adresse: "4049, Route 480 Acadieville NB E4Y 1Z3",
        tel: "(506) 775-2421",
        image: "/assets/img/paroisse-1.png"
    },
    {
        title: "Saint-Anne",
        adresse: "4049, Route 480 Acadieville NB E4Y 1Z3",
        tel: "(506) 775-2421",
        image: "/assets/img/paroisse-2.png"
    },
    {
        title: "Saint-Baptiste",
        adresse: "4049, Route 480 Acadieville NB E4Y 1Z3",
        tel: "(506) 775-2421",
        image: "/assets/img/paroisse-3.png"
    },
    {
        title: "Notre Dame de Fatima",
        adresse: "4049, Route 480 Acadieville NB E4Y 1Z3",
        tel: "(506) 775-2421",
        image: "/assets/img/paroisse-1.png"
    },
]

export const events: EventType[] = [
    {
        jour: "08",
        heure: "15h00",
        mois: "Sept",
        lieu: "Au diocèse de Moncton",
        title: "Soupé au homard à pointe Sapin",
        type: "Communautaire, Formation, Célébration"
    },
    {
        jour: "14",
        heure: "08h00",
        mois: "Sept",
        lieu: "Au diocèse de Moncton",
        title: "Trending the soil, tending the sowe...",
        type: "Communautaire, Formation, Célébration"
    },
    {
        jour: "14",
        heure: "10h00",
        mois: "Sept",
        lieu: "Au diocèse de Moncton",
        title: "40e anniversaire du pape Jean Pa...",
        type: "Communautaire, Formation, Célébration"
    },
    // {
    //     jour: "23",
    //     heure: "14h00",
    //     mois: "Sept",
    //     lieu: "Au diocèse de Moncton",
    //     title: "Monday the movies",
    //     type: "Communautaire, Formation, Célébration"
    // },
]

export const messages: MessageType[] = [
    {
        title: "Décret de suppression de la paroisse Saint-Timothée de Shemogue",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Quête spéciale envers le relèvement financier du diocèse",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Nominations ecclésiales pour l'archidiocèse de Moncton",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Décret établissant les nouveaux tarifs diocésains pour les funérailles et les mar...",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Décret épiscopal rétablissant l'obligation d'assister à la messe dominicale",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Mise à jour de Mgr Desrochers sur l'état des poursuites contre l'archidiocèse, en...",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Mise à jour de Mgr Desrochers sur l'état des poursuites contre l'archidiocèse, en...",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Mise à jour de Mgr Desrochers sur l'état des poursuites contre l'archidiocèse, en...",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
    {
        title: "Mise à jour de Mgr Desrochers sur l'état des poursuites contre l'archidiocèse, en...",
        date: "25 Jan 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis vero repudiandae eveniet, animi nisi odio totam ratione iste debitis."
    },
]