import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FolderIcon,
  CodeBracketIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  StarIcon,
  PencilSquareIcon,
  TrashIcon,
  PlusIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    hackathonName: '',
    teamMembers: [],
    technologies: [],
    githubLink: '',
    demoLink: '',
    screenshots: [],
    status: 'in_progress'
  });

  useEffect(() => {
    // Load projects from localStorage
    const savedProjects = localStorage.getItem('userProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const handleCreateProject = () => {
    const newProject = {
      id: Date.now(),
      ...projectForm,
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('userProjects', JSON.stringify(updatedProjects));
    setProjectForm({
      title: '',
      description: '',
      hackathonName: '',
      teamMembers: [],
      technologies: [],
      githubLink: '',
      demoLink: '',
      screenshots: [],
      status: 'in_progress'
    });
    setIsEditMode(false);
  };

  const handleUpdateProject = (projectId) => {
    const updatedProjects = projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          ...projectForm,
          lastUpdated: new Date().toISOString()
        };
      }
      return project;
    });

    setProjects(updatedProjects);
    localStorage.setItem('userProjects', JSON.stringify(updatedProjects));
    setIsEditMode(false);
    setSelectedProject(null);
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(project => project.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem('userProjects', JSON.stringify(updatedProjects));
    setSelectedProject(null);
  };

  const handleTechnologyAdd = (technology) => {
    if (technology && !projectForm.technologies.includes(technology)) {
      setProjectForm(prev => ({
        ...prev,
        technologies: [...prev.technologies, technology]
      }));
    }
  };

  const handleTeamMemberAdd = (member) => {
    if (member && !projectForm.teamMembers.includes(member)) {
      setProjectForm(prev => ({
        ...prev,
        teamMembers: [...prev.teamMembers, member]
      }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
          <p className="mt-2 text-gray-600">Manage your hackathon projects and submissions.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsEditMode(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
        >
          <PlusIcon className="h-5 w-5" />
          New Project
        </motion.button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.hackathonName}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  project.status === 'completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {project.status.replace('_', ' ')}
                </span>
              </div>
              <p className="text-gray-600 line-clamp-2">{project.description}</p>
            </div>

            {/* Project Details */}
            <div className="p-6">
              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Team Members */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Team Members</h4>
                <div className="flex -space-x-2">
                  {project.teamMembers.map((member, index) => (
                    <img
                      key={index}
                      src={member.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}`}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      title={member.name}
                    />
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </a>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 flex justify-end gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedProject(project);
                    setProjectForm(project);
                    setIsEditMode(true);
                  }}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <PencilSquareIcon className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDeleteProject(project.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <TrashIcon className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && !isEditMode && (
        <div className="text-center py-12">
          <div className="mb-4">
            <FolderIcon className="h-12 w-12 text-gray-400 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No projects yet</h3>
          <p className="text-gray-500">Create your first project to get started</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditMode(true)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Create Project
          </motion.button>
        </div>
      )}

      {/* Project Form Modal */}
      {isEditMode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {selectedProject ? 'Edit Project' : 'New Project'}
              </h2>

              {/* Project Form */}
              <form onSubmit={(e) => {
                e.preventDefault();
                selectedProject ? handleUpdateProject(selectedProject.id) : handleCreateProject();
              }} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hackathon Name
                  </label>
                  <input
                    type="text"
                    value={projectForm.hackathonName}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, hackathonName: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={projectForm.description}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Add technology..."
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleTechnologyAdd(e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      onClick={() => {
                        const input = document.querySelector('input[placeholder="Add technology..."]');
                        handleTechnologyAdd(input.value);
                        input.value = '';
                      }}
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projectForm.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2"
                      >
                        {tech}
                        <button
                          type="button"
                          onClick={() => setProjectForm(prev => ({
                            ...prev,
                            technologies: prev.technologies.filter((_, i) => i !== index)
                          }))}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub Link
                    </label>
                    <input
                      type="url"
                      value={projectForm.githubLink}
                      onChange={(e) => setProjectForm(prev => ({ ...prev, githubLink: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Demo Link
                    </label>
                    <input
                      type="url"
                      value={projectForm.demoLink}
                      onChange={(e) => setProjectForm(prev => ({ ...prev, demoLink: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Status
                  </label>
                  <select
                    value={projectForm.status}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="abandoned">Abandoned</option>
                  </select>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditMode(false);
                      setSelectedProject(null);
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    {selectedProject ? 'Update Project' : 'Create Project'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 