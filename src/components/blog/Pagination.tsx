import {
  Pagination as ShadPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pagination = () => {
  return (
    <ShadPagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="text-muted-foreground" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="text-muted-foreground">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="text-muted-foreground" />
        </PaginationItem>
      </PaginationContent>
    </ShadPagination>
  );
};

export default Pagination;
