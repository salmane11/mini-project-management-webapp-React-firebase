import ChartBar from './ChartBar';
import './Chart.css'
function Chart(props){
    
    const dataPointsValue=props.dataPoints.map(datapoint => datapoint.value);
    const totalMaximum=Math.max(...dataPointsValue);

    return(
    <div className="chart">
        {props.dataPoints.map(sample=><ChartBar key={sample.label} value={sample.value} maxValue={totalMaximum} label={sample.label}/>)}
    </div>
    );
}
export default Chart;