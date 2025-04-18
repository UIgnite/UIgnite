import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@pkgs/uignite'

const Test = () => {
  return (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {/* Card 1 */}
        <Card className="bg-gradient-to-br from-[#0e933d] to-[#012f11] text-white">
          <CardHeader className="flex items-center gap-4">
            <img
              src="/assets/sample-album.jpg"
              alt="Album Cover"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div>
              <CardTitle>Blinding Lights</CardTitle>
              <CardDescription>The Weeknd</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm opacity-90">Album: After Hours</div>
          </CardContent>
          <CardFooter>
            <button className="mt-2 text-sm bg-white text-[#1DB954] px-4 py-1 rounded-full hover:bg-opacity-90 transition">
              ▶ Play
            </button>
          </CardFooter>
        </Card>
  
        {/* Card 2 */}
        <Card className="bg-gradient-to-br from-[#f64949] to-[#670404] text-white">
          <CardHeader className="flex items-center gap-4">
            <img
              src="/assets/sample-album.jpg"
              alt="Album Cover"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div>
              <CardTitle>Shape of You</CardTitle>
              <CardDescription>Ed Sheeran</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm opacity-90">Album: Divide</div>
          </CardContent>
          <CardFooter>
            <button className="mt-2 text-sm bg-white text-[#FF5E5E] px-4 py-1 rounded-full hover:bg-opacity-90 transition">
              ▶ Play
            </button>
          </CardFooter>
        </Card>
  
        {/* Card 3 */}
        <Card className="bg-gradient-to-br from-[#3B82F6] to-[#60a5fa] text-white">
          <CardHeader className="flex items-center gap-4">
            <img
              src="/assets/sample-album.jpg"
              alt="Album Cover"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div>
              <CardTitle>Stay</CardTitle>
              <CardDescription>The Kid LAROI, Justin Bieber</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm opacity-90">Album: Stay (Single)</div>
          </CardContent>
          <CardFooter>
            <button className="mt-2 text-sm bg-white text-[#3B82F6] px-4 py-1 rounded-full hover:bg-opacity-90 transition">
              ▶ Play
            </button>
          </CardFooter>
        </Card>
  
        {/* Card 4 */}
        <Card className="bg-gradient-to-br from-[#8B5CF6] to-[#a78bfa] text-white">
          <CardHeader className="flex items-center gap-4">
            <img
              src="/assets/sample-album.jpg"
              alt="Album Cover"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div>
              <CardTitle>Levitating</CardTitle>
              <CardDescription>Dua Lipa</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm opacity-90">Album: Future Nostalgia</div>
          </CardContent>
          <CardFooter>
            <button className="mt-2 text-sm bg-white text-[#8B5CF6] px-4 py-1 rounded-full hover:bg-opacity-90 transition">
              ▶ Play
            </button>
          </CardFooter>
        </Card>
      </div>
    );
};

export {Test};
