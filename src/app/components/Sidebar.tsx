"use client";
import React from 'react';
import { LayoutGrid, History, ChartBarIncreasing, DollarSign, Wallet, Cog } from 'lucide-react';

const Sidebar = () => {
    const [activePage, setActivePage] = React.useState("Dashboard");
    return (
        <aside style={{display:'flex', flexDirection:'column', justifyContent:'space-between', width:'250px', height:'100vh', backgroundColor:'#ffffff', borderRight:'1px solid #f0f0f0', paddingLeft:'0px', paddingRight:'20px', paddingTop:'0px', marginLeft:'0px'}}>    
            <div>
                <h1 style={{color:'#0D4D4D', fontSize:'24px', fontWeight:'bold', padding:'24px'}}>Fundly</h1>

                <div onClick={() => setActivePage("Dashboard")} style={{display:'flex', alignItems:'center', gap:'9px', paddingTop:'6px', paddingBottom:'6px', paddingRight:'10px', paddingLeft:'20px', borderRadius:'12px', backgroundColor: activePage === "Dashboard" ? '#E8F5F3' : 'transparent', cursor:'pointer', marginBottom:'9px'}}>
                    <LayoutGrid size={20} color={activePage === "Dashboard" ? '#0d4d4d' : '#9ca3af'} strokeWidth={2.5} />
                    <p style={{color: activePage === "Dashboard" ? '#0d4d4d' : '#9ca3af', fontWeight:'400', fontSize:'15px'}}>Dashboard</p>
                </div>

                <div onClick={() => setActivePage("History")} style={{display:'flex', alignItems:'center', gap:'9px', paddingTop:'6px', paddingBottom:'6px', paddingRight:'10px', paddingLeft:'20px', borderRadius:'12px', backgroundColor: activePage === "History" ? '#E8F5F3' : 'transparent', cursor:'pointer', marginBottom:'9px'}}>
                    <History size={20} color={activePage === "History" ? '#0d4d4d' : '#9ca3af'} strokeWidth={2.5} />
                    <p style={{color: activePage === "History" ? '#0d4d4d' : '#9ca3af', fontWeight:'400', fontSize:'15px'}}>History</p>
                </div>

                <div onClick={() => setActivePage("Insights")} style={{display:'flex', alignItems:'center', gap:'9px', paddingTop:'6px', paddingBottom:'6px', paddingRight:'10px', paddingLeft:'20px', borderRadius:'12px', backgroundColor: activePage === "Insights" ? '#E8F5F3' : 'transparent', cursor:'pointer', marginBottom:'9px'}}>
                    <ChartBarIncreasing size={20} color={activePage === "Insights" ? '#0d4d4d' : '#9ca3af'} strokeWidth={2.5} />
                    <p style={{color: activePage === "Insights" ? '#0d4d4d' : '#9ca3af', fontWeight:'400', fontSize:'15px'}}>Insights</p>
                </div>

                <div onClick={() => setActivePage("Transactions")} style={{display:'flex', alignItems:'center', gap:'9px', paddingTop:'6px', paddingBottom:'6px', paddingRight:'10px', paddingLeft:'20px', borderRadius:'12px', backgroundColor: activePage === "Transactions" ? '#E8F5F3' : 'transparent', cursor:'pointer', marginBottom:'9px'}}>
                    <DollarSign size={20} color={activePage === "Transactions" ? '#0d4d4d' : '#9ca3af'} strokeWidth={2.5} />
                    <p style={{color: activePage === "Transactions" ? '#0d4d4d' : '#9ca3af', fontWeight:'400', fontSize:'15px'}}>Transactions</p>
                </div>

                <div onClick={() => setActivePage("Wallet")} style={{display:'flex', alignItems:'center', gap:'9px', paddingTop:'6px', paddingBottom:'6px', paddingRight:'10px', paddingLeft:'20px', borderRadius:'12px', backgroundColor: activePage === "Wallet" ? '#E8F5F3' : 'transparent', cursor:'pointer', marginBottom:'9px'}}>
                    <Wallet size={20} color={activePage === "Wallet" ? '#0d4d4d' : '#9ca3af'} strokeWidth={2.5} />
                    <p style={{color: activePage === "Wallet" ? '#0d4d4d' : '#9ca3af', fontWeight:'400', fontSize:'15px'}}>Wallet</p>
                </div>

                <div onClick={() => setActivePage("Settings")} style={{display:'flex', alignItems:'center', gap:'9px', paddingTop:'6px', paddingBottom:'6px', paddingRight:'10px', paddingLeft:'20px', borderRadius:'12px', backgroundColor: activePage === "Settings" ? '#E8F5F3' : 'transparent', cursor:'pointer', marginBottom:'9px'}}>
                    <Cog size={20} color={activePage === "Settings" ? '#0d4d4d' : '#9ca3af'} strokeWidth={2.5} />
                    <p style={{color: activePage === "Settings" ? '#0d4d4d' : '#9ca3af', fontWeight:'400', fontSize:'15px'}}>Settings</p>
                </div>
            </div>

            <div style={{padding:'16px', margin:'20px', backgroundColor:'#E8F5F3', borderRadius:'15px'}}>
                <p style={{fontSize:'12px', fontWeight:'700', color:'#0d4d4d'}}>BUDGET LIMIT</p>
                <div style={{backgroundColor:'#a8cec1', borderRadius:'999px', height:'6px', marginTop:'8px'}}>
                    <div style={{backgroundColor:'#0d4d4d', borderRadius:'999px', height:'6px', width:'75%', marginLeft:'0px'}}></div>
                </div>
                <p style={{fontSize:'11px', color:'#0d4d4d', marginTop:'8px'}}>75% of monthly limit used</p>
            </div>                   
        </aside>
    );
};

export default Sidebar;