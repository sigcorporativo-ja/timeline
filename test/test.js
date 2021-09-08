import Timeline from 'facade/timeline';

M.language.setLang('es');

const map = M.map({
  container: 'mapjs',
  controls: ['layerswitcher']
});

/*const pluginTimeline = new Timeline({
  position: 'TL',
  intervals: [
    ["NACIONAL 1981-1986", "1986", "WMS*NACIONAL_1981-1986*https://www.ign.es/wms/pnoa-historico*NACIONAL_1981-1986"],
    ["OLISTAT", "1998", "WMS*OLISTAT*https://www.ign.es/wms/pnoa-historico*OLISTAT"],
    ["SIGPAC", "2003", "WMS*SIGPAC*https://www.ign.es/wms/pnoa-historico*SIGPAC"],
    ["PNOA 2004", "2004", "WMS*pnoa2004*https://www.ign.es/wms/pnoa-historico*pnoa2004"],
    ["PNOA 2005", "2005", "WMS*pnoa2005*https://www.ign.es/wms/pnoa-historico*pnoa2005"],
    ["PNOA 2006", "2006", "WMS*pnoa2006*https://www.ign.es/wms/pnoa-historico*pnoa2006"],
    ["PNOA 2010", "2010", "WMS*pnoa2010*https://www.ign.es/wms/pnoa-historico*pnoa2010"]
  ],
});*/

const pluginTimeline = new Timeline({
  position: 'TL',
  intervals: [
    ["ENERO", "ENE", "WMS*NACIONAL_1981-1986*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_01"],
    ["FEBRERO", "FEB", "WMS*OLISTAT*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_02"],
    ["MARZO", "MAR", "WMS*SIGPAC*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_03"],
    ["ABRIL", "ABR", "WMS*NACIONAL_1981-1986*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_04"],
    ["MAYO", "MAY", "WMS*OLISTAT*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_05"],
    ["JUNIO", "JUN", "WMS*SIGPAC*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_06"],
    ["JULIO", "JUL", "WMS*OLISTAT*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_07"],
    ["AGOSTO", "AGO", "WMS*SIGPAC*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_08"],
    ["SEPTIEMBRE", "SEP", "WMS*NACIONAL_1981-1986*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_09"],
    ["OCTUBRE", "OCT", "WMS*OLISTAT*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_10"],
    ["NOVIEMBRE", "NOV", "WMS*SIGPAC*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_11"],
    ["DICIEMBRE", "DIC", "WMS*NACIONAL_1981-1986*http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_temp_media_mensual_consolidada_2015?*tmed_2015_12"]
  ],
  speed:2
});

map.addPlugin(pluginTimeline);