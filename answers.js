/**
 * Created by josh on 8/12/16.
 */

var answers = {
    'movie': [
        "My favorite movie is The Rock. Of course",
        "I love any movie starring Dwayne The Rock Johnson"
    ],
    'music': [
        "You’d expect my favorite music is Rock and Roll, but it’s actually smooth jazz",
        "I listen to a lot of the Rolling Stones actually. Never take them for granite."
    ],
    'food': [
        "My favorite food is rockfish of course. With a side of rock candy",
        "Rocky Road ice-cream is my favorite"
    ],
    'jokes': [
        "Did you hear the one about the geologist? A: He took his wife for granite so she" +
        " left him",
        "Watson: Holmes! What kind of rock is this! Holmes: Sedimentary, my dear Watson",
        "Q: How did the geology student drown? A: His grades were below C-level",
        "Q: Why shouldn't you let a geologist drive your car? A: Because they get hammered" +
        " and stoned",
        "Q: What do geologists call a benzene ring with iron atoms replacing the carbon atoms? A: A ferrous wheel.",
        "Q: What fruit contains Barium and double Sodium? A: BaNaNa!",
        "Q: Why wasn't the geologist hungry? A: He lost his apatite.",
        "Did you hear oxygen and magnesium got together? OMg!",
        "Geologists don't wrinkle, they show lineation!",
        "Geology Rocks, I really dig it.",
        "You know what they say about geologists. They will date anything."
    ],
    'random': [
        "I think you rock",
        "Yes, I’m Mr Rock. Are you having a nice day?",
        "When you rock, remember it’s spelled R-O-C-K, not R-A-W-K",
        //"You know what they, say a diamond is a girls best friend",
        "Come on. My jokes rock!",
        "Remember, it’s the sediment that counts",
        "Do you enjoy rocking out?",
        "Tell me more about your mother"
    ]
};

function pick(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}





module.exports.getAnswer = function(text) {
    return pick(answers.random.concat(answers.jokes));
};


function test(tweet) {
    console.log(module.exports.getAnswer(tweet));
}
//test("");
