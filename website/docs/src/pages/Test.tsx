import Navbar from '../components/Navbar';
import {CustomTheme} from '../utils/CustomTheme';
import {
  Button,
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
} from '@pkgs/uignite';
import {AlertDialogBox} from '@pkgs/uignite';

export const Test = () => {
  return (
    <CustomTheme>
      <Navbar />
      <div className="px-18 min-h-screen mt-10 ">
        <div>
          <div className=" text-4xl mb-5"> Buttons</div>
          <div className="space-x-4 space-y-4">
            <Button variant="primary">primary</Button>
            <Button variant="destructive">destructive</Button>
            <Button variant="success">success</Button>
            <Button variant="warning">warning</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button isLoading variant="gradient" />
            <Button variant="ghost">ghost</Button>
            <Button variant="glass">glass</Button>
            <Button variant="dark">dark</Button>
            <Button variant="light">light</Button>
            <Button variant="gradient">gradient</Button>
            <Button animatedBorder>animatedBorder</Button>
            <Button gradientBorder>gradientBorder</Button>
            <Button className="animate-border text-white font-semibold px-6 py-3 rounded-xl">
              Hover Me
            </Button>
          </div>
        </div>
        <AlertDialogBox
          title="Delete account?"
          description="This action cannot be undone. Are you sure you want to delete your account permanently?"
          variant="destructive"
        />
        <div className="text-3xl mt-8 flex">Cards</div>

        <Card className=" mt-2">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>This is your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Here is some main content.</p>
          </CardContent>
          <CardFooter>
            <button className="btn">Get Started</button>
          </CardFooter>
        </Card>

        <Card className="mt-8 dark:bg-gray-900 border-none">
          <CardHeader>
            <p className="uppercase text-xs font-bold text-muted-foreground">
              Daily Mix
            </p>
            <p className="text-sm text-muted-foreground">12 Tracks</p>
            <CardTitle className="text-xl mt-1">Arijit Singh</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStrv_oPE6vni313HxiliDz1adIGEbzlBmZH7Aczogkb7bLKVGz5chCNwrPYoCHR4KXYr0UjqWiEQHbwYIU6FgaiQ"
              alt="Arijit Singh"
              className="rounded-xl w-full h-80 object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </CustomTheme>
  );
};
