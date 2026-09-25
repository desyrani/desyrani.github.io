import { useEffect } from "react";
import type { OpenProof } from "../../types";

interface ProofModalProps {
  tile: OpenProof | null;
  onClose: () => void;
}

export default function ProofModal({ tile, onClose }: ProofModalProps) {
  useEffect(() => {
    if (!tile) return;

    document.body.classList.add("proof-modal-lock");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("proof-modal-lock");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [tile, onClose]);

  if (!tile) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-10 box-border">
      <div
        className="absolute inset-0 bg-[rgba(5,5,8,0.4)] backdrop-blur-[5px]"
        onClick={onClose}
      />
      <div className="relative z-[1] w-[min(920px,100%)] bg-[#0d0d12] border border-border-strong rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-[1.4rem] py-4 border-b border-border">
          <span className="font-display font-semibold text-[0.9rem] text-text-muted">{tile.label}</span>
          <button
            className="bg-transparent border border-border-strong text-text-muted w-[30px] h-[30px] rounded-lg cursor-pointer text-[1.1rem] leading-none transition-all duration-200 ease hover:border-accent-violet hover:text-text"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        {tile.image ? (
          <img src={tile.image} alt={tile.label} className="w-full max-h-[75vh] object-contain bg-black" />
        ) : (
          <div className="aspect-video bg-gradient-to-br from-[rgba(139,92,246,0.16)] to-[rgba(6,182,212,0.06)] flex items-center justify-center p-4 text-center">
            <span className="text-[0.8rem] text-white/[0.32] font-mono">[ {tile.label} — full screenshot goes here ]</span>
          </div>
        )}
      </div>
    </div>
  );
}