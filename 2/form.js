var validation = {
	phone: /^\+\d\(\d{3}\)\d{3}\-\d{4}$/,
	email: /^\w+@mail\.ru$|^(\w+\.\w+)@mail\.ru$|^(\w+\-\w+)@mail\.ru$/,
};

window.onload = function () {
	document.getElementById('submit').addEventListener('click', function(event) {
		Object.keys(validation).forEach(function(rule) {
			var fields = document.querySelectorAll('[data-validation-rule="' + rule + '"]');
			fields.forEach(function(field) {
				if (validation[rule].test(field.value)){
					field.classList.remove('invalid');
				} else {
					field.classList.add('invalid');
				}
			});
		});
		event.preventDefault();
	});

	var $button = document.getElementById('send');
	var $city = document.getElementById('city');



	$('#submit').on('click',function () {
		 $.ajax({
			 url: 'http://localhost:3000/cities',
			 type: 'GET',
			 success: function(cityNames) {
				 Object.keys(cityNames).forEach(function(rule){
					 $city.value += cityNames[rule].name + ' ';
				 });

			 }
		 });
	})

};

