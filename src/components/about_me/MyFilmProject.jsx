import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X, Play, ExternalLink } from "lucide-react";
import FILM_PROJECTS from "../../constant/film_projects.json";
import TitleSection from "../homepage/TitleSection";
import Image from "next/image";

const getEmbedUrl = (url) => {
  if (!url) return null;
  if (url.includes("youtube.com/embed") || url.includes("player.vimeo.com")) {
    return url;
  }
  // YouTube watch/short link
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&\s?]+)/,
  );
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }
  // Vimeo link
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }
  return url;
};

// Dynamic Media Renderer Component (Hybrid: uses Next.js <Image> for standard images and iframes/embeds for interactive media)
const MediaRenderer = ({ media, alt, className = "", isCard = false }) => {
  const containerRef = useRef(null);

  if (!media) {
    return (
      <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-500">
        <span className="text-xs font-medium">No Media Preview</span>
      </div>
    );
  }

  const trimmed = media.trim();

  // 1. Raw HTML embed (starts with <)
  if (trimmed.startsWith("<")) {
    return (
      <div
        ref={containerRef}
        className={`w-full h-full flex items-center justify-center overflow-hidden ${
          isCard ? "pointer-events-none select-none" : ""
        } ${className}`}
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    );
  }

  // 1.5. Instagram Direct URL
  if (trimmed.includes("instagram.com/reel/") || trimmed.includes("instagram.com/p/") || trimmed.includes("instagram.com/tv/")) {
    const cleanIgUrl = trimmed.split(/[?#]/)[0].replace(/\/$/, "");
    return (
      <div className={`w-full h-full flex flex-col items-center justify-start bg-black overflow-y-auto py-4 ${className}`}>
        <iframe
          src={`${cleanIgUrl}/embed`}
          className={`w-full max-w-[380px] md:max-w-[400px] h-[650px] md:h-[750px] border border-zinc-800 rounded-xl shadow-2xl ${
            isCard ? "pointer-events-none select-none" : ""
          }`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title={alt}
        />
      </div>
    );
  }

  // 2. Google Drive preview URL or view URL
  if (trimmed.includes("drive.google.com")) {
    let embedSrc = trimmed;
    if (trimmed.includes("/view") || trimmed.includes("/edit")) {
      embedSrc = trimmed.replace(/\/view.*/, "/preview").replace(/\/edit.*/, "/preview");
    }
    return (
      <iframe
        src={embedSrc}
        className={`w-full h-full border-0 ${
          isCard ? "pointer-events-none select-none" : ""
        } ${className}`}
        allow="autoplay"
        title={alt}
      />
    );
  }

  // 3. YouTube/Vimeo video URL
  if (trimmed.includes("youtube.com") || trimmed.includes("youtu.be") || trimmed.includes("vimeo.com")) {
    const embedUrl = getEmbedUrl(trimmed);
    return (
      <iframe
        src={embedUrl}
        className={`w-full h-full border-0 ${
          isCard ? "pointer-events-none select-none" : ""
        } ${className}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={alt}
      />
    );
  }

  // 4. Standard Image URLs -> Use Next.js <Image> component for optimized load times & sizes
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={trimmed}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        priority={isCard}
      />
    </div>
  );
};

const MyFilmProject = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenModal = (film) => {
    setSelectedFilm(film);
    setIsPlaying(false);
  };

  const handleCloseModal = () => {
    setSelectedFilm(null);
    setIsPlaying(false);
  };

  const isVideoOrEmbed = (mediaStr) => {
    if (!mediaStr) return false;
    const trimmed = mediaStr.trim();
    return (
      trimmed.startsWith("<") ||
      trimmed.includes("drive.google.com") ||
      trimmed.includes("youtube.com") ||
      trimmed.includes("youtu.be") ||
      trimmed.includes("vimeo.com")
    );
  };

  return (
    <div className="w-full min-h-fit">
      <TitleSection
        title={"Filmography"}
        description={"Films I've been involved in"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FILM_PROJECTS.map((item, index) => {
          return (
            <Card
              key={index}
              onClick={() => handleOpenModal(item)}
              className="dark flex flex-col justify-between hover:border-primary duration-300 group overflow-hidden cursor-pointer"
            >
              {/* Poster */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-950">
                <MediaRenderer media={item.poster} alt={item.title} isCard={true} />
                
                {/* Netflix-like Play Button Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-primary/20 border border-primary/50 text-primary scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-primary/20">
                    <Play className="w-8 h-8 fill-primary" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider bg-black/60 px-2 py-1 rounded">
                    {item.role}
                  </span>
                  <span className="text-xs font-mono text-zinc-300 bg-black/60 px-2 py-1 rounded">
                    {item.year}
                  </span>
                </div>
              </div>
              
              <CardHeader className="items-start gap-2 space-y-0 pt-4">
                <div className="flex justify-between items-start w-full gap-2">
                  <CardTitle className="text-white group-hover:text-primary duration-300">
                    {item.title}
                  </CardTitle>
                  <div className="flex flex-col items-end shrink-0 text-right">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      {item.category}
                    </span>
                    {item.genre && (
                      <span className="text-[10px] text-zinc-400 font-medium mt-0.5">
                        {item.genre}
                      </span>
                    )}
                  </div>
                </div>
                <CardDescription className="line-clamp-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills && item.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                  {item.skills && item.skills.length > 3 && (
                    <span className="text-[10px] font-bold text-primary px-1">
                      +{item.skills.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Netflix-like Video & Detail Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-start justify-center p-4 overflow-y-auto cursor-pointer"
          >
            <button
              onClick={handleCloseModal}
              className="fixed top-6 right-6 z-[110] p-3 rounded-full bg-black/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors shadow-lg cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 20 }}
              exit={{ scale: 0.95, y: 40 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#131313] border border-zinc-800 rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl relative my-8 cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Section */}
              <div className={`relative w-full bg-black border-b border-zinc-800/80 overflow-hidden ${
                isPlaying && (selectedFilm.video_url || selectedFilm.poster)?.includes("instagram.com")
                  ? "h-[75vh] min-h-[600px] max-h-[800px]"
                  : "aspect-video"
              }`}>
                {isPlaying ? (
                  <MediaRenderer 
                    media={selectedFilm.video_url || selectedFilm.poster} 
                    alt={selectedFilm.title}
                    className="w-full h-full"
                    isCard={false}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <MediaRenderer 
                      media={selectedFilm.poster} 
                      alt={selectedFilm.title}
                      className="w-full h-full"
                      isCard={true}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-black/40 to-transparent" />
                    
                    {(selectedFilm.video_url || isVideoOrEmbed(selectedFilm.poster)) && (
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-black/30 hover:bg-black/50 transition-colors group/btn cursor-pointer"
                      >
                        <div className="p-5 rounded-full bg-primary text-white scale-100 group-hover/btn:scale-110 transition-transform duration-300 shadow-xl shadow-primary/30">
                          <Play className="w-10 h-10 fill-white ml-1" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-white drop-shadow-md">
                          Watch Trailer / Film
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Detail Section */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="text-2xl md:text-4xl font-extrabold text-white">
                        {selectedFilm.title}
                      </h2>
                      <span className="px-2.5 py-0.5 text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded">
                        {selectedFilm.category}
                      </span>
                      {selectedFilm.genre && (
                        <span className="px-2.5 py-0.5 text-xs font-semibold text-zinc-400 bg-zinc-900 border border-zinc-800 rounded">
                          {selectedFilm.genre}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-400 mt-1 font-medium">
                      As <span className="text-white">{selectedFilm.role}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-mono font-bold text-zinc-500">
                      {selectedFilm.year}
                    </span>
                    {selectedFilm.video_url && (
                      <a
                        href={selectedFilm.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 rounded-lg transition-all"
                      >
                        Open Externally <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {selectedFilm.description && (
                  <p className="text-zinc-300 text-base leading-relaxed md:w-[90%]">
                    {selectedFilm.description}
                  </p>
                )}

                {/* Skills used */}
                {selectedFilm.skills && selectedFilm.skills.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                      Skills & Tools applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFilm.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyFilmProject;
