import "./treatment.css";
import {useState} from 'react'
import React, { Component } from 'react';

function TreatmentPlan() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  
    
        
    return (
        <div className='treat-page'>
            <h1 className="treat-h1">Your Treatment Detail</h1>
            <div >
                <table className='table'>

                <thead className='treat-thead'>
                    <tr>
                        <th className='treat-no-h'>.No</th>
                        <th className='treat-hospital-h'>Hospital</th>
                        <th className='treat-name-h'>Doctor's Name</th>
                        <th className='treat-plan-h'>Date of plan</th>
                    </tr>
                </thead>

                {data.map((a, i) => (
                <tbody>
                
                
                    <tr className='treat-tb-head' onClick={() => toggle(i)}  >
                        <th className='treat-no-h'>{a.no}</th>
                        <th className='treat-hospital-h'>{a.hospital}</th>
                        <th className='treat-name-h'>{a.name}</th>
                        <th className='treat-plan-h'>{a.plan}</th>
                        <span>{selected === i ? '-' : '+' }</span>
                    </tr>
                    <tr>
                        <td colspan = '4' >
                        <div  className={ selected === i ? 'treat-content show' : 'treat-content'}> 
                            <RowContent/>
                        </div>
                        </td>
                    </tr>
                    
                        
                </tbody>))}

                </table>
                
            </div>
        </div>
        
    );}

    const data = [
        {
            no:'T001',
            hospital:'Lust layer of Hell',
            name:'Minos Prime',
            plan:'6/6/6666'
        },
        {
            no:'T002',
            hospital:'Greed layer of Hell',
            name:'Sisyphus Prime',
            plan:'6/6/6666'
        }
    ]
    
class RowContent extends React.Component {
    render(){
        
        return (
            <div>
            <table className="treat-table">
                <tbody className="treat-body">
                <tr>
                    <th className="treat-border">presenting problem</th>
                    <th className="treat-border">diagnosis</th>
                </tr>
                    <tr>
                    <td colspan="2" className="treat-border">goal and objective</td>
                    </tr>
                    <tr>
                    <td colspan="2" className="treat-border">Treatment method</td>
                    </tr>
                    <tr>
                    <td colspan="2" className="treat-border">Doctor note</td> 
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }}
    

export default TreatmentPlan;