var user = 
{
	name: "frank",
	id: 4577,
	lastVisit: Date.now(),
	friends: [4356, 5454, 5657],
	toJSON: function()
	{
		return 
		{
			name: this.name,
			lastVisit: this.lastVisit
		}
	}
};

var userData = JSON.stringify(user);
console.log(userData);

console.log(JSON.parse(userData));