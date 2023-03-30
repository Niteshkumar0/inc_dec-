import IncDec from "./components/inc-dec";
import styled from 'styled-components';

let Container = styled.div`
  display:flex;
  flex-direction: column-reverse;
  width:340px;
  padding:40px 20px;
  border-radius:10px;
  text-align:center;
  background-color:  #d9ff4c
  ;
  position:absolute;
  top:40%;
  left:40%;
  color :black;
  & li{
    list-style:none;
  }
  & p{
    font-size:20px
  }
  & button{
    padding:10px ;
    border:none;
    
    border-radius:5px;    
    margin:0 15px 0 0 
  }
`

function App() {
  return (
    <Container>
      <IncDec/>
    </Container>
      
  );
}

export default App;
