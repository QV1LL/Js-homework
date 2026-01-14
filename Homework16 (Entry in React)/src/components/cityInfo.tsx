import React from 'react'

export interface City {
    name: string
    country: string
    foundationYear: string
    imageUrl: string
}

const CityInfo: React.FC<City> = ({ name, country, foundationYear, imageUrl }) => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{country}</span>
                </div>
                <p className="mt-2 text-gray-600">
                    Est. <span className="font-medium">{foundationYear}</span>
                </p>
            </div>
            <div className="w-full h-full">
                <img className="h-full object-cover" src={imageUrl} alt={name} />
            </div>
        </div>
    )
}

class CityInfoClassComponent extends React.Component<City> {
    render() {
        const { name, country, foundationYear, imageUrl } = this.props

        return (
            <div className="max-w-sm mx-auto overflow-hidden bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                    <div className="flex items-baseline justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                        <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">{country}</span>
                    </div>
                    <p className="mt-2 text-gray-600">
                        Est. <span className="font-medium">{foundationYear}</span>
                    </p>
                </div>
                <div className="w-full h-full">
                    <img className="h-full object-cover" src={imageUrl} alt={name} />
                </div>
            </div>
        )
    }
}

export default CityInfo
