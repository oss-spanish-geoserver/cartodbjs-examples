$(document).ready(function() {   
  var vizjson_url = "http://team.cartodb.com/api/v2/viz/9f130ef2-6371-11e4-a0fd-0e9d821ea90d/viz.json";    
  cartodb.createVis("map", vizjson_url, {
    share: true,
    title: true,
    description: true,
    search: true,
    gmaps_base_type: 'roadmap',
    gmaps_style: '[{"featureType": "water","elementType": "geometry","stylers": [{ "color": "#80a580" }]}]'
  });
});