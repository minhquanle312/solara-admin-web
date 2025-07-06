import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DataTable } from "@/components/data-table";

// Sample data for lifecycle management
const lifecycleData = [
  {
    id: 1,
    header: "Project Alpha",
    type: "Development",
    status: "In Progress",
    target: "85%",
    limit: "90%",
    reviewer: "John Smith",
  },
  {
    id: 2,
    header: "Project Beta",
    type: "Testing",
    status: "Completed",
    target: "100%",
    limit: "95%",
    reviewer: "Jane Doe",
  },
  {
    id: 3,
    header: "Project Gamma",
    type: "Deployment",
    status: "Pending",
    target: "60%",
    limit: "80%",
    reviewer: "Mike Johnson",
  },
  {
    id: 4,
    header: "Project Delta",
    type: "Maintenance",
    status: "In Progress",
    target: "70%",
    limit: "75%",
    reviewer: "Sarah Wilson",
  },
  {
    id: 5,
    header: "Project Epsilon",
    type: "Planning",
    status: "Not Started",
    target: "0%",
    limit: "100%",
    reviewer: "Tom Brown",
  },
];

export default function LifecyclePage() {
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
                <h1 className="text-3xl font-bold mb-6">
                  Lifecycle Management
                </h1>
                <p className="text-muted-foreground mb-8">
                  Manage and track the lifecycle of your projects from planning
                  to deployment.
                </p>
              </div>
              <DataTable data={lifecycleData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
