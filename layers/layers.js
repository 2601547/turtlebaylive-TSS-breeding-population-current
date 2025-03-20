var wms_layers = [];

var lyr_TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TSS Breeding Population - Current (RASTER - Reprojected EPSG 3857)<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_0.png" /> 0.0000<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_1.png" /> 0.0177<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_2.png" /> 0.0354<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_3.png" /> 0.0532<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_4.png" /> 0.0709<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_5.png" /> 0.0886<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_6.png" /> 0.1063<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_7.png" /> 0.1241<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_8.png" /> 0.1418<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_9.png" /> 0.1595<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_10.png" /> 0.1772<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_11.png" /> 0.1950<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_12.png" /> 0.2127<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_13.png" /> 0.2304<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_14.png" /> 0.2481<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_15.png" /> 0.2658<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_16.png" /> 0.2836<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_17.png" /> 0.3013<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_18.png" /> 0.3190<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_19.png" /> 0.3367<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_20.png" /> 0.3545<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_21.png" /> 0.3722<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_22.png" /> 0.3899<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_23.png" /> 0.4076<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_24.png" /> 0.4253<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_25.png" /> 0.4431<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_26.png" /> 0.4608<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_27.png" /> 0.4785<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_28.png" /> 0.4962<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_29.png" /> 0.5140<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_30.png" /> 0.5317<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_31.png" /> 0.5494<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_32.png" /> 0.5671<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_33.png" /> 0.5849<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_34.png" /> 0.6026<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_35.png" /> 0.6203<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_36.png" /> 0.6380<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_37.png" /> 0.6557<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_38.png" /> 0.6735<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_39.png" /> 0.6912<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_40.png" /> 0.7089<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_41.png" /> 0.7266<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_42.png" /> 0.7444<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_43.png" /> 0.7621<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_44.png" /> 0.7798<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_45.png" /> 0.7975<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_46.png" /> 0.8153<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_47.png" /> 0.8330<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_48.png" /> 0.8507<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_49.png" /> 0.8684<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_50.png" /> 0.8861<br />\
    <img src="styles/legend/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0_51.png" /> 0.9039<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-20037508.342800, -20037508.342800, 20037508.342800, 20037508.342800]
        })
    });
var format_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1 = new ol.format.GeoJSON();
var features_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1 = format_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1.readFeatures(json_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1.addFeatures(features_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1);
var lyr_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1, 
                style: style_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1,
                popuplayertitle: 'TSS Breeding Population - Current (VECTOR - BINARY, CLEAN)',
                interactive: true,
                title: '<img src="styles/legend/TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1.png" /> TSS Breeding Population - Current (VECTOR - BINARY, CLEAN)'
            });
var format_CountryOutlineWhite_2 = new ol.format.GeoJSON();
var features_CountryOutlineWhite_2 = format_CountryOutlineWhite_2.readFeatures(json_CountryOutlineWhite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountryOutlineWhite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountryOutlineWhite_2.addFeatures(features_CountryOutlineWhite_2);
var lyr_CountryOutlineWhite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountryOutlineWhite_2, 
                style: style_CountryOutlineWhite_2,
                popuplayertitle: 'Country Outline - White',
                interactive: true,
                title: '<img src="styles/legend/CountryOutlineWhite_2.png" /> Country Outline - White'
            });

lyr_TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0.setVisible(true);lyr_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1.setVisible(true);lyr_CountryOutlineWhite_2.setVisible(true);
var layersList = [lyr_TSSBreedingPopulationCurrentRASTERReprojectedEPSG3857_0,lyr_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1,lyr_CountryOutlineWhite_2];
lyr_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1.set('fieldAliases', {'DN': 'DN', });
lyr_CountryOutlineWhite_2.set('fieldAliases', {'CNTR_ID': 'CNTR_ID', 'CNTR_NAME': 'CNTR_NAME', 'NAME_ENGL': 'NAME_ENGL', 'NAME_FREN': 'NAME_FREN', 'ISO3_CODE': 'ISO3_CODE', 'SVRG_UN': 'SVRG_UN', 'CAPT': 'CAPT', 'EU_STAT': 'EU_STAT', 'EFTA_STAT': 'EFTA_STAT', 'CC_STAT': 'CC_STAT', 'NAME_GERM': 'NAME_GERM', });
lyr_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1.set('fieldImages', {'DN': 'Range', });
lyr_CountryOutlineWhite_2.set('fieldImages', {'CNTR_ID': 'TextEdit', 'CNTR_NAME': 'TextEdit', 'NAME_ENGL': 'TextEdit', 'NAME_FREN': 'TextEdit', 'ISO3_CODE': 'TextEdit', 'SVRG_UN': 'TextEdit', 'CAPT': 'TextEdit', 'EU_STAT': 'TextEdit', 'EFTA_STAT': 'TextEdit', 'CC_STAT': 'TextEdit', 'NAME_GERM': 'TextEdit', });
lyr_TSSBreedingPopulationCurrentVECTORBINARYCLEAN_1.set('fieldLabels', {'DN': 'no label', });
lyr_CountryOutlineWhite_2.set('fieldLabels', {'CNTR_ID': 'no label', 'CNTR_NAME': 'no label', 'NAME_ENGL': 'no label', 'NAME_FREN': 'no label', 'ISO3_CODE': 'no label', 'SVRG_UN': 'no label', 'CAPT': 'no label', 'EU_STAT': 'no label', 'EFTA_STAT': 'no label', 'CC_STAT': 'no label', 'NAME_GERM': 'no label', });
lyr_CountryOutlineWhite_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});