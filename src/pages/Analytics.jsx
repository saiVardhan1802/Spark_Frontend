import NavBar from "../components/NavBar"
import styles from "../styles/Analytics.module.css";
import linksIcon from "../assets/links_gray.png";
import appearanceIcon from "../assets/appearance_gray.png";
import analyticsIcon from "../assets/analytics_green.png";
import settingsIcon from "../assets/setting_gray.png";
import { LineChart, Line, XAxis, YAxis, Tooltip, Area, ResponsiveContainer, BarChart, Bar, Rectangle, PieChart, Pie, Cell } from "recharts";

export default function Analytics() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      const pieData = [
        { name: "Youtube", value: 520, color: "#0D4F31" },
        { name: "Facebook", value: 220, color: "#3DDC97" },
        { name: "Instagram", value: 130, color: "#B0EACD" },
        { name: "Other", value: 110, color: "#004D25" },
      ];
      
    return (
        <div className={styles.analytics}>
            <NavBar
                appearanceClass={styles.linksBorder}
                imgLinks={linksIcon}
                imgAppearance={appearanceIcon}
                imgAnalytics={analyticsIcon}
                imgSettings={settingsIcon}
                settingsClass={styles.analyticsBorder}
                analyticsClass={styles.appearanceColor}
                sparkClass={styles.navBG}
                linksClass={styles.navBG}
            />
            <div className={styles.main}>
                <div className={styles.charts}>
                    <div className={styles.overview}>
                        <p>Overview</p>
                        <div className={styles.stats}>
                            <div className={styles.links}>
                                <p>Clicks on links</p>
                                <p>100</p>
                            </div>
                            <div className={styles.shop}>
                            <p>Clicks on shop</p>
                            </div>
                            <div className={styles.cta}>
                            <p>Clicks on cta</p>
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="40%">
                        <LineChart data={data}
                            // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", padding: "10px" }}>
                            
                            <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
                            
                            <Tooltip contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "5px", border: "none" }} />
                            
                            <Line type="monotone" dataKey="pv" stroke="#222" strokeWidth={2} dot={false} />
                            
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#222" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#222" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="pv" stroke="none" fill="url(#colorUv)" />
                        </LineChart>
                    </ResponsiveContainer>

                    <div style={{
                        width: '100%',
                        height: '40%',
                        display: 'flex',
                        gap: '10%'
                    }}>
                        <ResponsiveContainer width="45%" height="100%">
                            <BarChart
                            data={data}
                            margin={{
                                top: 50,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", padding: "10px" }}
                            >
                            <text x={20} y={20} fill="#222" style={{
                                fontSize: '1rem',
                                fontWeight: '500'
                            }}>Traffic by Device</text>
                            <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "5px", border: "none" }} />
                            <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#222" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#222" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="pv" stroke="none" fill="url(#colorUv)" />
                            </BarChart>
                        </ResponsiveContainer>

                        <div className={styles.chartContainer}>
                            <h2 className={styles.chartTitle}>Sites</h2>
                            <div className={styles.chartContent}>
                                {/* Donut Chart */}
                                <ResponsiveContainer width={200} height={200}>
                                <PieChart>
                                    <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={3}
                                    startAngle={90}
                                    endAngle={450}
                                    >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                    </Pie>
                                </PieChart>
                                </ResponsiveContainer>

                                {/* Legend */}
                                <div className={styles.chartLegend}>
                                {pieData.map((item) => (
                                    <div key={item.name} className={styles.legendItem}>
                                    <span
                                        className={styles.legendColor}
                                        style={{ backgroundColor: item.color }}
                                    ></span>
                                    <span className={styles.legendText}>{item.name}</span>
                                    <span className={styles.legendValue}>{item.value}</span>
                                    </div>
                                ))}
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}