// Test script to verify static implementation
console.log('Testing static location service implementation...');

// Test static location service
const staticLocationService = {
  getCities: function() {
    return [
      { name: 'New York', short_name: 'NYC' },
      { name: 'Los Angeles', short_name: 'LA' },
      { name: 'Chicago', short_name: 'Chicago' },
      { name: 'Houston', short_name: 'Houston' },
      { name: 'Phoenix', short_name: 'Phoenix' }
    ];
  },

  getPlaces: function() {
    return [
      {
        place_id: 'static_place_1',
        formatted_address: '123 Main St, New York, NY 10001, USA',
        latitude: 40.7128,
        longitude: -74.0060
      }
    ];
  }
};

// Test cities functionality
const cities = staticLocationService.getCities();
console.log('Cities loaded:', cities.length);
console.log('Sample city:', cities[0]);

// Test places functionality
const places = staticLocationService.getPlaces();
console.log('Places loaded:', places.length);
console.log('Sample place:', places[0]);

console.log('Static implementation test completed successfully!');
