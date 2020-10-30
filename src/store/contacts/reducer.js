const initialState = JSON.parse(localStorage.getItem('contacts')) || [
    {
        id: 1,
        online: true,
        name: 'Loki Odinson',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_02.jpg',
        history: [
            {
                own: true,
                message: 'Hello Loki. How R U?',
                date: 'Mon Oct 18 2020 14:00:56 GMT+0200'
            },
            {
                own: false,
                message: 'My name is Loki!',
                date: 'Mon Oct 17 2020 13:00:56 GMT+0200'
            }, 
        ]

    },
    {
        id: 2,
        online: true,
        name: 'Thor Odinson',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
        history: [
            {
                own: true,
                message: 'Are you fat now?',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: true,
                message: 'Nice to meet you!',
                date: 'Mon Oct 20 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: 'My name is Thor. I am the Odin`s Son.',
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 3,
        online: false,
        name: 'Captain Marvel',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg',
        history: [
            {
                own: true,
                message: 'Do you hear me?',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: true,
                message: 'Hello, where are you?',
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: true,
                message: 'We need your help immediately!!!',
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 4,
        online: true,
        name: 'Black Panther',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg',
        history: [
            {
                own: true,
                message: 'Black Panther forever!',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: false,
                message: 'Vacanda forever!!!',
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
        ]

    },
    {
        id: 5,
        online: false,
        name: 'Odin',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/115odn_ons_crd_02.jpg',
        history: [
            {
                own: true,
                message: 'There is no magic when one no longer believes.',
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: 'I told you I would tell you my names. This is what they call me. I\'m called Glad-of-War, Grim, Raider, and Third. I am One-Eyed. I am called Highest, and True-Guesser. I am Grimnir, and I am the Hooded One. I am All-Father, and I am Gondlir Wand-Bearer.',
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 6,
        online: true,
        name: 'Captain America',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
        history: [
            {
                own: false,
                message: 'The second one',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: false,
                message: 'After the war with Thanos',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: true,
                message: 'ohh, Steve, when you have started drinking?',
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: 'Avengers!! Lets drink!',
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 7,
        online: true,
        name: 'Black Widow',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_03.jpg',
        history: [
            {
                own: false,
                message: 'I’ve Got Red In My Ledger. I’d Like To Wipe It Out.',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: true,
                message: 'Good words!',
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: 'At Some Point We All Have To Choose Between What The World Wants You To Be And Who You Are.',
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 8,
        online: false,
        name: 'Iron Man',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
        history: [
            {
                own: true,
                message: 'I am not Jarvis.',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: false,
                message: 'I am Iron Man.',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: false,
                message: 'Jarvis, sometimes you gotta run before you can walk.',
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: 'It’s working. We’re safe. America is secure.',
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 9,
        online: true,
        name: 'Star Lord',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_crd_02.jpg',
        history: [
            {
                own: false,
                message: `Don’t Call Us Plucky. We Don’t Know What It Means`,
                date: 'Mon Oct 21 2020 00:02:56 GMT+0200'
            },
            {
                own: false,
                message: `Okay, I'm Gonna Get A Bowflex. I'm Gonna Commit. I'm Gonna Get Some Dumbbells`,
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: `Let's Talk About This Plan Of Yours. I Think It's Good, Except It Sucks`,
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 10,
        online: true,
        name: 'Bruce Benner',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
        history: [
            {
                own: false,
                message: 'agrhhh',
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: true,
                message: 'The sun is almost down, big boy',
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: 'Hulk smash!',
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
    {
        id: 11,
        online: false,
        name: 'Thanos',
        avatar: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/019tha_ons_crd_03.jpg',
        history: [
            {
                own: false,
                message: `I'M A SURVIVOR`,
                date: 'Mon Oct 20 2020 00:02:56 GMT+0200'
            },
            {
                own: false,
                message: `YOU SHOULD HAVE GONE FOR THE HEAD`,
                date: 'Mon Oct 16 2020 00:01:56 GMT+0200'
            },
            {
                own: false,
                message: `YOU COULD NOT LIVE WITH YOUR OWN FAILURE, AND WHERE DID THAT BRING YOU? BACK TO ME.`,
                date: 'Mon Oct 15 2020 13:00:56 GMT+0200'
            },
        ]

    },
]

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_MESSAGE':
            return state.map(contact => {
                if (contact.id === action.payload.contactId) {
                    contact.history = [action.payload.message, ...contact.history]
                    return contact
                } else return contact
            })
        case 'GET_ANSWER':
            return state.map(contact => {
                if (contact.id === action.payload.contactId) {
                    contact.history = [action.payload.answer, ...contact.history]
                    return contact
                } else return contact
            })
        default: return state
    }
}
