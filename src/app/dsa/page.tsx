'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Video } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DsaStep {
  step: string | number;
  name: string;
  substeps?: Array<{
    substep: string | number;
    name: string;
    problems?: Array<{
      topic?: string;
      gfg?: string;
      video?: string;
      leetcode?: string;
      [key: string]: unknown;
    }>;
  }>;
}

const DsaPage = () => {
  const [data, setData] = useState<DsaStep[]>([]);
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dsa');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching DSA data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleStep = (index: number) => {
    const newSet = new Set(expandedSteps);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedSteps(newSet);
  };

  if (data.length === 0) {
    return (
      <div className="bg-background text-foreground flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-muted-foreground text-lg">
            Loading DSA resources...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground min-h-screen py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Data Structures & Algorithms
          </h1>
          <div className="bg-accent h-1 w-12 rounded-full" />
          <p className="text-muted-foreground text-lg">
            A comprehensive guide to learning DSA with curated resources and
            problem sets.
          </p>
        </motion.div>

        <div className="space-y-6">
          {data.map((step, stepIndex) => (
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stepIndex * 0.05 }}
            >
              <button
                onClick={() => toggleStep(stepIndex)}
                className="mb-0 w-full"
              >
                <div className="group border-border bg-card hover:border-accent/50 hover:bg-muted/50 flex items-center justify-between rounded-lg border p-4 transition-all duration-200">
                  <div className="flex flex-1 items-center gap-3 text-left">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground group-hover:text-accent text-base font-semibold transition-colors">
                        {step.step}: {step.name}
                      </h3>
                      {step.substeps && (
                        <p className="text-muted-foreground text-sm">
                          {step.substeps.length} substeps
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-muted-foreground group-hover:text-accent transition-colors">
                    {expandedSteps.has(stepIndex) ? '−' : '+'}
                  </div>
                </div>
              </button>

              {expandedSteps.has(stepIndex) && step.substeps && (
                <motion.div
                  className="border-accent/30 mt-2 ml-4 space-y-2 border-l-2 pl-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.substeps.map((substep, substepIndex: number) => (
                    <div
                      key={substepIndex}
                      className="border-border/50 bg-muted/30 hover:bg-muted/50 rounded-lg border p-3 transition-colors"
                    >
                      <p className="mb-3 text-sm font-medium">
                        {substep.substep}: {substep.name}
                      </p>

                      {substep.problems && substep.problems.length > 0 && (
                        <div className="space-y-2">
                          {substep.problems.map(
                            (problem, problemIndex: number) => (
                              <div
                                key={problemIndex}
                                className="flex flex-wrap items-center gap-2 text-xs"
                              >
                                {problem.topic && (
                                  <span className="bg-accent/10 text-accent rounded px-2 py-1 font-medium">
                                    {problem.topic}
                                  </span>
                                )}
                                {problem.gfg && (
                                  <a
                                    href={problem.gfg}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary/10 text-primary hover:bg-primary/20 inline-flex items-center gap-1 rounded px-2 py-1 transition-colors"
                                  >
                                    <BookOpen className="h-3 w-3" />
                                    GFG
                                  </a>
                                )}
                                {problem.video && (
                                  <a
                                    href={problem.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-secondary/10 text-secondary hover:bg-secondary/20 inline-flex items-center gap-1 rounded px-2 py-1 transition-colors"
                                  >
                                    <Video className="h-3 w-3" />
                                    Video
                                  </a>
                                )}
                                {problem.leetcode && (
                                  <a
                                    href={problem.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent/10 text-accent hover:bg-accent/20 inline-flex items-center gap-1 rounded px-2 py-1 transition-colors"
                                  >
                                    <ExternalLink className="h-3 w-3" />
                                    LeetCode
                                  </a>
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DsaPage;
