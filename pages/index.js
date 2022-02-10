import Head from "next/head";
import React, { useState } from "react";
import Input from "../components/Input";
import Body from "../components/Body";

function WeatherApp({ posts }) {
  const [weatherData, setWeatherData] = useState();

  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Weather App</title>

        {/* <!-- Meta Tags --> */}
        <meta name="author" content="Ahmed Moahmed" />
        <meta
          name="description"
          content="Weather App that you can get weather information from API."
        />
        <meta
          name="keywords"
          content="weather, nextjs, reactjs, javascript, css, html"
        />
        <meta name="theme-color" content="#8601f3" />

        <link rel="icon" href="./tab-icon.png" type="image/x-icon" />
      </Head>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col ">
              <Input onInput={handleInput} />
              <Body weatherData={weatherData} />
            </div>
          </div>
        </div>

        <style jsx>{`
          .app {
            max-width: 700px;
            margin: auto;
            margin-top: 70px;
          }
        `}</style>
      </div>
    </React.Fragment>
  );

  function handleInput(data) {
    if (data) {
      setWeatherData(data);
    } else {
      setWeatherData({
        weather: [
          {
            description: "حالة الطقس",
            icon: "none",
          },
        ],

        main: {
          temp: 0.0,
          temp_min: 0.0,
          temp_max: 0.0,
        },
        wind: {
          speed: 0.0,
        },
        sys: {
          country: "الدولة",
        },

        name: "اسم المنطقة",
        error: true,
      });
    }
  }
}

export default WeatherApp;
