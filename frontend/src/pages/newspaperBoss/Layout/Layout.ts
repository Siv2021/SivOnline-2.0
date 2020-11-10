import styled from 'styled-components'



// VD - Video
// SL - SpeechesList
// NS - News
// At - Actions
// CH - Chat
// VT - Votes
// DC - Docs

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 520px auto 540px ;
  grid-template-rows: 240px 120px 160px auto;
  grid-template-areas:
   
  
  'VD SL CH '
  'VD SL CH '
  'VD NS NS '
  'PT PP PP '
  
  ;
  
  height: 100vh;
`;