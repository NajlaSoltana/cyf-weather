import React, { Component } from "react";


import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";

const FakeWeather= (props) =>  {

   return (

           <div className="bottomRow">
     <div className ="weatherChange">
       
   <p>03:00 </p>
               <img src={mostlycloudy} alt="cloudy icon" />
               <p>8°C</p>
             </div>
       <div className="weatherChange">
               <p>06:00 </p>
               <img src={mostlycloudy} alt="cloudy icon" />
         <p>9°C</p>
             </div>
       <div className="weatherChange">
               <p>09:00 </p>
               <img src={clear} alt="clear icon" />
         <p>14°C</p>
             </div>
       <div className="weatherChange">
               <p>12:00 </p>
               <img src={clear} alt="clear icon" />
         <p>17°C</p>
             </div>
       <div className="weatherChange">
               <p>15:00 </p>
               <img src={clear} alt="clear icon" />
         <p>18°C</p>
             </div>
       <div className="weatherChange">
               <p>18:00 </p>
               <img src={clear} alt="clear icon" />
         <p>16°C</p>
             </div>
       <div className="weatherChange">
               <p>21:00 </p>
               <img src={mostlycloudy} alt="cloudy icon" />
         <p>13°C</p>
             </div>
             </div>

   );

   }

export default FakeWeather;  