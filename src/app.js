import $ from 'jquery';
import Rx from 'rxjs/Rx';

const output = $("#output");
const nos = $("#nums");

const mouse = Rx.Observable.fromEvent(document, 'mousemove');

 mouse.subscribe(
 	function(e){ 		
 		output.text('X: '+e.clientX+' Y: '+e.clientY);
 	},
 	function(err){
 		console.log(err);
 	},
 	function(){
 		console.log('completed');
 	});

 //////////////////
 

 const nums = [12,13,14,15,16,17];

 const n = Rx.Observable.from(nums);
 n.subscribe(
 	function(v){ 		
 		nos.append(v);
 	},
 	function(err){
 		console.log(err);
 	},
 	function(){
 		console.log('completed---');
 	});

///////////////////
function getUser(username){
 return $.ajax({
 	url:'https://api.github.com/users/'+username,
 	dataType:'jsonp'
 }).promise();
}


 ///////////////////
Rx.Observable.fromPromise(getUser('faisaldeveloper'))
.subscribe( x => {
	console.log(x);
	$('#name').text(x.data.name);
	$('#blog').text(x.data.blog);
	$('#repos').text(x.data.public_repos);
});

/////////////////
let stream = Rx.Observable.interval(1000);

stream.subscribe(
x=>{	
		$("#count").text(x);
}
)
