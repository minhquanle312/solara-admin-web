import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DataTable } from "@/components/data-table";

// Sample data for documents
const documentsData = [
  {
    id: 1,
    header: "Project Requirements.pdf",
    type: "Requirements",
    status: "Final",
    target: "v2.1",
    limit: "25 pages",
    reviewer: "Product Manager",
  },
  {
    id: 2,
    header: "Technical Specification.docx",
    type: "Technical Spec",
    status: "Draft",
    target: "v1.3",
    limit: "45 pages",
    reviewer: "Tech Lead",
  },
  {
    id: 3,
    header: "User Manual.pdf",
    type: "Documentation",
    status: "Review",
    target: "v3.0",
    limit: "120 pages",
    reviewer: "Technical Writer",
  },
  {
    id: 4,
    header: "API Documentation.md",
    type: "API Docs",
    status: "Live",
    target: "v1.2",
    limit: "80 endpoints",
    reviewer: "Developer",
  },
  {
    id: 5,
    header: "Design Guidelines.figma",
    type: "Design Spec",
    status: "Active",
    target: "v2.0",
    limit: "50 components",
    reviewer: "Design Lead",
  },
  {
    id: 6,
    header: "Testing Plan.xlsx",
    type: "Test Plan",
    status: "In Progress",
    target: "v1.1",
    limit: "200 test cases",
    reviewer: "QA Manager",
  },
];

export default function DocumentsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <h1 className="text-3xl font-bold mb-6">Document Management</h1>
                <p className="text-muted-foreground mb-8">
                  Organize and manage your project documents, specifications,
                  and resources.
                </p>
              </div>
              <DataTable data={documentsData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
