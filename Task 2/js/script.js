var modal = document.getElementById("popUp"); // pop up with a fullsize picture

// for choosing if to load the content from a session storage or not
if (sessionStorage.getItem('showFlag')) {
	var data = document.getElementsByClassName('container')[0];
	data.innerHTML = sessionStorage.getItem('sessionData');
}

/*
 * Shows fullsize image after the click on it
 * Hides this image after the click on "close" icon
*/
function show(number) {
	var imageName = number + ".jpg";
	modal.innerHTML = "<img src='images/" + imageName + "' alt='transport' >" + 
						        "<span type='button' id='close' class='glyphicon glyphicon-remove'></span>";
	var close = document.getElementById("close");

	close.onclick = function() {
    $('#popUp').fadeOut();
	}
  $('#popUp').fadeIn();
	modal.style.display = "flex";
}

//Counts the number of images on a page
function countImages() {
	var images = document.getElementsByClassName('picture');
	numOfImgs = 0;
	for (var i = 0; i < images.length; i++) {
		numOfImgs++;
	}
	return numOfImgs;
}

//Prepares the output for the "information" field (current date and time)
function showDate() {
	var placeToShow = document.getElementById('information');
	var now = new(Date);
	var day;
	var month;
	var hours;
	var minutes;
	if (now.getDate() < 10) {
		day = '0' + now.getDate();
	} else {
		day = now.getDate();
	};

	if (now.getMonth() < 10) {
		month = '0' + now.getMonth();
	} else {
		month = now.getMonth();
	};

	if (now.getHours() < 10) {
		hours = '0' + now.getHours();
	} else {
		hours = now.getHours();
	};

	if (now.getMinutes() < 10) {
		minutes = '0' + now.getMinutes();
	} else {
		minutes = now.getMinutes();
	};
	var 
	time = hours + ":" + minutes;
	return '  Date: ' + day + '.' + month + '.' + now.getFullYear() + ' ' + time;
}

function showNumOfImgs() {
	return "Number of images: " + countImages() + ' '
}

//Shows current number of images, current date and time
function showInformation() {
	var placeToShow = document.getElementById('information');
	placeToShow.innerHTML = showNumOfImgs() + '<br>' + showDate();
}

//Removes the image from a row after the click on "close" icon
function removeImage(id) {
	var parents = document.getElementsByClassName('row');
  var imageId = id + '-picture';

	for (var i = 0; i < parents.length; i++) {
		for (var j = 0; j < parents[i].childNodes.length; j++) {
			if (parents[i].childNodes[j].id === imageId) {
				image = document.getElementById(imageId);
        parents[i].removeChild(image);
				showInformation();
			}
		}
	}
	saveData();
}

//Restores the images
function restore() {
	document.getElementsByClassName('container')[0].innerHTML = "<div class='row'>" + 
      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='first-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/1.jpg' alt='transport' onclick='show(1)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='first' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='second-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/2.jpg' alt='transport' onclick='show(2)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='second' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='third-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/3.jpg' alt='transport' onclick='show(3)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='third' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='fourth-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/4.jpg' alt='transport' onclick='show(4)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='fourth' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +
    "</div>" +

    "<hr class='visible-xs visible-sm'>" +

    "<div class='row'>" +
      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='fifth-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/5.jpg' alt='transport' onclick='show(5)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='fifth' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='sixth-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/6.jpg' alt='transport' onclick='show(6)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='sixth' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='seventh-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/7.jpg' alt='transport' onclick='show(7)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='seventh' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='eigth-picture'>" +
        "<div class='picture-wrapper'>" +
          "<img class='picture' src='images/8.jpg' alt='transport' onclick='show(8)'>" +
        "</div>" +
        "<div class='text-center close-span-wrapper'>" +
          "<span class='glyphicon glyphicon-remove' id='eigth' onclick='removeImage(this.id)'></span>" +
        "</div>" +
      "</div>" +
    "</div>" +

    "<hr class='visible-xs visible-sm'>" + 

    "<div class='row'>" + 
      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='nineth-picture'>" + 
        "<div class='picture-wrapper'>" + 
          "<img class='picture' src='images/9.jpg' alt='transport' onclick='show(9)'>" + 
        "</div>" + 
        "<div class='text-center close-span-wrapper'>" + 
          "<span class='glyphicon glyphicon-remove' id='nineth' onclick='removeImage(this.id)'></span>" + 
        "</div>" + 
      "</div>" + 

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='tenth-picture'>" + 
        "<div class='picture-wrapper'>" + 
          "<img class='picture' src='images/10.jpg' alt='transport' onclick='show(10)'>" + 
        "</div>" + 
        "<div class='text-center close-span-wrapper'>" + 
          "<span class='glyphicon glyphicon-remove' id='tenth' onclick='removeImage(this.id)'></span>" + 
        "</div>" + 
      "</div>" + 

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='eleventh-picture'>" + 
        "<div class='picture-wrapper'>" + 
          "<img class='picture' src='images/11.jpg' alt='transport' onclick='show(11)'>" + 
        "</div>" + 
        "<div class='text-center close-span-wrapper'>" + 
          "<span class='glyphicon glyphicon-remove' id='eleventh' onclick='removeImage(this.id)'></span>" + 
        "</div>" + 
      "</div>" + 

      "<div class='col-xs-12 col-sm-6 col-md-3 picture-item' id='twelfth-picture'>" + 
        "<div class='picture-wrapper'>" + 
          "<img class='picture' src='images/12.jpg' alt='transport' onclick='show(12)'>" + 
        "</div>" + 
        "<div class='text-center close-span-wrapper'>" + 
          "<span class='glyphicon glyphicon-remove' id='twelfth' onclick='removeImage(this.id)'></span>" + 
        "</div>" + 
      "</div>" + 
    "</div>"
    saveData();
    showInformation();
}

//Saves data into session storage
function saveData() {
    var data = document.getElementsByClassName('container')[0].innerHTML;

    sessionStorage.setItem('sessionData', data);
    sessionStorage.setItem('loadOrNotFlag', true);
    if (!sessionStorage.getItem('showFlag')) {
    	sessionStorage.setItem('showFlag', true);
    }
}

showInformation();