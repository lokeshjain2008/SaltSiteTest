var express = require('express');
var router = express.Router();
var api = require('../lib/api');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {path: req.path});
});

/*
* Task 1:
* Make models alphabetically sortable (ascending, descending, default)
*/
router.get('/models', function(req, res, next) {
	// use api to get models and render output
	var order = +req.query.order || 0;
	
	api.fetchModels().then(function(models) {
		if (order === 1) {
			models.sort();
		} else if(order === 2){
			models.sort(function (a,b) {
				return b > a;
			});
		}
		return models;
	}).then(function(filteredModels) {
		res.render('models', {models: filteredModels, path: req.path, order: order});	
	});
	
});

/*
* Task 2:
* Make services filterable by type (repair, maintenance, cosmetic)
*/
router.get('/services', function(req, res, next) {
	// use api to get services and render output
	var type = req.query.type;
	api.fetchServices().then(function (services) {
		return services.filter(function (service) {
			return (type)? service.type === type : true; 
		});
	}).then(function (filteredServices) {
		res.render('services', {services: filteredServices, path: req.path, selectedType: type});
	});

});

/*
* Task 3:
* Bugfix: Something prevents reviews from being rendered
* Make reviews searchable (content and source)
*/
router.get('/reviews', function(req, res, next) {
	var searchValue = req.query.searchValue;
	return Promise.all([api.fetchCustomerReviews(), api.fetchCorporateReviews()])
		.then(function(allReviews) {
			reviews = allReviews.reduce(function(a,b) {return a.concat(b)}); //flatten the array of reviews
			reviews  = reviews.filter(function (review) {
				if (searchValue) {
					return (review.content.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 
						|| review.source.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
				}	else{
					return true;
				}
			});
			res.render('reviews', {reviews: reviews, path: req.path, searchValue: searchValue});
		});
});

module.exports = router;
