import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HelpPage() {
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
                <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
                <p className="text-muted-foreground mb-8">
                  Find answers to common questions and get help with using the
                  platform.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Getting Started</CardTitle>
                      <CardDescription>
                        Learn the basics of using Solara Admin.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Setting up your workspace</li>
                        <li>• Navigating the dashboard</li>
                        <li>• Managing users and permissions</li>
                        <li>• Creating your first project</li>
                      </ul>
                      <Button className="mt-4">View Tutorial</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Documentation</CardTitle>
                      <CardDescription>
                        Comprehensive guides and API references.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• User Guide</li>
                        <li>• Administrator Manual</li>
                        <li>• API Documentation</li>
                        <li>• Integration Guides</li>
                      </ul>
                      <Button className="mt-4">Browse Docs</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Video Tutorials</CardTitle>
                      <CardDescription>
                        Step-by-step video guides for common tasks.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Dashboard Overview (5 min)</li>
                        <li>• User Management (10 min)</li>
                        <li>• Analytics Deep Dive (15 min)</li>
                        <li>• Advanced Features (20 min)</li>
                      </ul>
                      <Button className="mt-4">Watch Videos</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Support</CardTitle>
                      <CardDescription>
                        Need personal assistance? Get in touch with our team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Email: support@solara.com</li>
                        <li>• Phone: +1 (555) 123-4567</li>
                        <li>• Live Chat: Available 24/7</li>
                        <li>• Response Time: &lt; 2 hours</li>
                      </ul>
                      <Button className="mt-4">Start Chat</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
