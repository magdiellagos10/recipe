// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/team',
    	url: 'team.html',
    	name: 'team',
  		},
		{
		path: '/recipes',
    	url: 'recipes.html',
    	name: 'recipes',
  		},
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

