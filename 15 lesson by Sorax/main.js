var i = 5;

var func = function() 
{
	var i = 10;
	console.log(i);
	var innerfunc = function()
	{
		i = 15;
		console.log(i);
	};
	innerfunc();
};

func();