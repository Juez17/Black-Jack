var deck = [
    {
        cardName: 'Ace of spades',
        cardValue: 1,
        image: "images/ace2.jpg"
    },
    {
        cardName: 'King of spades',
        cardValue: 10,
        image: "https://i.pinimg.com/originals/ab/c2/0f/abc20fa5541461088f90ceeb76167eca.png"
    },
    {
        cardName: 'Queen of spades',
        cardValue: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/51_Q_di_picche.jpg/130px-51_Q_di_picche.jpg"
    },
    {
        cardName: 'jack of spades',
        cardValue: 10,
        image: "https://external-preview.redd.it/c5Por50jH1-nAyfpiWX-9-E8cr12PHMHTeI6DuhCqec.png?auto=webp&s=34142d8b1fa32517531b9c559f1e878a6d311734"
    },
    {
        cardName: '10 of spades',
        cardValue: 10,
        image: "https://www.careerastrology.net/wp-content/uploads/2018/08/10-of-spades.png"
    },
    {
        cardName: '9 of spades',
        cardValue: 9,
        image: "https://cdna.artstation.com/p/assets/images/images/004/118/452/large/cynthia-grillo-9ofspades-thumb.jpg?1480518358"
    },
    {
        cardName: '8 of spades',
        cardValue: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Playing_card_spade_8.svg"
    },
    {
        cardName: '7 of spades',
        cardValue: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/1200px-Playing_card_spade_7.svg.png"
    },
    {
        cardName: '6 of spades',
        cardValue: 6,
        image: "https://i.pinimg.com/originals/67/55/50/675550981e6d63675961c4e567b679bd.png"
    },
    {
        cardName: '5 of spades',
        cardValue: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/1200px-Playing_card_spade_5.svg.png"
    },
    {
        cardName: '4 of spades',
        cardValue: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/1200px-Playing_card_spade_4.svg.png"
    },
    {
        cardName: '3 of spades',
        cardValue: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/1200px-Playing_card_spade_3.svg.png"
    },
    {
        cardName: '2 of spades',
        cardValue: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/1200px-Playing_card_spade_2.svg.png"
    },
    {
        cardName: 'Ace of heart',
        cardValue: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/English_pattern_ace_of_hearts.svg/1200px-English_pattern_ace_of_hearts.svg.png"
    },
    {
        cardName: 'King of heart',
        cardValue: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/English_pattern_king_of_hearts.svg/1200px-English_pattern_king_of_hearts.svg.png"
    },
    {
        cardName: 'Queen of heart',
        cardValue: 10,
        image: "https://previews.123rf.com/images/henningmarquardt/henningmarquardt1703/henningmarquardt170300249/74712944-large-index-playing-card-queen-of-hearts.jpg"
    },
    {
        cardName: 'jack of heart',
        cardValue: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/English_pattern_jack_of_hearts.svg/360px-English_pattern_jack_of_hearts.svg.png"
    },
    {
        cardName: '10 of heart',
        cardValue: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Atlas_deck_10_of_hearts.svg/1200px-Atlas_deck_10_of_hearts.svg.png"
    },
    {
        cardName: '9 of heart',
        cardValue: 9,
        image: "data:image/png;base64,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"
    },
    {
        cardName: '8 of heart',
        cardValue: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/1200px-8_of_hearts.svg.png"
    },
    {
        cardName: '7 of heart',
        cardValue: 7,
        image: "https://thumbs.dreamstime.com/b/computer-generated-illustration-image-seven-hearts-card-regular-card-poker-playing-deck-seven-hearts-card-197909264.jpg"
    },
    {
        cardName: '6 of heart',
        cardValue: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Atlas_deck_6_of_hearts.svg/1200px-Atlas_deck_6_of_hearts.svg.png"
    },
    {
        cardName: '5 of heart',
        cardValue: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/1200px-Playing_card_heart_5.svg.png"
    },
    {
        cardName: '4 of heart',
        cardValue: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/4_of_hearts.svg/1200px-4_of_hearts.svg.png"
    },
    {
        cardName: '3 of heart',
        cardValue: 3,
        image: "https://previews.123rf.com/images/harmkruyshaar/harmkruyshaar0911/harmkruyshaar091100010/5836294-three-of-hearts-playing-card.jpg"
    },
    {
        cardName: '2 of heart',
        cardValue: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/819px-Playing_card_heart_2.svg.png"
    },
    {
        cardName: 'Ace of diamond',
        cardValue: 1,
        image: "https://i.pinimg.com/originals/1d/a5/1b/1da51bc00765016532f5aa537bd3c6d8.png"
    },
    {
        cardName: 'King of diamond',
        cardValue: 10,
        image: "https://amberflynn.com/wp-content/uploads/2015/05/king_of_diamonds.jpg"
    },
    {
        cardName: 'Queen of diamond',
        cardValue: 10,
        image: "https://i.pinimg.com/originals/03/87/1b/03871b534d29e3657f0ddde956b48d1a.jpg"
    },
    {
        cardName: 'jack of diamond',
        cardValue: 10,
        image: "https://img.pixers.pics/pho_wat(s3:700/FO/53/79/01/23/700_FO53790123_4a4c7157968cc3e701d1f6075f7796ce.jpg,516,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,296,650,jpg)/fototapety-playing-card-jack-of-diamonds.jpg.jpg"
    },
    {
        cardName: '10 of diamond',
        cardValue: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/819px-Playing_card_diamond_10.svg.png"
    },
    {
        cardName: '9 of diamond',
        cardValue: 9,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/1200px-Playing_card_diamond_9.svg.png"
    },
    {
        cardName: '8 of diamond',
        cardValue: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/1200px-Playing_card_diamond_8.svg.png"
    },
    {
        cardName: '7 of diamond',
        cardValue: 7,
        image: "https://i.pinimg.com/originals/93/bb/b3/93bbb33e1576883a428d7b6149600d1c.jpg"
    },
    {
        cardName: '6 of diamond',
        cardValue: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/819px-Playing_card_diamond_6.svg.png"
    },
    {
        cardName: '5 of diamond',
        cardValue: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/5_of_diamonds.svg/1200px-5_of_diamonds.svg.png"
    },
    {
        cardName: '4 of diamond',
        cardValue: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/1200px-4_of_diamonds.svg.png"
    },
    {
        cardName: '3 of diamond',
        cardValue: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/1200px-Playing_card_diamond_3.svg.png"
    },
    {
        cardName: '2 of diamond',
        cardValue: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/819px-Playing_card_diamond_2.svg.png"
    },
    {
        cardName: 'Ace of club',
        cardValue: 1,
        image: "http://www.clipartsuggest.com/images/239/playing-cards-reference-pictures-WcNvQ5-clipart.png"
    },
    {
        cardName: 'King of club',
        cardValue: 10,
        image: "https://i.pinimg.com/originals/12/f7/a4/12f7a4211bbbbae45ffa90de88e20b40.png"
    },
    {
        cardName: 'Queen of club',
        cardValue: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Poker-sm-243-Qc.png"
    },
    {
        cardName: 'jack of club',
        cardValue: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Poker-sm-244-Jc.png"
    },
    {
        cardName: '10 of club',
        cardValue: 10,
        image: "https://c8.alamy.com/comp/W7EW9K/10-of-clubs-from-a-deck-of-goodall-son-ltd-playing-cards-c1940-artist-unknown-W7EW9K.jpg"
    },
    {
        cardName: '9 of club',
        cardValue: 9,
        image: "https://ih1.redbubble.net/image.657418833.9249/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
    },
    {
        cardName: '8 of club',
        cardValue: 8,
        image: "https://c8.alamy.com/comp/W7EW9H/8-of-clubs-from-a-deck-of-goodall-son-ltd-playing-cards-c1940-artist-unknown-W7EW9H.jpg"
    },
    {
        cardName: '7 of club',
        cardValue: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/7_of_clubs.svg/706px-7_of_clubs.svg.png"
    },
    {
        cardName: '6 of club',
        cardValue: 6,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/839f488c-d377-4eeb-999f-6bcace090bb4/d3kgfnt-02dfe6ed-7a7f-4690-bd25-ee1c055cfe71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODM5ZjQ4OGMtZDM3Ny00ZWViLTk5OWYtNmJjYWNlMDkwYmI0XC9kM2tnZm50LTAyZGZlNmVkLTdhN2YtNDY5MC1iZDI1LWVlMWMwNTVjZmU3MS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.KZtLB31HuK9as5iTGRVRSgFxVKOR5Hyjwt1JRlUKZ2g"
    },
    {
        cardName: '5 of club',
        cardValue: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/1200px-Playing_card_club_5.svg.png"
    },
    {
        cardName: '4 of club',
        cardValue: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/819px-Playing_card_club_4.svg.png"
    },
    {
        cardName: '3 of club',
        cardValue: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/English_pattern_3_of_clubs.svg/360px-English_pattern_3_of_clubs.svg.png"
    },
    {
        cardName: '2 of club',
        cardValue: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/1200px-Playing_card_club_2.svg.png"
    }
];
