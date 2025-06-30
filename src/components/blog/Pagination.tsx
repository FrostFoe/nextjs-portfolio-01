import {
  Pagination as ShadPagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pagination = () => {
  return (
    <ShadPagination className="mt-12">
      <PaginationContent className="gap-2">
        <PaginationItem>
          <Button asChild variant="outline">
            <Link href="#">Prev</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button asChild variant="default">
            <Link href="#">1</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button asChild variant="outline">
            <Link href="#">2</Link>
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button asChild variant="outline">
            <Link href="#">Next</Link>
          </Button>
        </PaginationItem>
      </PaginationContent>
    </ShadPagination>
  );
};

export default Pagination;
