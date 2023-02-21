import React from 'react'
import './Middle.css'
import Card from './Card'
const Middle = () => {
  return (
    <div className='middle'>
        <div className="heading">
        <h1>Our Projects</h1>
        </div>
        <div className="container">
            <Card image="https://www.urbansciencemep.com/_next/static/images/DWTC-99c4926050d82ed27239c4dfcd379292.jpg" name = "DWTC"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/DxbAirportConcordeD-d5adef77d08a3c8a37325c08794892c8.jpg" name = "Dxb Airport Concorde D"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/MauiRestaurant-111ecc4cac563b8477d39a9e7031a856.jpg" name="Maui-Restaurant"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/Nail-paint%20bar-861208074988c2bac603b43f493f4787.jpg" name="Nail-paint bar"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/OfficeB-f959878578d6f43ddce5f5302ddf6019.jpg" name="Office in Business Bay"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/AtlantisThePalm-578031b4ae2cf7b7cb98cc2532d58f46.jpg" name="Atlantis, The Palm"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/Office-69bc33b798e71227488717df5acd81e7.jpg" name="Office"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/residentialTower-f1b864e257da5eb086e14f93faa37522.jpg" name="Residential Tower"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/Sofitel-97bf54bd9cf3a6e45adc6842d7095668.jpg" name="Sofitel"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/THE-GYM-Dubai-aa9513e040a39a1d15a9500d82304d33.png" name="The Gym Dubai"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/Villa-ef59ad84361a56fbc827761ec5da9a51.jpg" name="Villa"/>
            <Card image="https://www.urbansciencemep.com/_next/static/images/Warehouse-8b8d67bca427d1d67fd27c73ab42b6a2.jpg" name="Warehouse"/>
        </div>
    </div>
  )
}

export default Middle