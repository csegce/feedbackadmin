import './App.css';
import { useEffect, useState } from 'react';

function App(props) {

  const [a1,seta1]=useState([]);
  const [a2,seta2]=useState([]);
  const [a3,seta3]=useState([]);
  const [a4,seta4]=useState([]);
  const [a5,seta5]=useState([]);
  const [n,setn]=useState([]);
  const [b,setb]=useState([]);

  useEffect(()=>{
    if(b.length==0)
    return;
    const p=b[0].slice();
    fetch("http://localhost:8000/3").then((j)=>j.json()).then((j)=>{
    j.forEach((e)=>{for(let i=0;i<b[0].length;i++){p[i][0]+=e.post[i][0];
    p[i][1]+=e.post[i][1];p[i][2]+=e.post[i][2];p[i][3]+=e.post[i][3];}});
    for(let i=0;i<p.length;i++)if(j.length>0)
    {p[i][0]/=j.length;p[i][1]/=j.length;p[i][2]/=j.length;p[i][3]/=j.length;}
    seta1(p);
  })},[b])

  useEffect(()=>{
    if(a1.length==0)
    return;
    const p=b[1].slice();
    fetch("http://localhost:8000/4").then((j)=>j.json()).then((j)=>{
    j.forEach((e)=>{for(let i=0;i<b[0].length;i++){p[i][0]+=e.post[i][0];
    p[i][1]+=e.post[i][1];p[i][2]+=e.post[i][2];p[i][3]+=e.post[i][3];}});
    for(let i=0;i<p.length;i++)if(j.length>0)
    {p[i][0]/=j.length;p[i][1]/=j.length;p[i][2]/=j.length;p[i][3]/=j.length;}
    seta2(p)
  })},[a1])

  useEffect(()=>{
    if(a2.length==0)
    return;
    const p=b[2].slice();
    fetch("http://localhost:8000/5").then((j)=>j.json()).then((j)=>{
    j.forEach((e)=>{for(let i=0;i<b[0].length;i++){p[i][0]+=e.post[i][0];
    p[i][1]+=e.post[i][1];p[i][2]+=e.post[i][2];p[i][3]+=e.post[i][3];}});
    for(let i=0;i<p.length;i++)if(j.length>0)
    {p[i][0]/=j.length;p[i][1]/=j.length;p[i][2]/=j.length;p[i][3]/=j.length;}
    seta3(p);
  })},[a2])

  useEffect(()=>{
    if(a3.length==0)
    return;
    const p=b[3].slice();
    fetch("http://localhost:8000/6").then((j)=>j.json()).then((j)=>{
    j.forEach((e)=>{for(let i=0;i<b[0].length;i++){p[i][0]+=e.post[i][0];
    p[i][1]+=e.post[i][1];p[i][2]+=e.post[i][2];p[i][3]+=e.post[i][3];}});
    for(let i=0;i<p.length;i++)if(j.length>0)
    {p[i][0]/=j.length;p[i][1]/=j.length;p[i][2]/=j.length;p[i][3]/=j.length;}
    seta4(p)
  })},[a3])

  useEffect(()=>{
    if(a4.length==0)
    return;
    const p=b[4].slice();
    fetch("http://localhost:8000/7").then((j)=>j.json()).then((j)=>{
    j.forEach((e)=>{for(let i=0;i<b[0].length;i++){p[i][0]+=e.post[i][0];
    p[i][1]+=e.post[i][1];p[i][2]+=e.post[i][2];p[i][3]+=e.post[i][3];}});
    for(let i=0;i<p.length;i++)if(j.length>0)
    {p[i][0]/=j.length;p[i][1]/=j.length;p[i][2]/=j.length;p[i][3]/=j.length;}
    seta5(p)})
  },[a4]);

  useEffect(()=>{fetch("http://localhost:8000/questions").then((j)=>j.json()).then((j)=>setn(j[0].qu[2]))},[]);

  useEffect(()=>{
    if(n.length==0)
    return;
  const p=[[],[],[],[],[]];
  for(let i=0;i<5;i++)
    for(let k=0;k<n[i].length;k++)
    p[i].push([0,0,0,0]);
  setb(p);
},[n]);

  return (
    <div className="App">
      <h1>GCE SALEM CSE FEEDBACK STAT</h1>
      <div className='sem'>
        <h1 className='head'>Sem lll</h1>
        {
        a1.map((e,i)=>
        <div className='sub'>
        <h2 className='subject'>{n[0][i]}</h2>
        <div className='fl'><h3 className='top'>PLANNING AND ORGANISATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[0]*5+"%"}}/></div><h3 className="marks">{e[0]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>PREPARATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[1]*5+"%"}}/></div><h3 className="marks">{e[1]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>STUDENT'S PARTICIPATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[2]*5+"%"}}/></div><h3 className="marks">{e[2]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>CLASS MANAGEMENT/ASSESSMENT OF STUDENTS</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[3]*5+"%"}}/></div><h3 className="marks">{e[3]/4}/5</h3></div></div>
        </div>)}
      </div>
      <div className='sem'>
        <h1 className='head'>Sem lV</h1>
        {
        a2.map((e,i)=>
        <div className='sub'>
        <h2 className='subject'>{n[1][i]}</h2>
        <div className='fl'><h3 className='top'>PLANNING AND ORGANISATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[0]*5+"%"}}/></div><h3 className="marks">{e[0]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>PREPARATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[1]*5+"%"}}/></div><h3 className="marks">{e[1]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>STUDENT'S PARTICIPATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[2]*5+"%"}}/></div><h3 className="marks">{e[2]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>CLASS MANAGEMENT/ASSESSMENT OF STUDENTS</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[3]*5+"%"}}/></div><h3 className="marks">{e[3]/4}/5</h3></div></div>
        </div>)}
      </div>
      <div className='sem'>
        <h1 className='head'>Sem V</h1>
        {
        a3.map((e,i)=>
        <div className='sub'>
        <h2 className='subject'>{n[2][i]}</h2>
        <div className='fl'><h3 className='top'>PLANNING AND ORGANISATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[0]*5+"%"}}/></div><h3 className="marks">{e[0]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>PREPARATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[1]*5+"%"}}/></div><h3 className="marks">{e[1]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>STUDENT'S PARTICIPATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[2]*5+"%"}}/></div><h3 className="marks">{e[2]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>CLASS MANAGEMENT/ASSESSMENT OF STUDENTS</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[3]*5+"%"}}/></div><h3 className="marks">{e[3]/4}/5</h3></div></div>
        </div>)}
      </div>
      <div className='sem'>
        <h1 className='head'>Sem Vl</h1>
        {
        a4.map((e,i)=>
        <div className='sub'>
        <h2 className='subject'>{n[3][i]}</h2>
        <div className='fl'><h3 className='top'>PLANNING AND ORGANISATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[0]*5+"%"}}/></div><h3 className="marks">{e[0]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>PREPARATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[1]*5+"%"}}/></div><h3 className="marks">{e[1]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>STUDENT'S PARTICIPATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[2]*5+"%"}}/></div><h3 className="marks">{e[2]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>CLASS MANAGEMENT/ASSESSMENT OF STUDENTS</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[3]*5+"%"}}/></div><h3 className="marks">{e[3]/4}/5</h3></div></div>
        </div>)}
      </div>
      <div className='sem'>
        <h1 className='head'>Sem Vll</h1>
        {
        a5.map((e,i)=>
        <div className='sub'>
        <h2 className='subject'>{n[4][i]}</h2>
        <div className='fl'><h3 className='top'>PLANNING AND ORGANISATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[0]*5+"%"}}/></div><h3 className="marks">{e[0]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>PREPARATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[1]*5+"%"}}/></div><h3 className="marks">{e[1]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>STUDENT'S PARTICIPATION</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[2]*5+"%"}}/></div><h3 className="marks">{e[2]/4}/5</h3></div></div>
        <div className='fl'><h3 className='top'>CLASS MANAGEMENT/ASSESSMENT OF STUDENTS</h3>
        <div className="cont"><div className='prog'><div className='progval' style={{"width":e[3]*5+"%"}}/></div><h3 className="marks">{e[3]/4}/5</h3></div></div>
        </div>)}
      </div>
    </div>
  );
}

export default App;