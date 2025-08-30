"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from "recharts";

interface SubmissionDay {
  date: string;
  count: number;
}

interface ApiResponse {
  submissionsCalender: SubmissionDay[];
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Submissions: React.FC = () => {
  const [data, setData] = useState<{ month: string; submissions: number }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/submissions");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json: ApiResponse = await res.json();
        const calendar = json.submissionsCalender;
        // Aggregate submissions by month
        const monthly: { [key: string]: number } = {};
        calendar.forEach(({ date, count }) => {
          const d = new Date(date);
          if (!isNaN(d.getTime())) {
            const key = `${d.getFullYear()}-${d.getMonth()}`;
            monthly[key] = (monthly[key] || 0) + count;
          }
        });
        // Convert to array and sort by month
        const monthlyArr = Object.entries(monthly)
          .map(([key, submissions]) => {
            const [year, month] = key.split("-").map(Number);
            return {
              month: `${monthNames[month]} ${year}`,
              submissions,
              year,
              monthNum: month,
            };
          })
          .sort((a, b) =>
            a.year !== b.year ? a.year - b.year : a.monthNum - b.monthNum
          );
        setData(monthlyArr);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="bg-white rounded-lg shadow p-4 my-8 max-w-full overflow-x-auto">
      <Link
        href={"https://takeuforward.org/plus/profile/rahulkumarpahwa"}
        target="_blank"
        className="text-xl text-black font-bold mb-4 flex justify-center w-full"
      >
        TUF+ Monthly Submissions
      </Link>
      <ResponsiveContainer width="100%" minWidth={320} height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={"#ccc"} />
          <XAxis dataKey="month" stroke={"#000"} />
          <YAxis allowDecimals={false} stroke={"#000"} />
          <Tooltip
            contentStyle={{ background: "#222", color: "#fff" }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Area
            type="monotone"
            dataKey="submissions"
            stackId="1"
            stroke="#51abb2"
            fill="#51abb2"
            className="dark:!fill-black dark:!stroke-black"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Submissions;
