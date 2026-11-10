import mock_data from '../modules/sensor_communication/mock-data.json'
import {mockData, dataSets, lightData} from './light_data_json_export'


///this module contains mock data used to create and test
///other software modules 

///incoming BT mock JSON data 

///send to Green thumb central service module for 
///organization, storage and display 

//mock data from mock-data.json
//this will be deleted when real data is passed in
const dataSet1 = mock_data.datasets[0];
const dataSet2 = mock_data.datasets[1];
const dataSet3 = mock_data.datasets[2];

//data is requested from 'HomeScreen' screen
function get_graph_data(){
//data is queried, for now use mock data 
//data is returned to screen for display
}

//data is passed from sensor_connection 
//final function will take json object argument 
function store_data(){
    //data is organized 
    //data is stored 
}

//data is requested from 'LightHistory' screen
function get_history_data(){
    //historical data is queried 
    //data is returned to screen for display 
}

//temporary function that sends light data directly 
//to homescreen when requested to test connection
export function temp_for_testing(){
    return mock_data.datasets
}


