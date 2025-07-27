import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const page = async () => {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
        Please Sign In
      </div>
    );
  }
  return (
    <div className="space-y-6 mx-auto container px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Link href={"/trips/new"}>
          <Button className="cursor-pointer">New Trip</Button>
        </Link>
      </div>

    <Card>
      <CardHeader>
        <CardTitle>Welcome back, {session.user?.name} !</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          
        </p>
      </CardContent>
    </Card>

    </div>
  );
};

export default page;
