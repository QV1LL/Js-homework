const navigation = document.querySelector('nav')
const links = Array.from(navigation.children)

const HOME_PAGE_LAYOUT = `
<div class="text-center max-w-3xl mx-auto mb-16">
    <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
        Build something <span class="text-indigo-600">amazing</span> today.
    </h1>
    <p class="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
        We provide the best solutions for your digital presence. Fast, reliable, and beautifully designed for modern businesses.
    </p>
    <div class="flex gap-4 justify-center">
        <button class="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30">
            Get Started
        </button>
        <button class="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all">
            Learn More
        </button>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Secure</h3>
        <p class="text-slate-600">Enterprise-grade security built into every layer of our platform.</p>
    </div>
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 text-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Fast</h3>
        <p class="text-slate-600">Optimized for speed to ensure the best user experience possible.</p>
    </div>
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4 text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Scalable</h3>
        <p class="text-slate-600">Grow your business without worrying about infrastructure limits.</p>
    </div>
</div>
`

const ABOUT_PAGE_LAYOUT = `
<div class="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 mb-12">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="p-10 lg:p-16 flex flex-col justify-center">
            <h2 class="text-indigo-600 font-bold uppercase tracking-wide text-sm mb-3">Our Story</h2>
            <h1 class="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">Driven by passion, defined by results.</h1>
            <p class="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 2024, we started with a simple mission: to make the web a better place. We believe in clean code, user-centric design, and sustainable growth.
            </p>
            <div class="flex gap-8 border-t border-slate-100 pt-8 mt-4">
                <div>
                    <span class="block text-3xl font-bold text-slate-900">100+</span>
                    <span class="text-sm text-slate-500">Projects</span>
                </div>
                <div>
                    <span class="block text-3xl font-bold text-slate-900">50+</span>
                    <span class="text-sm text-slate-500">Clients</span>
                </div>
                <div>
                    <span class="block text-3xl font-bold text-slate-900">5</span>
                    <span class="text-sm text-slate-500">Awards</span>
                </div>
            </div>
        </div>
        <div class="h-64 lg:h-auto bg-slate-200 relative">
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-indigo-900/10"></div>
        </div>
    </div>
</div>
`

const CONTACT_PAGE_LAYOUT = `
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
    <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <h2 class="text-2xl font-bold mb-6 text-slate-900">Send us a message</h2>
        <form class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all">
            </div>
            <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" class="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all">
            </div>
            <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows="4" class="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"></textarea>
            </div>
            <button type="button" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Send Message
            </button>
        </form>
    </div>

    <div class="bg-indigo-900 p-8 rounded-2xl shadow-lg text-white h-full relative overflow-hidden">
        <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-800 rounded-full opacity-50 blur-3xl"></div>
        
        <h2 class="text-2xl font-bold mb-6 relative z-10">Contact Information</h2>
        <p class="text-indigo-200 mb-8 relative z-10">Have a question or just want to chat? We'd love to hear from you.</p>

        <div class="space-y-6 relative z-10">
            <div class="flex items-start gap-4">
                <div class="bg-indigo-800 p-3 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                    <h3 class="font-bold">Our Office</h3>
                    <p class="text-indigo-200 text-sm">123 Innovation Dr, Tech City, TC 90210</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div class="bg-indigo-800 p-3 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                    <h3 class="font-bold">Email</h3>
                    <p class="text-indigo-200 text-sm">hello@example.com</p>
                </div>
            </div>
        </div>
    </div>

</div>
`

const linksToPages = new Map([
    ['#home-page', HOME_PAGE_LAYOUT],
    ['#about', ABOUT_PAGE_LAYOUT],
    ['#contacts', CONTACT_PAGE_LAYOUT],
])

const contentContainer = document.getElementById('content')

links.forEach((link) => {
    link.onclick = (e) => {
        e.preventDefault()

        history.pushState(null, '', link.href)
        contentContainer.innerHTML = linksToPages.get(window.location.hash)
    }
})

window.onpopstate = () => {
    contentContainer.innerHTML = linksToPages.get(window.location.hash)
}
