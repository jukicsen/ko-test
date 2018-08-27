function viewModel() {
    var self = this;
    self.records = ko.observableArray([]);

    $.ajax({
		url: 'https://randomuser.me/api/?results=5000&inc=gender,name,nat',
		dataType: 'json',
		success: function(data) {
			console.log(data.results);
			self.records(data.results);
		}
	});
		
    }
	
    ko.applyBindings(new viewModel());
	
	
	
	
	
	/* 
	-- SAMPLE DATA --------------------------------------------------------------------------
	
	ko.applyBindings({
        people: [
            { first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' },
			{ first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' },
			{ first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' },
			{ first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' },
			{ first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' },
			{ first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' },
			{ first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' },
			{ first: 'Denis', last: 'Reddy', title: 'mr', gender: 'm', nat: 'CH' },
            { first: 'Gery', last: 'Fischer', title: 'mr', gender: 'm', nat: 'AT' },
            { first: 'Helena', last: 'Venecia', title: 'mrs', gender: 'f', nat: 'IT' }			
        ]
    });
	
*/

	
