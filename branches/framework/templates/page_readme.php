<div style='white-space:pre;font-family: monospace;padding:2em;'>
<!--Branch Extend Namespace Jquery Included-->

Highlights: Compiled Templates | CSS Variables | Live Patching | Live Branching

About Templating
	Build HTML templates with included JavaScript Module
	Looping and Conditonal control structures
	Easily import child templates
	Pre-compiled into efficient JavaScript functions
About CSS Variables
	Assign any string to a variable
	Variable variables are allowed
	Variable nesting is allowed
	Variables are plucked and hoisted on a global scope
About CSS Hunks
	Replace hunks downstream by defining a hunk of the same name in styles.css
	Hunk replacement preceeds css compilation and variable resolution
About Branches
	Live Branching is powerful. Here are a few use cases:
		Access control:
			HEAD > Staff > Admin
						 > Accounting
						 > Dev
		Version control:
			HEAD > Beta > Alpha
				 > 2-01 > 3-01 > Dev2_new_feature
				 > 2-02 > Testing
				 > Dev1_ticket_123
		Theming:
			HEAD > Dark_theme
				 > Light_theme
				 > Custom_work ($$$)
		Compartmentalization:
			Framework > Login_page > Orders > Products > HEAD

		Memory Utilization: Hotswap templates and CSS to reduce active memory
			Framework > Login_page
					  > Customer_home
					  > Retail_shopping
					  > Digital_media
		Patching - Hotfix templates and css in live installations 
			Framework > 1-00 > 1-01 > 1-02 > Testing_hotfix
									> HEAD
	View branch directory: /branch
	Set a specific branch: /branch/branch_name
	Show Debug/patch GUI :
		$( Template.build('patch') ).appendTo( $('body') ).show();
	

Templating syntax
	[-[![&#x200B;[some_key]]]]
	[-[!config]]
	[-[#conditional_loop]]
	[-[^invert_conditional]]
	[-[/conditional_end]]
	[-[~Template_[&#x200B;[some_key]],  {"any":"json"}  ]]
	[-[~Template_[&#x200B;[some_key]]]]
	[-[~Template,  {"any":"json"}  ]]
	[-[~Template]]
	[-[some.deep.key]]
	[-[some_key]]
	[&#x200B;-[some_delimited_expression]]
CSS Variable Syntax
	~Some-var     = anything~
	~Some-__var__ = anything~
	~Some_var     = __var__~
	~Some_var     = anything__var__~
CSS Hunk syntax
	&lt;hunk name="some_var"&gt;
	&lt;/hunk&gt;
	/*&lt;hunk name="some_var"&gt;*/
	/*&lt;/hunk&gt;*/


JavaScript Template Module
	 //Pass data to a compiled template function stored in the Template
	Template.build( 
		template_name, //String OR function(data, save_data){ return string; }
		data,          //Data to build with
		save_data      //Data assigned to Template uuid for later lookup, defaults to data
	);
		String (typically HTML)

	//Get data
	Template.data( data_id );
		Object

	//Create data store
	Template.data_set( data );
		Int - The new data_id

	//Update data store
	Template.data_set( data, data_id );
		Int - The same data_id

	//Delete data store
	Template.data_delete( data_id );
		Boolean

	//Encode chars &'"><
	Template.encode( String );
		String

	 // Retrieve the any updated templates from the server
	Template.patch();
		Promise Object

	 // Hot swap branch templates and stylesheet
	Template.hot_branch( branch_name );
		Promise Object

	Template.debug();
		Object - The internal bank object of the Template library

JavaScript Navigation Module
	Navigation = new_navigation( container )
		Object  //a fresh navigation module

	// Effectively = Template.build('page_'+ type, data ) wrapped in animated containers
	// Stores data via history.pushState
	Navigation.go(type, data, uri, title)

	Navigation.refresh()

	// Attempt to restore the page from history
	Navigation.recover()
		Boolean 

	// Hold navigation to the current page based on callback results
	// by default, displays confirm dialogs to the user and returns result
	Navigation.hold(  // all optional arguments - function(){ return boolean; }
		popstate,     // Callback before popstate
		internal,     // Callback before Navigation.go
		beforeunload  // Callback when user tries to navigate away
	)

	// Release a prior Navigation.hold
	Navigation.release()


File Structure
	index.php  //Both compilers, Template module, Branch, Patch and dev tools
	branch_directory.php    //customize if you like.
	branches/
		branch_name/
			templates/
				template.php
			styles.css      // CSS styles to merge into previous branch and &lt;hunk&gt;s for replacement
			shell.php       // Optional - Override previous branch shell.php (HTML Document)
			inherit.txt     // Optional - Branch name to base off of
			description.txt // Description for the version directory
		framework/
			templates/
				page_index.php
				page_readme.php // WOO this is where you are!
				patch.php       // Debug gui for live patching and version hotswaps
				std_*.php       // JavaScript snippets for loading and deleting variables from the Template library
				tpl_destruct.php // Include with driverless templates to dereference the data used in their creation
			styles.css // Base CSS for included navigation and debug panel
			shell.php  // Base Shell, override downstream
			description.txt
	resources/
		jquery-3.2.1.min.js // We need this for things
		navigation.js       // Included pushstate navigation framework - toss it if you like
	cordova/
		www/
			resources/
			   navigation.js
			   jquery-3.2.1.min.js
			index.html
			css/
			   light.css
			   dark.css
			templates.js


App Deployment
	0) Install Cordova and platforms
		https://cordova.apache.org/docs/en/10.x/guide/platforms/android/index.html
	1) Download each of the files needed by cordova from the included patch overlay or the links below:
		index.html   - /build/branch_name
		styles.css   - /css/branch_name
		templates.js - /templates/branch_name
	2) Open the cordova folder in command prompt / terminal
	3)  unlink resources    //There - not liable if you recursively delete a sim-linked resources folder
		rm -rf ./resources
		cp -r ../resources ./resources
		cordova prepare   //Skip here if you're using a sim-link
		cordova run       //plug in and test
	4) Open the needed platform folder in xCode or Android Studio to build and upload to app stores
		iOS     - cordova/www/platforms/ios
		Android - cordova/www/platforms/android/

First Build
  Windows:
	cordova create cordova com.mbenji.webroutes Webroutes & ^
	cd cordova && ^
	echo move in your index.html, templates.js, styles.css and resources/ && ^
	pause && ^
	cordova platform add android & ^
	cordova prepare && ^
	echo Cordova prepare completed - continue to android studio. open platforms/android/ && ^
	pause
  Linux / Mac:
	cordova create cordova com.mbenji.webroutes Webroutes
	cd cordova
	cordova platform add android
	cordova platform add ios
	cordova prepare
	//continue to android studio (platforms/android/) and xcode (platforms/ios/)


</div>[[~tpl_destruct]]