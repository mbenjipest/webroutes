function new_navigation( container ){
return ( function( element ) {
	var container=$(element);
	var m={}; //exposed object
	var stack={};
	var index=1;
	var animation_duration = 400;
	
	$(window).on("popstate", function(e){
		if(e.originalEvent.state===null){e.preventDefault();return false;} //ignore hash navigation
		if( popstate_hold && !popstate_hold() ){ return } ;
		try{
			var state = JSON.parse(window.history.state);
			var forward = index < state['Index'];
			//var offset = Math.abs(index-state['Index']);
			index=state['Index'];
			if(typeof stack[index]==='undefined'){
				stack[index]=JSON.parse(window.history.state)['State'];
			}
			var new_page = '<div class="page page_'+ (forward?'forward':'back') +'">'+
				Template.build('page_'+stack[index].Type, stack[index].Data )+
				'</div>';
			container.append( new_page );
			recycle( false, !forward );
		} catch(e){
			return;
		}
	});
	//Recover from history if possible
	m.recover = function(){
		if( window.history.state === null || typeof window.history.state === 'undefined' ){
			return false;
		}
		index=JSON.parse(window.history.state)['Index'];
		stack=[];
		stack[index]=JSON.parse(window.history.state)['State'];
		if(typeof stack[index]['Data'] !== 'undefined')
			stack[index]['Data']['Navigation_refresh']=true;
		container.append('<div class="page page_forward">'+Template.build('page_'+stack[index].Type, stack[index].Data)+'</div>');
		recycle();
		return true;
	};
	var popstate_hold;
	var internal_hold;
	// Hold navigation - Optionally pass custom handlers
	// Handlers return true to hold, false to bypass hold one time
	m.hold = function( popstate, internal, beforeunload){
		popstate_hold    = popstate   || function(){ //when back/forward are used
			return confirm('Are you sure your want to navigate away from this page?');
		}; internal_hold = internal || function(){ //when nagivation.go is called
			return confirm('Are you sure your want to navigate away from this page?');
		}
		$(window).on("beforeunload.navigation", beforeunload || function(){ //page close
			return "Are you sure you want to navigate away from this page?"; 
		});
	};
	// Release a navgation.hold() to allow uniterrupted navigation
	m.release = function(){
		internal_hold=false; delete internal_hold;
		popstate_hold=false; delete popstate_hold;
		
		$(window).off('beforeunload.navigation');
		return true;
	};
	
	//Template.build('page_'+ type )
	m.go = function(type, data, uri, title){
		if( internal_hold && !internal_hold() ){ return; }
		else{ m.release(); }
		data=data||{};
		uri=uri||'/';
		document.title=title||document.title;
		stack[ ++index ]={
			"Type":type,
			"Data":data,
			"Time":new Date()
		};
		try{
			if(window.history.state === null){
				window.history.replaceState(JSON.stringify({"Index":index, "State":stack[index]}) , document.title, uri);
			}else{
				window.history.pushState(   JSON.stringify({"Index":index, "State":stack[index]}) , document.title, uri);
			}
		} catch(e){ }
		container.append( '<div class="page page_forward">'+Template.build('page_'+type, data) + '</div>' );
		recycle();
		$(window).scrollTop(0);
	}
	//Redraw the current page
	m.refresh = function(){
		if( internal_hold && !internal_hold() ){ return; }
		container.append('<div class="page page_forward">'+Template.build('page_'+stack[index]['Type'], stack[index]['Data']) + '</div>');
		recycle();
		$(window).scrollTop(0);
	};
	function recycle(top, reverse){
		var pages = container.children('.page');
		if(pages.length===1){ return; }
		var dump_page = pages.first().css("top", top||$(window).scrollTop()+'px' )
			.addClass( 'page_stale ' + (reverse?'page_remove_right':'page_remove_left') )
			.removeClass('page');
		setTimeout(function(){
			dump_page.remove();
		}, animation_duration);
	};
	return m;
})( container );
}