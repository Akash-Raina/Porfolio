import { AllProjects } from "../components/AllProjects"
import { NavbarUI } from "../components/GlassNavUI"


export const Projects = ()=>{

    return <div className="min-h-screen bg-black grid-bg">
        <AllProjects/>
        <NavbarUI/>
    </div>
}