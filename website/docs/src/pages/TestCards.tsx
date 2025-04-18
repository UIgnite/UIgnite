import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@pkgs/uignite';

const TestCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Card 1 */}
      <Card className="bg-[#1DB954] text-white">
        <CardHeader>
          <CardTitle>Blinding Lights</CardTitle>
          <CardDescription>The Weeknd</CardDescription>
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
      <Card className="bg-[#FF5E5E] text-white">
        <CardHeader>
          <CardTitle>Shape of You</CardTitle>
          <CardDescription>Ed Sheeran</CardDescription>
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
      <Card className="bg-[#3B82F6] text-white">
        <CardHeader>
          <CardTitle>Stay</CardTitle>
          <CardDescription>The Kid LAROI, Justin Bieber</CardDescription>
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
      <Card className="bg-[#8B5CF6] text-white">
        <CardHeader>
          <CardTitle>Levitating</CardTitle>
          <CardDescription>Dua Lipa</CardDescription>
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

export default TestCards;
