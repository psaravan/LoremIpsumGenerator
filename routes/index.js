function randomIntBetween(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Connect to DB.
mongoose.connect('mongodb://127.0.0.1/LoremIpsumGenerator');

// Define models/collections.
var Letter = mongoose.model('Letters', {letter_id: Number, value: String});
var Word = mongoose.model('Word', {word_id: Number, value: String});
var Paragraph = mongoose.model('Paragraph', {paragraph_id: Number, value: String});
var DataPopulated = mongoose.model('DataPopulated', {data_populated: Boolean});

// Check if data has already been populated.
DataPopulated.find({}, 'data_populated', function(err, data_populated) {
	if (data_populated.length == 0) {
		/* Pre-populate db. */
		console.log("Populating DB...");

		// Define data to be inserted.
		var letterA = new Letter({letter_id: '1', value: 'a'});
		var letterB = new Letter({letter_id: '2', value: 'b'});
		var letterC = new Letter({letter_id: '3', value: 'c'});
		var letterD = new Letter({letter_id: '4', value: 'd'});
		var letterE = new Letter({letter_id: '5', value: 'e'});
		var letterF = new Letter({letter_id: '6', value: 'f'});
		var letterG = new Letter({letter_id: '7', value: 'g'});
		var letterH = new Letter({letter_id: '8', value: 'h'});
		var letterI = new Letter({letter_id: '9', value: 'i'});
		var letterJ = new Letter({letter_id: '10', value: 'j'});
		var letterK = new Letter({letter_id: '11', value: 'k'});
		var letterL = new Letter({letter_id: '12', value: 'l'});
		var letterM = new Letter({letter_id: '13', value: 'm'});
		var letterN = new Letter({letter_id: '14', value: 'n'});
		var letterO = new Letter({letter_id: '15', value: 'o'});
		var letterP = new Letter({letter_id: '16', value: 'p'});
		var letterQ = new Letter({letter_id: '17', value: 'q'});
		var letterR = new Letter({letter_id: '18', value: 'r'});
		var letterS = new Letter({letter_id: '19', value: 's'});
		var letterT = new Letter({letter_id: '20', value: 't'});
		var letterU = new Letter({letter_id: '21', value: 'u'});
		var letterV = new Letter({letter_id: '22', value: 'v'});
		var letterW = new Letter({letter_id: '23', value: 'w'});
		var letterX = new Letter({letter_id: '24', value: 'x'});
		var letterY = new Letter({letter_id: '25', value: 'y'});
		var letterZ = new Letter({letter_id: '26', value: 'z'});

		var word1 = new Word({word_id: '1', value: 'hello'});
		var word2 = new Word({word_id: '2', value: 'what'});
		var word3 = new Word({word_id: '3', value: 'is'});
		var word4 = new Word({word_id: '4', value: 'the'});
		var word5 = new Word({word_id: '5', value: 'dog'});
		var word6 = new Word({word_id: '6', value: 'cat'});
		var word7 = new Word({word_id: '7', value: 'life'});
		var word8 = new Word({word_id: '8', value: 'running'});
		var word9 = new Word({word_id: '9', value: 'doing'});
		var word10 = new Word({word_id: '10', value: 'jumping'});
		var word11 = new Word({word_id: '11', value: 'dead'});
		var word12 = new Word({word_id: '12', value: 'living'});
		var word13 = new Word({word_id: '13', value: 'done'});
		var word14 = new Word({word_id: '14', value: 'exclaim'});
		var word15 = new Word({word_id: '15', value: 'fart'});
		var word16 = new Word({word_id: '16', value: 'Mercedes'});
		var word17 = new Word({word_id: '17', value: 'Apple'});
		var word18 = new Word({word_id: '18', value: 'iPhone'});
		var word19 = new Word({word_id: '19', value: 'am'});
		var word20 = new Word({word_id: '20', value: 'I'});
		var word21 = new Word({word_id: '21', value: 'we'});
		var word22 = new Word({word_id: '22', value: 'are'});
		var word23 = new Word({word_id: '23', value: 'they'});
		var word24 = new Word({word_id: '24', value: 'there'});
		var word25 = new Word({word_id: '25', value: 'fox'});
		var word26 = new Word({word_id: '26', value: 'cannibal'});
		var word27 = new Word({word_id: '27', value: 'Palo Alto'});
		var word28 = new Word({word_id: '28', value: 'San Francisco'});
		var word29 = new Word({word_id: '29', value: 'why'});
		var word30 = new Word({word_id: '30', value: 'how'});

		var paragraph1 = Paragraph({paragraph_id: '1', value: 'Even aside from the rain and wind it hadn\'t been a happy practice session. Fred and George, who had been spying on the Slytherin team, had seen for themselves the speed of those new Nimbus Two Thousand and Ones. They reported that the Slytherin team was no more than seven greenish blurs, shooting through the air like missiles.'});
		var paragraph2 = Paragraph({paragraph_id: '2', value: 'On two chairs beneath the bole of the tree and canopied by a living bough there sat, side by side, Celeborn and Galadriel. Very tall they were, and the Lady no less tall than the Lord; and they were grave and beautiful. They were clad wholly in white; and the hair of the Lady was of deep gold, and the hair of the Lord Celeborn was of silver long and bright; but no sign of age was upon them, unless it were in the depths of their eyes; for these were keen as lances in the starlight, and yet profound, the wells of deep memory.'});
		var paragraph3 = Paragraph({paragraph_id: '3', value: 'The novel ‘Lord of the Flies’ is written by William Golding shortly after the end of World War II. The novel tells us about a group of English boys who are stranded on an island during the period of war. They discover that the island is inhabited and therefore, they attempt to create their own society in order to sort things out while waiting for rescue. However, as time passes by, things begin to get out of control. This is because they are extremely young and plus, there are no adults to guide them on the island. In the end, although they are rescued, everything is in vain since they have lost most of the important things in life including their civilised way of life.'});
		var paragraph4 = Paragraph({paragraph_id: '4', value: 'Outside the classroom, Stallman pursued his studies with even more diligence, rushing off to fulfill his laboratory-assistant duties at Rockefeller University during the week and dodging the Vietnam protesters on his way to Saturday school at Columbia. It was there, while the rest of the Science Honors Program students sat around discussing their college choices, that Stallman finally took a moment to participate in the preclass bull session.'});
		var paragraph5 = Paragraph({paragraph_id: '5', value: 'Archer’s long-suffering live-in man-servant is a great minor-character. For no reason whatsoever he is a heroin addict, WWII hero (arguably the original rampager) that collected Nazi scalps – he is also absolutely bursting with gay innuendo and British stereotypes. This is best displayed in the Tontine episode (“The Double Deuce”). Favourite, when Woodhouse learns what his fellow soldier naming his aeroplane “Choke and Stroke” really meant.'});
		var paragraph6 = Paragraph({paragraph_id: '6', value: 'The aim of these writing prompts is to encourage freewriting. This is writing without stopping and without censoring. Writing in this way can help to break through blocks like self-criticism and fear of failure, to find your own, unique voice. Choose a prompt and decide how long to write - ten minutes is a good length of time to begin with. Try to do one freewriting exercise a day.'});
		var paragraph7 = Paragraph({paragraph_id: '7', value: 'Before I introduce myself, let me share with you a story. A story about me, and how great I am. But first, I think it would be appropriate to introduce myself. I am going to do this soon. So, it all started, in a smelly house, north of Wellington, south of Arizona and east of where you are sitting right now. It was a dark night, with no birds nor chickens, and it was raining a silent rain. There were too many stars to count, and not enough clouds to cover them. I like chickens. But anyway, what was I doing in this smelly house?'});
		var paragraph8 = Paragraph({paragraph_id: '8', value: 'But the point is I tried. If you think you need to go to the bakery, please do so now, because I do not want to be interrupted while I tell you my story. ...but anyway, I have been thinking about my happiness lately and have come to the conclusion that I am happy. This is annoying. If you saw a chicken as happy as me, I\'ll replace it, and give you a full refund... no questions asked!'});
		var paragraph9 = Paragraph({paragraph_id: '9', value: 'Once upon a time, there was this guy.  This guy was very sad.  He was so sad that he decided to go out into his front yard and seize his lawn gnome.  He stared at it for at least 45 minutes.  He then smashed it with an umbrella.  He suddenly felt happy.'});
		var paragraph10 = Paragraph({paragraph_id: '10', value: 'Palo Alto was established by Leland Stanford Sr. when he founded Stanford University, following the death of his son, Leland Stanford Jr. The city includes portions of Stanford and is headquarters to a number of high-technology companies, including Hewlett-Packard (HP), Space Systems/Loral, VMware, Tesla Motors, Ford Research and Innovation Center, PARC, Ning, IDEO, Skype, and Palantir Technologies. It has also served as an incubator to several other high-technology companies such as Google, Facebook, Logitech, Intuit, Pinterest, and PayPal.'});

		var setDataPopulated = DataPopulated({data_populated: true});

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

		// Set data prepared flag.
		DataPopulated.insertMany([setDataPopulated]);

		console.log("Finished populating DB!");
	}
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Word request. */
router.get('/words/:number', function(req, res, next) {
  var number = req.params.number;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  var wordJSON = { };
  var ids = [ ];
  for (var i = 1; i <= number; i++) {
  	var random = randomIntBetween(1,number);
  	while (ids.indexOf(random) > -1) {
  		random = randomIntBetween(1,number);
  	}
  	ids.push(random);
  }
  console.log(ids);
  Word.find({'word_id' : { $in: ids }}, 'value', function(err, words) {
  		res.json(words);
  })
});

/* Letter request. */
router.get('/letters/:number', function(req, res, next) {
  var number = req.params.number;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  var letterJSON = { };
  var ids = [ ];
  for (var i = 1; i <= number; i++) {
  	var random = randomIntBetween(1,number);
  	while (ids.indexOf(random) > -1) {
  		random = randomIntBetween(1,number);
  	}
  	ids.push(random);
  }

  Letter.find({'letter_id' : { $in: ids }}, 'value', function(err, letters) {
  		res.json(letters);
  })
});

/* Paragraph request. */
router.get('/paragraphs/:number', function(req, res, next) {
  var number = req.params.number;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  var paragraphJSON = { };
  var ids = [ ];
  for (var i = 1; i <= number; i++) {
  	var random = randomIntBetween(1,number);
  	while (ids.indexOf(random) > -1) {
  		random = randomIntBetween(1,number);
  	}
  	ids.push(random);
  }

  Paragraph.find({'paragraph_id' : { $in: ids }}, 'value', function(err, paragraphs) {
  		res.json(paragraphs);
  })
});

module.exports = router;
