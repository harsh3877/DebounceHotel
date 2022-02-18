var hotelData = [{
	name:'Hotel Redison',
	phoneNo:'9665654326',
	address:'Wadi naka no 10',
	menu:['indian','chinese','italian'],
	image:'hotel1.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	},
	{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	},
	{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel Changez',
	phoneNo:'9970834558',
	address:'Nagpur city',
	menu:['indian','chinese','italian'],
	image:'hotel2.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:2
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:1
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel Pride',
	phoneNo:'8010382879',
	address:'Cahnderpur',
	menu:['indian','italian'],
	image:'hotel3.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:4
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel Tuli',
	phoneNo:'9766656770',
	address:'Pune',
	menu:['indian','chinese'],
	image:'hotel4.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:2
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel Redison',
	phoneNo:'1230987654',
	address:'Punjab',
	menu:['indian','chinese','italian','canadian','continental','Road side','Thai'],
	image:'hotel3.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:1
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	}],
	website:'https://wwww.website.com'
},

{
	name:'Hotel Audi',
	phoneNo:'9665654326',
	address:'Wadi naka no 10',
	menu:['indian','chinese','italian'],
	image:'hotel1.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	},
	{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	},
	{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel maruti',
	phoneNo:'9970834558',
	address:'Banglore',
	menu:['indian','chinese','italian'],
	image:'hotel2.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:2
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:1
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel naka',
	phoneNo:'8010382879',
	address:'Wadi naka no 10',
	menu:['indian','italian'],
	image:'hotel3.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:4
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel Taj',
	phoneNo:'9766656770',
	address:'Wadi naka no 10',
	menu:['indian','chinese'],
	image:'hotel4.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:5
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:2
	}],
	website:'https://wwww.website.com'
},
{
	name:'Hotel Ramesons',
	phoneNo:'1230987654',
	address:'Itwari',
	menu:['indian','chinese','italian','canadian','continental','Road side','Thai'],
	image:'hotel3.jpg',
	review:[{
		reviewName:'JAck Daniel',
		reviewMsg:'This is very awesome hotel',
		reviewRating:1
	},
	{
		reviewName:'Michel Jakson',
		reviewMsg:'Food was ok ok',
		reviewRating:3
	}],
	website:'https://wwww.website.com'
}];

firstLoad();

function firstLoad(){
	renderData();
	console.log(hotelData)
}

function renderData(){
	document.getElementById('mainContainer').innerHTML='';
	if(hotelData.length==0){
		if(document.getElementById('searchTxt').value==''){
			reset();
			return;
		}
		let msg = "No Data Found";
		document.getElementById('mainContainer').innerHTML="<div class='col-md-4 gy-5'>"+
				"<div class='card' style=''>"+
					"<div class='card-body'>"+
						"<h5 class='card-title'>"+msg+"</h5>"+
					"</div>"+
				"</div>"+
			"</div>";
		return;
	}
	for(let hotel=0;hotel<hotelData.length;hotel++){

	document.getElementById('mainContainer').innerHTML+="<div class='col-md-4 gy-5'>"+
				"<div class='card' style=''>"+
					"<img src='images/"+hotelData[hotel].image+"' class='card-img-top hotelImg' alt='...'>"+
					"<div class='card-body'>"+
						"<h5 class='card-title'>"+hotelData[hotel].name+"</h5>"+
						"<p class='card-text'> <i class='fas fa-phone'></i> "+hotelData[hotel].phoneNo+"</p>"+
						"<p class='card-text'> <i class='fas fa-map-marker'></i> "+hotelData[hotel].address+"</p>"+
					// "</div>"+
					"<span>Provides</span>"+
					"<div class='menuContainer scrollContainer horiScroll'></div>"+
					"<div class='reviewContainer'>"+
						"<span>Review List</span>"+
						"<div class='reviewListContainer scrollContainer'>"+
							"<ul class='list-group list-group-flush reviewList'>"+
							"</ul>"+
						"</div>"+
					"</div>"+
					// "<div class='card-body'>"+
						"<span href='#' class='card-link websiteBtn btn-small btn btn-dark'>Go to website</span>"+
					"</div>"+
				"</div>"+
			"</div>";

	if(hotelData[hotel].menu){
		let menucontainer = document.querySelectorAll('.menuContainer');
		for(let item=0;item<hotelData[hotel].menu.length; item++){
			menucontainer[hotel].innerHTML+="<span class='menuItem m-1'>"+hotelData[hotel].menu[item]+"</span>";
		}
	}

	if(hotelData[hotel].review){
		let reviewCount = document.querySelectorAll('.reviewList');
	
		for(let reviewItem=0; reviewItem<hotelData[hotel].review.length; reviewItem++){
			let review = hotelData[hotel].review[reviewItem];
			let starID= Math.floor(Math.random()*1000);
			reviewCount[hotel].innerHTML+="<li class='list-group-item'>"+
				"<span class='reviewMsg'>"+review.reviewMsg+"</span>"+
				"<div class='reviewNameRating'>"+
				"<span class='reviewStars' id='reviewStars-"+starID+"'></span>"+
				"<span class='reviewName'>-"+review.reviewName+"</span>"+
				"</div>"+
			"</li>";

			let reviewStar = document.getElementById('reviewStars-'+starID);
			
			for(let star=0;star<review.reviewRating;star++){
				reviewStar.innerHTML+="<i class='fas fa-star'></i>";
				
			}

			
		}
	}

	}
}

	var copiedHotelData = hotelData;
function search(){
	hotelData=[];
	let search = document.getElementById('searchTxt').value;

	if(search){
		
		copiedHotelData.forEach((x)=>{
			if(x.name.toLowerCase().includes(search.toLowerCase())){
				hotelData.push(x);
			}
		})
	}else{
		// document.getElementById('mainContainer').innerHTML='No Data Found';
	}	

	firstLoad();
	
}

function reset(){
	hotelData=copiedHotelData;
	firstLoad();
}


const betterSearch = newBetterSearch(search, 300);

function newBetterSearch(fn, d){
	let timer;
	return function(){
		let context = this,
		args = arguments;

		clearTimeout(timer);
		timer = setTimeout(()=>{
			search.apply(context, args);
		},d)
	}
}