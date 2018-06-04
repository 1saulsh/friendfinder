//create an array of friends. Each friend is an object within the array. inside the frind object contains a name attribute, the photo url as well as an array of scores
var friends = [
    {
        "name": "Chadwick Panther",
        "photo": "https://pbs.twimg.com/profile_images/755209143892348929/UhWrKJ-T_400x400.jpg",
        "scores": [
            "5",
            "4",
            "3",
            "2",
            "1",
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
       
        "name": "Robert Man",
        "photo": "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzMzODYwMzY2/robert-downey-jr-9542052-1-402.jpg",
        "scores": [
            "4",
            "4",
            "4",
            "2",
            "4",
            "1",
            "4",
            "3",
            "4",
            "5" 
        ]
    },
    {
        "name": "Mark Hulk",
        "photo": "https://www.biography.com/.image/t_share/MTE1ODA0OTc1NzIwMjAzNzg5/mark-ruffalo-resizedjpg.jpg",
        "scores": [
            "3",
            "4",
            "3",
            "1",
            "2",
            "2",
            "2",
            "3",
            "4",
            "5"
    ]
    },
    {
        "name": "Chris Thor",
        "photo": "https://pixel.nymag.com/imgs/fashion/daily/2017/07/25/Chris-Hemsworth/25-Chris-Hemsworth.nocrop.w710.h2147483647.jpg",
        "scores": [
            "5",
            "5",
            "5",
            "4",
            "2",
            "5",
            "1",
            "4",
            "3",
            "4"
    ]
    },
    {
        "name": "Natasha Widow",
        "photo": "https://ia.media-imdb.com/images/M/MV5BMGMzMDkxMDctMTUxYy00MDJjLWFlNGItMmIzMjUxMzUzMThlXkEyXkFqcGdeQXVyMjcxNjQ5MjY@._V1_SY1000_SX800_AL_.jpg",
        "scores": [
            "3",
            "4",
            "2",
            "2",
            "5",
            "1",
            "2",
            "5",
            "2",
            "2"
    ]
    },
    {
        "name": "Halle Storm",
        "photo": "https://www.biography.com/.image/t_share/MTE1ODA0OTcxODYxNjQwNzE3/halle-berry-9542339-1-402.jpg",
        "scores": [
            "1",
            "4",
            "3",
            "2",
            "4",
            "3",
            "2",
            "3",
            "4",
            "1"
    ]
    },
    {
        "name": "Gal Widow",
        "photo": "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
        "scores": [
            "2",
            "4",
            "5",
            "2",
            "1",
            "3",
            "2",
            "3",
            "4",
            "3"
    ]
    },
    {
        "name": "Thandi Gamora",
        "photo": "https://pixel.nymag.com/imgs/daily/vulture/2016/07/01/01-thandie-newton.w1200.h630.jpg",
        "scores": [
            "4",
            "4",
            "3",
            "3",
            "1",
            "3",
            "2",
            "3",
            "4",
            "1"
    ]
    },
    {
        "name": "Anthony Falcon",
        "photo": "https://m.media-amazon.com/images/M/MV5BMTk3NTM1MjE2M15BMl5BanBnXkFtZTcwNzc5OTI2Mg@@._V1_UY317_CR17,0,214,317_AL_.jpg",
        "scores": [
            "3",
            "4",
            "3",
            "3",
            "1",
            "4",
            "2",
            "3",
            "4",
            "5"
        ]
    }
]

//we export the aray. This makes it accessible to other files using require
module.exports = friends;