$(document).ready(function() 
{　
$.post('/',
 {num: '12345678'
},
 function(data) 
{　　
 console.log(data) 
 });
})