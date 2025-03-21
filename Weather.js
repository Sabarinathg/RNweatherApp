import React, { useState } from 'react'
import { Alert, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {styles} from './styles';

import summer from './assets/Images/weather app-sunny.jpg';
import rain from './assets/Images/weather app-rainy.jpg';
import snow from './assets/Images/weather app-snow.jpg';
import clouds from './assets/Images/weather app-cloud.jpg';

const Weather = () => {

    const[city,setCity]=useState("")
    const[weatherData,setWeatherData]=useState(null);
    const[forecastData,setForecastData]=useState(null);

    const fetchWeather= async ()=>
    {
        try{
            if(!city.trim())
            {
                Alert.alert('Enter City Name');
                return
            }
            const API='c09bc15c037f0547e81316578d82bbac';
            const wetaherapi=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
            const wresponse=await fetch(wetaherapi);
            const wdata= await wresponse.json();

            const forecastapi=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}&units=metric`
            const fresponse=await fetch(forecastapi);
            const fdata= await fresponse.json();

            if(wdata.cod !== 200)
            {
                Alert.alert('Enter Valid City Name');
                return
            }

            setForecastData(fdata);
            setWeatherData(wdata);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const getWeatherCondition=()=>
    {
        const condition=weatherData.weather[0].main;

        if(condition === 'Haze')
        {
            return summer;
        }
        else if(condition === 'Snow')
        {
            return snow;
        }
        else if(condition === 'Rain')
        {
            return rain
        }
        else if(condition === 'Clouds')
        {
            return clouds;
        }
        return summer
    }

  return (
   <View style={styles.weatherContainer}>
        <View style={styles.searchContainer}>
           <View style={styles.inputContainer}>
            <TextInput
                    placeholder='Enter City'
                    placeholderTextColor={'#fff'}
                    value={city}
                    onChangeText={setCity}
                    style={styles.inputField}
                />
                <TouchableOpacity 
                    style={styles.inputBtn}
                    onPress={fetchWeather}>
                    <Text>Search</Text>
                </TouchableOpacity>
           </View>
        </View>
        {weatherData &&(
            <View style={styles.weatherResult}>
                <ImageBackground source={getWeatherCondition()} resizeMethod='cover' blurRadius={10} style={styles.backgroundImage}>
                    {/* <Text style={styles.weatherName}>{weatherData.weather[0].main}</Text> */}
                    <View style={styles.weatherReportContainer}>
                        <Text style={styles.textStyle}>{weatherData.name}</Text>
                        <View style={styles.line} />
                        <Text style={styles.weatherTemp}>
                            {(weatherData.main.temp).toFixed(0)}{'\u00b0'}C
                        </Text>
                        <View></View>
                        <Text style={styles.textStyle}>Feels Like - {(weatherData.main.feels_like).toFixed(0)}{'\u00b0'}</Text>
                        <Text style={styles.textStyle}>{weatherData.weather[0].main}</Text>

                        <View style={styles.maxAndmin}>
                            <Text style={styles.textStyle}>min : {(weatherData.main.temp_min).toFixed(0)}{'\u00b0'}</Text>
                            <View style={styles.seperator}></View>
                            <Text style={styles.textStyle}>max : {(weatherData.main.temp_max).toFixed(0)}{'\u00b0'}</Text>
                        </View>
                        <View style={styles.weatherDetails}>
                            <Text style={styles.wDetails}>
                                {weatherData?.rain?.["1h"] ('% Chance of rain')|| "No Chance  \n of rain"}
                            </Text>
                            <View style={styles.seperator}></View>
                            <Text  style={[styles.weatherWind,styles.wDetails]}>
                                wind Speed {"\n"}{((weatherData.wind.speed)*3.6).toFixed(0)} Km/h
                            </Text>
                            <View style={styles.seperator}></View>
                            <Text  style={[styles.weatherHumidity,styles.wDetails]}>
                                Humidity {"\n"}
                                {weatherData.main.humidity}%
                            </Text>
                        </View>
                    </View>

                    <ScrollView style={styles.forecastContainer} horizontal showsHorizontalScrollIndicator={false}>
                        {forecastData?.list
                            ?.filter((item, index, self) =>
                                index === self.findIndex((t) => t.dt_txt.split(" ")[0] === item.dt_txt.split(" ")[0])
                            )
                            .map((item, index) => (
                                <View key={index} style={styles.card}>
                                    <Text style={styles.fdet}>{item.main.temp.toFixed(0)}°C</Text>
                                    <Text style={styles.fdet}>{item.weather[0].main}</Text>
                                    <Text style={styles.fdet}>{item.dt_txt.split(" ")[0]}</Text>
                                </View>
                            ))}
                    </ScrollView>

                </ImageBackground>
             </View>
             
        )}
   </View>
  )
}

export default Weather