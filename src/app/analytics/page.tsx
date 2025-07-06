import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DataTable } from "@/components/data-table";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

// Sample data for analytics
const analyticsData = [
  {
    id: 1,
    header: "Website Traffic",
    type: "Web Analytics",
    status: "Live",
    target: "50K visitors",
    limit: "100K visitors",
    reviewer: "Marketing Team",
  },
  {
    id: 2,
    header: "User Engagement",
    type: "User Analytics",
    status: "Live",
    target: "75% engagement",
    limit: "90% engagement",
    reviewer: "Product Team",
  },
  {
    id: 3,
    header: "Revenue Tracking",
    type: "Financial Analytics",
    status: "Live",
    target: "$250K",
    limit: "$500K",
    reviewer: "Finance Team",
  },
  {
    id: 4,
    header: "Performance Metrics",
    type: "System Analytics",
    status: "Monitoring",
    target: "99.5% uptime",
    limit: "99.9% uptime",
    reviewer: "DevOps Team",
  },
  {
    id: 5,
    header: "Customer Satisfaction",
    type: "Feedback Analytics",
    status: "Active",
    target: "4.5/5 rating",
    limit: "5.0/5 rating",
    reviewer: "Support Team",
  },
];

export default function AnalyticsPage() {
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
                <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
                <p className="text-muted-foreground mb-8">
                  Track and analyze key performance indicators across your
                  platform.
                </p>
                <div className="mb-8">
                  <ChartAreaInteractive />
                </div>
              </div>
              <DataTable data={analyticsData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
