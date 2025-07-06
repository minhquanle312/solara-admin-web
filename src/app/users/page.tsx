import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DataTable } from "@/components/data-table";

// Sample data for users management
const usersData = [
  {
    id: 1,
    header: "Alice Johnson",
    type: "Administrator",
    status: "Active",
    target: "Full Access",
    limit: "All Modules",
    reviewer: "System Admin",
  },
  {
    id: 2,
    header: "Bob Smith",
    type: "Developer",
    status: "Active",
    target: "Dev Access",
    limit: "Dev Tools",
    reviewer: "Tech Lead",
  },
  {
    id: 3,
    header: "Carol Wilson",
    type: "Designer",
    status: "Inactive",
    target: "Design Access",
    limit: "Design Tools",
    reviewer: "Design Lead",
  },
  {
    id: 4,
    header: "David Brown",
    type: "Project Manager",
    status: "Active",
    target: "PM Access",
    limit: "Project Tools",
    reviewer: "Director",
  },
  {
    id: 5,
    header: "Emma Davis",
    type: "QA Tester",
    status: "Active",
    target: "QA Access",
    limit: "Testing Tools",
    reviewer: "QA Lead",
  },
  {
    id: 6,
    header: "Frank Miller",
    type: "DevOps",
    status: "Active",
    target: "Ops Access",
    limit: "Infrastructure",
    reviewer: "DevOps Lead",
  },
  {
    id: 7,
    header: "Grace Lee",
    type: "Analyst",
    status: "Pending",
    target: "Analytics Access",
    limit: "Reports Only",
    reviewer: "Data Lead",
  },
];

export default function UsersPage() {
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
                <h1 className="text-3xl font-bold mb-6">User Management</h1>
                <p className="text-muted-foreground mb-8">
                  Manage user accounts, roles, and permissions across your
                  organization.
                </p>
              </div>
              <DataTable data={usersData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
