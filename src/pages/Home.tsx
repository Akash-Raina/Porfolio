import { NavbarUI } from "../components/GlassNavUI";
import { Hero } from "../components/Hero";

export const Home = () => {
    return (
        <div className="min-h-screen bg-black grid-bg">
            <Hero/>
            <NavbarUI/>
        </div>
    );
}