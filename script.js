const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const button = document.querySelector('button')


let quotes = [
    {
        "q": "Every adversity, every failure, every heartbreak, carries with it the seed of an equal or greater benefit.",
        "a": "Napoleon Hill",
        "c": "106",
        "h": "<blockquote>&ldquo;Every adversity, every failure, every heartbreak, carries with it the seed of an equal or greater benefit.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
    },
    {
        "q": "Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.",
        "a": "James Allen",
        "c": "113",
        "h": "<blockquote>&ldquo;Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
    },
    {
        "q": "You become stronger with every problem you face and every obstacle you overcome.",
        "a": "Celestine Chua",
        "c": "80",
        "h": "<blockquote>&ldquo;You become stronger with every problem you face and every obstacle you overcome.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"
    },
    {
        "q": "The happiest people in the world are those who feel absolutely terrific about themselves.",
        "a": "Brian Tracy",
        "c": "89",
        "h": "<blockquote>&ldquo;The happiest people in the world are those who feel absolutely terrific about themselves.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
    },
    {
        "q": "The roots of education are bitter, but the fruit is sweet.",
        "a": "Aristotle",
        "c": "58",
        "h": "<blockquote>&ldquo;The roots of education are bitter, but the fruit is sweet.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"
    },
    {
        "q": "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.",
        "a": "Robert Frost",
        "c": "104",
        "h": "<blockquote>&ldquo;Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.&rdquo; &mdash; <footer>Robert Frost</footer></blockquote>"
    },
    {
        "q": "Society is composed of two great classes those who have more dinners than appetite, and those who have more appetite than dinners.",
        "a": "Nicolas Chamfort",
        "c": "130",
        "h": "<blockquote>&ldquo;Society is composed of two great classes those who have more dinners than appetite, and those who have more appetite than dinners.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>"
    },
    {
        "q": "When you say yes to change, you are choosing to navigate that path peacefully and happily and see where it takes you.",
        "a": "Sonia Ricotti",
        "c": "117",
        "h": "<blockquote>&ldquo;When you say yes to change, you are choosing to navigate that path peacefully and happily and see where it takes you.&rdquo; &mdash; <footer>Sonia Ricotti</footer></blockquote>"
    },
    {
        "q": "Life is what you make it. Always has been, always will be.",
        "a": "Eleanor Roosevelt",
        "c": "58",
        "h": "<blockquote>&ldquo;Life is what you make it. Always has been, always will be.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "Life begins where fear ends.",
        "a": "Osho",
        "c": "28",
        "h": "<blockquote>&ldquo;Life begins where fear ends.&rdquo; &mdash; <footer>Osho</footer></blockquote>"
    },
    {
        "q": "Character is destiny.",
        "a": "Heraclitus",
        "c": "21",
        "h": "<blockquote>&ldquo;Character is destiny.&rdquo; &mdash; <footer>Heraclitus</footer></blockquote>"
    },
    {
        "q": "Don't wish it were easier, wish you were better.",
        "a": "Jim Rohn",
        "c": "48",
        "h": "<blockquote>&ldquo;Don't wish it were easier, wish you were better.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
        "q": "The older you get the stronger the wind gets - and it's always in your face.",
        "a": "Pablo Picasso",
        "c": "76",
        "h": "<blockquote>&ldquo;The older you get the stronger the wind gets - and it's always in your face.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
    },
    {
        "q": "I'm not afraid of death, but I'm in no hurry to die.",
        "a": "Stephen Hawking",
        "c": "52",
        "h": "<blockquote>&ldquo;I'm not afraid of death, but I'm in no hurry to die.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>"
    },
    {
        "q": "Forget safety. Live where you fear to live.",
        "a": "Rumi",
        "c": "43",
        "h": "<blockquote>&ldquo;Forget safety. Live where you fear to live.&rdquo; &mdash; <footer>Rumi</footer></blockquote>"
    },
    {
        "q": "The way out is in.",
        "a": "Thich Nhat Hanh",
        "c": "18",
        "h": "<blockquote>&ldquo;The way out is in.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>"
    },
    {
        "q": "We can either add to our character each day, or we can fritter away our energies in distractions.",
        "a": "Ming-Dao Deng",
        "c": "97",
        "h": "<blockquote>&ldquo;We can either add to our character each day, or we can fritter away our energies in distractions.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>"
    },
    {
        "q": "As you think, so shall you become. ",
        "a": "Bruce Lee",
        "c": "35",
        "h": "<blockquote>&ldquo;As you think, so shall you become. &rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>"
    },
    {
        "q": "What are we doing here, that is the question.",
        "a": "Samuel Beckett",
        "c": "45",
        "h": "<blockquote>&ldquo;What are we doing here, that is the question.&rdquo; &mdash; <footer>Samuel Beckett</footer></blockquote>"
    },
    {
        "q": "Change begets change. Nothing propagates so fast.",
        "a": "Charles Dickens",
        "c": "49",
        "h": "<blockquote>&ldquo;Change begets change. Nothing propagates so fast.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
    },
    {
        "q": "Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.",
        "a": "Zig Ziglar",
        "c": "95",
        "h": "<blockquote>&ldquo;Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
    },
    {
        "q": "The question is not what you look at, but what you see.",
        "a": "Henry David Thoreau",
        "c": "55",
        "h": "<blockquote>&ldquo;The question is not what you look at, but what you see.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>"
    },
    {
        "q": "Conscience is a dog that does not stop us from passing but that we cannot prevent from barking.",
        "a": "Nicolas Chamfort",
        "c": "95",
        "h": "<blockquote>&ldquo;Conscience is a dog that does not stop us from passing but that we cannot prevent from barking.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>"
    },
    {
        "q": "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        "a": "Carl Jung",
        "c": "93",
        "h": "<blockquote>&ldquo;Until you make the unconscious conscious, it will direct your life and you will call it fate.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"
    },
    {
        "q": "Being wrong brings the opportunity for growth.",
        "a": "Mark Manson",
        "c": "46",
        "h": "<blockquote>&ldquo;Being wrong brings the opportunity for growth.&rdquo; &mdash; <footer>Mark Manson</footer></blockquote>"
    },
    {
        "q": "It is well known that those who do not trust themselves never trust others.",
        "a": "Alfred Adler",
        "c": "75",
        "h": "<blockquote>&ldquo;It is well known that those who do not trust themselves never trust others.&rdquo; &mdash; <footer>Alfred Adler</footer></blockquote>"
    },
    {
        "q": "There exists only the present instant; a Now which always and without end is itself new.",
        "a": "Meister Eckhart",
        "c": "88",
        "h": "<blockquote>&ldquo;There exists only the present instant; a Now which always and without end is itself new.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>"
    },
    {
        "q": "We can spend our whole lives escaping from the monsters of our minds.",
        "a": "Pema Chodron",
        "c": "69",
        "h": "<blockquote>&ldquo;We can spend our whole lives escaping from the monsters of our minds.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
    },
    {
        "q": "Every day do something that will inch you closer to a better tomorrow.",
        "a": "Unknown",
        "c": "70",
        "h": "<blockquote>&ldquo;Every day do something that will inch you closer to a better tomorrow.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "Life is really simple, but men insist on making it complicated. ",
        "a": "Confucius",
        "c": "64",
        "h": "<blockquote>&ldquo;Life is really simple, but men insist on making it complicated. &rdquo; &mdash; <footer>Confucius</footer></blockquote>"
    },
    {
        "q": "Time is more valuable than money. You can get more money, but you cannot get more time.",
        "a": "Jim Rohn",
        "c": "87",
        "h": "<blockquote>&ldquo;Time is more valuable than money. You can get more money, but you cannot get more time.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
        "q": "A very little key will open a very heavy door.",
        "a": "Charles Dickens",
        "c": "46",
        "h": "<blockquote>&ldquo;A very little key will open a very heavy door.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
    },
    {
        "q": "Cultivate the merry heart, develop the happiness habit, and life will become a continual feast.",
        "a": "Norman Vincent Peale",
        "c": "95",
        "h": "<blockquote>&ldquo;Cultivate the merry heart, develop the happiness habit, and life will become a continual feast.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
    },
    {
        "q": "Don't take yourself too seriously, pretty soon you can find the humor in our everyday lives.",
        "a": "Betty White",
        "c": "92",
        "h": "<blockquote>&ldquo;Don't take yourself too seriously, pretty soon you can find the humor in our everyday lives.&rdquo; &mdash; <footer>Betty White</footer></blockquote>"
    },
    {
        "q": "A clever person turns great troubles into little ones, and little ones into none at all. ",
        "a": "Chinese Proverb",
        "c": "89",
        "h": "<blockquote>&ldquo;A clever person turns great troubles into little ones, and little ones into none at all. &rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
    },
    {
        "q": "Men do not attract which they want but that which they are.",
        "a": "James Allen",
        "c": "59",
        "h": "<blockquote>&ldquo;Men do not attract which they want but that which they are.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
    },
    {
        "q": "Be confident, not certain.",
        "a": "Eleanor Roosevelt",
        "c": "26",
        "h": "<blockquote>&ldquo;Be confident, not certain.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "Animals don't hate, and we're supposed to be better than them.",
        "a": "Elvis Presley",
        "c": "62",
        "h": "<blockquote>&ldquo;Animals don't hate, and we're supposed to be better than them.&rdquo; &mdash; <footer>Elvis Presley</footer></blockquote>"
    },
    {
        "q": "Fallacies do not cease to be fallacies because they become fashions.",
        "a": "Gilbert Chesterton",
        "c": "68",
        "h": "<blockquote>&ldquo;Fallacies do not cease to be fallacies because they become fashions.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>"
    },
    {
        "q": "The ability to observe without evaluating is the highest form of intelligence.",
        "a": "Jiddu Krishnamurti",
        "c": "78",
        "h": "<blockquote>&ldquo;The ability to observe without evaluating is the highest form of intelligence.&rdquo; &mdash; <footer>Jiddu Krishnamurti</footer></blockquote>"
    },
    {
        "q": "Death walks faster than the wind and never returns what he has taken.",
        "a": "Hans Christian Andersen",
        "c": "69",
        "h": "<blockquote>&ldquo;Death walks faster than the wind and never returns what he has taken.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>"
    },
    {
        "q": "To seek greatness is the only righteous vengeance.",
        "a": "Criss Jami",
        "c": "50",
        "h": "<blockquote>&ldquo;To seek greatness is the only righteous vengeance.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
    },
    {
        "q": "The more you trust yourself, the less you compare yourself to others.",
        "a": "Roy T. Bennett",
        "c": "69",
        "h": "<blockquote>&ldquo;The more you trust yourself, the less you compare yourself to others.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
    },
    {
        "q": "People who say it cannot be done should not interrupt those who are doing it.",
        "a": "George Bernard Shaw",
        "c": "77",
        "h": "<blockquote>&ldquo;People who say it cannot be done should not interrupt those who are doing it.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
    },
    {
        "q": "You can't wait for inspiration. You have to go after it with a club. ",
        "a": "Jack London",
        "c": "69",
        "h": "<blockquote>&ldquo;You can't wait for inspiration. You have to go after it with a club. &rdquo; &mdash; <footer>Jack London</footer></blockquote>"
    },
    {
        "q": "I dream my painting and I paint my dream.",
        "a": "Vincent van Gogh",
        "c": "41",
        "h": "<blockquote>&ldquo;I dream my painting and I paint my dream.&rdquo; &mdash; <footer>Vincent van Gogh</footer></blockquote>"
    },
    {
        "q": "The older you get, the better you get. Unless you're a banana.",
        "a": "Betty White",
        "c": "62",
        "h": "<blockquote>&ldquo;The older you get, the better you get. Unless you're a banana.&rdquo; &mdash; <footer>Betty White</footer></blockquote>"
    },
    {
        "q": "If you see someone without a smile give them one of yours.",
        "a": "Unknown",
        "c": "58",
        "h": "<blockquote>&ldquo;If you see someone without a smile give them one of yours.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "What you do today can improve all your tomorrows.",
        "a": "Ralph Marston",
        "c": "49",
        "h": "<blockquote>&ldquo;What you do today can improve all your tomorrows.&rdquo; &mdash; <footer>Ralph Marston</footer></blockquote>"
    },
    {
        "q": "Peace is not the absence of conflict, but the ability to cope with it.",
        "a": "Unknown",
        "c": "70",
        "h": "<blockquote>&ldquo;Peace is not the absence of conflict, but the ability to cope with it.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    }
]


let i = Math.floor((Math.random() * quotes.length))
h1.innerHTML = quotes[i].q
h2.innerHTML = `¬ ${quotes[i].a}`

function generate(){
    h1.innerHTML = ''
    h2.innerHTML = ``
    let i = Math.floor((Math.random() * quotes.length))
   
    h1.innerHTML = quotes[i].q
    h2.innerHTML = `¬ ${quotes[i].a}`

}

button.addEventListener('click',generate)



// let i = Math.floor((Math.random() * quotes.length))

// console.log(quotes[i].quote)