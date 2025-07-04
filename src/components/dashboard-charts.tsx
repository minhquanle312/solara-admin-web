"use client";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";

// Sample data for different chart types
const areaChartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 273, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
  { month: "Jul", desktop: 320, mobile: 180 },
  { month: "Aug", desktop: 290, mobile: 220 },
  { month: "Sep", desktop: 340, mobile: 250 },
  { month: "Oct", desktop: 380, mobile: 280 },
  { month: "Nov", desktop: 420, mobile: 300 },
  { month: "Dec", desktop: 450, mobile: 320 },
];

const barChartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
  { name: "Jul", value: 900 },
  { name: "Aug", value: 650 },
  { name: "Sep", value: 750 },
  { name: "Oct", value: 850 },
  { name: "Nov", value: 950 },
  { name: "Dec", value: 1100 },
];

const progressData = [
  { label: "DEVELOPMENT", value: 85, color: "hsl(var(--chart-1))" },
  { label: "DESIGN SYSTEMS", value: 72, color: "hsl(var(--chart-2))" },
  { label: "TESTING CYCLES", value: 94, color: "hsl(var(--chart-3))" },
];

const horizontalBarData = [
  { name: "LATINE", value: 16877, color: "hsl(var(--chart-1))" },
  { name: "VOCHIUS", value: 23472, color: "hsl(var(--chart-2))" },
  { name: "CHORO", value: 18758, color: "hsl(var(--chart-3))" },
  { name: "ADOLE", value: 51832, color: "hsl(var(--chart-4))" },
  { name: "SCENE", value: 27348, color: "hsl(var(--chart-5))" },
];

const radialData = [
  { name: "Desktop", value: 29472, fill: "hsl(var(--chart-1))" },
  { name: "Mobile", value: 38552, fill: "hsl(var(--chart-2))" },
  { name: "Tablet", value: 31346, fill: "hsl(var(--chart-3))" },
  { name: "Other", value: 30255, fill: "hsl(var(--chart-4))" },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

// Add more comprehensive data for sessions
const sessionsData = [
  { time: "00:00", sessions: 120, users: 95, pageViews: 340 },
  { time: "04:00", sessions: 80, users: 65, pageViews: 220 },
  { time: "08:00", sessions: 280, users: 220, pageViews: 680 },
  { time: "12:00", sessions: 450, users: 380, pageViews: 1200 },
  { time: "16:00", sessions: 380, users: 320, pageViews: 980 },
  { time: "20:00", sessions: 320, users: 280, pageViews: 850 },
];

// Add KPI data
const kpiData = [
  {
    category: "LATINE",
    value: 3569,
    progress: 85,
    trend: "up",
    change: 12.5,
    color: "hsl(var(--chart-1))",
  },
  {
    category: "VOCHIUS",
    value: 6014,
    progress: 92,
    trend: "up",
    change: 8.3,
    color: "hsl(var(--chart-2))",
  },
  {
    category: "CHORO",
    value: 3635,
    progress: 78,
    trend: "down",
    change: -3.2,
    color: "hsl(var(--chart-3))",
  },
  {
    category: "ADOLE",
    value: 1450,
    progress: 65,
    trend: "up",
    change: 15.7,
    color: "hsl(var(--chart-4))",
  },
];

// Circular Progress Component
function CircularProgress({
  value,
  size = 80,
  strokeWidth = 8,
  color = "hsl(var(--primary))",
}: {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-muted-foreground/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
      <span className="absolute text-lg font-bold">{value}</span>
    </div>
  );
}

// Metric Card Component
function MetricCard({
  title,
  value,
  change,
  trend,
  description,
}: {
  title: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down";
  description?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {change && (
          <Badge
            variant={trend === "up" ? "default" : "destructive"}
            className="text-xs"
          >
            {trend === "up" ? (
              <ArrowUpIcon className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDownIcon className="w-3 h-3 mr-1" />
            )}
            {Math.abs(change)}%
          </Badge>
        )}
      </div>
      <div className="text-2xl font-bold">{value}</div>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function DashboardCharts() {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Progress Bars Card */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Project Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {progressData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">{item.value}%</span>
              </div>
              <Progress value={item.value} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Area Chart with Circular Progress */}
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <CircularProgress
                  value={94}
                  size={70}
                  color="hsl(var(--chart-1))"
                />
                <div className="text-xs mt-2">
                  <div className="font-medium">Desktop</div>
                  <div className="text-muted-foreground">94% uptime</div>
                </div>
              </div>
              <div className="text-center">
                <CircularProgress
                  value={85}
                  size={70}
                  color="hsl(var(--chart-2))"
                />
                <div className="text-xs mt-2">
                  <div className="font-medium">Mobile</div>
                  <div className="text-muted-foreground">85% uptime</div>
                </div>
              </div>
              <div className="text-center">
                <CircularProgress
                  value={43}
                  size={70}
                  color="hsl(var(--chart-3))"
                />
                <div className="text-xs mt-2">
                  <div className="font-medium">Tablet</div>
                  <div className="text-muted-foreground">43% uptime</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-emerald-500">STABLE</Badge>
              <Badge className="bg-blue-500">ACTIVE</Badge>
              <Badge className="bg-purple-500">SECURE</Badge>
            </div>
          </div>
          <ChartContainer config={chartConfig} className="h-[280px] w-full">
            <AreaChart
              data={areaChartData}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="mobile"
                stackId="1"
                stroke="var(--color-mobile)"
                fill="url(#fillMobile)"
              />
              <Area
                type="monotone"
                dataKey="desktop"
                stackId="1"
                stroke="var(--color-desktop)"
                fill="url(#fillDesktop)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Bar Chart Metrics */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Monthly Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <MetricCard
              title="ACTIVE USERS"
              value="7,374"
              change={12.5}
              trend="up"
              description="vs previous month"
            />
            <MetricCard
              title="CONVERSIONS"
              value="3,578"
              change={8.2}
              trend="down"
              description="conversion rate"
            />
          </div>
          <ChartContainer config={chartConfig} className="h-[100px] mt-4">
            <BarChart data={barChartData.slice(0, 6)}>
              <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={2} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Large Bar Chart */}
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl font-bold">9,567</CardTitle>
          <CardDescription>USERS ON RECURRING SCHEDULE</CardDescription>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>↑ 12.5% vs last month</span>
            <span>•</span>
            <span>Target: 10,000</span>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart
              data={barChartData}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="value"
                fill="hsl(var(--chart-1))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <Card className="col-span-1">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-500">23</div>
              <div className="text-xs text-muted-foreground">
                ACTIVE PROJECTS
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-500">56</div>
              <div className="text-xs text-muted-foreground">
                COMPLETED TASKS
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-500">84</div>
              <div className="text-xs text-muted-foreground">TEAM MEMBERS</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Horizontal Bar Chart */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Category Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {horizontalBarData.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted-foreground">
                  {item.value.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (item.value /
                        Math.max(...horizontalBarData.map((d) => d.value))) *
                      100
                    }%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Large Area Chart */}
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Traffic Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px]">
            <AreaChart data={areaChartData}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="desktop"
                stroke="hsl(var(--chart-1))"
                fill="url(#gradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Radial Chart */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Device Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px]">
            <RadialBarChart
              data={radialData}
              innerRadius="20%"
              outerRadius="80%"
            >
              <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </RadialBarChart>
          </ChartContainer>
          <div className="mt-4 space-y-2">
            {radialData.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span>{item.name}</span>
                </div>
                <span className="font-medium">
                  {item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Performance Indicators */}
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader className="pb-4">
          <CardTitle className="text-sm font-medium">
            Key Performance Indicators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">123</div>
                  <Badge className="mt-2 bg-teal-500">ACTIVE</Badge>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">967</div>
                  <Badge className="mt-2 bg-blue-500">PENDING</Badge>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3.1K</div>
                  <Badge className="mt-2 bg-green-500">COMPLETE</Badge>
                </div>
              </div>

              {/* KPI Details */}
              <div className="space-y-3">
                {kpiData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium text-sm">
                          {item.category}
                        </span>
                      </div>
                      <CircularProgress
                        value={item.progress}
                        size={40}
                        color={item.color}
                      />
                    </div>
                    <div className="text-right">
                      <div className="font-bold">
                        {item.value.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        {item.trend === "up" ? (
                          <ArrowUpIcon className="w-3 h-3 text-green-500" />
                        ) : (
                          <ArrowDownIcon className="w-3 h-3 text-red-500" />
                        )}
                        <span
                          className={
                            item.trend === "up"
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {Math.abs(item.change)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Dot Matrix Visualization */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">
                  PERFORMANCE DISTRIBUTION ACROSS REGIONS
                </h4>
                <div className="grid grid-cols-20 gap-1">
                  {Array.from({ length: 200 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < 80
                          ? "bg-teal-500"
                          : i < 140
                          ? "bg-blue-500"
                          : i < 180
                          ? "bg-green-500"
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>High Performance</span>
                  <span>Medium Performance</span>
                  <span>Low Performance</span>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span className="text-sm">Conversion Rate</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span className="text-sm">User Retention</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 rounded bg-muted/20">
                  <span className="text-sm">System Health</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-teal-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Sessions Chart */}
      <Card className="col-span-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold">978</CardTitle>
          <CardDescription>TOTAL SESSIONS TODAY</CardDescription>
          <div className="flex items-center gap-2 text-sm">
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500 font-medium">+15.3%</span>
            <span className="text-muted-foreground">vs yesterday</span>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <LineChart
              data={sessionsData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background border rounded-lg p-3 shadow-lg">
                        <p className="font-medium">{`Time: ${label}`}</p>
                        <p className="text-blue-500">{`Sessions: ${payload[0]?.value}`}</p>
                        <p className="text-green-500">{`Users: ${payload[1]?.value}`}</p>
                        <p className="text-purple-500">{`Page Views: ${payload[2]?.value}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="sessions"
                stroke="hsl(var(--chart-1))"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="pageViews"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
            <div className="text-center">
              <div className="w-3 h-3 bg-chart-1 rounded-full mx-auto mb-1"></div>
              <div className="font-medium">Sessions</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-chart-2 rounded-full mx-auto mb-1"></div>
              <div className="font-medium">Users</div>
            </div>
            <div className="text-center">
              <div className="w-3 h-3 bg-chart-3 rounded-full mx-auto mb-1"></div>
              <div className="font-medium">Page Views</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
