	// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

/** dynamic route matching and nested routes */

const Post = {
	template: `<div><h3>Post : {{ $route.params.id }}</h3>
	<router-view></router-view>
	</div>` 
}


const PostsHome = {
	template: `<em><h3>Posts Home Page</h3></em>` 
}

const ArchivedPosts = {
	template: `<h3>Archived Posts</h3>` 
}
const VisitedPosts = {
	template: `<pre>Visited Posts</pre>` 
}





/* 
Named Routes 

*/ 

const Contact =  { 

	template : `<div>Contact Me page </div>`
}

const User =  { 

	template : `<div>This is User {{ $route.params.id }} </div>`
}




// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
{ path: '/foo', component: Foo },
{ path: '/bar', component: Bar } ,


/** Dynamic Route Matching : */
{ 
	path : '/post/:id', 

	component: Post,
	
	children :  [ 

	{
		path : '', component : PostsHome, 
	},

	{
		path : 'archived', component : ArchivedPosts, 
	},

	{
		path : 'visited', component : VisitedPosts, 

	}

	]
}, 

/** Named Routes **/
{

	path  : 'user/:id',
	name : 'user',
	component : User
} ,

{
	path : 'contact' , 
	name : 'contact',
	component : Contact
},




/** Named Views **/

{
	path: '/',
	components: 
	{
		default: Foo,
		a: Bar,
		b: Baz
	}
}


]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
	routes 
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
	router
}).$mount('#app')

// Now the app has started!