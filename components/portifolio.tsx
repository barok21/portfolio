import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Portifolio = () => {
  return (
    <Card className="w-screen max-w-5xl p-10 rounded-4xl rounded-tl-none ">
      <CardHeader>
        <CardTitle>Hello, I’m Biruk</CardTitle>
        <CardAction>
          <Button variant="link"></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-4xl">Senior Data Engineer and Data Scientist Based in California, Los Angeles.</p>
      </CardContent>

          <p className="px-6">Have worked in a variety of positions, including key developer, solution designer, and data architect. Strong engineering background combined with closely working with business customers.</p>
       
      <CardFooter className=" items-center justify-evenly flex gap-10 flex-wrap">
        <div className="flex gap-2 items-center">
            <p className="text-6xl">96</p>
            <p className="text-muted-foreground text-sm">Completed <br />Projects</p>
        </div>
         <div className="flex gap-2 items-center">
            <p className="text-6xl">8</p>
            <p className="text-muted-foreground text-sm">Year <br />of Experience</p>
        </div>
         <div className="flex gap-2 items-center">
            <p className="text-6xl">10+</p>
            <p className="text-muted-foreground text-sm">Awards <br />Winning</p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Portifolio