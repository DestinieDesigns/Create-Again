import React, { useState, useMemo } from 'react';
import {
  X,
  Layers,
  CheckCircle2,
  AlertCircle,
  Clock,
  Copy,
  Check,
  FileCode,
  Filter,
  Search,
  Sparkles,
  ArrowRight,
  ListTodo,
  ShieldCheck,
  ClipboardList,
  Eye,
} from 'lucide-react';
import {
  CHIBI_ASSET_MANIFEST,
  CATEGORY_LABELS,
  CATEGORY_FOLDER_MAP,
  generateCategoryReports,
  generateFullAuditReport,
  getAssetCreationQueue,
  getStarterSvgTemplate,
  getManifestAssetById,
} from '../../data/chibiAssetManifest';
import {
  ChibiAssetRecord,
  ChibiAssetStatus,
  ChibiAssetTier,
  ChibiAssetPriorityLevel,
  AssetCreationTask,
} from '../../types/chibiAsset';
import { ChibiAssetPlaceholder } from './ChibiAssetPlaceholder';

interface ChibiAssetWorkflowModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAssetId?: string;
}

export const ChibiAssetWorkflowModal: React.FC<ChibiAssetWorkflowModalProps> = ({
  isOpen,
  onClose,
  initialAssetId,
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'queue' | 'checklist' | 'creator'>('audit');
  const [statusFilter, setStatusFilter] = useState<ChibiAssetStatus | 'all'>('all');
  const [tierFilter, setTierFilter] = useState<ChibiAssetTier | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [selectedAssetId, setSelectedAssetId] = useState<string>(
    initialAssetId || 'ear-fox'
  );

  // Review checklist state for testing & validation
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    correctPart: true,
    isolatedPiece: true,
    blackOutlineOnly: true,
    cleanBackground: true,
    beginnerFriendly: true,
    consistentStyle: true,
    filenameKebabCase: true,
    completeMetadata: true,
    helpfulAltText: true,
    imageLoadsCleanly: true,
    mobileResponsive: true,
    desktopResponsive: true,
  });

  const auditReport = useMemo(() => generateFullAuditReport(), []);
  const creationQueue = useMemo(() => getAssetCreationQueue(), []);

  // Filtered manifest assets for table view
  const filteredAssets = useMemo(() => {
    return CHIBI_ASSET_MANIFEST.filter((item) => {
      if (statusFilter !== 'all' && item.status !== statusFilter) return false;
      if (tierFilter !== 'all' && item.tier !== tierFilter) return false;
      if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchFile = item.filename.toLowerCase().includes(q);
        const matchId = item.id.toLowerCase().includes(q);
        if (!matchName && !matchFile && !matchId) return false;
      }
      return true;
    });
  }, [statusFilter, tierFilter, categoryFilter, searchQuery]);

  const selectedAsset = useMemo(() => {
    return (
      getManifestAssetById(selectedAssetId) ||
      CHIBI_ASSET_MANIFEST.find((a) => a.id === selectedAssetId) ||
      CHIBI_ASSET_MANIFEST[0]
    );
  }, [selectedAssetId]);

  const starterSvg = useMemo(() => {
    if (!selectedAsset) return '';
    return getStarterSvgTemplate(selectedAsset);
  }, [selectedAsset]);

  const handleCopySvg = () => {
    if (!starterSvg) return;
    navigator.clipboard.writeText(starterSvg);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  const toggleChecklistItem = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 text-left"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl border border-[#E5E5DE] shadow-2xl flex flex-col overflow-hidden text-[#16171A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E5E5DE] flex flex-wrap items-center justify-between gap-3 bg-[#FAF9F5]">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#2752E7] bg-[#EFF3FF] px-2 py-0.5 rounded">
                STUDIO WORKFLOW & SPEC
              </span>
              <span className="text-xs text-[#8A8A82]">·</span>
              <span className="text-xs font-mono text-[#8A8A82]">
                197+ Vector Pieces · 5 Phases
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-display font-bold text-[#16171A]">
              Chibi Asset Creation & Missing Workflow
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#686862] hover:text-[#16171A] hover:bg-[#EEEEEA] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Summary Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-4 border-b border-[#F0F0EB] bg-white text-center">
          <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E5E5DE]">
            <div className="text-[10px] font-mono-code uppercase font-semibold text-[#8A8A82]">
              Total Manifest Parts
            </div>
            <div className="text-xl font-bold font-mono text-[#16171A] mt-0.5">
              {auditReport.totalAssets}
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#EFFCF6] border border-[#C5EFE0]">
            <div className="text-[10px] font-mono-code uppercase font-semibold text-[#18794E]">
              ✓ Available Assets
            </div>
            <div className="text-xl font-bold font-mono text-[#18794E] mt-0.5">
              {auditReport.availableCount}
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FFF8EB] border border-[#FFE8BF]">
            <div className="text-[10px] font-mono-code uppercase font-semibold text-[#B25E00]">
              ○ Missing / Queued
            </div>
            <div className="text-xl font-bold font-mono text-[#B25E00] mt-0.5">
              {auditReport.missingCount}
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F4F4F0] border border-[#E5E5DE]">
            <div className="text-[10px] font-mono-code uppercase font-semibold text-[#686862]">
              Queue Tasks
            </div>
            <div className="text-xl font-bold font-mono text-[#16171A] mt-0.5">
              {creationQueue.length}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-4 sm:px-6 border-b border-[#E5E5DE] bg-white overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('audit')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'audit'
                ? 'border-[#2752E7] text-[#2752E7]'
                : 'border-transparent text-[#686862] hover:text-[#16171A]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Asset Status & Report</span>
          </button>

          <button
            onClick={() => setActiveTab('queue')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'queue'
                ? 'border-[#2752E7] text-[#2752E7]'
                : 'border-transparent text-[#686862] hover:text-[#16171A]'
            }`}
          >
            <ListTodo className="w-3.5 h-3.5" />
            <span>Creation Backlog & Priority</span>
            <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded-full bg-[#FFF8EB] text-[#B25E00] font-mono font-bold">
              {creationQueue.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('creator')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'creator'
                ? 'border-[#2752E7] text-[#2752E7]'
                : 'border-transparent text-[#686862] hover:text-[#16171A]'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>SVG Spec & Live Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'checklist'
                ? 'border-[#2752E7] text-[#2752E7]'
                : 'border-transparent text-[#686862] hover:text-[#16171A]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Asset Review Checklist</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAFAF8]">
          {/* TAB 1: Asset Status & Audit Report */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              {/* Category Breakdown Cards */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#686862]">
                    Categories & Coverage (Section 9)
                  </h3>
                  <span className="text-xs text-[#8A8A82]">
                    Zero broken images · Safe placeholders active
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {auditReport.categories.map((cat) => {
                    const isFullyCovered = cat.missingCount === 0;
                    return (
                      <div
                        key={cat.category}
                        onClick={() => {
                          setCategoryFilter(cat.category);
                        }}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          categoryFilter === cat.category
                            ? 'bg-white border-[#2752E7] ring-1 ring-[#2752E7]/20 shadow-xs'
                            : 'bg-white border-[#E5E5DE] hover:border-[#16171A]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono-code font-bold uppercase text-[#8A8A82]">
                            {cat.category}
                          </span>
                          {isFullyCovered ? (
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          ) : (
                            <span className="text-[9px] font-mono font-bold text-[#B25E00]">
                              {cat.missingCount} queued
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-semibold text-[#16171A] truncate">
                          {cat.categoryLabel}
                        </div>
                        <div className="text-[11px] font-mono text-[#8A8A82] mt-1 flex items-center justify-between">
                          <span>✓ {cat.availableCount}</span>
                          <span>○ {cat.missingCount}</span>
                          <span className="text-[#C4C4BC]">/ {cat.total}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Filters & Search Toolbar */}
              <div className="p-4 rounded-xl bg-white border border-[#E5E5DE] space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-[#8A8A82] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search assets by name, filename, ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#E5E5DE] focus:outline-none focus:border-[#2752E7]"
                    />
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto">
                    {/* Status filter */}
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value as any)}
                      className="px-2.5 py-1.5 text-xs rounded-lg border border-[#E5E5DE] bg-white font-medium"
                    >
                      <option value="all">All Statuses</option>
                      <option value="available">✓ Available</option>
                      <option value="missing">○ Missing / In Progress</option>
                      <option value="optional">Optional</option>
                    </select>

                    {/* Tier filter */}
                    <select
                      value={tierFilter}
                      onChange={(e) => setTierFilter(e.target.value as any)}
                      className="px-2.5 py-1.5 text-xs rounded-lg border border-[#E5E5DE] bg-white font-medium"
                    >
                      <option value="all">All Tiers</option>
                      <option value="core">Core Library</option>
                      <option value="expanded">Expanded Library</option>
                      <option value="future">Future Library</option>
                    </select>

                    {/* Reset button */}
                    {(statusFilter !== 'all' || tierFilter !== 'all' || categoryFilter !== 'all' || searchQuery) && (
                      <button
                        onClick={() => {
                          setStatusFilter('all');
                          setTierFilter('all');
                          setCategoryFilter('all');
                          setSearchQuery('');
                        }}
                        className="px-2.5 py-1.5 text-xs text-[#2752E7] font-semibold hover:underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter info text */}
                <div className="text-[11px] text-[#8A8A82] flex items-center justify-between">
                  <span>
                    Showing {filteredAssets.length} of {CHIBI_ASSET_MANIFEST.length} registered parts
                  </span>
                  {categoryFilter !== 'all' && (
                    <span className="font-semibold text-[#16171A]">
                      Filtered Category: {categoryFilter}
                    </span>
                  )}
                </div>
              </div>

              {/* Asset Table / List */}
              <div className="bg-white rounded-xl border border-[#E5E5DE] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#FAF9F5] border-b border-[#E5E5DE] text-[10px] font-mono-code uppercase text-[#8A8A82]">
                      <tr>
                        <th className="py-2.5 px-4">Status</th>
                        <th className="py-2.5 px-3">Part Name</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Filename / Path</th>
                        <th className="py-2.5 px-3">Tier</th>
                        <th className="py-2.5 px-3">Priority</th>
                        <th className="py-2.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0F0EB]">
                      {filteredAssets.slice(0, 50).map((asset) => {
                        const isAvail = asset.status === 'available';
                        return (
                          <tr
                            key={asset.id}
                            className="hover:bg-[#FAF9F5] transition-colors"
                          >
                            <td className="py-2.5 px-4">
                              {isAvail ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-[#18794E] bg-[#EFFCF6] px-2 py-0.5 rounded-full">
                                  <span>✓</span>
                                  <span>AVAILABLE</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-[#B25E00] bg-[#FFF8EB] px-2 py-0.5 rounded-full">
                                  <span>○</span>
                                  <span>MISSING</span>
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 px-3 font-semibold text-[#16171A]">
                              {asset.name}
                            </td>
                            <td className="py-2.5 px-3 text-[#686862] font-mono">
                              {asset.category}
                            </td>
                            <td className="py-2.5 px-3 text-[#8A8A82] font-mono text-[11px]">
                              {asset.filename}
                            </td>
                            <td className="py-2.5 px-3 capitalize text-[#686862]">
                              {asset.tier}
                            </td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`text-[10px] font-mono font-semibold uppercase px-1.5 py-0.2 rounded ${
                                  asset.priority === 'critical'
                                    ? 'bg-rose-100 text-rose-800'
                                    : asset.priority === 'high'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {asset.priority}
                              </span>
                            </td>
                            <td className="py-2.5 px-4 text-right">
                              <button
                                onClick={() => {
                                  setSelectedAssetId(asset.id);
                                  setActiveTab('creator');
                                }}
                                className="text-[11px] font-semibold text-[#2752E7] hover:underline"
                              >
                                Inspect / Spec
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {filteredAssets.length > 50 && (
                  <div className="p-3 bg-[#FAF9F5] border-t border-[#E5E5DE] text-center text-xs text-[#8A8A82]">
                    Showing first 50 results. Use the search box above to narrow down.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Creation Queue & Backlog */}
          {activeTab === 'queue' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl border border-[#E5E5DE] bg-white shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#2752E7]">
                    ASSET CREATION BACKLOG (SECTION 27)
                  </span>
                  <span className="text-xs text-[#8A8A82]">
                    Sorted by Core-First Priority Order (Phases 1–5)
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-[#16171A]">
                  Prioritized Creation Queue
                </h3>
                <p className="text-xs text-[#686862] leading-relaxed">
                  These pieces are designated in the Chibi Character Atelier manifest. Each piece follows our strict isolated vector rules: black outline only, 512x512 square canvas, no full characters, and beginner-friendly clarity.
                </p>
              </div>

              <div className="space-y-3">
                {creationQueue.map((task, idx) => (
                  <div
                    key={task.assetId}
                    className="p-4 sm:p-5 rounded-xl border border-[#E5E5DE] bg-white hover:border-[#16171A] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#8A8A82]">
                          #{idx + 1}
                        </span>
                        <span
                          className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                            task.priority === 'critical'
                              ? 'bg-rose-100 text-rose-800 border border-rose-200'
                              : task.priority === 'high'
                              ? 'bg-amber-100 text-amber-800 border border-amber-200'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {task.priority} priority
                        </span>
                        <span className="text-[10px] font-mono text-[#8A8A82]">
                          Phase {task.targetPhase} · {task.category}
                        </span>
                      </div>

                      <div className="text-base font-bold text-[#16171A] flex items-center gap-2">
                        <span>{task.name}</span>
                        <span className="text-xs font-mono font-normal text-[#8A8A82]">
                          ({task.filename})
                        </span>
                      </div>

                      <p className="text-xs text-[#686862] leading-snug">
                        {task.reason}
                      </p>

                      {task.drawingCue && (
                        <p className="text-[11px] text-[#484842] italic bg-[#FAF9F5] p-2 rounded-lg border border-[#E5E5DE]">
                          {task.drawingCue}
                        </p>
                      )}
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                      <button
                        onClick={() => {
                          setSelectedAssetId(task.assetId);
                          setActiveTab('creator');
                        }}
                        className="px-3.5 py-2 rounded-lg bg-[#16171A] hover:bg-[#2752E7] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                        <span>Get Template</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SVG Specification & Live Preview */}
          {activeTab === 'creator' && selectedAsset && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Live Visual Comparison (Vector vs Placeholder) */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-[#E5E5DE] space-y-3">
                    <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-2">
                      <span className="text-[10px] font-mono-code font-bold uppercase text-[#8A8A82]">
                        1. IN-APP PLACEHOLDER CARD (SECTION 2 & 23)
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFF8EB] text-[#B25E00]">
                        Graceful Fallback
                      </span>
                    </div>

                    <ChibiAssetPlaceholder
                      category={selectedAsset.category}
                      name={selectedAsset.name}
                      description={selectedAsset.description}
                      drawingCue={selectedAsset.drawingCue}
                      showContinueButton={true}
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#E5E5DE] space-y-3">
                    <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-2">
                      <span className="text-[10px] font-mono-code font-bold uppercase text-[#8A8A82]">
                        2. VECTOR DRAWING SPEC CANVAS (512 × 512)
                      </span>
                      <span className="text-[10px] font-mono text-[#8A8A82]">
                        Sections 16–19 Standard
                      </span>
                    </div>

                    <div className="w-full aspect-square max-h-72 mx-auto rounded-xl bg-white border border-[#E5E5DE] flex items-center justify-center p-6 relative">
                      <div className="absolute inset-2 border border-dashed border-[#E5E5DE] pointer-events-none rounded-lg flex items-center justify-center">
                        <span className="text-[9px] font-mono text-[#C4C4BC] absolute top-1 left-2">
                          512x512 Canvas · 10% Margin
                        </span>
                      </div>
                      {selectedAsset.svgContent ? (
                        <svg
                          viewBox="0 0 100 100"
                          className="w-full h-full max-w-[180px] max-h-[180px] text-[#16171A]"
                          dangerouslySetInnerHTML={{ __html: selectedAsset.svgContent }}
                        />
                      ) : (
                        <div className="text-center p-4 space-y-1">
                          <Sparkles className="w-8 h-8 text-[#8A8A82] mx-auto mb-2" />
                          <div className="text-xs font-semibold text-[#16171A]">
                            Template Ready for Export
                          </div>
                          <p className="text-[11px] text-[#8A8A82]">
                            Copy the boilerplate on the right and save to{' '}
                            <code className="text-[#2752E7] font-mono">
                              public{selectedAsset.path}
                            </code>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Asset Specification & Starter SVG Generator */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-5 rounded-xl bg-white border border-[#E5E5DE] space-y-4">
                    <div className="flex items-center justify-between border-b border-[#F0F0EB] pb-2.5">
                      <span className="text-[10px] font-mono-code font-bold uppercase text-[#2752E7]">
                        ASSET DETAILS & METADATA
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F4F0] text-[#686862]">
                        ID: {selectedAsset.id}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-bold text-[#16171A]">
                        {selectedAsset.name}
                      </h3>
                      <p className="text-xs text-[#686862] leading-relaxed">
                        {selectedAsset.description}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#E5E5DE] space-y-1 text-xs">
                      <div className="font-semibold text-[#16171A]">Destination File Path:</div>
                      <code className="font-mono text-[#2752E7] block break-all text-[11px]">
                        public{selectedAsset.path}
                      </code>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#16171A]">
                          Starter 512x512 SVG Code
                        </span>
                        <button
                          onClick={handleCopySvg}
                          className="px-2.5 py-1 rounded bg-[#F4F4F0] hover:bg-[#EEEEEA] text-[11px] font-semibold text-[#16171A] flex items-center gap-1 transition-colors"
                        >
                          {copiedTemplate ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                              <span className="text-emerald-700">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-[#686862]" />
                              <span>Copy SVG</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="p-3 rounded-xl bg-[#16171A] text-[#CDCDCA] text-[10px] font-mono overflow-x-auto max-h-52 leading-relaxed">
                        {starterSvg}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Asset Review Checklist */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl border border-[#E5E5DE] bg-white shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#2752E7]">
                    QUALITY ASSURANCE SPECIFICATION (SECTION 32)
                  </span>
                  <span className="text-xs text-[#8A8A82]">
                    Pre-Publishing Review Standard
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-[#16171A]">
                  Art Teacher & System Asset Review Checklist
                </h3>
                <p className="text-xs text-[#686862] leading-relaxed">
                  Every asset must satisfy this checklist before being committed to public reference folders.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: 'correctPart',
                    title: 'Correct Body Part Only',
                    desc: 'Shows only the requested piece (e.g. ear-fox shows the ear, never the whole head or body).',
                  },
                  {
                    id: 'isolatedPiece',
                    title: 'Completely Isolated',
                    desc: 'No adjacent anatomy, accessories, or extraneous background markings.',
                  },
                  {
                    id: 'blackOutlineOnly',
                    title: 'Black Outline Only',
                    desc: 'Clean black vector stroke, no grey tones, gradients, shadows, or color fills.',
                  },
                  {
                    id: 'cleanBackground',
                    title: 'Clean White / Transparent Canvas',
                    desc: 'Zero background scenery, decorative frames, or stray pixels.',
                  },
                  {
                    id: 'beginnerFriendly',
                    title: 'Beginner Friendly Line Economy',
                    desc: 'Easy to understand, easy for a novice drawer to reproduce with a 2B pencil.',
                  },
                  {
                    id: 'consistentStyle',
                    title: 'Consistent Line Weight & Proportion',
                    desc: 'Harmonizes with existing 197 chibi vector assets in stroke thickness.',
                  },
                  {
                    id: 'filenameKebabCase',
                    title: 'Predictable Lowercase Kebab-Case Filename',
                    desc: 'Strict kebab-case matching category folder (e.g. body-chubby.svg, ear-fox.svg).',
                  },
                  {
                    id: 'completeMetadata',
                    title: 'Complete Manifest Metadata',
                    desc: 'ID, Category, Name, Difficulty, Tags, and Construction Notes defined.',
                  },
                  {
                    id: 'helpfulAltText',
                    title: 'Instructional Alt Text & Drawing Cue',
                    desc: 'Describes geometric mass relationships ("Think: ...") for visualizers.',
                  },
                  {
                    id: 'imageLoadsCleanly',
                    title: 'Valid Zero-Error SVG Vector Path',
                    desc: 'Loads instantly without rendering errors, clipping, or unclosed paths.',
                  },
                  {
                    id: 'mobileResponsive',
                    title: 'Crisp on Compact Mobile Devices',
                    desc: 'Legible on 2-inch phone screens at high DPI without blurring.',
                  },
                  {
                    id: 'desktopResponsive',
                    title: 'Scalable on High-Resolution Desktops',
                    desc: 'Crisp vector scalability up to full 512x512 inspection view.',
                  },
                ].map((item) => {
                  const isChecked = checklist[item.id] ?? false;
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 text-left ${
                        isChecked
                          ? 'bg-[#F4FAF6] border-[#B7E5CD]'
                          : 'bg-white border-[#E5E5DE] hover:border-[#16171A]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-[#18794E] text-white'
                            : 'border border-[#C4C4BC] bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-[#16171A]">
                          {item.title}
                        </div>
                        <p className="text-[11px] text-[#686862] leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 border-t border-[#E5E5DE] bg-white flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8A82] gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Missing Artwork Workflow: Content pipeline independent of app runtime</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#16171A] hover:bg-[#2752E7] text-white text-xs font-semibold transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
