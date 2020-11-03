import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import Styles from './styles'
import {AiFillFileText} from "react-icons/ai";
import io from 'socket.io-client'
const socket = io('http://localhost:3001')

interface Doc{
  name: string,
  link: string,
  user?: string
}


const AllDocs: React.FC = () => {

  const [docs, setDocs] = useState<Doc[]>([
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
    { name: 'string',
      link: 'string',
      user: 'string'},
  ])

  socket.on("newDoc", (doc : Doc)=>{
    setDocs([...docs, doc])
  })

  return (
    <Styles className="components">
      <div id="docs">
      <h3>Documentos</h3>
      <div className='docs'>
        {docs.map(doc=>(
            <div className="doc">{doc.name} - {doc.user}
            <a target="_blank" rel="noopener noreferrer" href={doc.link}><AiFillFileText/></a>
            </div>
        ))}
      </div>
      </div>
 
    </Styles>
  )
}

export default AllDocs;