'use client';

import SearchBar from './SearchBar';

export default function Hero() {
    return (<section className="relative h-[100vh] min-h-[500px] flex flex-col justify-center items-center text-center px-4">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')",
            }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="absolute z-20 bottom-20 max-w-7xl w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight mb-10" style={{ marginBottom: '10px' }}>
                India's Largest{' '}
                <span
                    className="bg-clip-text text-transparent"
                    style={{
                        backgroundImage: 'linear-gradient(135deg, #E63946, #F77F00, #FCBF49)',
                    }}
                >
                    Wedding Planning
                </span>{' '}
                Platform
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 font-normal mb-10" style={{ marginBottom: '10px' }}>
                Hire best vendors such as photographers, makeup artists, Mandap, Caterers and so on.
            </p>

            <SearchBar />
        </div>
    </section>
    );
}

