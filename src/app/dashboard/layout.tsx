import Header from "../components/header"
import Sidebar from "../components/sidebar"

export interface DashboardLayout {
    children: React.ReactNode,
    stats: React.ReactNode
}

export default function DashboardLayout({
    children,
    stats
}: DashboardLayout){

    return (
        <div>    
            {children}
        <main>
        <div>{stats}</div>
        </main>          
        </div>
    )
}