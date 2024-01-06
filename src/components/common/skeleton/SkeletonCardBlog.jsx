import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCardBlog = () => {
  return (
    <Card className="dark min-h-40 w-full">
      <CardHeader className="space-y-1">
        <Skeleton className="w-[40%] h-[20px]" />
        <Skeleton className="w-[100%] h-[20px]" />
        <Skeleton className="w-[80%] h-[20px]" />
      </CardHeader>
      <CardContent className="flex items-center gap-1">
        <Skeleton className="w-[40px] h-[20px]" />
        <Skeleton className="w-[40px] h-[20px]" />
      </CardContent>
    </Card>
  );
};

export default SkeletonCardBlog;
