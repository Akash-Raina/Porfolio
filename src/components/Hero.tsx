import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

export const Hero = () => {
    return (
        <div className="px-30 py-10 lg:px-40 xl:px-60 2xl:px-80">
            <AboutMe/>
            <Skills/>
        </div>
    );
}