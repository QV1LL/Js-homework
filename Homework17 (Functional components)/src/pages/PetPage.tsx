export interface Pet {
    name: string
    type: string
    age: number
    photoUrl: string
}

const PetPage = ({ name, type, age, photoUrl }: Pet) => {
    return (
        <div className="size-full bg-slate-950 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 transition-all hover:border-amber-500/30">
                <div className="relative h-80">
                    <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                    <div className="absolute bottom-4 left-6">
                        <span className="px-3 py-1 bg-amber-500 text-black text-xs font-black uppercase rounded-full tracking-wider">
                            {type}
                        </span>
                        <h1 className="text-4xl font-bold text-white mt-2 drop-shadow-md">{name}</h1>
                    </div>
                </div>

                <div className="p-8">
                    <div className="mb-6">
                        <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 text-center">
                            <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Age</p>
                            <p className="text-xl font-semibold text-slate-200 mt-1">{age}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetPage
