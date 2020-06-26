/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: 'http://' + location.hostname + ':8123',
   wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY
   onReady: function () {},

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '30px 130px 0',
         fontSize: '28px'
      },
      right: [],
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         }
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
         title: 'Importants page',
         bg: 'images/bg1.png',
         icon: 'mdi-alert-box-outline',
         groups: [
            {
               title: 'Importants',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     height: 1,
                     type: TYPES.SENSOR_ICON,
                     title: 'Garage doors',
                     id: 'binary_sensor.garage_doors',
                     states: {
                     on: "open",
                     off: "close"
                     },
                     icons: {
                     on: 'mdi-alert-circle-outline',
                     off: 'mdi-garage'
                     },
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'Outdoor',
                     id: 'sensor.outdoor_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
               ]
            },
         ]
      },
      {
         title: 'Garage',
         bg: 'images/bg2.png',
         icon: 'mdi-garage',
         groups:[
            {
               title: 'Temp/Hum_sensors',
               width: 3,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'Humidity basement',
                     //subtitle: 'basement',
                     id: 'sensor.basement_humidity',
                     unit: '%', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'Temperature basement',
                     //subtitle: 'basement',
                     id: 'sensor.basement_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 2],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'Temperature mining_r',
                     //subtitle: 'Mining_room',
                     id: 'sensor.mining_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 1],
                     width: 2,
                     height: 1,
                     title: 'Complex sensor',
                     id: {}, // since we are binding each list item to different sensor, so we simply use an empty object
                     type: TYPES.TEXT_LIST,
                     state: false,
                     list:[
                        {
                           title: 'Velocity-fan speed',
                           icon: 'mdi-fan',
                           value: '&sensor.garage_sensors.attributes.variables.vSpeed'
                        },
                     ]
                  },
               ]
            },
            {
               title: 'Doors/Security',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     height: 1,
                     type: TYPES.SENSOR_ICON,
                     title: 'Garage doors',
                     id: 'binary_sensor.garage_doors',
                     states: {
                     on: "open",
                     off: "close"
                     },
                     icons: {
                     on: 'mdi-alert-circle-outline',
                     off: 'mdi-garage'
                     },
                  },
               ]
            },
         ]
      },
      {
         title: 'Boiler_room',
         bg: 'images/bg3.jpeg',
         icon: 'mdi-water-boiler',
         groups: [
            {
               title: 'base floor circuit',
               width: 2,
               height: 3,
               items:[
                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'IN circuit temperature',
                     id: 'sensor.base_floor_in_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'MIX circuit temperature',
                     id: 'sensor.base_floor_mix_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 2],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'OUT circuit temperature',
                     id: 'sensor.base_floor_out_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
               ]
            },
            {
               title: '1-st floor circuit',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'IN circuit temperature',
                     id: 'sensor.1st_floor_in_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'MIX circuit temperature',
                     id: 'sensor.1st_floor_mix_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 2],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'OUT circuit temperature',
                     id: 'sensor.1st_floor_out_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
               ]
            },
            {
               title: '2-nd floor circuit',
               width: 2,
               height: 3,
               items:[
                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'IN circuit temperature',
                     id: 'sensor.2nd_floor_in_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'MIX circuit temperature',
                     id: 'sensor.2nd_floor_mix_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
                  {
                     position: [0, 2],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'OUT circuit temperature',
                     id: 'sensor.2nd_floor_out_circuit_temp',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  },
               ]
            },
         ]
      },
      {
         title: 'Panel-page',
         bg: 'images/bg3.jpeg',
         icon: 'mdi-monitor-dashboard',
         groups:[
            {
               title: 'ASUS-panel',
               width: 2,
               height: 3,
               items:[
                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR_ICON,
                     title: 'pir',
                     id: 'binary_sensor.wallpanel_pir',
                     states: {
                     on: "MOTION",
                     off: "off"
                     },
                     icons: {
                     on: 'mdi-motion-sensor',
                     off: 'mdi-motion-sensor-off'
                     },
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR_ICON,
                     title: 'screen',
                     id: 'binary_sensor.asus_panel_screen',
                     states: {
                     on: "MOTION",
                     off: "off"
                     },
                     icons: {
                     on: 'mdi-monitor-dashboard',
                     off: 'mdi-monitor-off'
                     },
                  },
                  {
                     position: [0, 2],
                     width: 1,
                     height: 1,
                     type: TYPES.SENSOR,
                     title: 'Battery',
                     id: 'sensor.asus_panel_batt',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                  }
               ]
            },
         ]
      },
      {
         title: 'Main page',
         bg: 'images/bg1.jpeg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: 'First group',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Sun.sun state',
                           icon: 'mdi-weather-sunny',
                           value: '&sun.sun.state'
                        },
                        {
                           title: 'Custom',
                           icon: 'mdi-clock-outline',
                           value: 'value'
                        }
                     ]
                  },
                  {
                     position: [0, 1], // [x, y]
                     width: 1,
                     type: TYPES.SENSOR,
                     id: 'updater.updater',
                     state: '@attributes.release_notes' // https://github.com/resoai/TileBoard/wiki/Templates
                  }
               ]
            },

            {
               title: 'Second group',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.SLIDER,
                     //id: "input_number.volume",
                     id: {state: 50}, // replace it with real string id
                     state: false,
                     title: 'Custom slider',
                     subtitle: 'Example of subtitle',
                     slider: {
                        min: 0,
                        max: 100,
                        step: 2,
                        request: {
                           type: "call_service",
                           domain: "input_number",
                           service: "set_value",
                           field: "value"
                        }
                     }
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     //id: "switch.lights",
                     id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: false,
                     title: 'Custom switch',
                     icons: {'off': 'mdi-volume-off', 'on': 'mdi-volume-high'}
                  },
                  {
                     position: [0, 1],
                     type: TYPES.ALARM,
                     //id: "alarm_control_panel.home_alarm",
                     id: { state: 'disarmed' }, // replace it with real string id
                     title: 'Home Alarm',
                     icons: {
                        disarmed: 'mdi-bell-off',
                        pending: 'mdi-bell',
                        armed_home: 'mdi-bell-plus',
                        armed_away: 'mdi-bell',
                        triggered: 'mdi-bell-ring'
                     },
                     states: {
                        disarmed: 'Disarmed',
                        pending: 'Pending',
                        armed_home: 'Armed home',
                        armed_away: 'Armed away',
                        triggered: 'Triggered'
                     }
                  }

               ]
            },

            {
               title: '',
               width: 1,
               height: 3,
               items: [
                  {
                     // please read README.md for more information
                     // this is just an example
                     position: [0, 0],
                     height: 2, // 1 for compact
                     //classes: ['-compact'],
                     type: TYPES.WEATHER,
                     id: {},
                     state: function () {return 'Sunny'}, // https://github.com/resoai/TileBoard/wiki/Anonymous-functions
                     icon: 'clear-day',
                     icons: { 'clear-day': 'clear'},
                     fields: {
                        summary: 'Sunny',
                        temperature: '18',
                        temperatureUnit: 'C',
                        windSpeed: '5',
                        windSpeedUnit: 'kmh',
                        humidity: '50',
                        humidityUnit: '%',
                        list: [
                           'Feels like 16 C'
                           /*
                           'Feels like '
                              + '&sensor.dark_sky_apparent_temperature.state'
                              + '&sensor.dark_sky_apparent_temperature.attributes.unit_of_measurement',

                           'Pressure '
                              + '&sensor.dark_sky_pressure.state'
                              + '&sensor.dark_sky_pressure.attributes.unit_of_measurement',

                           '&sensor.dark_sky_precip_probability.state'
                              + '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement'
                              + ' chance of rain'
                           */
                        ]
                     }
                  }

               ]
            }
         ]
      },
   ]
}
