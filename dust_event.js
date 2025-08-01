var  cor = [ 
  [79.900, 8.450],   // SW corner near Mannar
  [80.500, 8.450],   // SE corner near Vavuniya
  [80.500, 9.150],   // NE corner
  [79.900, 9.150],   // NW corner
  [79.900, 8.450]    // back to SW
];

var geometry = ee.Geometry.Polygon(cor)



Map.centerObject(geometry)

var time_start = ee.Date('2016')
var time_end = ee.Date('2025')
var unit = 'year'
var time_dif = time_end.difference(time_start, unit).round()



var aod = ee.ImageCollection("MODIS/061/MCD19A2_GRANULES")
.select('Optical_Depth_055')
.filterDate(time_start, time_end)
.filterBounds(geometry)
.filter(ee.Filter.eq('SATELLITE','T'))


var list = ee.List.sequence(0, time_dif.subtract(1), 1).map(function(delta){
  return time_start.advance(delta, unit)
  })
  
print(list)

var aod_collection = ee.ImageCollection(list.map(function(date){
  var start_date = ee.Date(date)
  var end_date = start_date.advance(1, unit)
  var img_agg = aod.filterDate(start_date, end_date).map(function(img){
      var bands = img.multiply(0.001)
      var thr = bands.gt(0.5)
  return thr}).sum()
  
  // var img_agg = aod.filterDate(start_date, end_date).map(function(img){
  // return img.multiply(0.001)
  // .copyProperties(img, img.propertyNames())
  //   }).mean()
  return img_agg
  .set('system:time_start', start_date.millis())
  .set('system:time_end', end_date.millis())
  .set('system:index', start_date.format('YYYY-MM-dd'))
  }))
  
print(aod_collection)

print(
  ui.Chart.image.series(aod_collection, geometry, ee.Reducer.mean(), 1000, 'system:time_start')
  )


var occ = aod_collection.map(function(img){
  var thr = img.gt(0.5)
  return thr  
  }).sum()
  
Map.addLayer(occ.clip(geometry),{min:0, max: 365},'occ',false)

Export.image.toDrive({
  image: occ.clip(geometry), 
  description: 'aod_occ', 
  scale: 1000, 
  region: geometry, 
  crs: 'EPSG:4326', 
  folder: 'test'
  
  })