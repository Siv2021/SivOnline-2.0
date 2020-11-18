
import styled from 'styled-components'


export default styled.div`
grid-area: AD;
display: flex;
  div.docs{
background-color: var(--secondary);
height:100px;
margin:5px;
padding:10px;
display: flex;
width:97vw;
    flex-direction:row;
  overflow-x: scroll;
  ::-webkit-scrollbar { 
    display: none;
  }
  div{
    display: inline-block;
    justify-content: space-between;
    margin-right:50px;
  }
  }
  div.docs2{
background-color: var(--secondary);
height:100px;
margin:5px;
padding:10px;
display: flex;
width:800px;
    flex-direction:row;
  overflow-x: scroll;
  ::-webkit-scrollbar { 
    display: none;
  }
  div{
    display: inline-block;
    justify-content: space-between;
    margin-right:50px;
  }
  }
`