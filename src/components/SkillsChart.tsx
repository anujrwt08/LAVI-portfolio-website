import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const skillsData = [
  { name: "Python", proficiency: 95 },
  { name: "C/C++", proficiency: 90 },
  { name: "Machine Learning", proficiency: 85 },
  { name: "Data Visualization", proficiency: 85 },
  { name: "Statistics", proficiency: 80 },
  { name: "SQL", proficiency: 60 },
  { name: "TensorFlow", proficiency: 45 },
  { name: "Deep Learning", proficiency: 40 },
  
];

const COLORS = {
  high: "hsl(217, 91%, 60%)",    // primary
  medium: "hsl(189, 94%, 43%)",  // accent
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-semibold">{payload[0].payload.name}</p>
        <p className="text-sm text-muted-foreground">
          Proficiency: <span className="text-primary font-medium">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const SkillsChart = () => {
  return (
    <Card className="bg-card border-border animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl">Skills Proficiency</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={skillsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 25%)" opacity={0.3} />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ fill: "hsl(215, 20%, 65%)", fontSize: 12 }}
            />
            <YAxis
              tick={{ fill: "hsl(215, 20%, 65%)", fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(220, 15%, 25%)", opacity: 0.1 }} />
            <Bar
              dataKey="proficiency"
              radius={[8, 8, 0, 0]}
              maxBarSize={60}
            >
              {skillsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.proficiency >= 75 ? COLORS.high : COLORS.medium}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.high }} />
            <span className="text-sm text-muted-foreground">Advanced (75%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS.medium }} />
            <span className="text-sm text-muted-foreground">Intermediate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsChart;
