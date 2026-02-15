import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
      {projects.map((proj) => (
        <div key={proj.id} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-medium text-slate-800 dark:text-slate-200">
            {proj.title}
          </div>
          {proj.code && (
            <div className="font-mono text-xs text-slate-500 bg-white dark:bg-black px-3 py-1 rounded border border-slate-200 dark:border-slate-800">
              {proj.code}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;