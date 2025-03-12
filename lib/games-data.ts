export type Game = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  popularity: number; // 1-5 scale for sorting
  createdAt?: Date; // For backward compatibility
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "word",
    name: "Word Games 📝",
    description: "Daily word puzzles and challenges",
  },
  {
    id: "geography",
    name: "Geography 🌍",
    description: "Test your knowledge of places and locations",
  },
  {
    id: "music",
    name: "Music 🎵",
    description: "Test your music knowledge and listening skills",
  },
  {
    id: "movies",
    name: "Movies & TV 🎬",
    description: "Guess the movie or TV show from a series of clues",
  },
  {
    id: "gaming",
    name: "Gaming 🎮",
    description: "Test your gaming knowledge"
  },
  {
    id: "sports",
    name: "Sports ⚽",
    description: "Sports-themed puzzles and prediction games",
  },
  {
    id: "math",
    name: "Math & Logic 🔢",
    description: "Number puzzles and logic challenges",
  },
  {
    id: "other",
    name: "Other 🎯",
    description: "Various themed daily challenges and puzzles",
  },
];

export const games: Game[] = [
  {
    id: "wordle",
    name: "Wordle",
    description: "Guess the five-letter word in six tries with color-coded hints",
    url: "https://www.nytimes.com/games/wordle/index.html",
    category: "word",
    tags: ["puzzle"],
    popularity: 5,
  },
  {
    id: "timeguessr",
    name: "TimeGuessr",
    description: "Guess the year and location a photo was taken in",
    url: "https://timeguessr.com/",
    category: "geography",
    tags: ["history", "photos"],
    popularity: 4,
  },
  {
    id: "globle",
    name: "Globle",
    description: "Guess the country with proximity hints",
    url: "https://globle-game.com/",
    category: "geography",
    tags: ["countries"],
    popularity: 3,
  },
  {
    id: "heardle",
    name: "Heardle",
    description: "Guess the song from short audio clips",
    url: "https://heardlewordle.io/",
    category: "music",
    tags: ["audio"],
    popularity: 3,
  },
  {
    id: "nerdle",
    name: "Nerdle",
    description: "Guess the equation with number hints",
    url: "https://nerdlegame.com/",
    category: "math",
    tags: ["equation"],
    popularity: 2,
  },
  {
    id: "framed",
    name: "Framed",
    description: "Guess the movie from screenshots",
    url: "https://framed.wtf/",
    category: "movies",
    tags: ["screenshots"],
    popularity: 3,
  },
  {
    id: "immaculate-grid",
    name: "Immaculate Grid",
    description: "Fill a 3x3 grid with players who match the criteria",
    url: "https://www.immaculategrid.com/",
    category: "sports",
    tags: ["grid", "players"],
    popularity: 4,
  },
  {
    id: "poeltl",
    name: "Poeltl",
    description: "Guess the NBA player with limited clues",
    url: "https://poeltl.nbpa.com",
    category: "sports",
    tags: ["basketball", "nba"],
    popularity: 2,
  },
  {
    id: "crosswordle",
    name: "Crosswordle",
    description: "A crossword-style Wordle variant with multiple words",
    url: "https://crosswordle.com/",
    category: "word",
    tags: ["puzzle", "crossword"],
    popularity: 2,
  },
  {
    id: "waffle",
    name: "Waffle",
    description: "Rearrange letters to form six words in a waffle pattern",
    url: "https://wafflegame.net/",
    category: "word",
    tags: ["puzzle", "rearrange"],
    popularity: 3,
  },
  {
    id: "mathler",
    name: "Mathler",
    description: "Find the hidden calculation that equals the target number",
    url: "https://www.mathler.com/",
    category: "math",
    tags: ["calculation"],
    popularity: 1,
  },
  {
    id: "countryle",
    name: "Countryle",
    description: "Guess the country with hints about location, population, and more",
    url: "https://countryle.com/",
    category: "geography",
    tags: ["countries"],
    popularity: 1,
  },
  {
    id: "flagle",
    name: "Flagle",
    description: "Guess the country from its flag, revealed piece by piece",
    url: "https://www.flagle.io/",
    category: "geography",
    tags: ["flags"],
    popularity: 2,
  },
  {
    id: "moviedle",
    name: "Moviedle",
    description: "Guess the movie from a 1-second clip that gets longer with each guess",
    url: "https://likewise.com/games/moviedle",
    category: "movies",
    tags: ["clips"],
    popularity: 2,
  },
  {
    id: "actorle",
    name: "Actorle",
    description: "Guess the actor from their filmography clues",
    url: "https://actorle.com/",
    category: "movies",
    tags: ["actors"],
    popularity: 1,
  },
  {
    id: "loldle",
    name: "Loldle",
    description: "Guess the League of Legends champion using various clues",
    url: "https://loldle.net/",
    category: "gaming",
    tags: ["lol"],
    popularity: 3,
  },
  {
    id: "dungleon",
    name: "Dungleon",
    description: "A daily dungeon crawler where every player gets the same run",
    url: "https://www.dungleon.com/",
    category: "gaming",
    tags: ["rpg"],
    popularity: 2,
  },
  {
    id: "pictle",
    name: "Pictle",
    description: "Guess the picture as it slowly becomes less pixelated",
    url: "https://pictle.web.app/",
    category: "other",
    tags: ["pictures", "visual"],
    popularity: 2,
  },
  {
    id: "pokedle",
    name: "Pokedle",
    description: "Guess the Pokémon using type, generation, and stat clues",
    url: "https://pokedle.net/",
    category: "gaming",
    tags: ["anime", "pokemon"],
    popularity: 3,
  },
  {
    id: "smashdle",
    name: "Smashdle",
    description: "Guess the Smash character from a series of clues",
    url: "https://smashdle.net/",
    category: "gaming",
    tags: ["smash"],
    popularity: 2,
  },
  {
    id: "onepiecedle",
    name: "Onepiecedle",
    description: "Guess the One Piece character from a series of clues",
    url: "https://onepiecedle.net/",
    category: "movies",
    tags: ["anime", "onepiece"],
    popularity: 2,
  },
  {
    id: "narutodle",
    name: "Narutodle",
    description: "Guess the Naruto character from a series of clues",
    url: "https://narutodle.net/",
    category: "movies",
    tags: ["anime", "naruto"],
    popularity: 2,
  },
  {
    id: "dotadle",
    name: "Dotadle",
    description: "Guess the Dota character from a series of clues",
    url: "https://dotadle.net/",
    category: "gaming",
    tags: ["dota"],
    popularity: 2,
  },
  {
    id: "squaredle",
    name: "Squaredle",
    description: "Find words in a grid of letters by connecting adjacent squares",
    url: "https://squaredle.app/",
    category: "word",
    tags: ["puzzle", "grid"],
    popularity: 2,
  },
  {
    id: "strands",
    name: "Strands",
    description: "Connect words that share a theme in a grid of letters",
    url: "https://www.nytimes.com/games/strands",
    category: "word",
    tags: ["puzzle", "nytimes"],
    popularity: 3,
  },
  {
    id: "lewdle",
    name: "Lewdle",
    description: "Like Wordle, but with lewd words only",
    url: "https://www.lewdlegame.com/App",
    category: "word",
    tags: ["adult", "puzzle"],
    popularity: 1,
  },
  {
    id: "redactle",
    name: "Redactle",
    description: "Guess the redacted Wikipedia article by revealing words",
    url: "https://redactle.net/",
    category: "word",
    tags: ["wikipedia"],
    popularity: 2,
  },
  {
    id: "contexto",
    name: "Contexto",
    description: "Guess the secret word by semantic similarity",
    url: "https://contexto.me/",
    category: "word",
    tags: ["semantics", "ai"],
    popularity: 3,
  },
  {
    id: "geoguessr",
    name: "GeoGuessr",
    description: "Guess where in the world you are from Street View images",
    url: "https://www.geoguessr.com/",
    category: "geography",
    tags: ["maps", "streetview"],
    popularity: 5,
  },
  {
    id: "statele",
    name: "Statele",
    description: "Guess the US state from its outline",
    url: "https://statele.teuteuf.fr/",
    category: "geography",
    tags: ["usa", "states"],
    popularity: 2,
  },
  {
    id: "subwaydle",
    name: "Subwaydle",
    description: "Find a valid NYC subway route between two stations",
    url: "https://www.subwaydle.com/",
    category: "geography",
    tags: ["transit", "puzzle"],
    popularity: 2,
  },
  {
    id: "cloudle",
    name: "Cloudle",
    description: "Guess the 5-day weather forecast for a mystery city",
    url: "https://cloudle.app/",
    category: "geography",
    tags: ["weather", "forecast"],
    popularity: 1,
  },
  {
    id: "gamedle",
    name: "Gamedle",
    description: "Guess the video game from screenshots and clues",
    url: "https://www.gamedle.wtf/",
    category: "gaming",
    tags: ["screenshots", "videogames"],
    popularity: 4,
  },
  {
    id: "guessthe-game",
    name: "GuessTheGame",
    description: "Identify the video game from a small cropped image",
    url: "https://guessthe.game/",
    category: "gaming",
    tags: ["images", "videogames"],
    popularity: 3,
  },
  {
    id: "valorantle",
    name: "Valorantle",
    description: "Guess the Valorant agent from a series of clues",
    url: "https://valorantle.com/",
    category: "gaming",
    tags: ["valorant"],
    popularity: 2,
  },
  {
    id: "boxoffice-game",
    name: "Box Office Game",
    description: "Guess the top 5 movies from a past weekend's box office",
    url: "https://boxofficega.me/",
    category: "movies",
    tags: ["trivia"],
    popularity: 3,
  },
  {
    id: "cinenerdle",
    name: "Cinenerdle",
    description: "Guess the movie from images and clues",
    url: "https://www.cinenerdle.app/",
    category: "movies",
    tags: ["images", "clues"],
    popularity: 2,
  },
  {
    id: "posterdle",
    name: "Posterdle",
    description: "Guess the movie from its poster as it becomes clearer",
    url: "https://likewise.com/games/posterdle",
    category: "movies",
    tags: ["posters", "visual"],
    popularity: 2,
  },
  {
    id: "bandle",
    name: "Bandle",
    description: "Guess the song, one instrument at a time",
    url: "https://bandle.app/",
    category: "music",
    tags: ["audio", "songs"],
    popularity: 3,
  },
  {
    id: "musicle",
    name: "Musicle",
    description: "Guess the artist from song titles",
    url: "https://musicle.app/",
    category: "music",
    tags: ["artists", "songs"],
    popularity: 2,
  },
  {
    id: "lyricle",
    name: "Lyricle",
    description: "Guess the song from its lyrics",
    url: "https://lyricle.app/",
    category: "music",
    tags: ["lyrics", "songs"],
    popularity: 2,
  },
  {
    id: "numberle",
    name: "Numberle",
    description: "Guess the hidden number with numerical hints",
    url: "https://numberle.org/",
    category: "math",
    tags: ["numbers", "logic"],
    popularity: 1,
  },
  {
    id: "primel",
    name: "Primel",
    description: "Guess the 5-digit prime number",
    url: "https://converged.yt/primel/",
    category: "math",
    tags: ["numbers"],
    popularity: 1,
  },
  {
    id: "sportsdle",
    name: "Sportsdle",
    description: "Guess the player from clues",
    url: "https://www.sportsdle.com/",
    category: "sports",
    tags: ["puzzle"],
    popularity: 2,
  },
  {
    id: "factle",
    name: "Factle",
    description: "Rank items in a list based on a factual question",
    url: "https://factle.app/",
    category: "other",
    tags: ["trivia", "ranking"],
    popularity: 2,
  },
  {
    id: "foodle",
    name: "Foodle",
    description: "Guess the food-related word",
    url: "https://foodle.io/",
    category: "other",
    tags: ["food", "word", "puzzle"],
    popularity: 2,
  },
  {
    id: "murdle",
    name: "Murdle",
    description: "Solve a daily murder mystery with logic deduction",
    url: "https://murdle.com/",
    category: "other",
    tags: ["mystery", "logic"],
    popularity: 3,
  },
  {
    id: "chronological",
    name: "Chronological",
    description: "Arrange historical events in chronological order",
    url: "https://chronological.io/",
    category: "other",
    tags: ["history"],
    popularity: 2,
  },
  {
    id: "wikitrivia",
    name: "Wikitrivia",
    description: "Arrange historical events on a timeline",
    url: "https://wikitrivia.tomjwatson.com/",
    category: "other",
    tags: ["history", "wikipedia"],
    popularity: 2,
  },
  {
    id: "antiwordle",
    name: "Antiwordle",
    description: "Try NOT to guess the word - opposite of Wordle",
    url: "https://www.antiwordle.com/",
    category: "word",
    tags: ["puzzle"],
    popularity: 2,
  },
  {
    id: "kilordle",
    name: "Kilordle",
    description: "Solve 1000 Wordle puzzles simultaneously",
    url: "https://jonesnxt.github.io/kilordle/",
    category: "word",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "hello-wordl",
    name: "Hello Wordl",
    description: "Wordle with customizable word length",
    url: "https://hellowordl.net/",
    category: "word",
    tags: ["puzzle"],
    popularity: 2,
  },
  {
    id: "letterle",
    name: "Letterle",
    description: "Guess the single letter (yes, really)",
    url: "https://edjefferson.com/letterle/",
    category: "word",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "passwordle",
    name: "Passwordle",
    description: "Guess the password with security-themed hints",
    url: "https://passwordle.com/",
    category: "word",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "byrdle",
    name: "Byrdle",
    description: "Guess the choral music term",
    url: "https://www.byrdle.net/",
    category: "music",
    tags: ["choral", "classical"],
    popularity: 1,
  },
  {
    id: "beadle",
    name: "Beadle",
    description: "Guess the Beatles song from a snippet",
    url: "https://beadle.gg/",
    category: "music",
    tags: ["beatles", "rock"],
    popularity: 2,
  },
  {
    id: "swiftle",
    name: "Swiftle",
    description: "Guess the Taylor Swift song from a snippet",
    url: "https://taylordle.org/",
    category: "music",
    tags: ["taylor swift", "pop"],
    popularity: 3,
  },
  {
    id: "citydle",
    name: "Citydle",
    description: "Guess the city from a street view",
    url: "https://citydle.com/",
    category: "geography",
    tags: ["cities", "streetview"],
    popularity: 2,
  },
  {
    id: "airportle",
    name: "Airportle",
    description: "Guess the airport from its 3-letter code",
    url: "https://airportle.glitch.me/",
    category: "geography",
    tags: ["airports", "travel"],
    popularity: 1,
  },
  {
    id: "travle",
    name: "Travle",
    description: "Travel from the Start Country to the End Country. Try to get there in the fewest guesses!",
    url: "https://travle.earth",
    category: "geography",
    tags: ["countries", "flags"],
    popularity: 3,
  },
  {
    id: "stewardle",
    name: "Stewardle",
    description: "Guess the Formula 1 driver",
    url: "https://stewardle.com/",
    category: "sports",
    tags: ["racing", "f1"],
    popularity: 2,
  },
  {
    id: "gameofthrones",
    name: "GOTdle",
    description: "Guess the Game of Thrones character",
    url: "https://gotdle.net/",
    category: "movies",
    tags: ["game of thrones", "fantasy"],
    popularity: 2,
  },
  {
    id: "lordle",
    name: "Lordle of the Rings",
    description: "Wordle with Lord of the Rings vocabulary",
    url: "https://digitaltolkien.github.io/vue-wordle/",
    category: "movies",
    tags: ["lord of the rings", "fantasy"],
    popularity: 2,
  },
  {
    id: "marvel-wordle",
    name: "Marvel Wordle",
    description: "Guess the Marvel character",
    url: "https://marvelwordle.netlify.app/",
    category: "movies",
    tags: ["marvel", "superheroes"],
    popularity: 2,
  },
  {
    id: "hogwartle",
    name: "Hogwartle",
    description: "Guess the Harry Potter character",
    url: "https://www.hogwartsishere.com/hogwartle/",
    category: "movies",
    tags: ["harry potter", "fantasy"],
    popularity: 2,
  },
  {
    id: "minecraftle",
    name: "Minecraftle",
    description: "Guess the Minecraft item",
    url: "https://minecraftle.zachmanson.com/",
    category: "gaming",
    tags: ["minecraft"],
    popularity: 2,
  },
  {
    id: "eldrow",
    name: "Eldrow",
    description: "Reverse Wordle - computer guesses your word",
    url: "https://www.simn.me/eldrow/",
    category: "word",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "emovi",
    name: "Emovi",
    description: "Guess the movie from emojis",
    url: "https://emovi.teuteuf.fr/",
    category: "movies",
    tags: ["emojis", "puzzle"],
    popularity: 2,
  },
  {
    id: "foodguessr",
    name: "FoodGuessr",
    description: "Guess the country based on food photos",
    url: "https://foodguessr.com/",
    category: "other",
    tags: ["food", "geography", "photos"],
    popularity: 2,
  },
  {
    id: "artle",
    name: "Artle",
    description: "Guess the artist from their artwork",
    url: "https://www.nga.gov/artle.html",
    category: "other",
    tags: ["art", "artists", "paintings"],
    popularity: 2,
  },
  {
    id: "book-dle",
    name: "Book-dle",
    description: "Guess the book from a quote",
    url: "https://www.book-dle.com/",
    category: "other",
    tags: ["books", "literature"],
    popularity: 1,
  },
  {
    id: "bookdle",
    name: "Bookdle",
    description: "Guess the book from its cover",
    url: "https://likewise.com/games/bookdle",
    category: "other",
    tags: ["books", "literature"],
    popularity: 2,
  },
  {
    id: "costcodle",
    name: "Costcodle",
    description: "Guess the Costco product from its price",
    url: "https://costcodle.com/",
    category: "other",
    tags: ["shopping", "prices", "retail"],
    popularity: 3,
  },
  {
    id: "birdle",
    name: "Birdle",
    description: "Guess the bird",
    url: "https://www.play-birdle.com/",
    category: "other",
    tags: ["birds", "nature", "animals"],
    popularity: 2,
  },
  {
    id: "animordle",
    name: "Animordle",
    description: "Guess the animal",
    url: "https://www.animordle.com/",
    category: "other",
    tags: ["animals", "nature", "photos"],
    popularity: 2,
  },
  {
    id: "lingule",
    name: "Lingule",
    description: "Guess the language",
    url: "https://lingule.xyz/",
    category: "other",
    tags: ["languages", "linguistics"],
    popularity: 2,
  },
  {
    id: "emotle",
    name: "Emotle",
    description: "Guess the emotion from facial expressions",
    url: "https://emotle.com/",
    category: "other",
    tags: ["emotions", "psychology"],
    popularity: 1,
  },
  {
    id: "stockle",
    name: "Stockle",
    description: "Guess the stock from its price chart",
    url: "https://stockle.win/",
    category: "other",
    tags: ["stocks", "finance"],
    popularity: 2,
  },
  {
    id: "daily-chess-puzzle",
    name: "Daily Chess Puzzle",
    description: "Solve a daily chess puzzle",
    url: "https://lichess.org/training/daily",
    category: "math",
    tags: ["chess", "puzzle", "strategy"],
    popularity: 4,
  },
  {
    id: "wiki-game",
    name: "The Wiki Game",
    description: "Race from one Wikipedia page to another in the least number of steps",
    url: "https://www.thewikigamedaily.com",
    category: "other",
    tags: ["wikipedia", "speedrun"],
    popularity: 5,
  },
  {
    id: "minute-cryptic",
    name: "Minute Cryptic",
    description: "Solve a cryptic crossword style clue",
    url: "https://www.minutecryptic.com/",
    category: "word",
    tags: ["puzzle", "crossword"],
    popularity: 3,
  },
  {
    id: "thrice",
    name: "Thrice",
    description: "Answer trivia questions within clues",
    url: "https://catfishing.net/",
    category: "other",
    tags: ["trivia", "puzzle", "clues"],
    popularity: 2,
  },
  {
    id: "catfishing",
    name: "Catfishing",
    description: "Guess the Wikipedia article from its categories",
    url: "https://thrice.geekswhodrink.com/",
    category: "other",
    tags: ["wikipedia", "puzzle"],
    popularity: 2,
  },
  {
    id: "letter-brew",
    name: "Letter Brew",
    description: "Solve mini word puzzles then figure out what word can be made from the answers",
    url: "https://www.ted.com/games/letter-brew",
    category: "word",
    tags: ["puzzle"],
    popularity: 2,
  },
  {
    id: "aniguessr",
    name: "AniGuessr",
    description: "Guess the anime from a screenshot, opening, and identify its characters",
    url: "https://aniguessr.com",
    category: "movies",
    tags: ["anime"],
    popularity: 2,
  },
  {
    id: "sqnces",
    name: "Sqnces",
    description: "Uncover the hidden word given a 3 letter sequence",
    url: "https://sqnces.com",
    category: "word",
    tags: ["puzzle"],
    popularity: 2,
  },
  {
    id: "daily-trivia",
    name: "Daily Trivia",
    description: "Answer 5 new trivia questions every day",
    url: "https://www.playdailytrivia.com",
    category: "other",
    tags: ["trivia"],
    popularity: 2,
  },
  {
    id: "tradle",
    name: "Tradle",
    description: "Guess the country by its top exports",
    url: "https://games.oec.world/en/tradle/",
    category: "geography",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "circuits",
    name: "Circuits",
    description: "Enter words to complete the circuit",
    url: "https://circuitsgame.com/",
    category: "word",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "daily-walkoff",
    name: "Daily Walkoff",
    description: "Place players in trivia columns for MLB teams",
    url: "https://www.dailywalkoff.com/",
    category: "sports",
    tags: ["baseball"],
    popularity: 2,
  },
  {
    id: "matle",
    name: "Matle",
    description: "Wordle for chess; reveal hidden squares in a checkmate position",
    url: "https://www.matle.io/",
    category: "math",
    tags: ["chess", "puzzle", "strategy"],
    popularity: 2,
  },
  {
    id: "orbits",
    name: "Orbits",
    description: "Sort words into a self-completing loop",
    url: "https://www.playorbits.com",
    category: "word",
    tags: ["puzzle", "grouping"],
    popularity: 1,
  },
  {
    id: "worchle",
    name: "Worchle",
    description: "Daily word search game inspired by Wordle",
    url: "https://www.playorbits.com",
    category: "word",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "quordle",
    name: "Quordle",
    description: "Solve 4 Wordles simultaneously",
    url: "https://www.merriam-webster.com/games/quordle",
    category: "word",
    tags: ["puzzle"],
    popularity: 3,
  },
  {
    id: "chiddle",
    name: "Chiddle",
    description: "Try to find five highest scoring words in the puzzle grid",
    url: "https://www.chiddle.net",
    category: "word",
    tags: ["puzzle"],
    popularity: 1,
  },
  {
    id: "worldle",
    name: "Worldle",
    description: "Guess the country by its silhouette",
    url: "https://worldle.teuteuf.fr/",
    category: "geography",
    tags: ["countries"],
    popularity: 3,
  },
  {
    id: "connections",
    name: "Connections",
    description: "Find connections between groups of words",
    url: "https://www.nytimes.com/games/connections",
    category: "word",
    tags: ["puzzle", "grouping"],
    popularity: 3,
  },
  {
    id: "spelling-bee",
    name: "Spelling Bee",
    description: "Create words using the given letters with the center letter required",
    url: "https://www.nytimes.com/puzzles/spelling-bee",
    category: "word",
    tags: ["spelling", "nytimes"],
    popularity: 3,
  },
  {
    id: "mini-crossword",
    name: "Mini Crossword",
    description: "A small, quick crossword puzzle that changes daily",
    url: "https://www.nytimes.com/crosswords/game/mini",
    category: "word",
    tags: ["crossword", "nytimes"],
    popularity: 3,
  },
  {
    id: "sudoku",
    name: "Sudoku",
    description: "Solve a daily sudoku",
    url: "https://www.nytimes.com/puzzles/sudoku",
    category: "math",
    tags: ["logic", "numbers"],
    popularity: 3,
  },
  {
    id: "movie-timeliner",
    name: "Movie Timeliner",
    description: "",
    url: "https://www.movietimeliner.com",
    category: "movies",
    tags: ["posters", "sorting"],
    popularity: 3,
  }
];

// Helper function to get games by category
export function getGamesByCategory(categoryId: string): Game[] {
  return games
    .filter(game => game.category === categoryId)
    .sort((a, b) => b.popularity - a.popularity);
}

// Helper function to search games
export function searchGames(query: string): Game[] {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(game => 
    game.name.toLowerCase().includes(lowercaseQuery) ||
    game.description.toLowerCase().includes(lowercaseQuery) ||
    game.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Helper function to get favorite games
export function getFavoriteGames(): Game[] {
  if (typeof window === 'undefined') return [];
  
  const favoriteIds = JSON.parse(localStorage.getItem('favoriteGames') || '[]');
  return games.filter(game => favoriteIds.includes(game.id));
} 