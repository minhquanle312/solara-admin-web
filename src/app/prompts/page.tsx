import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DataTable } from "@/components/data-table";

// Sample data for prompts
const promptsData = [
  {
    id: 1,
    header: "Code Review Assistant",
    type: "Development",
    status: "Active",
    target: "GPT-4",
    limit: "2000 tokens",
    reviewer: "AI Team",
  },
  {
    id: 2,
    header: "Content Generator",
    type: "Marketing",
    status: "Active",
    target: "GPT-3.5",
    limit: "1500 tokens",
    reviewer: "Marketing Team",
  },
  {
    id: 3,
    header: "Bug Report Analyzer",
    type: "QA",
    status: "Draft",
    target: "Claude",
    limit: "1000 tokens",
    reviewer: "QA Team",
  },
  {
    id: 4,
    header: "Documentation Writer",
    type: "Documentation",
    status: "Active",
    target: "GPT-4",
    limit: "3000 tokens",
    reviewer: "Tech Writers",
  },
  {
    id: 5,
    header: "User Story Generator",
    type: "Product",
    status: "Review",
    target: "GPT-3.5",
    limit: "800 tokens",
    reviewer: "Product Team",
  },
  {
    id: 6,
    header: "SQL Query Helper",
    type: "Database",
    status: "Active",
    target: "CodeLlama",
    limit: "1200 tokens",
    reviewer: "Data Team",
  },
];

export default function PromptsPage() {
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
                  AI Prompts Management
                </h1>
                <p className="text-muted-foreground mb-8">
                  Create, manage, and optimize AI prompts for various use cases
                  across your organization.
                </p>
              </div>
              <DataTable data={promptsData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
