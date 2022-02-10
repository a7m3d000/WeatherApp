import React from "react";
import Image from "next/image";

function Body({ weatherData }) {
  // Destructring Props
  const { description: cityState, icon: icon } = weatherData.weather[0];
  const { temp, temp_min: minTemp, temp_max: maxTemp } = weatherData.main;
  const { speed: windSpeed } = weatherData.wind;
  const { name: cityName } = weatherData;
  const { country: countryName } = weatherData.sys;

  // Image Src
  const src = weatherData.error
    ? "/error-icon.png"
    : weatherData.weather[0].icon === "none"
    ? "/state-icon.png"
    : `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="body d-flex flex-column gap-3">
      <div className="info hstack gap-5">
        <div className="info-heading">
          <h1 className="text-light">{cityName}</h1>
          <span className="badge bg-info text-dark">{countryName}</span>
        </div>
        <div className="ms-auto d-flex align-items-center flex-column w-state">
          <img src={src} alt="" className="img" />
          <h4 className="text-light">{cityState}</h4>
        </div>
      </div>
      <div className="temp">
        <div className="d-flex  align-items-center gap-2 flex-wrap">
          <span className="badge bg-primary text-light">الفعلية</span>
          <h3>{Math.floor(temp)}°C -</h3>
          <span className="badge bg-danger text-light">الصغرى</span>
          <h3>{Math.round(minTemp)}°C /</h3>
          <span className="badge bg-success text-light">العظمى</span>
          <h3>{Math.round(maxTemp)}°C</h3>
        </div>
        <span className="badge bg-warning text-dark">درجة الحرارة</span>
      </div>
      <div className="wind-speed text-light">
        <h3>{windSpeed} m/s</h3>
        <span className="badge bg-secondary text-light">سرعة الرياح</span>
      </div>
      {weatherData.error && (
        <div className="alert alert-danger" role="alert">
          حدث خطأ ما, من فضلك حاول إدخال اسم مدينة أو بلد صحيح
        </div>
      )}

      <style jsx>{`
        .body {
          max-width: 700px;
          margin-top: 40px;
          padding: 1.3rem;
          background-color: var(--body-background-color);
          border-radius: 15px;
          border: 8px solid var(--body-border-color);
        }

        .info-heading h1 {
          font-weight: bold;
          font-size: 2.5rem;
          padding-top: 10px;
        }

        .temp h3 {
          color: #fff;
          font-weight: bold;
        }

        .w-state .img {
          max-width: 130px;
          max-height: 130px;
          margin-top: 20px;
          margin-bottom: 20px;
          background: var(--state-icon-background-color);
          padding: 10px;
          border-radius: 10px;
          border: 5px solid var(--state-icon-border-color) !important;
        }

        @media (max-width: 374px) {
          .w-state .img {
            max-width: 75px;
            max-height: 75px;
          }

          .w-state h4 {
            font-size: 0.93rem;
          }
        }

        .alert {
          transform: translateY(20px);
        }
      `}</style>
    </div>
  );
}

Body.defaultProps = {
  weatherData: {
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
  },
};

export default Body;
