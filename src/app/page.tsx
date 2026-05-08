import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
export default function Home() {
  return(
    <div style={{display: 'flex', backgroundColor: 'white', minHeight: '100vh'}}>
      <Sidebar />
      

      <main style={{flex: 1, padding: '32px'}}>
        <Dashboard />
      </main>
    </div>
  )
}