import React, { useState } from 'react';
import { Search, Users, Database, Shield, BarChart3, Clock, CheckCircle, AlertTriangle, Download, Eye, Lock, Unlock, FileText, Zap, Globe, Building } from 'lucide-react';

const GenomeVaultPlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDataset, setSelectedDataset] = useState(null);

  const datasets = [
    {
      id: 1,
      name: "Cardiovascular Outcomes Biobank",
      organization: "Seattle Children's Hospital",
      samples: 45000,
      dataTypes: ["WGS", "RNA-seq", "Clinical"],
      fileFormats: ["VCF", "BAM", "FASTQ"],
      compliance: "IRB-2024-001",
      status: "available",
      description: "Large-scale genomic study of pediatric cardiovascular outcomes with longitudinal clinical data."
    },
    {
      id: 2,
      name: "Cancer Immunotherapy Response",
      organization: "Fred Hutch Cancer Center",
      samples: 12500,
      dataTypes: ["WES", "Proteomics", "Outcomes"],
      fileFormats: ["VCF", "BAM", "TSV"],
      compliance: "HIPAA-Compliant",
      status: "pending_approval",
      description: "Multi-institutional study tracking genomic biomarkers of immunotherapy response."
    },
    {
      id: 3,
      name: "Population Pharmacogenomics",
      organization: "Kaiser Permanente",
      samples: 78000,
      dataTypes: ["SNP Array", "PGx", "EHR"],
      fileFormats: ["PLINK", "VCF", "CSV"],
      compliance: "IRB-2023-089",
      status: "available",
      description: "Large-scale pharmacogenomic analysis across diverse populations."
    }
  ];

  const partners = [
    { name: "Seattle Children's", type: "Health System", datasets: 3, researchers: 45, status: "Active" },
    { name: "Fred Hutch", type: "Research Institute", datasets: 8, researchers: 120, status: "Active" },
    { name: "Kaiser Permanente", type: "Health System", datasets: 12, researchers: 89, status: "Active" },
    { name: "Genmab Therapeutics", type: "Pharma", datasets: 2, researchers: 15, status: "Onboarding" }
  ];

  const onboardingSteps = [
    { step: 1, title: "Data Sharing Agreement", status: "complete", description: "Legal framework established" },
    { step: 2, title: "Technical Integration", status: "complete", description: "API keys and access configured" },
    { step: 3, title: "Privacy Assessment", status: "in_progress", description: "HIPAA compliance review" },
    { step: 4, title: "Researcher Training", status: "pending", description: "Platform orientation sessions" },
    { step: 5, title: "Production Access", status: "pending", description: "Full platform activation" }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Researchers</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-xs text-green-600 mt-1">↑ 12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Datasets</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <Database className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-green-600 mt-1">+3 new this week</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Data Requests</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
            <FileText className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-xs text-orange-600 mt-1">23 pending approval</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Compliance Issues</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <Shield className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-xs text-red-600 mt-1">Requires immediate attention</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Platform Activity</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-700">Genmab Therapeutics completed data integration testing</span>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3">
            <Database className="h-5 w-5 text-blue-500" />
            <span className="text-sm text-gray-700">New dataset published: "Alzheimer's Progression Biomarkers"</span>
            <span className="text-xs text-gray-500">4 hours ago</span>
          </div>
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span className="text-sm text-gray-700">Data access review required for Kaiser Permanente Project #KP-2024-15</span>
            <span className="text-xs text-gray-500">6 hours ago</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-purple-500" />
            <span className="text-sm text-gray-700">15 new researcher accounts activated this week</span>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataCatalog = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Genomic Data Catalog</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search datasets, organizations..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{dataset.name}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      dataset.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {dataset.status === 'available' ? 'Available' : 'Pending Approval'}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{dataset.organization}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Database className="h-4 w-4" />
                      <span>{dataset.samples.toLocaleString()} samples</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4" />
                      <span>{dataset.compliance}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-3">{dataset.description}</p>
                  
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-medium text-gray-600">Data Types:</span>
                    {dataset.dataTypes.map((type) => (
                      <span key={type} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium">{type}</span>
                    ))}
                    <span className="text-xs font-medium text-gray-600 ml-4">File Formats:</span>
                    {dataset.fileFormats.map((format) => (
                      <span key={format} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded font-medium border border-purple-200">{format}</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 ml-4">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>Request Access</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPartnerPortal = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Partner Organizations</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datasets</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Researchers</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {partners.map((partner, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-sm font-medium text-gray-900">{partner.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{partner.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.datasets}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.researchers}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        partner.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {partner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Onboarding Progress */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">New Partner Onboarding: Genmab Therapeutics</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {onboardingSteps.map((step) => (
              <div key={step.step} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.status === 'complete' ? 'bg-green-100 text-green-800' :
                  step.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-500'
                }`}>
                  {step.status === 'complete' ? <CheckCircle className="h-5 w-5" /> : step.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                <div>
                  {step.status === 'in_progress' && (
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">In Progress</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompliance = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Data Governance & Compliance</h3>
        </div>
        <div className="p-6 space-y-6">
          {/* Compliance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">HIPAA Compliant</span>
              </div>
              <p className="text-xs text-green-700 mt-1">All datasets properly de-identified</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">IRB Approved</span>
              </div>
              <p className="text-xs text-blue-700 mt-1">142 active IRB protocols</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Pending Reviews</span>
              </div>
              <p className="text-xs text-orange-700 mt-1">3 data requests awaiting approval</p>
            </div>
          </div>

          {/* Access Requests */}
          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">Recent Data Access Requests</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Cardiovascular Outcomes - Genmab Research</p>
                  <p className="text-xs text-gray-500">Requested by: Dr. Sarah Chen • IRB: Pending</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">Approve</button>
                  <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">Deny</button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Population PGx Analysis - Kaiser Permanente</p>
                  <p className="text-xs text-gray-500">Requested by: Dr. Michael Rodriguez • IRB: IRB-2024-089</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700">Approve</button>
                  <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">Deny</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">GenomeVault</h1>
              </div>
              <span className="text-sm text-gray-500">Research Platform</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Dr. Sarah Chen</span>
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">SC</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'catalog', label: 'Data Catalog', icon: Database },
              { id: 'partners', label: 'Partner Portal', icon: Building },
              { id: 'compliance', label: 'Compliance', icon: Shield }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 border-b-2 text-sm font-medium ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'catalog' && renderDataCatalog()}
        {activeTab === 'partners' && renderPartnerPortal()}
        {activeTab === 'compliance' && renderCompliance()}
      </main>
    </div>
  );
};

export default GenomeVaultPlatform;