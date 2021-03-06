import React from 'react';
import { hot } from 'react-hot-loader';
import TileMap from './components/TileMap';
import style from './app.css';
import mapData from './assets/data/data';
import socialMediaData from './assets/data/socialMediaData';
import HorizontalBarChart from './components/HorizontalBarChart';
import MonthGraph from './components/MontheGraph/MonthGraph';
import DiagramCasesPer100Thousand from './components/DiagramCasesPer100Thousand';

const App = () => (
  <div className={style.app}>
    <TileMap data={mapData} height={500} width={1000} id="TileChart" />
    {/* <PieChart */}
    {/*    data={socialMediaData} */}
    {/*    height={500} */}
    {/*    width={1000} */}
    {/*    id={'PieChart'} */}
    {/* /> */}
    <MonthGraph/>
    <HorizontalBarChart
      id="BarChart"
      height={500}
      width={500}
      data={socialMediaData}
      xAxisLabel="Число инцидентов"
      yAxisLabel="Соцсеть"
    />
    <DiagramCasesPer100Thousand />
  </div>
);

export default hot(module)(App);
