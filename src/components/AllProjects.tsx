export const AllProjects = ()=>{

    const project = [
        {title: "What's Next", status: "Live", description: "🎵 What's Next — A Collaborative Music Queue Platform", stack: ["WebSockets", "Redis", "React", "Node.js", "TypeScript", "Tailwind CSS"], link: "https://github.com/Akash-Raina/WhatsNext"},
        {title: "Medium Clone", status:"Code", description: "✍️ A sleek blogging app for writing and reading, just like Medium.", stack: ["React", "Hono", " Cloudflare-worker", "postgresql", "prisma", ], link:"https://github.com/Akash-Raina/medium-clone"},
        {title: "MusicPlayer", status:"Code", description: "🎵 MusicPlayer – A sleek, folder-based MP3 player built with Python and Tkinter.", stack: ["Python", "Tkinter", "Pygame", "OS modulte", "FileDialog"], link:"https://github.com/Akash-Raina/SimpleMusicPlayer"},
        {title: "RunBro", status: "Code", description: "🎮 A fast-paced Python game where you run, dodge, and survive. One hit, and it’s game over!", stack: ["Python", "Pygames", "Audio Integration", "OOP", "Event-Driven Programming"], link:"https://github.com/Akash-Raina/RunBro-pygame"}

    ]

    return <div className="pl-8 pr-2 sm:pl-20 sm:pr-5 py-10 lg:px-40 xl:px-60 2xl:px-80">
        <div className="">
            <h3 className="text-blue-500 text-3xl font-bold border-b pb-1">Projects</h3>
            <p className="mt-2 text-white/40 ">A curated collection of my development work — from responsive front-end interfaces and full-stack web apps to collaborative and personal projects that showcase my problem-solving and technical capabilities.</p>
        </div>
        <div className=" my-4 w-full h-10 bg-[#1A1A1A] rounded-xl"></div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 md:gap-14 lg:gap-18 xl:gap-24">
        {
            project.map((data, index)=>(
            <a key={index} href={data.link} className="border border-[#242424] rounded-xl bg-[#1A1A1A] hover:bg-gradient-to-r hover:from-purple-600 hover:cursor-pointer hover:via-pink-500 hover:to-orange-400 transition-all duration-500">
                <div className="text-white flex justify-between mt-8 mx-5 items-center">
                    <span className="text-xl font-bold">{data.title}</span>
                    {data.status === "Live" ? <span className={`bg-slate-800 text-[#49A1FC] rounded-lg w-14  text-sm font-semibold text-center`}>{data.status}</span> : ""}
                </div>
                <div className="mx-5 my-5 text-white">{data.description}</div>
                <div className="h-[62px] flex flex-wrap gap-2 mt-6 mb-6 ml-6  md:mr-3 lg:mr-10">
                    {data.stack.map((info)=>(
                    <span className="w-max h-max bg-[#242424] text-[13px] text-white font-semibold rounded-lg p-1">{info}</span>
                    ))}
                </div>
            </a>
            ))
        }
        </div>
    </div>
}