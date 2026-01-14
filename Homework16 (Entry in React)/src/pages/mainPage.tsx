import BookInfo from '../components/bookInfo'
import CityInfo from '../components/cityInfo'

const MainPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
            <div className="grid grid-cols-2 gap-8 max-w-4xl w-full">
                <CityInfo
                    name="Kyiv"
                    country="Ukraine"
                    foundationYear="482 AD"
                    imageUrl="https://images.unsplash.com/photo-1561542320-9a18cd340469?auto=format&fit=crop&w=800&q=80"
                />
                <BookInfo
                    title="1984"
                    author="George Orwell"
                    genre="Dystopian"
                    pageCount={328}
                    imageUrl="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=800&q=80"
                    reviews={['Terrifyingly prophetic.', 'A must-read for everyone.', 'Big Brother is watching...']}
                />
            </div>
        </div>
    )
}

export default MainPage
