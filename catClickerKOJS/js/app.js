var initialCats = [
{
	clickCount: 0,
	name: 'Bob',
	imgSrc: 'img/kitten1.jpg',
	nickName: ['Biscuit', 'Moon', 'Moontu']
},
{
	clickCount: 0,
	name: 'Potato',
	imgSrc: 'img/kitten2.jpg',
	nickName: ['Bambi']

},
{
	clickCount: 0,
	name: 'Ninja',
	imgSrc: 'img/kitten3.jpg',
	nickName: ['Nugget']

}, 
{
	clickCount: 0,
	name: 'Peanut',
	imgSrc: 'img/kitten4.jpg',
	nickName: ['Tahiti']
},
{
	clickCount: 0,
	name: 'Fluffy',
	imgSrc: 'img/kitten5.jpg',
	nickName: ['Cookie']
}]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nickNames = ko.observable(data.nickName);

	this.stage = ko.computed(function() {
		if (this.clickCount() <10) {
			return "Newborn";
		} else if (this.clickCount() <25) {
			return "Infant";
		} else if (this.clickCount() <45) {
			return "Toddler";
		} else 
			return "Teen";
	}, this);
}


var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incermentCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());