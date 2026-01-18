export interface User {
    name: string
    phoneNumber: string
    email: string
    address: string
    jobExperience: string
    skills: string[]
    avatarUrl: string
}

const ProfilePage = ({ name, phoneNumber, email, address, jobExperience, skills, avatarUrl }: User) => {
    return (
        <div className="size-full bg-slate-950 py-12 px-4 text-slate-200">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800 text-center">
                        <div className="relative inline-block">
                            <img
                                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-slate-800 shadow-2xl"
                                src={avatarUrl}
                                alt={name}
                            />
                            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full"></div>
                        </div>
                        <h1 className="mt-4 text-xl font-bold text-white">{name}</h1>
                        <p className="text-indigo-400 font-medium text-sm">Active User</p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800">
                        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                            Contact Info
                        </h2>
                        <div className="space-y-4 text-sm">
                            <p className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors cursor-pointer">
                                <span className="text-indigo-500 text-lg">📧</span> {email}
                            </p>
                            <p className="flex items-center gap-3 text-slate-300">
                                <span className="text-indigo-500 text-lg">📞</span> {phoneNumber}
                            </p>
                            <p className="flex items-center gap-3 text-slate-300">
                                <span className="text-indigo-500 text-lg">📍</span> {address}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
                        <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Job Experience
                        </h2>
                        <p className="text-slate-400 leading-relaxed whitespace-pre-line">{jobExperience}</p>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
                        <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Skills & Expertise
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1.5 bg-slate-800 text-indigo-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
