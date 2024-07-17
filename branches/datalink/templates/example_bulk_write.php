
<h3>Launch tests for bulk write</h3>
<button class='run'>Execute</button>
<code class='example_code'>
//create 10 customers with initial notes and appointments.
//Most endpoints limit bulk entities to 100
var customers=[];
for(var i=0;i&lt;10;++i){
	customers.push({'fname':i+'ing','lname':i+'son'});
}


apiModule.call('customer','create',{
	'officeID':1,
	'bulkEntities':customers
}).then(function(results){
	
	//make a bunch of initial notes
	var notes=[];
	var createdCustomers=results.result.success;
	for(i=0,l=createdCustomers.length;i&lt;l;++i){
		notes.push({
			'customerID':createdCustomers[i],
			'date':'2024-01-01 10:00:00',
			'contactType':8,
			'notes':'this a red note'
		});
	}
	return apiModule.call('note','create',{
		'officeID':1,
		'bulkEntities': notes
	}).then(function(){

		//find a bunch of open spots
		return apiModule.search('spot',{
			'date':{'operator':'BETWEEN','value':['2024-01-01','2024-02-20']},
			'includeData':1,
			'open':1
		}).then(function(spots){
			spots = spots.slice(0,10);
			
			//assign a bunch of appointments
			var appointments=[];
			for(i=0,l=createdCustomers.length;i&lt;l;++i){
				let spot = spots.pop();
				appointments.push({
					'customerID':createdCustomers[i],
					'spotID':spot['spotID'],
					'type':1,
					'duration':'20',
					'routeID':spot['routeID'],
					'rejectOccupiedSpots':1,
					'bypassSchedulePermission':1
				});
			}
			return apiModule.call('appointment','create',{
				'officeID':1,
				'bulkEntities': appointments
			})
		})
		
	});
}).then(console.log);
</code>