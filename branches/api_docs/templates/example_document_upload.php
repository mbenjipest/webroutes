
<h3>Upload a document</h3>
<button class='run'>Execute</button>
<input class='upload_document_example_1' type='file'/>
<code class='example_code'>
//get the file into a string
var file = $('.upload_document_example_1')[0].files[0];
var reader = new FileReader();
var file_base_64;
reader.readAsDataURL(file);
reader.onload = function(){
	apiModule.call('document','createEncoded',{
		'customerID':58346,
		'description':'Contract from API',
		//'filename':'contract_upload.jpg',
		'filename':file.name,
		'encodedFile': reader.result.split('base64,')[1] //trim off the metadata
	}).then(console.log);
};
reader.onerror = function(error){
	console.error('Error: ', error);
};
</code>



<h3>Upload a contract</h3>
<button class='run'>Execute</button>
<input class='upload_document_example_2' type='file'/>
<code class='example_code'>
//get the file into a string
var file = $('.upload_document_example_2')[0].files[0];
var reader = new FileReader();
var file_base_64;
reader.readAsDataURL(file);
reader.onload = function(){
	apiModule.call('contract','create',{
		'subscriptionID':30353,
		'emailCustomer':0,
		'dateSigned':'2022-04-04',
		'base64EncodedFile': reader.result.split('base64,')[1] //trim off the metadata
	}).then(console.log);
};
reader.onerror = function(error){
	console.error('Error: ', error);
};
</code>
