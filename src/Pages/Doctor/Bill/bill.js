import React, { Component } from 'react';
import "./bill.css";
import {useState} from 'react'



function Bill() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  
    
        
    return (
        <div className='page'>
            <h1>Your Bills Detail</h1>
            <div >
                <table className='table'>

                <thead className='thead'>
                    <tr>
                        <th className='no-h'>.No</th>
                        <th className='hospital-h'>Hospital</th>
                        <th className='time-h'>Data & Time</th>
                        <th className='status-h'>Status</th>
                    </tr>
                </thead>

                {data.map((bill, i) => (
                <tbody>
                
                
                    <tr className='tb-head' onClick={() => toggle(i)}  >
                        <th className='no-h'>{bill.no}</th>
                        <th className='hospital-h'>{bill.hospital}</th>
                        <th className='time-h'>{bill.time}</th>
                        <th className='status-h'>{bill.status}</th>
                        <span>{selected === i ? '-' : '+' }</span>
                    </tr>
                    <tr>
                        <td colspan = '4' >
                        <div  className={ selected === i ? 'content show' : 'content'}>
                            <RowContent/>
                        </div>
                        </td>
                    </tr>
                    
                        
                </tbody>))}

                </table>
                
            </div>
        </div>
   
    );

    }

 
const data = [
    {
        no:'HD001',
        hospital:'Lust layer of Hell',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },
    {
        no:'HD002',
        hospital:'Greed layer of Hell',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },
    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },
    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    {
        no:'HD???',
        hospital:'Unkown',
        time:'6/6/6666 6:66pm',
        status: 'Unpaid'
    },

    
]

class RowContent extends React.Component {
    render(){
      
      return (
        <div>
            <table className='bill-table'>
                <thead className='bill-head'>
                    <tr>
                    <th>.No</th>
                    <th>Item</th>
                    <th>Unit</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody className='bill-body'>
                    <tr>
                    <td>1</td>
                    <td>chainsaw</td>
                    <td>vnd</td>
                    <td>2</td>
                    <td>5.000.000</td>
                    <td>10.000.000</td>
                    </tr>

                    <tr>
                    <td colspan="6">
                        <th>Total bill;10.000.000vnd</th>
                        <th>Tax 1%: 1</th>
                        <th>Total bill with tax:1.000.001vnd</th>

                    </td>
                    </tr>
                    <tr>
                    <td colspan="6">Total bill with tax in text</td>
                    </tr>
                </tbody>
            </table>

          </div>
      )
    }
}



export default Bill;

