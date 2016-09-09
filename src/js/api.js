var local = 'http://localhost:55881'
var dev = 'https://dev-api-streetsupport.azurewebsites.net'
var staging = 'https://staging-api-streetsupport.azurewebsites.net'
var live = 'https://live-api-streetsupport.azurewebsites.net'

var env = require('./env')

var envs = [local, dev, staging, live]

var domainRoot = envs[env]

var p = function (url) {
  return domainRoot + url
}

module.exports = {
  serviceProviders: p('/v2/service-providers/'),
  allServiceProviders: p('/v1/all-service-providers/'),
  serviceCategories: p('/v2/service-categories/'),
  categoryServiceProviders: p('/v2/categorised-service-providers/show/'),
  categoryServiceProvidersByDay: p('/v2/timetabled-service-providers/show/'),
  organisation: p('/v2/service-providers/show/'),
  needs: p('/v1/service-provider-needs/'),
  createVolunteerEnquiry: p('/v1/volunteer-enquiries/'),
  createOfferOfItems: p('/v1/offers-of-items/'),
  joinStreetSupportApplications: p('/v1/join-street-support-applications/'),
  offerSponsorship: p('/v1/sponsorship-offers/'),
  servicesByCategory: p('/v2/service-categories/'),
  newlyRegisteredProviders: p('/v1/newly-registered-providers'),
  cities: p('/v1/cities/')
}
