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
import { Badge } from "./ui/badge"
import { Briefcase, ContactRound, Dumbbell, HandPlatter, Landmark, Newspaper, User, UserPenIcon } from "lucide-react"

const technologies = [
  { title: "Python", status: '95' , icon: UserPenIcon },
  { title: "PostgreSQL", status: '80' , icon: Dumbbell },
  { title: "Microsoft Azure", status: '85' , icon: HandPlatter },
  { title: "Cloud: AWS", status: '75' , icon: Briefcase },
]

const toolStack = [
  { title: "#", status: '75' , icon: Landmark },
  { title: "#", status: '75' , icon: Newspaper },
  { title: "#", status: '85' , icon: ContactRound },
  { title: "#", status: '85' , icon: HandPlatter },
  { title: "#", status: '75' , icon: Briefcase },
  { title: "#", status: '75' , icon: Landmark },
  { title: "#", status: '75' , icon: Newspaper },
  { title: "#", status: '85' , icon: ContactRound },
];

const Technologies = ({ title, Icon }: { title: string; Icon: React.ComponentType }) => (
  <div title={title} className="hover:text-green-500 hover:transition ease-in border-b-2  shadow p-2 rounded-full">
    <Icon />
  </div>
);

const ToolStack = ({ title, Icon }: { title: string; Icon: React.ComponentType }) => (
  <div title={title} className="hover:text-green-500 hover:transition ease-in border-b-2  shadow p-2 rounded-full">
    <Icon />
  </div>
);


const Portifolio = () => {

  return (
    <section className="space-y-4">
    <Card className="p-8 rounded-none rounded-tr-4xl ">
      <CardHeader>
        <CardTitle>Hello, I’m <span>{}</span></CardTitle>
        <CardAction>
          <Button variant="link"></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">Senior <span className="inline-block bg-[#78cc6d] rounded-full p-2 -rotate-4 origin-bottom-left text-black font-bold" >Data Scientist </span>and Data Scientist Based in California, Los Angeles.</p>
      </CardContent>

        <p className="px-6 text-sm">Have worked in a variety of positions, including key developer, solution designer, and data architect. Strong engineering background combined with closely working with business customers.</p>
       
      <CardFooter className=" items-center justify-evenly flex gap-2 flex-wrap">
        <div className="flex gap-2 items-center">
            <p className="text-5xl">96</p>
            <p className="text-muted-foreground text-sm">Completed <br />Projects</p>
        </div>
         <div className="flex gap-2 items-center">
            <p className="text-5xl">8</p>
            <p className="text-muted-foreground text-sm">Year <br />of Experience</p>
        </div>
         <div className="flex gap-2 items-center">
            <p className="text-5xl">10+</p>
            <p className="text-muted-foreground text-sm">Awards <br />Winning</p>
        </div>
      </CardFooter>
    </Card>

    {/* Technical Skills */}
     <Card className="p-8 rounded-none ">
      <CardHeader>
        <CardTitle className="flex flex-col gap-4"> 
            <Badge variant={"outline"} className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500 hover:duration-500">
              <Dumbbell className=""/>
              <p className="uppercase text-xs">Technical Skills</p>
            </Badge>
            <p className="text-4xl">Technologies</p>
          </CardTitle>
        <CardAction>
          <Button variant="link"></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {technologies.map(({ title, status, icon: Icon }, index) => (
          <Card key={index} className="flex flex-row items-center justify-center p-4 shadow hover:shadow-lg transition rounded-xl">
            <div className="text-green-500 mb-2">
            <Icon className="w-6 h-6" />
            </div>
            <p className="font-semibold">{title}</p>
            <Badge variant={"outline"} className="text-sm text-muted-foreground">
              {status}%
            </Badge>
          </Card>
        ))}
      </div>
      </CardContent>

      <CardFooter className=" items-center justify-evenly flex gap-10 flex-wrap">
        
      </CardFooter>

      <CardHeader>
        <CardTitle className="flex flex-col gap-4"> 
            <Badge variant={"outline"} className="p-2 rounded-full w-40 flex flex-row gap-3 hover:text-green-500">
              <Dumbbell className=""/>
              <p className="uppercase text-xs">Tool Skills</p>
            </Badge>
            <p className="text-4xl">Tool Stack</p>
          </CardTitle>
        <CardAction>
          <Button variant="link"></Button>
        </CardAction>
      </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {toolStack.map(({ title, status, icon: Icon }, index) => (
          <Card key={index} className="flex flex-col items-center justify-center p-4 shadow hover:shadow-lg transition rounded-xl">
            <div className="border-5 size-20 p-5 rounded-full items-center justify-between">
              <div className="text-green-500 mb-2">
              <Icon className="w-6 h-6" />
              <p  className="text-sm text-muted-foreground">
                {status}%
              </p>
              </div>
            </div>
              <p className="font-semibold">{title}</p>
          </Card>
        ))}
      </div>
      </CardContent>
    </Card>
    

</section>
    
  )
}

export default Portifolio