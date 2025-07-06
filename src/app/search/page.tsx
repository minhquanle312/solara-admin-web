import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SearchPage() {
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
                <h1 className="text-3xl font-bold mb-6">Search</h1>
                <p className="text-muted-foreground mb-8">
                  Search across all your documents, projects, and data.
                </p>

                <div className="flex gap-2 mb-8">
                  <Input
                    placeholder="Search for documents, users, projects..."
                    className="flex-1"
                  />
                  <Button>Search</Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Recent Searches
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">project dashboard</Badge>
                      <Badge variant="secondary">user analytics</Badge>
                      <Badge variant="secondary">document templates</Badge>
                      <Badge variant="secondary">team reports</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Search Results
                    </h3>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">
                            Project Alpha Dashboard
                          </CardTitle>
                          <CardDescription>
                            Analytics dashboard for Project Alpha showing key
                            metrics and performance indicators...
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex gap-2">
                            <Badge variant="outline">Dashboard</Badge>
                            <Badge variant="outline">Analytics</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">
                            User Management Guide
                          </CardTitle>
                          <CardDescription>
                            Complete guide on how to manage users, assign roles,
                            and configure permissions...
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex gap-2">
                            <Badge variant="outline">Documentation</Badge>
                            <Badge variant="outline">Users</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">
                            Q3 Financial Report
                          </CardTitle>
                          <CardDescription>
                            Quarterly financial analysis and performance metrics
                            for the third quarter...
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex gap-2">
                            <Badge variant="outline">Report</Badge>
                            <Badge variant="outline">Finance</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
