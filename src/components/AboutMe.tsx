import Photo from '../assets/Profile_1.jpg'
export const AboutMe = () => {

    return (
        <div className="text-white border-t-2 border-white">
            <div className='flex justify-center py-6 lg:hidden'>
                <img src={Photo} alt='Photo' className='h-[280px] w-[280px] rounded-2xl'/>
            </div>
            <div className="py-5 flex flex-col justify-center items-center lg:items-start">
                <h2 className="text-4xl font-bold">Akash Raina</h2>
                <h3 className="text-gray-300">Full Stack Developer</h3>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                <div className='flex flex-col lg:justify-center'>
                    <h3 className="text-2xl font-bold mb-2">About</h3>
                    <p className="p-2 lg:p-4 text-gray-300 leading-relaxed">
                        Hi, I'm <strong>Akash Raina</strong>, a passionate <strong>Software Developer</strong> focused on building efficient and innovative solutions. 
                        My journey into technology began with a fascination for coding and the ability to bring innovative ideas to life. 
                        Over time, I’ve honed my skills by building real-world projects that emphasize performance, functionality, and great user experiences.
                    </p>
                    <p className="p-2 lg:px-4 text-gray-300 leading-relaxed">I'm open to work, freelance, or collaborate. <a className='text-blue-300 hover:cursor-pointer' href='mailto:kevinraina279@gmail.com'>Contact Me.</a></p>
                </div>
                <div className='hidden lg:flex lg:justify-end lg:py-6'>
                    <img src={Photo} alt='Photo' className='h-[280px] w-[280px] rounded-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 ease-in-out'/>
                </div>
            </div>
            
        </div>
    );
}