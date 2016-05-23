$(document).ready(function () {

	var posts = Data.getPosts(),
		jsonTemplateRaw = $('#json-template').html(),
		tableTemplateRaw = $('#table-template').html(),
		jsonTemplate = Handlebars.compile(jsonTemplateRaw),
		tableTemplate = Handlebars.compile(tableTemplateRaw),
		jsonOutput = $('#json-output'),
		tableOutput = $('#table-output');


		Handlebars.registerHelper('json', function (jsonObj) {
			return new Handlebars.SafeString('<p>' +  JSON.stringify(jsonObj, null) + '</p>');
		});


		Handlebars.registerHelper('table', function (items, options) {
			var length = items.length,
				table = '<table class="striped-table">',
				stripe,
				i;

			for (i = 0; i < length; i += 1) {
				stripe = (i % 2 == 0) ? 'even': 'odd';
 				table += '<tr class="striped-row ' + stripe + '">';

 				table += '<td class="striped-cell">' + options.fn(items[i]) + '</td>';
				
				table += '</tr>';
			};
			
			table += '</table>';

			return table;
		});


		jsonOutput.html(jsonTemplate({posts: posts}));

		tableOutput.html(tableTemplate({posts: posts}));

		console.log(posts);

});