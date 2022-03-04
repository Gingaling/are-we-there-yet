export default 

function App()  {
    let originAddress = '757 Sutter Street, San Francisco, CA 94109';
    
    let destinationAddress = 'One South Van Ness, San Francisco, CA';

    let url=`https://maps.googleapis.com/maps/api/directions/json?origin=${originAddress}&destination=${destinationAddress}&key=AIzaSyBiFnOrtD1ruSpWDH2jPvT8dqp1C5SAgJ0`;

    return (
        
        fetch(url)
        .then(res)(() => res.JSON())
        .then(res)(() => console.log(res.JSON()))  )
    }