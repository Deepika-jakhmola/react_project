
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
const INIT_URL=
"https://images.unsplash.com/photo-1603288967520-f3e04381dc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const Hot_URL=
"https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const Cold_URL=
"https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const Rain_URL=
"https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";


return(
    <div className="InfoBox">
    
    <div className='card_container'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
        info.humidity>80
        ?Rain_URL:info.temp>15
        ?Hot_URL:Cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
        <p>Temprature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}&deg;C</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>The weather can be described as <b>{info.weather}</b> and feels like{info.feelslike}&deg;C</p>
        
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}
