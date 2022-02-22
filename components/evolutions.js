
const Evolutions = ({id}) => {
  if(id > 1000)
  {
    let status = false;
  }
  else if(id<1000 && id > 99)
  {
    let status = id.toString();
  }
  else if(id < 100 && id > 9)
  {
    let status = "0"+id;
  }
  else
  {
    let status = "00"+id;
  }
console.log(id);
    return ( 
        <p>{id > 1000 ? 'false' : (id<1000 && id > 99 ? '#'+id : (id < 100 && id > 9 ? ('#0'+id) : ('#00'+id)))}</p>
     );
}
 
export default Evolutions;