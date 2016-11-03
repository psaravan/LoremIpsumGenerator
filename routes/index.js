var express = require('express');
var router = express.Router();

console.log("Populating DB...");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/words/:number', function(req, res, next) {
	var number = req.params.number;
  //res.render('index', { title: 'Words'});
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({"Yayyy it works": 1});
});

router.get('/letters/:number', function(req, res, next) {
  res.render('index', { title: 'Letters' });
});

router.get('/paragraphs/:number', function(req, res, next) {
  res.render('index', { title: 'Paragraphs' });
});

/* Pre-populate db. */
var mongoose = require('mongoose');

// Connect to DB.
mongoose.connect('mongodb://127.0.0.1/LoremIpsumGenerator');

// Define models/collections.
var Letter = mongoose.model('Letters', {letter: String});
var Word = mongoose.model('Word', {word: String});
var Paragraph = mongoose.model('Paragraph', {paragraph: String});

// Define data to be inserted.
var letterA = new Letter({letter: 'a'});
var letterB = new Letter({letter: 'b'});
var letterC = new Letter({letter: 'c'});
var letterD = new Letter({letter: 'd'});
var letterE = new Letter({letter: 'e'});
var letterF = new Letter({letter: 'f'});
var letterG = new Letter({letter: 'g'});
var letterH = new Letter({letter: 'h'});
var letterI = new Letter({letter: 'i'});
var letterJ = new Letter({letter: 'j'});
var letterK = new Letter({letter: 'k'});
var letterL = new Letter({letter: 'l'});
var letterM = new Letter({letter: 'm'});
var letterN = new Letter({letter: 'n'});
var letterO = new Letter({letter: 'o'});
var letterP = new Letter({letter: 'p'});
var letterQ = new Letter({letter: 'q'});
var letterR = new Letter({letter: 'r'});
var letterS = new Letter({letter: 's'});
var letterT = new Letter({letter: 't'});
var letterU = new Letter({letter: 'u'});
var letterV = new Letter({letter: 'v'});
var letterW = new Letter({letter: 'w'});
var letterX = new Letter({letter: 'x'});
var letterY = new Letter({letter: 'y'});
var letterZ = new Letter({letter: 'z'});

var word1 = new Word({word: 'hello'});
var word2 = new Word({word: 'what'});
var word3 = new Word({word: 'is'});
var word4 = new Word({word: 'the'});
var word5 = new Word({word: 'dog'});
var word6 = new Word({word: 'cat'});
var word7 = new Word({word: 'life'});
var word8 = new Word({word: 'running'});
var word9 = new Word({word: 'doing'});
var word10 = new Word({word: 'jumping'});
var word11 = new Word({word: 'dead'});
var word12 = new Word({word: 'living'});
var word13 = new Word({word: 'done'});
var word14 = new Word({word: 'exclaim'});
var word15 = new Word({word: 'fart'});
var word16 = new Word({word: 'Mercedes'});
var word17 = new Word({word: 'Apple'});
var word18 = new Word({word: 'iPhone'});
var word19 = new Word({word: 'am'});
var word20 = new Word({word: 'I'});
var word21 = new Word({word: 'we'});
var word22 = new Word({word: 'are'});
var word23 = new Word({word: 'they'});
var word24 = new Word({word: 'there'});
var word25 = new Word({word: 'fox'});
var word26 = new Word({word: 'cannibal'});
var word27 = new Word({word: 'Palo Alto'});
var word28 = new Word({word: 'San Francisco'});
var word29 = new Word({word: 'why'});
var word30 = new Word({word: 'how'});

var paragraph1 = Paragraph({paragraph: 'Even aside from the rain and wind it hadn\'t been a happy practice session. Fred and George, who had been spying on the Slytherin team, had seen for themselves the speed of those new Nimbus Two Thousand and Ones. They reported that the Slytherin team was no more than seven greenish blurs, shooting through the air like missiles.'});
var paragraph2 = Paragraph({paragraph: 'On two chairs beneath the bole of the tree and canopied by a living bough there sat, side by side, Celeborn and Galadriel. Very tall they were, and the Lady no less tall than the Lord; and they were grave and beautiful. They were clad wholly in white; and the hair of the Lady was of deep gold, and the hair of the Lord Celeborn was of silver long and bright; but no sign of age was upon them, unless it were in the depths of their eyes; for these were keen as lances in the starlight, and yet profound, the wells of deep memory.'});
var paragraph3 = Paragraph({paragraph: 'The novel ‘Lord of the Flies’ is written by William Golding shortly after the end of World War II. The novel tells us about a group of English boys who are stranded on an island during the period of war. They discover that the island is inhabited and therefore, they attempt to create their own society in order to sort things out while waiting for rescue. However, as time passes by, things begin to get out of control. This is because they are extremely young and plus, there are no adults to guide them on the island. In the end, although they are rescued, everything is in vain since they have lost most of the important things in life including their civilised way of life.'});
var paragraph4 = Paragraph({paragraph: 'Outside the classroom, Stallman pursued his studies with even more diligence, rushing off to fulfill his laboratory-assistant duties at Rockefeller University during the week and dodging the Vietnam protesters on his way to Saturday school at Columbia. It was there, while the rest of the Science Honors Program students sat around discussing their college choices, that Stallman finally took a moment to participate in the preclass bull session.'});
var paragraph5 = Paragraph({paragraph: 'Archer’s long-suffering live-in man-servant is a great minor-character. For no reason whatsoever he is a heroin addict, WWII hero (arguably the original rampager) that collected Nazi scalps – he is also absolutely bursting with gay innuendo and British stereotypes. This is best displayed in the Tontine episode (“The Double Deuce”). Favourite, when Woodhouse learns what his fellow soldier naming his aeroplane “Choke and Stroke” really meant.'});
var paragraph6 = Paragraph({paragraph: 'The aim of these writing prompts is to encourage freewriting. This is writing without stopping and without censoring. Writing in this way can help to break through blocks like self-criticism and fear of failure, to find your own, unique voice. Choose a prompt and decide how long to write - ten minutes is a good length of time to begin with. Try to do one freewriting exercise a day.'});
var paragraph7 = Paragraph({paragraph: 'Before I introduce myself, let me share with you a story. A story about me, and how great I am. But first, I think it would be appropriate to introduce myself. I am going to do this soon. So, it all started, in a smelly house, north of Wellington, south of Arizona and east of where you are sitting right now. It was a dark night, with no birds nor chickens, and it was raining a silent rain. There were too many stars to count, and not enough clouds to cover them. I like chickens. But anyway, what was I doing in this smelly house?'});
var paragraph8 = Paragraph({paragraph: 'But the point is I tried. If you think you need to go to the bakery, please do so now, because I do not want to be interrupted while I tell you my story. ...but anyway, I have been thinking about my happiness lately and have come to the conclusion that I am happy. This is annoying. If you saw a chicken as happy as me, I\'ll replace it, and give you a full refund... no questions asked!'});
var paragraph9 = Paragraph({paragraph: 'Once upon a time, there was this guy.  This guy was very sad.  He was so sad that he decided to go out into his front yard and seize his lawn gnome.  He stared at it for at least 45 minutes.  He then smashed it with an umbrella.  He suddenly felt happy.'});
var paragraph10 = Paragraph({paragraph: 'Palo Alto was established by Leland Stanford Sr. when he founded Stanford University, following the death of his son, Leland Stanford Jr. The city includes portions of Stanford and is headquarters to a number of high-technology companies, including Hewlett-Packard (HP), Space Systems/Loral, VMware, Tesla Motors, Ford Research and Innovation Center, PARC, Ning, IDEO, Skype, and Palantir Technologies. It has also served as an incubator to several other high-technology companies such as Google, Facebook, Logitech, Intuit, Pinterest, and PayPal.'});

var allLetters = [letterA, letterB, letterC,
				  letterD, letterE, letterF,
				  letterG, letterH, letterI,
				  letterJ, letterK, letterL,
				  letterM, letterN, letterO,
				  letterP, letterQ, letterR,
				  letterS, letterT, letterU,
				  letterV, letterW, letterX,
				  letterY, letterZ]

var allWords = [word1, word2, word3, word4, word5,
				word6, word7, word8, word9, word10,
				word11, word12, word13, word14, word15,
				word16, word17, word18, word19, word20,
				word21, word22, word23, word24, word25,
				word26, word27, word28, word29, word30]

var allParagraphs = [paragraph1, paragraph2, paragraph3,
					 paragraph4, paragraph5, paragraph6,
					 paragraph7, paragraph8, paragraph9,
					 paragraph10]

// Insert the data.
Letter.insertMany(allLetters)
Word.insertMany(allWords)
Paragraph.insertMany(allParagraphs)

console.log("Finished populating DB!");


module.exports = router;
