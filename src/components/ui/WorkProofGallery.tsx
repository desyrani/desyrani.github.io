import type { WorkProofTile } from "../../types";

interface WorkProofGalleryProps {
  eyebrow: string;
  title: string;
  tiles: WorkProofTile[];
  onOpen: (tile: { label: string; image?: string }) => void;
}

export default function WorkProofGallery({ eyebrow, title, tiles, onOpen }: WorkProofGalleryProps) {
  return (
    <div className="border-t border-border mt-2 pt-4 mb-4">
      <p className="text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-text-dim mb-[0.2rem]">{eyebrow}</p>
      <h4 className="font-display text-[1.05rem] font-semibold text-text mb-3 tracking-[-0.01em]">{title}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[0.6rem]">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => onOpen({ label: tile.label, image: tile.image })}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(139,92,246,0.14)] to-[rgba(6,182,212,0.05)] border border-border rounded-[0.6rem] flex items-center justify-center overflow-hidden text-center transition-colors duration-200 ease group-hover:border-border-strong">
              {tile.image ? (
                <img src={tile.image} alt={tile.label} className="w-full h-full object-cover" />
              ) : (
                <span className="text-[0.58rem] text-white/[0.28] font-mono p-[0.35rem]">[ {tile.label} ]</span>
              )}
            </div>
            <span className="text-[0.68rem] text-text-dim leading-[1.3] transition-colors duration-200 ease group-hover:text-text-muted">
              {tile.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}