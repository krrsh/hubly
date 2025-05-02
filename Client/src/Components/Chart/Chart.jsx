import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Week 1', chats: 24 },
    { name: 'Week 2', chats: 20 },
    { name: 'Week 3', chats: 5 },
    { name: 'Week 4', chats: 10 },
    { name: 'Week 5', chats: 15 },
    { name: 'Week 6', chats: 18 },
    { name: 'Week 7', chats: 12 },
    { name: 'Week 8', chats: 21 },
    { name: 'Week 9', chats: 8 },
    { name: 'Week 10', chats: 25 },
  ];

// ✅ Custom Tooltip
const CustomTooltip = ({ active, payload, coordinate }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: '#000000',
            padding: '8px 10px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            fontSize: '13px',
            position: 'absolute',
            transform: `translate(${coordinate.x - 28}px, ${coordinate.y - 60}px)`, // Position above the dot
            pointerEvents: 'none', // Let mouse interactions pass through
          }}
        >
          <div
            style={{
              margin: 0,
              color: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <p style={{ margin: 0 }}>Chats</p>
            <strong>{payload[0].value}</strong>
          </div>
          <div
            style={{
              height: '0',
              width: '0',
              borderTop: '10px solid #000000',
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      );
    }
    return null;
  };
  

const CustomCursor = ({ points }) => {
    const { x, y } = points[0];
    return (
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={265} // Ends near chart bottom (adjust if needed)
        stroke="#ccc"
        strokeDasharray="4"
        strokeWidth={1}
      />
    );
  };



const Chart = () => {
  return (
    
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 35, left: 30, bottom: 5 }}
      >
        {/* ✅ Only horizontal solid lines */}
        <CartesianGrid vertical={false} stroke="#e0e0e0" />

        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          style={{ fontSize: '12px' }}
        />

        <YAxis
          ticks={[0, 5, 10, 15, 20, 25]}
          domain={[0, 25]}
          tickLine={false}
          axisLine={false} // ✅ Removes Y-axis line
          tickMargin={10}
          style={{ fontSize: '12px' }}
        />

        <Tooltip
          content={<CustomTooltip />}
          cursor={<CustomCursor/>}
        />

        <Line
          type="monotone"
          dataKey="chats"
          stroke="#00D907"
          strokeWidth={3}
          dot={{ r: 5, fill: '#fff', stroke: '#000', strokeWidth: 2.5 }}
          activeDot={{ r: 5, fill: '#fff', stroke: '#000', strokeWidth: 2.5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
